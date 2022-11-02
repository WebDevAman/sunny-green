/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeYellow': '#297154',
        'themeOrange': '#A6CB52',
      }
    },
  },
  plugins: [],
}