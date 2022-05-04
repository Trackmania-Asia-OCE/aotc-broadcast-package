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
