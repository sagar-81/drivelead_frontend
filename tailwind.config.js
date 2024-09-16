/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#A1A1AA',
        customPurple: 'rgba(217, 46, 202, 0.2)',
        customPurple100: '#d68cde',
        customGray100: 'rgba(15, 98, 254, 0.05)',
        borderRed: '#FF0000',
        borderBlue: '#0000FF',
        borderWhite: '#FFFFFF',
      },
      keyframes: {
        'border-roll': {
          '0%': { borderColor: '#FF0000' },
          '33%': { borderColor: '#0000FF' },
          '66%': { borderColor: '#FFFFFF' },
          '100%': { borderColor: '#FF0000' },
        },
      },
      animation: {
        'border-roll': 'border-roll 3s linear infinite',
      },
    },
  },
  plugins: [],
}
