// const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}'
    // './components/**/*.{js,jsx,ts,tsx}',
  ],
  mode: 'jit',
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      'sm-mx': { max: '640px' },
      // => @media (min-width: 640px) { ... }
      'sm-on': { min: '640px', max: '768px' },
      // => @media (min-width: 640px and max-width: xxxx) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }
      'md-mx': { max: '768px' },
      // => @media (min-width: 768px) { ... }
      'md-on': { min: '768px', max: '1024px' },
      // => @media (min-width: 768px and max-width: xxxx) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      'lg-mx': { max: '1024px' },
      // => @media (min-width: 1024px) { ... }
      'lg-on': { min: '1024px', max: '1280px' },
      // => @media (min-width: 1024px and max-width: xxxx) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      'xl-mx': { max: '1280px' },
      // => @media (min-width: 1280px) { ... }
      'xl-on': { min: '1280px', max: '1536px' },
      // => @media (min-width: 1280px and max-width: xxxx) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '2xl-mx': { max: '1536px' },
      // => @media (min-width: 1536px) { ... }
      // "xx-on": { min: "" , max: "630px"},

      'sm-height': { raw: '(max-height: 700px)' },
      print: { raw: 'print' }
    },
    colors: {
      ...colors
    },
    extend: {
      fontSize: {
        55: '55rem'
      },
      opacity: {
        80: '.8'
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3
      },
      minWidth: {
        48: '12rem'
      },
      backgroundSize: {
        full: '100%'
      }
    }
  },

  darkMode: 'media',
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
    'disabled'
  ],
  plugins: [
    // require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
    function (
      /** @type {import('tailwindcss/types/config').PluginAPI} */
      { addVariant }
    ) {
      addVariant('child', '&>*')
      addVariant('last-child', '&>*:last-child')
      addVariant('first-child', '&>*:first-child')
    }
  ]
}
