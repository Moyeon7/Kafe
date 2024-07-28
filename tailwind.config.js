/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: "#d3ad7f",
        black: "#13131a",
        bg: "#010103",
        darkgray: "1a1f25",
        lightgray: "#272c35",
      },
    },
  },
  plugins: [],
};
