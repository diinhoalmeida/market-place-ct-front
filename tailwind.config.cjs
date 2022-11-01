/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    "./index.html",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'box-shadow-cards': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        'box-shadow-card-product-page': 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
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
      }},
      gridTemplateAreas: {
        'xl-grid': [
          'product data indications'
        ],
        'lg-grid': [
          'product data',
          'indications indications'
        ],
        'md-grid': [
          'product',
          'data',
          'indications'
        ],
        'xl-grid-checkout-page': [
          'form details'
        ],
        'md-grid-checkout-page': [
          'details',
          'form'
        ]
      }
    },
    screens: {
      'min-600': '600px',
      'min-635': '635px',
      'min-740': '740px',
      'min-800': '800px',
      'min-970': '970px',
      'min-1105': '1105px',
      'min-1145': '1145px',
      'min-1275': '1275px',
      'xl': '1280px'
    }
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
}
