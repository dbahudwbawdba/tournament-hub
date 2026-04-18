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
          dark: '#0e1015',
          card: '#161920',
          accent: '#c4a77d',
          blue: '#5865F2',
          'blue-hover': '#4752C4', 
        },
      },
    },
  },
  plugins: [],
}
