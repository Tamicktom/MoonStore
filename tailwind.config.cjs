/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "b": {
          "500": "hsl(238, 27%, 37%)",
          "700": "hsl(238, 42%, 28%)",
          "900": "hsl(238, 52%, 19%)",
        }
      }
    },
  },
  plugins: [],
}
