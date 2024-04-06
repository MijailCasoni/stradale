/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "#50fa7b",
        customRed: "#e12b2d",
      }
    },
  },
  plugins: [],
}

