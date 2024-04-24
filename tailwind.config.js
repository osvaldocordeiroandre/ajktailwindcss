/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      keyframes: {
        slideY: {
          '0%': {transform: 'translateY(100px)', opacity:'0'}, 
          '100%': {transform: 'translateY(0px)', opacity:'1'},
        },
        slideX: {
          '0%': { transform: 'translateX(100px)', opacity:'0'}, 
          '100%': {transform: 'translateX(0px)', opacity:'1'},
        }
      },
      animation: {
        'slide-Y': 'slideY 1s ease-in-out',
        'slide-X': 'slideX 1s ease-in-out'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}