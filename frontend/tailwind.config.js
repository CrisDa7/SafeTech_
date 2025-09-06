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
        // Azul corporativo
        "hawkes-blue": {
          50:  "#f0f4fd",
          100: "#e3ebfc",
          200: "#cfdbf9",
          300: "#adc0f4",
          400: "#8d9dec",
          500: "#717de3",
          600: "#5558d6", // principal (botones, links)
          700: "#4647bc",
          800: "#3b3d98",
          900: "#363a79",
          950: "#202146", // fondo base
        },

        // Grises oscuros para fondos y textos secundarios
        neutral: {
          100: "#e5e5e5",
          200: "#cfcfcf",
          300: "#a8a8a8",
          400: "#7a7a7a",
          500: "#555555",
          600: "#3f3f3f",
          700: "#2e2e2e",
          800: "#1f1f1f",
          900: "#141414",
        },

        // Acentos
        success: {
          500: "#10b981",
          600: "#059669",
        },
        warning: {
          500: "#f59e0b",
          600: "#d97706",
        },
        danger: {
          500: "#ef4444",
          600: "#dc2626",
        },
      },

      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.25)", // sombra marcada para oscuro
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
