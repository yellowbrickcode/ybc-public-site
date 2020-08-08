module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {},
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
};
