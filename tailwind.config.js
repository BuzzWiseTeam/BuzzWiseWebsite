/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: [
      './public/index.html',
      './public/js/main.js'
    ]
  },
  theme: {
    extend: {
      inset: {
        '100': '100%',
      },

      padding: {
        '120': '120px',
      },

      colors: {
        'theme-color': '#361CC1',
        'theme-color-2': '#FE7A7B'
      }
    },
  },
  variants: {},
  plugins: [],
}
