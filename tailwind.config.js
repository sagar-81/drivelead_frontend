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
      },
    },
  },
  plugins: [],
}

