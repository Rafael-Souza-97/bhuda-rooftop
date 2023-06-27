/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'great-vibes': ['Great Vibes', 'cursive'],
      'raleway': ['Raleway', 'cursive'],
      'barlow': ['Barlow', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#f1796b",
        secondary: "#eaba4d",
      },
    },
  },
  plugins: [],
}
