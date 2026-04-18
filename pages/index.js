import { useSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head'

export default function Home() {
  const { data: session } = useSession() || {};

  // Voorbeeld data voor toernooien (later halen we dit uit een database)
  const tournaments = [
    { id: 1, title: "Siege Station Open #12", prize: "€50", teams: "12/16", status: "Live", type: "5v5 Bomb" },
    { id: 2, title: "Community Clash: Gold Only", prize: "Skins", teams: "4/8", status: "Inschrijven", type: "1v1 Aim" },
    { id: 3, title: "Weekend Warriors Cup", prize: "€100", teams: "0/32", status: "Binnenkort", type: "5v5 Bomb" },
  ];

  if (!session) {
    return (
      <div className="min-h-screen bg-siege-dark flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-siege-accent rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-3xl font-black text-siege-dark">SS</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-4">SIEGE STATION</h1>
          <p className="text-gray-400 mb-8 font-medium">Log in met Discord om deel te nemen aan toernooien en je stats te tracken.</p>
          <button 
            onClick={() => signIn("discord")}
            className="w-full bg-siege-blue hover:bg-siege-blue-hover text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl"
          >
            Login met Discord
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-siege-dark text-white flex flex-col font-sans antialiased">
      <Head>
        <title>Dashboard | Siege Station</title>
      </Head>

      {/* Header / Nav */}
      <nav className="border-b border-siege-card bg-siege-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-siege-accent font-black text-xl tracking-tighter">SIEGE</span>
              <span className="font-light text-xl">STATION</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-400">
              <a href="#" className="text-white border-b-2 border-siege-accent pb-1">Toernooien</a>
              <a href="#" className="hover:text-white transition-colors">Teams</a>
              <a href="#" className="hover:text-white transition-colors">Ranglijst</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-siege-card p-1.5 pr-4 rounded-full border border-white/5">
            <img src={session.user?.image} className="w-8 h-8 rounded-full border border-siege-accent" alt="" />
            <span className="text-sm font-bold">{session.user?.name}</span>
            <button onClick={() => signOut()} className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors ml-2">Uitloggen</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto w-full px-6 py-12">
        
        {/* Welcome Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-2 tracking-tight">Welkom terug, Operator.</h2>
          <p className="text-gray-400">Er zijn vandaag <span className="text-siege-accent">2 actieve toernooien</span> waar je aan mee kunt doen.</p>
        </section>

        {/* Tournament Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((t) => (
            <div key={t.id} className="bg-siege-card border border-white/5 rounded-2xl overflow-hidden group hover:border-siege-accent/50 transition-all hover:shadow-2xl hover:shadow-siege-accent/5 cursor-pointer">
              {/* Card Header (Placeholder Image) */}
              <div className="h-32 bg-gradient-to-br from-siege-accent/20 to-siege-dark flex items-center justify-center group-hover:from-siege-accent/30 transition-all">
                <span className="text-siege-accent/30 font-black text-4xl uppercase tracking-widest">{t.type}</span>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-siege-accent bg-siege-accent/10 px-2 py-1 rounded mb-2 inline-block">
                      {t.status}
                    </span>
                    <h3 className="text-xl font-bold">{t.title}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-siege-dark/50 p-3 rounded-xl border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Prijzenpot</p>
                    <p className="text-lg font-black text-white">{t.prize}</p>
                  </div>
                  <div className="bg-siege-dark/50 p-3 rounded-xl border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Teams</p>
                    <p className="text-lg font-black text-white">{t.teams}</p>
                  </div>
                </div>

                <button className="w-full bg-white text-siege-dark font-black py-3 rounded-xl hover:bg-siege-accent transition-colors">
                  Bekijk Details
                </button>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}
