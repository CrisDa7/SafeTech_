// tailwind.config.js
// ─────────────────────────────────────────────────────────────
//  Tailwind + Plugins
//  - Cambia SOLO los valores dentro de "safepalette" para
//    afectar toda la web (fondo general, tarjetas, bordes,
//    acentos y textos).
// ─────────────────────────────────────────────────────────────
import flowbite from 'flowbite/plugin'
import typography from '@tailwindcss/typography'

export default {
  // Usa <html class="dark"> si más adelante quieres tema oscuro.
  darkMode: 'class',

  // Dónde buscar clases para generar CSS
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' }
    },

    extend: {
      // Tipografías (puedes mapear a variables CSS)
      fontFamily: {
        // Ejemplo: en tu CSS define :root { --font-sans: "Inter", sans-serif; }
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui']
      },

      // ───────────────────────────────────────────────────────
      // 🎨 PALETA ÚNICA DE LA APP  (¡Edita SOLO estos valores!)
      // ───────────────────────────────────────────────────────
      colors: {
        safepalette: {
          /*
           * ink     → Fondo de página/secciones grandes (Navbar scrolleada,
           *            Hero overlay, Nosotros, Footer, drawers)
           * surface → Fondo de tarjetas/paneles/dropdowns/modales
           * edge    → Bordes y divisores sutiles
           * gold    → Acento (botones, bullets activos, iconos destacados)
           * blue    → Color de marca (títulos o enlaces destacados si quieres)
           * gray    → Texto secundario neutro (si lo necesitas)
           * white   → Texto principal sobre fondos oscuros
           *
           * CAMBIA AQUÍ para rediseñar toda la web sin tocar JSX.
           */
          ink:     "#0A0B0D",  // Fondo global oscuro
          surface: "#0F141B",  // Fondo de tarjetas/paneles
          edge:    "#1B2330",  // Bordes/divisores
          gold:    "#F4B400",  // Acento (CTA, bullets activos)
          blue:    "#0A2342",  // Marca (opcional para títulos/links)
          gray:    "#4F5D75",  // Texto secundario (si lo usas)
          white:   "#FFFFFF"   // Texto principal
        },

        // (Opcional) Alias semánticos: si te gusta escribir `bg-surface`
        // en vez de `bg-safepalette-surface`. Si prefieres no usarlos,
        // puedes borrar este bloque y usar siempre `safepalette.*`.
        surface: {
          DEFAULT: "#0F141B",
          muted:   "#131A22",
          contrast:"#FFFFFF"
        },
        ink: {
          DEFAULT: "#0A0B0D",
          contrast:"#E6E8EB"
        },
        brand: {
          DEFAULT: "#0A2342",
          accent:  "#F4B400"
        }
      },

      // Radios y sombras (puedes dejarlos así)
      borderRadius: {
        xl:  "1rem",
        "2xl":"1.25rem",
        "3xl":"1.5rem"
      },
      boxShadow: {
        soft:     "0 8px 30px rgba(0,0,0,0.25)",
        goldglow: "0 0 0 1px rgba(244,180,0,0.45), 0 8px 30px rgba(0,0,0,0.35)"
      },
      ringWidth: { 3: '3px' },
      ringColor: { brand: '#F4B400' }
    }
  },

  plugins: [flowbite, typography]
}
