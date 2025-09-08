import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import adminImg from "../assets/safe.png";
import configuracionImg from "../assets/configuracion.png";

const serviciosData = [
  {
    title: "Safe Escolar",
    // Carrusel: cada item con título e imagen (URLs de internet temporales)
    carouselItems: [
      {
        title: "Safe School",
        img: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Safe Padres",
        img: "https://images.unsplash.com/photo-1486591038957-19e7c73bdc41?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Safe Administración",
        img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
      },
    ],
    img: adminImg, // se sigue usando para el encabezado/icono
    link: "/safe-escolar",
    cta: "Ver más",
    soon: false,
  },
  {
    title: "Configurando",
    features: [],
    img: configuracionImg,
    link: "#",
    cta: "Muy pronto",
    soon: true,
  },
  {
    title: "Configurando",
    features: [],
    img: configuracionImg,
    link: "#",
    cta: "Muy pronto",
    soon: true,
  },
];

// ---- Estilos base que ya tenías ----
const BTN_BASE =
  "inline-flex items-center justify-center px-5 py-3 text-base font-medium focus:outline-none transition";
const BTN_PRIMARY =
  `${BTN_BASE} rounded-md text-white bg-hawkes-blue-600 hover:bg-hawkes-blue-700 focus-visible:ring-4 focus-visible:ring-hawkes-blue-400/50`;
const BTN_DISABLED =
  `${BTN_BASE} rounded-md bg-neutral-800 text-neutral-500 cursor-not-allowed`;

const CARD =
  "group relative flex h-full flex-col rounded-2xl bg-slate-900 text-slate-100 " +
  "ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 " +
  "hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:ring-hawkes-blue-500/25";
const CARD_MEDIA =
  "flex items-center justify-center bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 " +
  "px-6 pt-8 pb-6";
const CARD_BODY = "flex flex-col gap-4 p-6";

// ---- Icono check que ya tenías ----
const CHECK_ICON = (
  <svg
    className="h-3.5 w-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 13l4 4L19 7" />
  </svg>
);

// ---- Carrusel simple para la primera tarjeta ----
function FeatureCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const clamp = (n) => Math.max(0, Math.min(n, items.length - 1));
  const goTo = (i) => setIndex(clamp(i));
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // Arrastre táctil básico
  const startX = useRef(0);
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(delta) > 40) {
      delta > 0 ? prev() : next();
    }
  };

  return (
    <div className="relative">
      {/* Vista */}
      <div
        className="overflow-hidden rounded-xl ring-1 ring-white/10"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((it) => (
            <figure
              key={it.title}
              className="relative aspect-[16/9] w-full shrink-0 select-none"
            >
              <img
                src={it.img}
                alt={it.title}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable="false"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/60 backdrop-blur-sm p-3 text-center text-sm">
                {it.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hawkes-blue-400"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hawkes-blue-400"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={
                "h-2.5 w-2.5 rounded-full transition " +
                (i === index
                  ? "bg-hawkes-blue-500"
                  : "bg-white/20 hover:bg-white/30")
              }
              aria-label={`Ir al slide ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Servicios() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="bg-slate-950 px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center md:mb-16">
          <h2
            id="servicios-title"
            className="text-4xl font-bold text-white md:text-5xl"
          >
            Nuestros <span className="text-hawkes-blue-500">Servicios</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300 md:text-xl">
            Soluciones especializadas para cada integrante de la comunidad
          </p>
          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-hawkes-blue-600" />
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {serviciosData.map((item) => (
            <article
              key={item.title}
              className={CARD + " overflow-hidden"}
              aria-labelledby={`card-${item.title}-title`}
            >
              <div className={CARD_MEDIA + " aspect-[16/9]"}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-28 w-auto object-contain md:h-32 drop-shadow-[0_6px_20px_rgba(113,125,227,.25)]"
                />
              </div>

              <div className={CARD_BODY + " grow"}>
                <h3
                  id={`card-${item.title}-title`}
                  className="text-xl font-semibold text-white"
                >
                  {item.title}
                </h3>

                {/* Si existe carruselItems (solo primera tarjeta), renderiza carrusel */}
                {Array.isArray(item.carouselItems) && item.carouselItems.length > 0 ? (
                  <FeatureCarousel items={item.carouselItems} />
                ) : (
                  // Fallback: lista de features si existen
                  Array.isArray(item.features) &&
                  item.features.length > 0 && (
                    <ul className="mt-2 space-y-2.5">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md border border-hawkes-blue-500/30 bg-hawkes-blue-600/15 text-hawkes-blue-300">
                            {CHECK_ICON}
                          </span>
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )
                )}

                <div className="mt-6">
                  {item.soon ? (
                    <button
                      type="button"
                      className={BTN_DISABLED}
                      aria-disabled="true"
                      title="Disponible pronto"
                    >
                      {item.cta}
                    </button>
                  ) : (
                    <Link
                      to={item.link}
                      className={BTN_PRIMARY}
                      aria-label={`Acceder a ${item.title}`}
                    >
                      {item.cta}
                      <svg
                        className="ml-2 h-4 w-4 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 10"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>

              {/* Línea de acento al hover */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-hawkes-blue-600/80 transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
