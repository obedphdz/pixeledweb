/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#000000",
        pixColor: "#E50053",
        dimBlue: "#4d4d4d",
        pinkHover: '#ce0c46',
        dimPurple: 'hsla(290, 20%, 55%)',
        pixPurple: '#91145dea',
        whiteColor: 'hsl(0, 0%, 100%)',
      },
    },
    screens: {
      /* Mobile screens */
      xs: "480px",
      ss: "620px",
      /* Tablets */
      sm: "768px",
      /* Laptops */
      md: "1060px",
      lg: "1200px",
      /* PC's */
      xl: "1700px",
    },
  },
  plugins: [
    require('postcss-import'),
    require('@tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
