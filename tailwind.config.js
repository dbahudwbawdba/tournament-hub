/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Als je ook een 'src' map gebruikt, voeg die hier toe
  ],
  theme: {
    extend: {
      colors: {
        siege: {
          dark: '#0a0a0a',
          card: '#121212',
          accent: '#ffa500', // Jynxzi-stijl oranje/goud
          blue: '#5865F2',
          'blue-hover': '#4752c4',
        },
      },
    },
  },
  plugins: [],
}
