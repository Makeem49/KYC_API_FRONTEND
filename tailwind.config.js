/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    fontFamily: {
      body: ['Switzer', 'sans-serif'],
      display: ['Switzer', 'sans-serif'],
    },
    extend: {
      colors: {
        afexpurple: {
          darker: '#44207E',
          dark: '#54289D',
          DEFAULT: '#7737dd',
          lighter: '#DECFF7',
          light: '#A982EA',
        },
        afexgray: {
          DEFAULT: '#F5F5F5',
        },
        textgrey: {
          Bold: '#2B2930',
          Light: '#8F8E91',
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
});
