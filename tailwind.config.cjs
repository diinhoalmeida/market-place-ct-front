/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    "./index.html" 
  ],
  theme: {
    extend: {

    },
    screens: {
      'min-880': '880px',
      'min-1145': '1145px',
      'xl': '1280px'
    }
  },
  plugins: [],
}
