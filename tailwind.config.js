/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'siege-accent': '#ffa500', // Het oranje van je logo
        'siege-card': '#121212',   // De donkere achtergrond voor toernooien
      },
    },
  },
  plugins: [],
}
