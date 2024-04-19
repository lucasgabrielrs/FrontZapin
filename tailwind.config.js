/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '60p': '60%',
      },
      colors: {
        'primaryOrange': '#ef6c00',
        'fundoSendbox': '#ef6c0060'
      }
    },
  },
  plugins: [],
}