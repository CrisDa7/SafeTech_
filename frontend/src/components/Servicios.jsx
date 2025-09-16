// src/components/Servicios.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser"; // 👈 para el formulario
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
    link: "#contacto", // 👈 MISMA PÁGINA: ancla al formulario
    cta: "Conoce más",
    soon: false,
  },
  { title: "Próximamente", features: [], img: configuracionImg, link: "#", cta: "", soon: true },
  { title: "Próximamente", features: [], img: configuracionImg, link: "#", cta: "", soon: true },
];

// ---- Estilos base ----
const BTN_BASE =
  "inline-flex items-center justify-center px-5 py-3 text-base font-medium focus:outline-none transition";
const BTN_PRIMARY =
  `${BTN_BASE} rounded-md text-black bg-safepalette-gold hover:opacity-90 focus-visible:ring-4 focus-visible:ring-safepalette-gold/40`;
const BTN_DISABLED =
  `${BTN_BASE} rounded-md bg-neutral-800 text-neutral-500 cursor-not-allowed`;

const CARD = `
  group relative flex h-full flex-col rounded-2xl
  bg-gradient-to-b from-black via-black/95 to-black
  text-safepalette-white
  border-2 border-safepalette-gold
  shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300
  hover:-translate-y-0.5 hover:border-white
  focus-within:border-white
`.replace(/\s+/g, " ").trim();

const CARD_MEDIA = `
  flex items-center justify-center bg-gradient-to-b
  from-black via-black/95 to-black px-6 pt-8 pb-6
`.replace(/\s+/g, " ").trim();

