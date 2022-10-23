/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F59E0B",
          50: "#F0F5FF",
          100: "#E5EDFF",
          200: "#CDDBFE",
          300: "#B4C6FC",
          400: "#8DA2FB",
          500: "#6875F5",
          600: "#5850EC",
          700: "#5145CD",
          800: "#42389D",
          900: "#362F78",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
