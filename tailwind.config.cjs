/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    "./index.html" 
  ],
  theme: {
    extend: {
      boxShadow: {
        'box-shadow-cards': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      },
      keyframes: {
        fromTop: {
          'from': { 
            opacity: 0,
            transform: 'translateY(-30px)'
          },
          'to': { 
            opacity: 1,
            transform: 'translateY(0)' 
          }
        },
        toTop: {
          'from': { 
            opacity: 0,
            transform: 'translateY(30px)' 
          },
          'to': { 
            opacity: 1,
            transform: 'translateY(0)' 
          }  
      },
      animation: {
        fromTop: 'fromTop 0.7s .2s backwards',
        toTop: 'toTop'
      }}
    },
    screens: {
      'min-970': '970px',
      'min-1145': '1145px',
      'xl': '1280px'
    }
  },
  plugins: [],
}
