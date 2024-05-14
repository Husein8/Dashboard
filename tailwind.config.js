/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DEFAULT: "#3B82F6",
        blue: "##00C0EF",
        customBlues: "##00C0EF",
        customGreen: "##00A65A",
        customRed: "#DD4B39",
      },
    },
  },
  plugins: [],
};
