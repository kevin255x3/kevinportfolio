/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat, serif"],
        garamond: ["EB Garamond, serif"],
        inter: ["Inter, serif"],
      },
      zIndex: {
        '-1': '-10',
      },
      colors: {
        'portOrange': '#FFB646',
        'portPurple': '#7F00FF',
      }
    },
  },
  plugins: [],
}

