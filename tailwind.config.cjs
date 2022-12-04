/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "b": {
          "100": "hsl(238, 9%, 82%)",
          "200": "hsl(238, 16%, 70%)",
          "300": "hsl(238, 20%, 56%)",
          "400": "hsl(238, 24%, 44%)",
          "500": "hsl(238, 27%, 37%)",
          "700": "hsl(238, 42%, 28%)",
          "900": "hsl(238, 52%, 19%)",
        }
      }
    },
  },
  plugins: [],
};
