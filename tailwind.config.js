const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        dev: {
          bg: '#1a1a1a',
          text: '#f0f0f0',
          accent: '#00c9a7',
        },
        'sewing-tin': {
          bg: '#fdfdfd',
          text: '#202020',
          accent: '#275c6b',
        },
      },
    },
  },
  plugins: [],
};
