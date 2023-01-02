/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#3EB489",
      secondary: "#0A0A0A",
      jade: "#00A86B",
      white: "#FFFFFF",
      evergreen: "#05472A",
      teal: "#006D5B",
    }
  },
  plugins: [],
}


