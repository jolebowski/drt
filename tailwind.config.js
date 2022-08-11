/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkBlue: "hsl(218, 67%, 18%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
      },
    },
  },
  plugins: [],
};
