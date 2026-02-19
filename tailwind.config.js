/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oleo: ['"Oleo Script Swash Caps"', "system-ui"],
        arapey: ['"Arapey"', "serif"],
        rouge: ["Rouge Script", "cursive"],
        passions: ["Passions Conflict", "cursive"],
      },
    },
  },
  plugins: [],
};
