/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        // Define popular grid layouts
        '70/30': '70% 28%',
        '2': 'repeat(2, minmax(0, 1fr))', // 2 column layout
        '3': 'repeat(3, minmax(0, 1fr))', // 3 column layout
        '4': 'repeat(4, minmax(0, 1fr))', // 4 column layout
        // Add more as needed
      },
      gridTemplateRows: {
        // Define popular grid row layouts if necessary
        // '2': 'repeat(2, minmax(0, 1fr))', // Example of 2 row layout
      },
    },
  },
  plugins: [],
}