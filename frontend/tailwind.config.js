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
        pavlova: {
          50:  "#fbf8f1",
          100: "#f6f0de",
          200: "#ebddbd",
          300: "#dfc696",
          400: "#d0a567",
          500: "#c68e49",  // tono principal (dorado cálido)
          600: "#b87a3e",
          700: "#996135",
          800: "#7b4e31",
          900: "#64422a",
          950: "#352115",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
