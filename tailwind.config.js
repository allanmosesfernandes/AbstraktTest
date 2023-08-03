/* eslint-disable linebreak-style */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi-Regular", "sans-serif"],
      satoshiLight: ["Satoshi-Light", "sans-serif"],
      satoshiBold: ["Satoshi-Bold", "sans-serif"],
    },
    screens: {
      "2xl": "1536px",
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      xs: "480px",
    },
    extend: {
      lineHeight: {
        25: "25px",
        23: "23px",
        60: "60px",
        38: "38px",
        46: "46px",
      },
      colors: {
        scapeGray100: "#F4F5F7",
        scapeGray200: "#EEEEF2",
        scapeGray300: "#DFDFE3",
        scapeGray400: "#A7A8A9",
        scapeGray700: "#656565",
        scapeGreen500: "#53BBAD",
        scapeBlue500: "#29BDEF",
        scapeBlue600: "#009CBD",
        scapeBlue700: "#00809B",
        scapeBlue800: "#0C4B66",
        scapeBlue900: "#221C34",
        scapeYellow400: "#FFBB31",
        scapePurple600: "#B182C1",
      },
    },
  },
  plugins: [],
};
