/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        comicneue: ["Comic Neue", "sans-serif"],
        luckiestguy: ["Luckiest Guy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
