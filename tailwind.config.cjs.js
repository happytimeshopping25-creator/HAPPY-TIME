
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002D62",
        accent: "#5C3D99",
        warn: "#FFA500"
      }
    }
  },
  plugins: []
}
