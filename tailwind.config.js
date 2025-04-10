/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'star-movement-top': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'star-movement-bottom': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'star-movement-top': 'star-movement-top linear infinite',
        'star-movement-bottom': 'star-movement-bottom linear infinite'
      }
    },
  },
  plugins: [],
};
