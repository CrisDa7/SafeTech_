/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hawkes-blue": {
          50:  "#f0f4fd",
          100: "#e3ebfc",
          200: "#cfdbf9",
          300: "#adc0f4",
          400: "#8d9dec",
          500: "#717de3",
          600: "#5558d6",
          700: "#4647bc",
          800: "#3b3d98",
          900: "#363a79",
          950: "#202146",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
