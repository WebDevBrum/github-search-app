/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#0079ff",
      grey: "#697c9A",
      greyBlue: "#4B6A9B",
      blackBlue: "#2b3442",
      lightGrey: "#F6F8FF",
      white: "#FEFEFE",
      darkWhite: "#FFFFFF",
      darkBlack: "#141d2f",
      darkBlue: "#1e2a47",
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
      BODY: "15px",
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

    extend: {},
  },
  plugins: [],
};
