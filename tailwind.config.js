/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        usm: { min: "280px" },
        msm: { min: "320px" },
        usm1: { min: "350px" },
        umd: { min: "400px" },
        umd1: { min: "500px" },
        umd2: { min: "800px" },
        ulg: { min: "900px" },
        llg: { min: "1010px" },
        sxl: { min: "1279px" },

        // => @media (max-width: 640px) { ... }
      },
    },

    colors: {
      // Theme 1
      // BACKGROUNDS
      t1mainBG: "hsl(222, 26%, 31%)",
      t1toggleBG: "hsl(223, 31%, 20%)",
      t1screenBG: "hsl(224, 36%, 15%)",
      // KEYS
      t1keySD: "hsl(224, 28%, 35%)",
      t1keyBG: "hsl(225, 21%, 49%)",
      t1keyBGT: "hsl(6, 63%, 50%)",
      t1keySD1: "hsl(6, 70%, 34%)",
      t1keyBG1: "hsl(30, 25%, 89%)",
      t1keySD2: "hsl(28, 16%, 65%)",
      //TEXT
      t1text1: "hsl(221, 14%, 31%)",
      t1text2: "hsl(0, 0%, 100%)",

      //Theme 2
      // BACKGROUNDS
      t2mainBG: "hsl(0, 0%, 90%)",
      t2togglekpBG: "hsl(0, 5%, 81%)",
      t2screenBG: "hsl(0, 0%, 93%)",
      // KEYS
      t2keyBG: "hsl(185, 42%, 37%)",
      t2keySD: "hsl(185, 58%, 25%)",
      t2keyBGT: "hsl(25, 98%, 40%)",
      t2keySD1: "hsl(25, 99%, 27%)",
      t2keyBG1: "hsl(45, 7%, 89%)",
      t2keySD2: "hsl(35, 11%, 61%)",
      //TEXT
      t2text1: "hsl(60, 10%, 19%)",
      t2text2: "hsl(0, 0%, 100%)",

      //Theme 3
      // BACKGROUNDS
      t3mainBG: "hsl(268, 75%, 9%)",
      t3toggleKeypadScreenBG: "hsl(268, 71%, 12%)",
      // KEYS
      t3keyBG: "hsl(281, 89%, 26%)",
      t3keySD: "hsl(285, 91%, 52%)",
      t3keyBGT: "hsl(176, 100%, 44%)",
      t3keySD1: "hsl(177, 92%, 70%)",
      t3keyBG1: "hsl(268, 47%, 21%)",
      t3keySD2: "hsl(290, 70%, 36%)",
      //TEXT
      t3text1: "hsl(52, 100%, 62%)",
      t3text2: "hsl(198, 20%, 13%)",
      t3text3: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
