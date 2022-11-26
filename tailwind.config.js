/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      'Orange': '#fb7413',
      'White': '#ffffff',
      'LightGray': '	#959eac',
      'MediumGray': '#7c8798',
      'DarkBlue': '#252d37',
      'VeryDarkBlue' : '#121417',
      'LightOrange': '	#fc9145'
      
    },
    screens:{
      'sm': '375px',
      'lg': '1440px'
    },
    extend: {},
  },
  plugins: [],
}
