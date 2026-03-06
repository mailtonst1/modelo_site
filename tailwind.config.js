/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark premium palette
        primary: "#F3F4F6", // Off-white for text
        accent: "#E2FE10", // Landonorris inspired neon/electric yellow
        background: "#080808", // Deep premium black
        surface: "#121212", // Slightly lighter black for cards
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // Add a display font for aggressive/premium headers
        display: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
