// src/components/Servicios.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import adminImg from "@/assets/logoNavbar.png";
import configuracionImg from "@/assets/logoNavbar.png";

const serviciosData = [
  {
    title: "Seguridad, transporte escolar",
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
    cta: "Conoce más",
    soon: false,
  },
  { title: "Próximamente", features: [], img: configuracionImg, link: "#", cta: "", soon: true },
  { title: "Próximamente", features: [], img: configuracionImg, link: "#", cta: "", soon: true },
];

/* ==== ESTILOS BASE SIN SEPARACIÓN ==== */
const BTN_BASE =
  "inline-flex items-center justify-center px-5 py-3 text-base font-medium focus:outline-none transition";
const BTN_PRIMARY = `
  ${BTN_BASE}
  rounded-md text-safepalette-blue bg-safepalette-gold
  hover:opacity-90 focus-visible:ring-4 focus-visible:ring-safepalette-gold/40
`.replace(/\s+/g, " ").trim();

/* 🔥 Un solo degradado que cubre toda la tarjeta */
const CARD = `
  group relative flex h-full flex-col rounded-2xl
  bg-gradient-to-b from-safepalette-surface via-safepalette-surface/80 to-safepalette-ink
  text-safepalette-white
  border-2 border-safepalette-gold
  shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300
  hover:-translate-y-0.5 hover:border-safepalette-white
  focus-within:border-safepalette-white
`.replace(/\s+/g, " ").trim();

const CARD_MEDIA = "px-6 pt-8 pb-6"; // ❌ sin fondo separado, usa el mismo degradado
const CARD_BODY = "flex flex-col gap-4 p-6";

/* ==== Carrusel autoplay ==== */
function FeatureCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const intervalMs = 3000;

  const clamp = (n) => (n + items.length) % items.length;
  const goTo = (i) => setIndex(clamp(i));
  const next = () => goTo(index + 1);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (hovering || reduceMotion) return;
    const id = setInterval(() => next(), intervalMs);
    return () => clearInterval(id);
  }, [index, hovering, reduceMotion]);

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
      aria-roledescription="carousel"
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
            <figure key={it.title} className="relative aspect-[16/9] w-full shrink-0">
              <img
                src={it.img}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                draggable="false"
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={
              "h-2.5 w-2.5 rounded-full transition " +
              (i === index ? "bg-safepalette-gold" : "bg-white/30 hover:bg-white/50")
            }
            aria-label={`Ir al slide ${i + 1}`}
            aria-current={i === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}

/* ==== Carrusel móvil ==== */
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
        >
          {items.map((item) => (
            <article
              key={item.title}
              className={`${CARD} overflow-hidden snap-start shrink-0 w-full`}
            >
              <div className={CARD_MEDIA + " aspect-[16/9]"}>
                <img
                  src={item.img}
                  alt=""
                  loading="lazy"
                  className="h-28 w-auto object-contain md:h-32 drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
                />
              </div>

              <div className={CARD_BODY + " grow"}>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                {item.carouselItems?.length ? <FeatureCarousel items={item.carouselItems} /> : null}

                {!item.soon && (
                  <div className="mt-6">
                    <Link to={item.link} className={BTN_PRIMARY}>
                      {item.cta}
                      <svg className="ml-2 h-4 w-4 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10" fill="none">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={
              "h-2.5 w-2.5 rounded-full transition " +
              (i === page ? "bg-safepalette-gold" : "bg-white/30 hover:bg-white/50")
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function Servicios() {
  return (
    <section id="servicios" className="relative px-4 py-16 md:py-24 bg-safepalette-ink">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center md:mb-16">
          <h2 className="text-4xl font-bold text-safepalette-white md:text-5xl">
            Nuestros <span className="text-safepalette-gold">Servicios</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-safepalette-white/80 md:text-xl">
            Soluciones especializadas para cada integrante de la comunidad
          </p>
          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-safepalette-gold" />
        </header>

        {/* Carrusel móvil */}
        <MobileServiciosCarousel items={serviciosData} />

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-1 gap-8 md:grid-cols-3">
          {serviciosData.map((item) => (
            <article key={item.title} className={CARD + " overflow-hidden"}>
              <div className={CARD_MEDIA + " aspect-[16/9]"}>
                <img
                  src={item.img}
                  alt=""
                  loading="lazy"
                  className="h-28 w-auto object-contain md:h-32 drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
                />
              </div>

              <div className={CARD_BODY + " grow"}>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                {item.carouselItems?.length ? <FeatureCarousel items={item.carouselItems} /> : null}

                {!item.soon && (
                  <div className="mt-6">
                    <Link to={item.link} className={BTN_PRIMARY}>
                      {item.cta}
                      <svg className="ml-2 h-4 w-4 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10" fill="none">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
