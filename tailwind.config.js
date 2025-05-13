/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**.{html, css, js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#74C69D',
          light: '#8ED5AF',
          dark: '#5BB186',
        },
        secondary: '#212529',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
