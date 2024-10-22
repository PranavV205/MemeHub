/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'm-375': '375px',
        'm-400': '400px',
        '4k': '1800px'
      }
    },
  },
  plugins: [],
}

