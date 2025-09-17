// src/pages/safeServicios.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Contacto from "@/components/Contacto";
import Achievements from "@/components/Achievements";

import fondoBus from "@/assets/bus2.gif";
import busArrivalImg from "@/assets/admin.png";
import safetyImg from "@/assets/admin.png";
import transparencyImg from "@/assets/admin.png";

export default function SafeServicios() {
  useEffect(() => {
    document.title = "Safe Escolar — Servicios";
  }, []);

  const BTN_BASE =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition shadow-md focus:outline-none";
  const BTN_WHITE_TO_GOLD = `
    ${BTN_BASE}
    border-2 border-white text-white bg-transparent
    hover:bg-safepalette-gold hover:border-safepalette-gold hover:text-black
    focus-visible:ring-4 focus-visible:ring-safepalette-gold/40
    transition-colors duration-300
  `;

  return (
    <div className="relative bg-black">
      {/* HERO */}
      <section className="relative min-h-[88svh] md:min-h-screen flex items-center justify-center text-center overflow-hidden">
        <img className="absolute inset-0 h-full w-full object-cover" src={fondoBus} alt="Fondo Safe Escolar" />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/35" />
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <h1 className="text-white font-extrabold leading-tight tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Safe <span className="text-safepalette-gold drop-shadow-[0_6px_24px_rgba(250,204,21,0.25)]">Escolar</span>
          </h1>
          <p className="mt-5 text-slate-100/95 text-xl md:text-2xl lg:text-[1.7rem]">
            Plataforma integral para instituciones, familias y administración.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className={BTN_WHITE_TO_GOLD}>← Volver al inicio</Link>
            <a href="#contacto" className={BTN_WHITE_TO_GOLD}>Contáctanos</a>
          </div>
        </div>
      </section>

      {/* ¿QUÉ ES SAFE SCHOOL? */}
      <section className="relative z-10">
        <div
          className="absolute inset-0 h-[120%] -top-[10%] pointer-events-none"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 0%, rgba(250,204,21,0.07) 0%, rgba(250,204,21,0.02) 40%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-7">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                ¿Qué es <span className="text-safepalette-gold">SAFE SCHOOL</span>?
              </h2>

              <p className="mt-6 text-slate-200/90 text-lg leading-relaxed">
                <span className="font-semibold">SAFE SCHOOL</span> es una forma
                inteligente de garantizar la seguridad y la eficiencia del transporte
                escolar para cualquier Establecimiento Educativo, público o privado.
              </p>
              <p className="mt-4 text-slate-200/90 text-lg leading-relaxed">
                Integra seguimiento en tiempo real, comunicación transparente y flujos
                operativos optimizados para que cada recorrido sea más seguro y sin
                preocupaciones.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Seguimiento en tiempo real y notificaciones contextuales.",
                  "Comunicación clara entre institución, conductores y familias.",
                  "Optimización operativa para reducir tiempos y costos.",
                  "Escalable, seguro y listo para múltiples rutas/turnos.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safepalette-gold/15">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-safepalette-gold" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-slate-100/95">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-5">
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-40"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 50% 50%, rgba(250,204,21,0.18), transparent 30%, rgba(250,204,21,0.12) 60%, transparent 90%)",
                  }}
                />
                <img src={busArrivalImg} alt="Ilustración Safe School" className="relative w/full rounded-3xl object-cover" />
              </div>
            </div>
          </div>

          {/* separador amarillo */}
          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-safepalette-gold/60 to-transparent" />
        </div>
      </section>

      {/* ¿POR QUÉ ES UNA DECISIÓN ACERTADA? */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-white">
            ¿Por qué <span className="text-safepalette-gold">SAFE SCHOOL</span> es una decisión acertada?
          </h3>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
            {[
              { title: "Confiable", desc: "Estimaciones de llegada precisas para reducir esperas y ansiedades.", img: busArrivalImg },
              { title: "Seguridad", desc: "Alertas y protocolos integrados para estudiantes en cada etapa.", img: safetyImg },
              { title: "Transparencia", desc: "Información clara para familias y directivos en un mismo lugar.", img: transparencyImg },
            ].map((item, idx) => (
              <div
                key={item.title}
                className={[
                  "flex flex-col items-start md:items-center gap-4 px-0 md:px-6 py-6",
                  idx !== 2 ? "md:border-r md:border-white/10" : "",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-safepalette-gold/15">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-safepalette-gold" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3l2.5 6H21l-5 3.6L17.5 21 12 17.7 6.5 21 8 12.6 3 9h6.5L12 3z" />
                    </svg>
                  </span>
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                </div>
                <p className="text-slate-300/90 md:text-center md:max-w-[28ch]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO (sin marco externo ni panel gris) */}
      <section id="contacto" className="relative z-10 mt-10 md:mt-12">
        <div className="mx-auto max-w-4xl px-4 contacto-unframed">
          <Contacto />
        </div>
      </section>

      {/* RESEÑAS / ESTADÍSTICAS (quitar solo el rectángulo de fondo externo) */}
      <section className="relative z-10 mt-10 md:mt-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 h-px bg-gradient-to-r from-transparent via-safepalette-gold/60 to-transparent" />
          <div className="achievements-unframed">
            <Achievements />
          </div>
        </div>
      </section>

      {/* Overrides mínimos (sin tocar estilos internos de las tarjetas) */}
      <style>{`
        /* Contacto embebido sin su sección propia */
        .contacto-unframed > section#contacto {
          background: transparent !important;
          padding: 0 !important;
        }

        /* === Achievements: elimina SOLO el wrapper gris externo ===
           Muchos componentes envuelven las "cards" en un <div/section> con fondo/borde/sombra.
           Aquí quitamos ese contenedor inmediato, pero NO tocamos las tarjetas internas. */
        .achievements-unframed > section:first-child,
        .achievements-unframed > div:first-child {
          background: transparent !important;
          background-image: none !important;
          box-shadow: none !important;
          border: none !important;
        }
        .achievements-unframed > section:first-child::before,
        .achievements-unframed > section:first-child::after,
        .achievements-unframed > div:first-child::before,
        .achievements-unframed > div:first-child::after {
          background: transparent !important;
          background-image: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
}
