/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        foreground: "#e2e8f0",
        primary: "#38bdf8",
        secondary: "#818cf8",
        accent: "#f472b6"
      }
    }
  },
  plugins: []
};
