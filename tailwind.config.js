/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['Switzer', 'sans-serif'],
      display: ['Switzer', 'sans-serif'],
    },
    extend: {
      rotate: {
        '20': '20deg',
        '21': '21deg',
        '22': '22deg',
        '23': '23deg',
        '24': '24deg',
        '25': '25deg',
        '26': '26deg',
        '27': '27deg',
        '28': '28deg',
        '29': '29deg',
        '30': '30deg',
        '31': '31deg',
        '32': '32deg',
        '33': '33deg',
        '34': '34deg',
        '35': '35deg',
        '36': '36deg',
        '37': '37deg',
        '38': '38deg',
        '39': '39deg',
        '40': '40deg',
        '50': '50deg',
        '60': '60deg',
        '70': '70deg',
        '80': '80deg',
        '95': '95deg',
        '96': '96deg',
        '97': '97deg',
        '98': '98deg',
        '99': '99deg',
        '100': '100deg',
        '130': '130deg',
        '140': '140deg',
        '150': '150deg',


      },

      colors: {
        afexpurple: {
          darker: '#44207E',
          dark: '#54289D',
          DEFAULT: '#7737dd',
          regular: '#7738DD',
          light: '#C5A9F0',
          lighter: '#F1EBFC',
        },

        afexgreen: {
          darker: '#076D3A',
          dark: '#0BA257',
          regular: '#0DBF66',
          light: '#97E3BD',
          lighter: '#C5F0DA',
          extralight: '#E7F9F0',
        },

        afexwarning: {
          darker: '#653E0D',
          dark: '#A06114',
          regular: '#E1891C',
          light: '#F2CC9D',
          lighter: '#F8E3C9',
          extralight: '#FCF3E8',
        },

        afexred: {
          darker: '#873031',
          dark: '#A83C3D',
          regular: '#ED5556',
          light: '#F7B6B6',
          lighter: '#FBD6D6',
          extralight: '#FDEEEE',
        },
        afexdark: {
          darkest: '#1A171F',
          verydark: '#2b2930',
          darker: '#2B2930',
          dark: '#5D5B60',
          regular: '#49474D',
          light: '#DAD9DA',
          lighter: '#F0F0F0',
          extralight: '#F5F5F5',
        },


        afexblue: {
          darker: '#1453A0',
          dark: '#1863BF',
          regular: '#1C75E1',
          light: '#9DC4F2',
          lighter: '#C9DEF8',
          extralight: '#E8F1FC',
        },
        afexgray: {
          DEFAULT: '#F5F5F5',
        },
        textgrey: {
          darker: '#2B2930',
          dark: '#5D5B60',
          normal: '#8F8E91',
          light: '#DAD9DA',
          lighter: '#F0F0F0',
          extraLight: '#F5F5F5',
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
