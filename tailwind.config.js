/** @type {import('tailwindcss').Config} */
const primaryColor = "#f26a22";
const greyPalette = ["#000000", "#1A1A1A", "#333333", "#4D4D4D", "#666666", "#808080", "#999999", "#B3B3B3", "#CCCCCC", "#E6E6E6", "#f2f2f2"];

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': primaryColor,
        'grey1': greyPalette[0],
        'grey2': greyPalette[1],
        'grey3': greyPalette[2],
        'grey4': greyPalette[3],
        'grey5': greyPalette[4],
        'grey6': greyPalette[5],
        'grey7': greyPalette[6],
        'grey8': greyPalette[7],
        'grey9': greyPalette[8],
        'grey10': greyPalette[9],
        'grey11': greyPalette[10],
      },
      padding: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
}

