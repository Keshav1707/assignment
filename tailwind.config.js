/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rgb-239-243-253": "rgb(239, 243, 253)",
        "rgb-220-247-253": "#dcf7c5",
      },
      spacing: {
        360: "360px",
        1020: "620px",
      },
    },
  },
  plugins: [],
};
