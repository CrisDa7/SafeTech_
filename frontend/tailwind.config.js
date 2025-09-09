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
        // Dorado corporativo (SafeTech)
        golden: {
          50:  "#fffbea",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // principal
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03", // dorado oscuro para fondos
        },

        // Grises oscuros para fondos y textos secundarios (ya estaban bien)
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

        // Acentos (puedes mantenerlos o ajustarlos al dorado/negro)
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
