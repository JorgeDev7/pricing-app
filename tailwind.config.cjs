/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "very-light-grayish-blue": "hsl(240, 78%, 98%)",
        "light-grayish-blue": "hsl(234, 14%, 74%)",
        "grayish-blue": "hsl(233, 13%, 49%)",
        "dark-grayish-blue": "hsl(232, 13%, 33%)",
        "gradient-1": "hsl(236, 72%, 79%)",
        "gradient-2": "hsl(237, 63%, 64%)"
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
