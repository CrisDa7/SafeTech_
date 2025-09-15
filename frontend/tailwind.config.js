// tailwind.config.js
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
        safepalette: {
          blue: "#0A2342",
          gray: "#4F5D75",
          white: "#FFFFFF",
          gold: "#F4B400",
          // 👇 nuevas capas para modo oscuro elegante
          ink: "#0A0B0D",        // fondo de página (más profundo)
          surface: "#0F141B",    // tarjeta (un poco más clara)
          edge: "#1B2330"        // líneas y bordes internos
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.25)",
        goldglow: "0 0 0 1px rgba(244,180,0,0.45), 0 8px 30px rgba(0,0,0,0.35)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: [flowbite]
}
