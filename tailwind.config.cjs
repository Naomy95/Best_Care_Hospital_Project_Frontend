/** @type {import('tailwindcss').Config} */



module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans:["Open Sans"],
      poppins: ['Poppins', 'sans-serif'],
    },
    borderWidth: {
      0.2: '0.2px',
      1.5: '1.5px',
    },
    listStyleType: {
      tick: '✓'
    },

    extend: {
    
      colors: {
        black: '#000000',
        background: '#F4F7FD',
        blue: '#4F7AB9',
        skyblue: '#F8F8FF',
        pink: 'rgba(203, 0, 183, 0.07)',
        border: '#F8F8FF',
        accordion: '#EDF0F8',
        green: '#2A9D8F',
        text:'#8266BB',
        hoverBackground:"#CDF9F6",
        headerText:"#04DAC9",
        headerGreen:"#CDF9F6",
        navbarcolor:"#01DACA",
        buttoncolor:"#01DAC8",
        showWax: 'rgba(43, 43, 43, 0.9)',
        showWaxLight: 'rgba(43, 43, 43, 0.6)',
        violet: '#707BFF',
      },
      width: {
        190: '760px',
      },
      height:{
        800:"800px",
        700:"700px"
      }
    },
  },
  plugins: [require('daisyui')],
}
