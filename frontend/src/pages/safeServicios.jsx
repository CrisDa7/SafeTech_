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

// Imágenes nuevas
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
        <img className="absolute inset-0 h-full w-full object-cover" src={fondoBus} alt="Fondo Safe Escolar" />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/35" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 flex flex-col items-center">
          <img
            src={logoAndroide}
            alt="Logo Androide"
            className="mx-auto h-[22rem] sm:h-[26rem] md:h-[30rem] lg:h-[36rem] xl:h-[40rem] w-auto max-w-[92vw] drop-shadow-[0_10px_40px_rgba(250,204,21,0.35)]"
          />
          <div className="mt-6 md:mt-4 lg:mt-2 flex flex-col sm:flex-row gap-4 justify-center">
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
        <div className="relative mx-auto max-w-6xl px-4 py-18 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                ¿Qué es <span className="text-safepalette-gold">SAFE SCHOOL</span>?
              </h2>
              <div className="mt-6 space-y-4 text-slate-200/90 text-lg leading-relaxed">
                <p><span className="font-semibold">SAFE SCHOOL</span> es más que un sistema de transporte escolar; es una forma más inteligente de garantizar la seguridad en el traslado.</p>
                <p>Funciona para cualquier institución educativa, pública o privada.</p>
                <p>Agiliza todo el viaje con tecnología avanzada y funciones fáciles de usar.</p>
                <p>Mejora la seguridad, la eficiencia y la satisfacción de las familias.</p>
              </div>

              {/* LISTA con vistos animados (staggered y más notorios) */}
              <ul className="mt-8 space-y-4">
                {[
                  "Seguimiento en tiempo real y notificaciones contextuales.",
                  "Comunicación clara entre institución, conductores y familias.",
                  "Optimización operativa para reducir tiempos y costos.",
                  "Escalable, seguro y listo para múltiples rutas/turnos.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ "--i": i }}>
                    <span className="relative mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-safepalette-gold/20">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4.5 w-4.5 text-safepalette-gold check-badge"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ animationDelay: `calc(var(--i) * 0.18s)` }}
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {/* Doble halo para que se note más */}
                      <span
                        className="check-ping"
                        aria-hidden="true"
                        style={{ animationDelay: `calc(var(--i) * 0.18s + 0.2s)` }}
                      />
                      <span
                        className="check-ping check-ping--late"
                        aria-hidden="true"
                        style={{ animationDelay: `calc(var(--i) * 0.18s + 0.8s)` }}
                      />
                    </span>

                    <span className="text-slate-100/95">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-5">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-40"
                  style={{ background: "conic-gradient(from 180deg at 50% 50%, rgba(250,204,21,0.18), transparent 30%, rgba(250,204,21,0.12) 60%, transparent 90%)" }}
                />
                <img src={logoAndroide} alt="Logo SAFE SCHOOL" className="relative w-[92%] max-w-[560px] h-auto object-contain md:scale-105 lg:scale-110" loading="lazy" />
              </div>
            </div>
          </div>

          {/* RAYITA AMARILLA */}
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-safepalette-gold/60 to-transparent" />
        </div>
      </section>

      {/* NUEVA 1 — APLICACIÓN DEDICADA (EN FILITA) */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-white">
            Aplicación dedicada para instituciones educativas y padres
          </h3>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Acceso a videos",
                desc: "Visualiza en vivo el interior del bus escolar (puerta, salón y conductor) de forma segura.",
                icon: (
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-safepalette-gold/15 text-safepalette-gold">
                    {/* PULSE MÁS NOTORIO */}
                    <svg viewBox="0 0 24 24" className="h-10 w-10 icon-throb-strong" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 7h13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3z" />
                      <path d="M22 8l-4 3v2l4 3z" />
                    </svg>
                  </span>
                ),
              },
              {
                title: "Notificaciones en tiempo real",
                desc: "Recibe alertas sobre ETA, inicio/fin de recorrido, retrasos y novedades relevantes.",
                icon: (
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-safepalette-gold/15 text-safepalette-gold">
                    {/* WIGGLE MÁS AMPLIO */}
                    <svg viewBox="0 0 24 24" className="h-10 w-10 icon-wiggle-strong" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </span>
                ),
              },
              {
                title: "Conoce la ruta del estudiante",
                desc: "Sigue la ubicación exacta del bus y las paradas del estudiante desde una sola app.",
                icon: (
                  <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-xl bg-safepalette-gold/15 text-safepalette-gold">
                    {/* GPS + DOBLE PING + DIBUJO DE RUTA */}
                    <svg viewBox="0 0 24 24" className="h-10 w-10 icon-gps-strong" fill="none" stroke="currentColor" strokeWidth="2">
                      {/* Ruta en S animada */}
                      <path d="M5 18c3-4 6-2 9-6 2-3 3-4 5-5" className="opacity-60 path-s" />
                      {/* Pin */}
                      <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                      {/* Punto animado más largo */}
                      <circle cx="6" cy="17" r="2" className="fill-current opacity-95 icon-gps-dot-strong" />
                    </svg>
                    {/* Doble ping más visible */}
                    <span className="absolute inset-0 icon-ping-strong rounded-xl" aria-hidden="true" />
                    <span className="absolute inset-0 icon-ping-strong icon-ping-strong--late rounded-xl" aria-hidden="true" />
                  </span>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-4 px-0 md:px-6 py-6 md:border-r last:md:border-r-0 md:border-white/10 text-center"
              >
                {item.icon}
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <p className="text-slate-300/90 md:max-w-[30ch]">{item.desc}</p>
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

      {/* NUEVA 2 — NOTIFICACIONES (imagen completa) */}
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

      {/* SECCIÓN ORIGINAL — ¿POR QUÉ ES UNA DECISIÓN ACERTADA? */}
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
          <div className="achievements-unframed"><Achievements /></div>
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-safepalette-gold/60 to-transparent" />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" aria-label="Contacto" className="relative z-10 mt-10 md:mt-12">
        <div className="mx-auto max-w-4xl px-4 contacto-unframed"><Contacto /></div>
      </section>

      {/* ESPACIADOR DE 3CM */}
      <div className="w-full bg-black h-[3cm]" role="presentation" />

      <style>{`
        /* ========= Ajustes previos ========= */
        .contacto-unframed > section#contacto { background: transparent !important; padding: 0 !important; }
        .achievements-unframed > section:first-child,
        .achievements-unframed > div:first-child {
          background: transparent !important; background-image: none !important; box-shadow: none !important; border: none !important;
        }

        /* ========= Animaciones de iconos (más notorias) ========= */

        /* 1) PULSE FUERTE para "Acceso a videos" */
        @keyframes throbStrong {
          0%   { transform: scale(1); filter: drop-shadow(0 0 0 rgba(250,204,21,0)); }
          35%  { transform: scale(1.28); filter: drop-shadow(0 0 18px rgba(250,204,21,0.7)); }
          55%  { transform: scale(1.16); filter: drop-shadow(0 0 10px rgba(250,204,21,0.55)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(250,204,21,0)); }
        }
        .icon-throb-strong { animation: throbStrong 1.25s ease-in-out infinite; transform-origin: center; }

        /* 2) WIGGLE FUERTE para "Notificaciones" */
        @keyframes wiggleStrong {
          0%, 100% { transform: translateX(0) rotate(0deg); filter: drop-shadow(0 0 0 rgba(250,204,21,0)); }
          12% { transform: translateX(-5px) rotate(-10deg); filter: drop-shadow(0 0 12px rgba(250,204,21,0.5)); }
          24% { transform: translateX(5px) rotate(10deg);  filter: drop-shadow(0 0 12px rgba(250,204,21,0.5)); }
          36% { transform: translateX(-4px) rotate(-8deg); }
          48% { transform: translateX(4px) rotate(8deg); }
          60% { transform: translateX(-3px) rotate(-6deg); }
          72% { transform: translateX(3px) rotate(6deg); }
        }
        .icon-wiggle-strong { animation: wiggleStrong 1.1s ease-in-out infinite; transform-origin: 50% 10%; }

        /* 3) GPS FUERTE: punto recorre más y línea se dibuja */
        @keyframes gpsDotStrong {
          0%   { transform: translate(0px, 0px) scale(1);   opacity: 0.95; }
          20%  { transform: translate(4px, -4px) scale(1.08); }
          40%  { transform: translate(9px, -8px) scale(1.02); }
          60%  { transform: translate(5px, 0px)  scale(1.12); }
          80%  { transform: translate(10px, 6px) scale(1.04); }
          100% { transform: translate(14px, -2px) scale(1.16); opacity: 1; }
        }
        .icon-gps-strong { overflow: visible; }
        .icon-gps-dot-strong { transform-origin: center; animation: gpsDotStrong 2.2s ease-in-out infinite; }

        /* Trazado en S que se dibuja */
        .path-s {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: drawS 1.6s ease-out forwards;
        }
        @keyframes drawS {
          to { stroke-dashoffset: 0; }
        }

        /* Pings más visibles (doble) */
        @keyframes pingStrong {
          0%   { transform: scale(0.7); opacity: .55; }
          60%  { transform: scale(1.45); opacity: 0; }
          100% { transform: scale(1.45); opacity: 0; }
        }
        .icon-ping-strong {
          background: radial-gradient(circle, rgba(250,204,21,0.35) 0%, rgba(250,204,21,0.22) 45%, transparent 70%);
          animation: pingStrong 1.8s ease-out infinite;
        }
        .icon-ping-strong--late { animation-delay: .6s; }

        /* ======= Vistos amarillos (más notorios) ======= */
        @keyframes checkPopBig {
          0%   { transform: scale(0.4) rotate(-18deg); opacity: 0; filter: drop-shadow(0 0 0 rgba(250,204,21,0)); }
          55%  { transform: scale(1.25) rotate(2deg);  opacity: 1; filter: drop-shadow(0 0 20px rgba(250,204,21,0.75)); }
          100% { transform: scale(1.05) rotate(0deg);  opacity: 1; filter: drop-shadow(0 0 6px rgba(250,204,21,0.4)); }
        }
        @keyframes checkGlowPulse {
          0%, 100% { filter: drop-shadow(0 0 0 rgba(250,204,21,0)); transform: translateZ(0); }
          50%      { filter: drop-shadow(0 0 16px rgba(250,204,21,0.6)); transform: translateZ(0) scale(1.06); }
        }
        .check-badge {
          transform-origin: center;
          /* pop inicial escalonado + brillo periódico que se nota */
          animation:
            checkPopBig 720ms cubic-bezier(.2,.7,.2,1) both,
            checkGlowPulse 2.8s 1.2s ease-in-out infinite;
        }

        @keyframes checkPingStrong {
          0%   { transform: scale(0.65); opacity: .55; }
          60%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        .check-ping {
          position: absolute;
          inset: -10px;
          border-radius: 9999px;
          pointer-events: none;
          background: radial-gradient(circle, rgba(250,204,21,0.35) 0%, rgba(250,204,21,0.18) 45%, transparent 70%);
          animation: checkPingStrong 1.6s ease-out infinite both;
        }
        .check-ping--late {
          animation-delay: .45s !important;
          opacity: .85;
        }

        /* Accesibilidad */
        @media (prefers-reduced-motion: reduce) {
          .icon-throb-strong,
          .icon-wiggle-strong,
          .icon-gps-dot-strong,
          .icon-ping-strong,
          .icon-ping-strong--late,
          .path-s,
          .check-badge,
          .check-ping,
          .check-ping--late {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
