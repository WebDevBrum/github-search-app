/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#0079ff",
      hoverBlue: "#60ABFF",
      grey: "#697c9A",
      greyBlue: "#4B6A9B",
      blackBlue: "#2b3442",
      lightGrey: "#F6F8FF",
      white: "#FEFEFE",
      darkWhite: "#FFFFFF",
      darkBlack: "#141d2f",
      darkBlue: "#1e2a47",
      red: "#ff0000",
    },
    maxWidth: {
      box: "730px",
    },
    fontFamily: {
      spaceBold: ["SPACE-BOLD"],
      spaceReg: ["SPACE-REG"],
    },

    fontSize: {
      H1: "26px",
      H2: "22px",
      H3: "16px",
      H4: "13px",
      H5: "18px",
      H6: "11px",
      BODY: "15px",
      BODYSM: "14px",
    },
    borderRadius: {
      buttons: "10px",
      search: "15px",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },

    extend: {
      height: {
        13: "3.125rem",
        17: "4.313rem",

        21: "5.313rem", //85px
        29: "7.313rem",
      },
      width: {
        18: "0.859rem",
        27: "6.625rem",
        29: "7.313rem",
        97: "41.563rem",
        98: "12.625rem",
        99: "26.188rem",
        99.5: "30.813",
        99.6: "35.813",
        100: "45.625rem",
      },
      lineHeight: {
        22: "1.389rem",
        12: "3rem",
      },
      maxWidth: {
        27: "6.625rem",
        29: "7.313rem",
        97: "41.563rem",
        98: "12.625rem",
        99: "26.188rem",
        100: "45.625rem",
      },
      spacing: {
        8.5: "2.188rem",
        13: "1.195rem", //19.12px
        18: "4.313rem", //69px
        22: "5.188rem",
        37: "2.313rem", //37px
        97: "41.563rem",
        98: "35.813rem",
        100: "45.625rem",
      },
      screens: {
        "2md": "822px",
        // => @media (min-width: 640px) { ... }

        // => @media (min-width: 1280px) { ... }
      },
    },
  },

  plugins: [],
};
