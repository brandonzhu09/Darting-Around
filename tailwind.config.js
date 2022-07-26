/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#D4BFBF'
      },
      backgroundImage: {
        'hero-header': "url('./assets/mountain.png')",
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}
