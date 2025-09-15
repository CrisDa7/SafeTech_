import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import adminImg from "@/assets/safe.png";
import configuracionImg from "@/assets/configuracion.png";

const serviciosData = [
  {
    title: "Safe Escolar",
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
    img: adminImg,
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

// ---- Estilos base ----
const BTN_BASE =
  "inline-flex items-center justify-center px-5 py-3 text-base font-medium focus:outline-none transition";
const BTN_PRIMARY =
  `${BTN_BASE} rounded-md text-white bg-safepalette-600 hover:bg-safepalette-700 focus-visible:ring-4 focus-visible:ring-safepalette-400/50`;
const BTN_DISABLED =
  `${BTN_BASE} rounded-md bg-neutral-800 text-neutral-500 cursor-not-allowed`;

const CARD =
  "group relative flex h-full flex-col rounded-2xl bg-slate-900 text-slate-100 " +
  "ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 " +
  "hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:ring-safepalette-500/25";
const CARD_MEDIA =
  "flex items-center justify-center bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 " +
  "px-6 pt-8 pb-6";
const CARD_BODY = "flex flex-col gap-4 p-6";

// ---- Icono check ----
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

// ---- Carrusel con autoplay cada 3s ----
function FeatureCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  const intervalMs = 3000;
  const clamp = (n) => (n + items.length) % items.length;
  const goTo = (i) => setIndex(clamp(i));
  const next = () => goTo(index + 1);

  useEffect(() => {
    if (hovering) return;
    const id = setInterval(() => next(), intervalMs);
    return () => clearInterval(id);
  }, [index, hovering]);

  const startX = useRef(0);
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(delta) > 40) delta > 0 ? goTo(index - 1) : next();
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="overflow-hidden rounded-xl ring-1 ring-white/10"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
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

      {/* Dots */}
      <div className="mt-3 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={
              "h-2.5 w-2.5 rounded-full transition " +
              (i === index
                ? "bg-safepalette-500"
                : "bg-white/20 hover:bg-white/30")
            }
            aria-label={`Ir al slide ${i + 1}`}
            aria-current={i === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}

// ---- Carrusel móvil ----
function MobileServiciosCarousel({ items }) {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  };

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(i, items.length - 1));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    setPage(clamped);
  };

  return (
    <div className="md:hidden">
      <div className="-mx-4 px-4">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {items.map((item) => (
            <article
              key={item.title}
              className={`${CARD} overflow-hidden snap-start shrink-0 w-full`}
              aria-labelledby={`card-${item.title}-title-mobile`}
            >
              <div className={CARD_MEDIA + " aspect-[16/9]"}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-28 w-auto object-contain md:h-32 drop-shadow-[0_6px_20px_rgba(137,144,162,.25)]"
                />
              </div>

              <div className={CARD_BODY + " grow"}>
                <h3
                  id={`card-${item.title}-title-mobile`}
                  className="text-xl font-semibold text-white"
                >
                  {item.title}
                </h3>

                {Array.isArray(item.carouselItems) && item.carouselItems.length > 0 ? (
                  <FeatureCarousel items={item.carouselItems} />
                ) : (
                  Array.isArray(item.features) &&
                  item.features.length > 0 && (
                    <ul className="mt-2 space-y-2.5">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md border border-safepalette-500/30 bg-safepalette-600/15 text-safepalette-300">
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
                    <button type="button" className={BTN_DISABLED} aria-disabled="true">
                      {item.cta}
                    </button>
                  ) : (
                    <Link to={item.link} className={BTN_PRIMARY}>
                      {item.cta}
                      <svg
                        className="ml-2 h-4 w-4 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 10"
                        fill="none"
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

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-safepalette-600/80 transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={
              "h-2.5 w-2.5 rounded-full transition " +
              (i === page ? "bg-safepalette-500" : "bg-white/20 hover:bg-white/30")
            }
          />
        ))}
      </div>

      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
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
            Nuestros <span className="text-safepalette-500">Servicios</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300 md:text-xl">
            Soluciones especializadas para cada integrante de la comunidad
          </p>
          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-safepalette-600" />
        </header>

        {/* Móvil */}
        <MobileServiciosCarousel items={serviciosData} />

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-1 gap-8 md:grid-cols-3">
          {serviciosData.map((item) => (
            <article
              key={item.title}
              className={CARD + " overflow-hidden"}
            >
              <div className={CARD_MEDIA + " aspect-[16/9]"}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-28 w-auto object-contain md:h-32 drop-shadow-[0_6px_20px_rgba(137,144,162,.25)]"
                />
              </div>

              <div className={CARD_BODY + " grow"}>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                {Array.isArray(item.carouselItems) && item.carouselItems.length > 0 ? (
                  <FeatureCarousel items={item.carouselItems} />
                ) : (
                  Array.isArray(item.features) &&
                  item.features.length > 0 && (
                    <ul className="mt-2 space-y-2.5">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md border border-safepalette-500/30 bg-safepalette-600/15 text-safepalette-300">
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
                    <button type="button" className={BTN_DISABLED}>
                      {item.cta}
                    </button>
                  ) : (
                    <Link to={item.link} className={BTN_PRIMARY}>
                      {item.cta}
                      <svg
                        className="ml-2 h-4 w-4 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 10"
                        fill="none"
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

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-safepalette-600/80 transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
