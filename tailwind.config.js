/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vibrantpink: '#FC004E',
        brightturquoise: '#10CBE0',
        electric_blue: '#00E7F9'
      },
      fontFamily: {
        figtree: ['var(--font-figtree)', 'sans-serif'],
        urbanist: ['var(--font-urbanist)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}