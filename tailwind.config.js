/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
       'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
       'gilroy-light': ['Gilroy-Light', 'sans-serif'],
       'gilroy-regular': ['Gilroy-Regular', 'sans-serif']


      },
    },
  },
  plugins: [],
}
