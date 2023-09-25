/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#D4BFBF'
      },
      backgroundImage: {
        'hero-header': "url('./assets/mountain.png')",
        'flight-header': "url('./assets/airplane-view-mountains.jpg')",
        'hotel-header': "url('./assets/ski-resort.jpg')",
        'rental-header': "url('./assets/rental-cars-background.jpg')",
      },
      spacing: {
        '128': '32rem'
      },
      fontFamily: {
        body: ['Monda'],
      },
      maxWidth: {
        'xxs': '250px',
      }
    },
  },
  plugins: [],
}
