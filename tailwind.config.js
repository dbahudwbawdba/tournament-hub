/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        siege: {
          dark: '#0a0a0a',
          card: '#121212',
          accent: '#ffa500', // Jynxzi Oranje/Goud
          blue: '#5865F2',
        },
      },
    },
  },
  plugins: [],
}
