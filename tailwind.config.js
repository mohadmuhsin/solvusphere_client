/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'dark-gray':'#acacac'
      },
      width:{
        '40pt':'40%',
        '65pt':'65%',
        '90pt':'90%',
      },
      backgroundColor:{
        'gray-transparent':'red'
      }
    },
  },
  plugins: [],
});

