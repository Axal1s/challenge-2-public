/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["winter", "garden"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
