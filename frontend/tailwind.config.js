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
        safetech: {
          50:  "#f3f7ff",
          100: "#e6efff",
          200: "#c5d9ff",
          300: "#9fbfff",
          400: "#6d9aff",
          500: "#3b74ff",  // primario
          600: "#2f5bd6",
          700: "#2546a6",
          800: "#1c357d",
          900: "#132454",
        }
      },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.06)" }
    },
  },
  plugins: [require("flowbite/plugin")],
}
