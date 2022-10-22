/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['League Spartan', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'usm': {'max': '281px'},
        // => @media (max-width: 640px) { ... }
      },
    },

    colors: {
      // BACKGROUNDS
      t1mainBG: 'hsl(222, 26%, 31%)',
      t1toggleBG: 'hsl(223, 31%, 20%)',
      t1screenBG: 'hsl(224, 36%, 15%)',
      // KEYS
      t1keySD: 'hsl(224, 28%, 35%)',
      t1keyBG: 'hsl(225, 21%, 49%)',
      t1keyBGT: 'hsl(6, 63%, 50%)',
      t1keySD1: 'hsl(6, 70%, 34%)',
      t1keyBG1: 'hsl(30, 25%, 89%)',
      t1keySD2: 'hsl(28, 16%, 65%)',
      //TEXT
      t1text1: 'hsl(221, 14%, 31%)',
      t1text2: 'hsl(0, 0%, 100%)',
    }
  },
  plugins: [],
}
