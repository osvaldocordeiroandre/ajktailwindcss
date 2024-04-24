/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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