const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-turquoise': '#0BDBD4',
        'brand-purple': '#352166',
        'brand-black': '#0A0613',
        'brand-white': '#E5E5E5',
        'brand-further-red': '#F20544',
        'brand-green': '#00FF75',
        'brand-red': '#F0386B',
        'brand-gold': '#FFD600',
        'brand-silver': '#B9B9B9',
        'brand-bronze': '#FF7500',
      },
      letterSpacing: {
        'brand-wide': '0.25em',
        'brand-wider': '1em',
      },
      fontFamily: {
        brand: ['Erbaum', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        'item-card': '100px minmax(0, 1fr)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
