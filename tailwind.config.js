/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./www/*.{html,js}"],
  theme: {
    extend: {
      textUnderlineOffset: {
        14: '14px',
      },
      fontSize: {
        xxs: '0.625rem',
      }
    },
  },
  plugins: [],
}

