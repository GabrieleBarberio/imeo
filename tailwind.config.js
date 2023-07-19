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
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
