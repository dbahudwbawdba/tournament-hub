/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        siege: {
          dark: '#0a0a0a',
          card: '#121212',
          accent: '#ffa500',
        },
      },
    },
  },
  plugins: [],
}
