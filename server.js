const express = require('express');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// MongoDB connection (vervang met je eigen URI)
mongoose.connect('mongodb://localhost:27017/r6tournaments', { useNewUrlParser: true, useUnifiedTopology: true });

// User model
const UserSchema = new mongoose.Schema({
  discordId: String,
  username: String,
  discriminator: String,
  avatar: String,
  role: { type: String, default: 'user' }
});
const User = mongoose.model('User', UserSchema);

// Tournament model
const TournamentSchema = new mongoose.Schema({
  name: String,
  type: String,
  maxTeams: Number,
  registeredTeams: { type: Number, default: 0 },
  date: Date,
  status: { type: String, default: 'open' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
const Tournament = mongoose.model('Tournament', TournamentSchema);

// Passport setup
passport.use(new DiscordStrategy({
  clientID: 'YOUR_DISCORD_CLIENT_ID',
  clientSecret: 'YOUR_DISCORD_CLIENT_SECRET',
  callbackURL: 'http://localhost:3000/auth/discord/callback',
  scope: ['identify']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ discordId: profile.id });
    if (!user) {
      user = new User({
        discordId: profile.id,
        username: profile.username,
        discriminator: profile.discriminator,
        avatar: profile.avatar
      });
      await user.save();
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback', passport.authenticate('discord', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/api/user', (req, res) => {
  res.json({ user: req.user || null });
});

app.get('/api/tournaments', async (req, res) => {
  const tournaments = await Tournament.find();
  res.json(tournaments);
});

app.post('/api/tournaments', async (req, res) => {
  if (!req.user || !['admin', 'manager'].includes(req.user.role)) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  const tournament = new Tournament(req.body);
  tournament.createdBy = req.user._id;
  await tournament.save();
  res.json(tournament);
});

app.post('/api/tournaments/:id/register', async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Not logged in' });
  const tournament = await Tournament.findById(req.params.id);
  if (!tournament || tournament.status !== 'open') {
    return res.status(400).json({ error: 'Tournament not available' });
  }
  tournament.registeredTeams += 1;
  if (tournament.registeredTeams >= tournament.maxTeams) {
    tournament.status = 'closed';
  }
  await tournament.save();
  res.json({ message: 'Registered' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
