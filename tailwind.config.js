/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#D595DA',
          2: '#A935B3',
          3: '#6C2972',
          4: '#3D0642',
        },
      },
    },
  },
}
