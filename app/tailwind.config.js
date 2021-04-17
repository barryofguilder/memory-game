const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.{hbs,js}', './app/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
