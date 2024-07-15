const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
      "./node_modules/flowbite/**/*.js",
       'node_modules/flowbite-react/lib/esm/**/*.js',
       "./node_modules/flowbite-react/lib/**/*.js",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        primary: '#0343A5',
        secondary: '#41B549',
        merah: '#FF7676',
        primaryaccent: '#719FDC'
      },
      backgroundImage: {
        'gradient-custom':
          'linear-gradient(90deg, #0343A5 16.11%, #468FFF 75.59%, #41B549 124.65%)'
      },
      flex: {
        '1/3': ''
      }
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('flowbite/plugin')]
}
