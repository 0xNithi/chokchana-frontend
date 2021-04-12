module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.tsx"],
    options: {
      safelist: ["dark"],
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
