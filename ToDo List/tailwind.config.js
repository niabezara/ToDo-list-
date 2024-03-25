import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss, autoprefixer],
};
