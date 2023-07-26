/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      title: ["Archivo", "sans-serif"],
      handwrite: ["Architects Daughter", "cursive"],
      paragraph: ["Gruppo", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: " #FFFDFA",
      blacky: {
        100: "#121523",
        200: "#1d1f26",
      },
      primary: {
        100: "#5B5682",
        200: "#504C6F",
        300: "#47466D",
        400: "#303255",
        500: "#32314A",
      },
      secondary: {
        100: "#68B7A3",
        200: "#538F83",
        300: "#4B6F73",
      },
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
