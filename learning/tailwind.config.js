/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {

      colors: {
          'NavBarColor' : '#1c1c1c',
          'NavBarTextColor' : '#c4cece',
          'BodyColor' : '#292b2b',
          'LinesColor' : '#949c9c',
          'RedEventColor' : '#ff4040',
          'RedEventTextColor' : '#ffffff',  
      },
    },
  },
  plugins: [],
}

