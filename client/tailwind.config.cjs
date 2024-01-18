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
        pixPurple: '#4e0530ea',
        whiteColor: 'hsl(0, 0%, 100%)',
      },
    },
    screens: {
      /* Mobile screens */
      'iphoneX':'375px',
      'iphone12':'390px',
      'iphone14plus': '428px',
      xs: "480px",
      ss: "620px",
      'iphone11': '750px',
      /* Tablets */
      sm: "768px",
      /* Laptops */
      md: "1060px",
      lg: "1200px",
      /* PC's */
      xl: "1700px",
      /* 21-inch screen */
      '21inch': '2048px',
       /* 27-inch screen */
      '27inch': "2560px",
    },
  },
  plugins: [
    require('postcss-import'),
    require('@tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
