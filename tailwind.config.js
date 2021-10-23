module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-green': '#295A5F',
      },
      borderWidth: {
        10: '10px',
      },
      height: {
        'cus-height': '36rem',
        'l-height': '44rem',
      },
      width: {
        "cus-width": "28%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
