/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeDarkGreen': '#297154',
        'themeGreen': '#A6CB52',
      },
      boxShadow: {
        'card': '0 0 30px #d9d9d9'
      }
    },
  },
  plugins: [],
}