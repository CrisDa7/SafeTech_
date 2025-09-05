import React from "react";

/**
 * Hero de portada
 * - Usa la paleta pavlova
 */
export default function Hero() {
  // Clases base (evita repetición)
  const BTN_BASE =
    "inline-flex items-center justify-center px-5 py-3 text-base font-medium focus:outline-none transition";
  const BTN_PRIMARY =
    `${BTN_BASE} text-white rounded-lg bg-pavlova-600 hover:bg-pavlova-700 ` +
    `focus-visible:ring-4 focus-visible:ring-pavlova-300`;
  const BTN_OUTLINE =
    `${BTN_BASE} text-white rounded-lg border border-white hover:bg-white hover:text-pavlova-900 ` +
    `focus-visible:ring-4 focus-visible:ring-pavlova-400`;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className={
        // Fondo + overlay + layout
        "relative isolate flex items-center justify-center " +
        "bg-center bg-cover bg-no-repeat " +
        "bg-[url('https://i.pinimg.com/1200x/0f/af/fb/0faffbb36424b8cafbc9a8cff0a32148.jpg')] " +
        "bg-gray-700 bg-blend-multiply " +
        "min-h-[90svh] md:min-h-screen"
      }
    >
      {/* Overlay para contraste (gradiente sutil hacia el centro) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/40"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-20 text-center md:py-28">
        <h1
          id="hero-title"
          className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Bienvenido a SafeTech
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-pretty text-gray-200 text-lg md:text-xl">
          Empresa ecuatoriana comprometida con transformar la seguridad escolar
          a través de la innovación tecnológica.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          {/* Scroll a Nosotros */}
          <a href="#nosotros" className={BTN_PRIMARY} aria-label="Ir a la sección Acerca de nosotros">
            Nosotros
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>

          {/* Scroll a Servicios */}
          <a
            href="#servicios"
            className={BTN_OUTLINE}
            aria-label="Ver la sección de Servicios"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
}
