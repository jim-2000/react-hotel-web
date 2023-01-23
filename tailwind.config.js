/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
// const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    // purge: [
    //   "./pages/**/*.{js,ts,jsx,tsx}",
    //   "./components/**/*.{js,ts,jsx,tsx}",
    // ],
    fontFamily: {
      serif: 'DM Serif Display',
      body: 'Rubik',
    },
   
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {     
      screens: {
        '3xl': '1600px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#FFFFFF',
        'black': '#000000',
        'main': '#9B51E0',
        'text': '#4F4F4F',
        'green': '#00bf8f',
        'gray': '#3E3C3C',
        'linear': 'linear-gradient(to right, #00bf8f, #001510)',        
        'lgray': 'linear-gradient(to right, #4F4F4F, #3E3C3C)',        
        'lmain': 'linear-gradient(to right, #9B51E0, #9B5190)',        
      },
      dropShadow: {
        primary: '0 20px 40px rgba(238, 77, 71, 0.1)',
        secondary: '0px 30px 40px rgba(244, 125, 103, 0.2)',
        tertiary: '0 20px 40px rgba(32, 56, 100, 0.3);',
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.5), rgb(32, 33, 36) ), url('./imgs/bg-main.jpg)",
        about: "linear-gradient(rgba(0, 0, 0, 0.5), rgb(32, 33, 36) ), url('/imgs/bg1.jpg')",
        room: "linear-gradient(rgba(0, 0, 0, 0.5), rgb(32, 33, 36) ), url('/imgs/room.jpg')",
        facilities: "linear-gradient(rgba(0, 0, 0, 0.5), rgb(32, 33, 36) ), url('/imgs/facilities.jpg')",
        offer: "linear-gradient(rgba(0, 0, 0, 0.5), rgb(32, 33, 36) ), url('/imgs/offers.jpg')",
        // footer: "url('/images/footer/bg.svg')",
      },
    },
   
  },
  variants: {},
  
}
