/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "709px" },
        md: { max: "1000px" },
        lg: { max: "1500px" },
      },
    },
  },
  plugins: [],
};
