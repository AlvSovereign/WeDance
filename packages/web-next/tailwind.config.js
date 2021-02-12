const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000',
      blue: {
        50: '#DCE5F9',
        100: '#B0C6FA',
        200: '#7FA3FB',
        300: '#4F81FC',
        400: '#2965FC',
        500: '#0149FF',
        600: '#0047E9',
        700: '#0041CF',
        800: '#003CB7',
        900: '#00328C',
        fb: '3B5998',
      },
      gray: colors.coolGray,
      red: {
        50: '#F9DFE3',
        100: '#F9B6C0',
        200: '#F9889B',
        300: '#F95B75',
        400: '#F93857',
        500: '#FF0039',
        600: '#DA0031',
        700: '#CB002D',
        800: '#AB0026',
        900: '#8B001F',
      },
      transparent: 'rgba(0, 0, 0, 0)',
      white: '#fff',
    },
    fontFamily: {
      button: ['Montserrat', 'sans-serif'],
      sans: ['Manrope', 'sans-serif'],
    },
    screens: {
      sm: '600px',
      md: '840px',
    },
    extend: {
      flex: {
        '1/2': '0.5 0.5 0%',
      },
      letterSpacing: {
        button: '0.15625em',
      },
      scale: {
        98: '.98',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('xwind/plugins/base')],
  xwind: {
    mode: 'objectstyles',
  },
}
