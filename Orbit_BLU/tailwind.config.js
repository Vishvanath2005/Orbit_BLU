/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      'Roboto Serif': ["Roboto Serif", 'sans-serif'],
      'Source Sans Pro':["Source Sans Pro", 'sans-serif'],
      'Exo':["Exo",'sans-serif']
      },
    },
  },
  plugins: [],
}

