/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        customGray: '#A1A1AA',
        customPurple: 'rgba(217, 46, 202, 0.2)',
        customPurple100: '#d68cde',
        customGray100: 'rgba(15, 98, 254, 0.05)',
        customGray200: '#f0f3f4',
        customBlue:'#1d8cd7',
        borderRed: '#FF0000',
        borderBlue: '#0000FF',
        borderWhite: '#FFFFFF',
      },
      keyframes: {
        'border-roll': {
          '0%': { borderColor: 'red' },
          '33%': { borderColor: 'blue' },
          '66%': { borderColor: 'white' },
          '100%': { borderColor: 'red' },
        },
      },
      animation: {
        'border-roll': 'border-roll 3s linear infinite',
      },
    },
  },
  plugins: [],
}
