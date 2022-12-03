/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "b-700": "hsl(238, 42%, 28%)",
      }
    },
  },
  plugins: [],
}
