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
        electricblue: '#00E7F9'
      },
      fontFamily: {
        figtree: ['var(--font-figtree)', 'sans-serif'],
        urbanist: ['var(--font-urbanist)', 'sans-serif'],
      },
      boxShadow: {
        pinkGlow: '0px 4px 4px 0px #FC004E',
      },
    },
  },
  plugins: [],
}