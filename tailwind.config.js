const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
    boxShadow: {
      DEFAULT: '0px 0px 5px rgba(0, 0, 0, 0.05)',
    },
    extend: {
      colors: {
        blueGray: colors.blueGray,
        rose: colors.rose,
        lightBlue: colors.lightBlue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