const CARD_BODY = "flex flex-col gap-4 p-6";

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
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm p-3 text-center text-sm">
                {it.title}
              </figcaption>
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
              (i === index ? "bg-safepalette-gold" : "bg-white/20 hover:bg-white/30")
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
              tabIndex={0}
            >
              <div className={CARD_MEDIA + " aspect-[16/9]"}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-28 w-auto object-contain md:h-32 drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
                />
              </div>

              <div className={CARD_BODY + " grow"}>
                <h3 id={`card-${item.title}-title-mobile`} className="text-xl font-semibold text-white">
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
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md border border-safepalette-gold/30 bg-black/40 text-safepalette-gold">
                            {CHECK_ICON}
                          </span>
                          <span className="text-neutral-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )
                )}

                <div className="mt-6">
                  {item.soon ? null : (
                    <Link
                      to={item.link}
                      onClick={(e) => {
                        if (item.link?.startsWith("#")) {
                          e.preventDefault();
                          const id = item.link.slice(1);
                          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                          window.history.replaceState(null, "", item.link);
                        }
                      }}
                      className={BTN_PRIMARY}
                      aria-label={`Acceder a ${item.title}`}
                    >
                      {item.cta}
                      <svg className="ml-2 h-4 w-4 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10" fill="none">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </Link>
                  )}
                </div>
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
            className={"h-2.5 w-2.5 rounded-full transition " + (i === page ? "bg-safepalette-gold" : "bg-white/20 hover:bg-white/30")}
          />
        ))}
      </div>

      <style>{`
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Sección de CONTACTO en la misma página (EmailJS)
   Cambios pedidos:
   - Título: "Contáctanos"
   - "Nombre de la escuela o establecimiento" (OPCIONAL)
   - "Ciudad" OBLIGATORIA (mantenemos name="state" para {{state}} en tu template)
   - "Rol o cargo" OPCIONAL
   - Se QUITA "Título del puesto..."
   - Teléfono, Nombre, Apellido, Email, Mensaje OBLIGATORIOS
   ──────────────────────────────────────────────────────────── */
function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Enviando…" });
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: "success", msg: "¡Gracias! Tu mensaje fue enviado." });
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", msg: "No se pudo enviar. Intenta nuevamente." });
    }
  };

  return (
    <section id="contacto" className="bg-safepalette-ink px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-safepalette-white">
            {/* Título cambiado */}
            Contáctanos
          </h2>
          <p className="mt-3 text-safepalette-white/80">
            Déjanos tus datos y te escribimos de inmediato.
          </p>
        </header>

        <div className="rounded-2xl bg-safepalette-surface border border-safepalette-edge shadow-goldglow p-6 md:p-8">
          <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
            <input type="hidden" name="title" value="Solicitud de contacto" />

            {/* Fila 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-safepalette-white/80">
                  {/* Texto cambiado + ahora OPCIONAL (sin required) */}
                  Nombre de la escuela o establecimiento
                </label>
                <input
                  name="school"
                  placeholder="Ej.: Unidad Educativa..."
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
              <div>
                <label className="text-sm text-safepalette-white/80">Ciudad *</label>
                <input
                  // mantenemos name="state" para que siga llegando a {{state}} en tu template
                  name="state"
                  required
                  placeholder="Ej.: Guayaquil"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
            </div>

            {/* Fila 2 */}
            <p className="pt-2 text-safepalette-white font-medium">Tus datos</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-safepalette-white/80">Rol o cargo (opcional)</label>
                <select
                  name="role"
                  defaultValue=""
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                >
                  <option value="" disabled>- Selecciona si aplica -</option>
                  <option>Docente</option>
                  <option>Directivo</option>
                  <option>Representante</option>
                  <option>Administrativo</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-safepalette-white/80">Nombre *</label>
                <input
                  name="firstName"
                  required
                  placeholder="Nombre"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
              <div>
                <label className="text-sm text-safepalette-white/80">Apellido *</label>
                <input
                  name="lastName"
                  required
                  placeholder="Apellido"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
            </div>

            {/* Fila 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-safepalette-white/80">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="correo@dominio.com"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
              <div>
                <label className="text-sm text-safepalette-white/80">Número de teléfono *</label>
                <input
                  name="phone"
                  required
                  placeholder="09xxxxxxxx"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
            </div>

            {/* (Se QUITA el campo de Título del puesto) */}

            {/* Fila 4 */}
            <div>
              <label className="text-sm text-safepalette-white/80">¿Cómo podemos ayudarle? *</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Cuéntenos brevemente su necesidad…"
                className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-safepalette-gold text-black px-6 py-3 font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-safepalette-gold/40 disabled:cursor-not-allowed"
              >
                {status.type === "loading" ? "Enviando…" : "Enviar"}
              </button>
            </div>

            {status.type !== "idle" && (
              <p
                className={
                  "text-sm " +
                  (status.type === "success"
                    ? "text-green-400"
                    : status.type === "error"
                    ? "text-red-400"
                    : "text-safepalette-white/60")
                }
              >
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Servicios() {
  return (
    <>
      {/* SECCIÓN SERVICIOS */}
      <section
        id="servicios"
        aria-labelledby="servicios-title"
        className="relative px-4 py-16 md:py-24 bg-safepalette-ink"
      >
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 text-center md:mb-16">
            <h2 id="servicios-title" className="text-4xl font-bold text-safepalette-white md:text-5xl">
              Nuestros <span className="text-safepalette-gold">Servicios</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-safepalette-white/80 md:text-xl">
              Soluciones especializadas para cada integrante de la comunidad
            </p>
            <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-safepalette-gold" />
          </header>

          {/* Móvil */}
          <MobileServiciosCarousel items={serviciosData} />

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-1 gap-8 md:grid-cols-3">
            {serviciosData.map((item) => (
              <article key={item.title} className={CARD + " overflow-hidden"} tabIndex={0}>
                <div className={CARD_MEDIA + " aspect-[16/9]"}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-28 w-auto object-contain md:h-32 drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
                  />
                </div>

                <div className={CARD_BODY + " grow"}>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>

                  {Array.isArray(item.carouselItems) && item.carouselItems.length > 0 ? (
                    <FeatureCarousel items={item.carouselItems} />
                  ) : (
                    Array.isArray(item.features) &&
                    item.features.length > 0 && (
                      <ul className="mt-2 space-y-2.5">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md border border-safepalette-gold/30 bg-black/40 text-safepalette-gold">
                              {CHECK_ICON}
                            </span>
                            <span className="text-neutral-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  )}

                  <div className="mt-6">
                    {item.soon ? null : (
                      <Link
                        to={item.link}
                        onClick={(e) => {
                          if (item.link?.startsWith("#")) {
                            e.preventDefault();
                            const id = item.link.slice(1);
                            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                            window.history.replaceState(null, "", item.link);
                          }
                        }}
                        className={BTN_PRIMARY}
                        aria-label={`Acceder a ${item.title}`}
                      >
                        {item.cta}
                        <svg className="ml-2 h-4 w-4 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10" fill="none">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN FORMULARIO (misma página) */}
      <ContactSection />
    </>
  );
}
