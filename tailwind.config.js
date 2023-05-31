/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-10": "#8e959c57",
        "light-5": "#8e959c57",
        "cream-1":"#fffbf4"
      },
      backgroundImage: {
        "hero-bg":"url('https://res.cloudinary.com/dbed2fwkj/image/upload/v1685544695/mighty-hands-property-hero1_pzd6we.jpg')"
     }
    },
  },
  plugins: [],
}

