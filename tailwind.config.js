/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        keaniaone: ["KeaniaOne-Regular"],
      },
      colors:{
        'custom': '#FBFDE5',
      },
    },
  },
  plugins: [],
};
