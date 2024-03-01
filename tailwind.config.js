/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          Lightpink: 'hsl(275, 100%, 97%)',
          Grayishpurple: 'hsl(292, 16%, 49%)',
          Darkpurple: 'hsl(292, 42%, 14%)',
        },
      },
    },
  },
  plugins: [],
}

