/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      morabba: ["Morabba", "sans-serif"],
      iranYekan: ["IranYekan", "sans-serif"],
      sans: ["Sans", "sans-serif"],
    },
    extend: {},
    screens: {
      320: "320px",
      375: "375px",
      425: "425px",
      520: "520px",
      sm: "640px",
      md: "768px",
      810: "810px",
      900: "900px",
      lg: "1024px",
      1100: "1100px",
      xl: "1280px",
      1400: "1400px",
      "2xl": "1536px",
      1800: "1800px"
    },
  },
  plugins: [],
}

