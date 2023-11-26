// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xss: "360px",
        xs: "420px",
        s: "550px",
        sm: "640px", // Small screens
        md: "880px", // Medium screens (customize this)
        big: "1000px",
        lg: "1240px", // Large screens (customize this)
        xl: "1380px", // Extra-large screens
      },
      fontFamily: {
        caveat: ["Caveat Brush", "cursive"],
        serifDisplay: ["DM Serif Display", "serif"],
        helvetica: ["Helvetica-Neue", "sans-serif"],
        sedan: ["Sedan-SC", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
        kite: ["Kite One", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
