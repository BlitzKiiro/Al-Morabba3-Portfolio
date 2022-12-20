/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        BigJohn: "Big John",
        SlimJoe: "Slim Joe",
        Poppins: "Poppins",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
