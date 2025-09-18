// src/pages/safeServicios.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Contacto from "@/components/Contacto";
import Achievements from "@/components/Achievements";

import fondoBus from "@/assets/bus2.gif";
import logoAndroide from "@/assets/logoAndroide.png";
import confiabilidadImg from "@/assets/confiabilidad.png";
import seguridadImg from "@/assets/seguridad.png";
import eficienciaImg from "@/assets/eficiencia.png";

// NUEVAS IMÁGENES
import celImg from "@/assets/cel.png";
import notificacionesImg from "@/assets/notificaciones.png";

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
    <div className="relative bg-black isolate">
      {/* HERO */}
      <section className="relative min-h-[88svh] md:min-h-screen flex items-center justify-center text-center overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={fondoBus}
          alt="Fondo Safe Escolar"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/35" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 flex flex-col items-center">
          <img
            src={logoAndroide}
            alt="Logo Androide"
            className="mx-auto h-[22rem] sm:h-[26rem] md:h-[30rem] lg:h-[36rem] xl:h-[40rem] w-auto max-w-[92vw] drop-shadow-[0_10px_40px_rgba(250,204,21,0.35)]"
          />
          <div className="mt-6 md:mt-4 lg:mt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className={BTN_WHITE_TO_GOLD}>
              ← Volver al inicio
            </Link>
            <a href="#contacto" className={BTN_WHITE_TO_GOLD}>
              Contáctanos
            </a>
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
        <div className="relative mx-auto max-w-6xl px-4 py-18 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                ¿Qué es <span className="text-safepalette-gold">SAFE SCHOOL</span>?
              </h2>
              <div className="mt-6 space-y-4 text-slate-200/90 text-lg leading-relaxed">
                <p><span className="font-semibold">SAFE SCHOOL</span> es más que un
                  sistema de transporte escolar; es una forma más inteligente de
                  garantizar la seguridad en el traslado.</p>
                <p><span className="font-semibold">SAFE SCHOOL</span> está diseñado
                  para cualquier institución educativa, pública o privada.</p>
                <p><span className="font-semibold">SAFE SCHOOL</span> agiliza todo
                  el viaje escolar con tecnología avanzada y funciones fáciles de
                  usar.</p>
                <p>Al implementarlo se mejora la seguridad, eficiencia y satisfacción de las familias.</p>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "Seguimiento en tiempo real y notificaciones contextuales.",
                  "Comunicación clara entre institución, conductores y familias.",
                  "Optimización operativa para reducir tiempos y costos.",
                  "Escalable, seguro y listo para múltiples rutas/turnos.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safepalette-gold/15">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-safepalette-gold" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                    </span>
                    <span className="text-slate-100/95">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-40"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 50% 50%, rgba(250,204,21,0.18), transparent 30%, rgba(250,204,21,0.12) 60%, transparent 90%)",
                  }}
                />
                <img
                  src={logoAndroide}
                  alt="Logo SAFE SCHOOL"
                  className="relative w-[92%] max-w-[560px] h-auto object-contain md:scale-105 lg:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* RAYITA AMARILLA */}
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-safepalette-gold/60 to-transparent" />
        </div>
      </section>

      {/* NUEVA 1 — APLICACIÓN DEDICADA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-white">
            Aplicación dedicada para instituciones educativas y padres
          </h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Acceso a videos",
                desc:
                  "Visualiza en vivo el interior del bus escolar (puerta, salón y conductor) de forma segura.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 7h13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3z" />
                    <path d="M22 8l-4 3v2l4 3z" />
                  </svg>
                ),
              },
              {
                title: "Notificaciones en tiempo real",
                desc:
                  "Alertas instantáneas sobre ETA, inicio/fin de recorrido, retrasos y novedades.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                ),
              },
              {
                title: "Conoce la ruta del estudiante",
                desc:
                  "Sigue la ubicación exacta del bus y las paradas del estudiante desde una sola app.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10"
              >
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-safepalette-gold/15 text-safepalette-gold">
                  {item.icon}
                </span>
                <div>
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                  <p className="text-slate-300/90">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Imagen del celular con halo dorado */}
          <div className="mt-10 md:mt-14 flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-60"
                style={{ background: "radial-gradient(40% 40% at 50% 60%, rgba(250,204,21,0.35), transparent 70%)" }}
                aria-hidden="true"
              />
              <img
                src={celImg}
                alt="Aplicación SAFE SCHOOL en el celular"
                className="relative w-full max-w-[760px] rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Rayita amarilla */}
          <div className="mt-12 md:mt-14 h-px bg-gradient-to-r from-transparent via-safepalette-gold/60 to-transparent" />
        </div>
      </section>

      {/* NUEVA 2 — NOTIFICACIONES (como la tercera imagen) */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-white">
            Mantente actualizado con notificaciones en tiempo real
          </h3>

          <div className="mt-8 flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-60"
                style={{ background: "radial-gradient(40% 40% at 50% 60%, rgba(250,204,21,0.35), transparent 70%)" }}
                aria-hidden="true"
              />
              <img
                src={notificacionesImg}
                alt="Pantalla de notificaciones en vivo de SAFE SCHOOL"
                className="relative w-full max-w-[980px] rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Rayita amarilla */}
          <div className="mt-12 md:mt-14 h-px bg-gradient-to-r from-transparent via-safepalette-gold/60 to-transparent" />
        </div>
      </section>

      {/* *** SECCIÓN ORIGINAL: ¿POR QUÉ ES UNA DECISIÓN ACERTADA? (SE MANTIENE) *** */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-white">
            ¿Por qué <span className="text-safepalette-gold">SAFE SCHOOL</span> es una decisión acertada?
          </h3>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
            {[
              { title: "Confiabilidad", desc: "Estimaciones de llegada precisas para reducir esperas y ansiedades.", img: confiabilidadImg, alt: "Confiabilidad" },
              { title: "Seguridad", desc: "Alertas y protocolos integrados para estudiantes en cada etapa.", img: seguridadImg, alt: "Seguridad" },
              { title: "Eficiencia", desc: "Información clara para familias y directivos en un mismo lugar.", img: eficienciaImg, alt: "Eficiencia" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-4 px-0 md:px-6 py-6 md:border-r last:md:border-r-0 md:border-white/10">
                <img src={item.img} alt={item.alt} className="w-28 h-28 md:w-32 md:h-32 object-contain rounded-xl" loading="lazy" />
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <p className="text-slate-300/90 text-center md:max-w-[28ch]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-safepalette-gold/60 to-transparent" />
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="relative z-10 mt-10 md:mt-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="achievements-unframed">
            <Achievements />
          </div>
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-safepalette-gold/60 to-transparent" />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" aria-label="Contacto" className="relative z-10 mt-10 md:mt-12">
        <div className="mx-auto max-w-4xl px-4 contacto-unframed">
          <Contacto />
        </div>
      </section>

      {/* ESPACIADOR DE 3CM */}
      <div className="w-full bg-black h-[3cm]" role="presentation" />

      <style>{`
        .contacto-unframed > section#contacto {
          background: transparent !important;
          padding: 0 !important;
        }
        .achievements-unframed > section:first-child,
        .achievements-unframed > div:first-child {
          background: transparent !important;
          background-image: none !important;
          box-shadow: none !important;
          border: none !important;
        }
      `}</style>
    </div>
  );
}
