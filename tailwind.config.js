/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DEFAULT: "#3B82F6",
        blue: "#00C0EF",
        icons: "#ECF0F4",
        customBlues: "#00C0EF",
        customGreen: "#00A65A",
        customRed: "#DD4B39",
        buttonNext: "#00b071",
        iconsBg: "#FFFFFF",
        adminSettings: "#0099FF",
      },
    },
  },
  plugins: [],
};
