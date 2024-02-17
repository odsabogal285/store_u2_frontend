/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/vue-tailwind-datepicker/**/*.js',
    './formkit.config.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "app": "url(/img/logo_2.jpg)"
      }
    },
  },
  plugins: [],
}

