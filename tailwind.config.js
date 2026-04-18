/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'siege-accent': '#ffa500', 
        'siege-dark': '#0a0a0a',
        'siege-card': '#121212',
      },
    },
  },
  plugins: [],
}
