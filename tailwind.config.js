const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-turquoise': '#0BDBD4',
        'brand-purple': '#352166',
        'brand-black': '#0A0613',
        'brand-green': '#00FF75',
        'brand-red': '#F0386B',
        'brand-gold': '#FFD600',
        'brand-silver': '#B9B9B9',
        'brand-bronze': '#D36202',
      },
      letterSpacing: {
        'brand-wide': '0.25em',
        'brand-wider': '1em',
      },
      fontFamily: {
        brand: ['Erbaum', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
