/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Paleta gris-azulada personalizada
        safepalette: {
          50:  "#f7f8fa",
          100: "#eaecef",
          200: "#d5d8de",
          300: "#b5bac9",
          400: "#a3a8b7",
          500: "#8990a2",
          600: "#788199",
          700: "#666f88",
          800: "#4f586f",
          900: "#3a4155",
          950: "#262a38"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.25)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: [flowbite]
}
