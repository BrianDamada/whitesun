/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themebg: "var(--bg-color)",
        themetext: "var(--text-color)",
        themedestaque: "var(--destaque)",
        themedestaque2: "var(--destaque2)",
        themesolid: "var(--solid)",
        themecolor1: "var(--color1)",
        themecolor2: "var(--color2)",
        themeclose: 'var(--close)'
      },
    },
  },
  plugins: [],
};
