// const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      fontSize: {
        55: '55rem',
      },
      opacity: {
        80: '.8',
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
      },
      minWidth: {
        48: '12rem',
      },
      backgroundSize: {
        full: '100%',
      },
    },
  },

  variants: [
    'responsive',
    'group-hover',
    'focus-within',
    'first',
    'last',
    'odd',
    'even',
    'hover',
    'focus',
    'active',
    'visited',
    'disabled',
  ],
  plugins: [require('@tailwindcss/forms')],
}
