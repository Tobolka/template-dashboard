const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter"],
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
