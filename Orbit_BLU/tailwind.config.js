/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      'Roboto_Serif': ["Roboto Serif",'sans serif'],
      'Source_Sans_Pro':["Source Sans Pro",'sans serif'],
      'Exo':["Exo",'sans serif'],
          },
      colors:{
        'background':'#f5f7fb',
        'select-sidebar':'#f0f8ff',
        'select-title':' #3B5998',
        'orange':'#FD7D00'
      }
    },
  },
  plugins: [],
}

