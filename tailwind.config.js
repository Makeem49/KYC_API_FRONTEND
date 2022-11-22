/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    fontFamily: {
      body: ['Muli', 'sans-serif'],
      display: ['Muli', 'sans-serif'],
      Arkipelago: ['Arkipelago', 'cursive'],
    },
    extend: {
      colors: {
        afexpurple: {
          darker: '#44207E',
          dark: '#54289D',
          lighter: '#DECFF7',
          light: '#A982EA',
        },

        textgrey: {
          Bold: '#2B2930',
          Light: '#8F8E91'
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
};
