// src/pages/safeServicios.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Fondo (gif / video / imagen)
import fondoBus from "@/assets/bus2.gif";

// Imágenes de cada módulo (usa las que ya tienes)
import adminCardImg from "@/assets/admin.png";
import schoolCardImg from "@/assets/school.png";
import padresCardImg from "@/assets/padres.png";

export default function SafeServicios() {
  useEffect(() => {
    document.title = "Safe Escolar — Servicios";
  }, []);

  const blocks = [
    {
      id: "safe-school",
      title: "Safe School",
      desc:
        "Módulo para la institución: control académico, asistencia y reportes. Pensado para directivos y docentes. Permite consolidar información, optimizar tareas y mejorar la toma de decisiones.",
      img: schoolCardImg,
    },
    {
      id: "safe-padres",
      title: "Safe Padres",
      desc:
        "Portal para representantes con seguimiento claro de calificaciones y asistencia, notificaciones en tiempo real y comunicación sencilla con la institución.",
      img: padresCardImg,
    },
    {
      id: "safe-conductor",
      title: "Safe Conductor",
      desc:
        "Herramientas simples y claras para conductores de transporte escolar: itinerarios y paradas al día, alertas de ruta y mantenimiento, y comunicación directa con coordinación para trayectos más seguros.",
      img: adminCardImg, // si tienes otro ícono para conductor, cámbialo aquí
    },
  ];

  // Botones coherentes con tu hero principal
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
      {/* Difuminado global */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/80 to-black"
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[88svh] md:min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Fondo */}
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={fondoBus}
          alt="Fondo Safe Escolar"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/35"
        />

        {/* Contenido */}
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <h1 className="text-white font-extrabold leading-tight tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Safe <span className="text-safepalette-gold drop-shadow-[0_6px_24px_rgba(250,204,21,0.25)]">Escolar</span>
          </h1>
          <p className="mt-5 text-slate-100/95 text-xl md:text-2xl lg:text-[1.7rem]">
            Plataforma integral para instituciones, familias y administración.
          </p>

          {/* Botones de navegación (se mantienen) */}
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className={BTN_WHITE_TO_GOLD} aria-label="Volver al inicio">
              ← Volver al inicio
            </Link>
            <a href="#modulos" className={BTN_WHITE_TO_GOLD} aria-label="Ver módulos de Safe Escolar">
              Ver módulos
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN DE MÓDULOS (intercalados izq/der) ===== */}
      <section
        id="modulos"
        className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20"
        aria-labelledby="modulos-heading"
      >
        <header className="mb-12 text-center">
          <h2 id="modulos-heading" className="text-3xl md:text-4xl font-bold text-white">
            Módulos incluidos
          </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Cada módulo está diseñado para un rol específico, y todos trabajan de forma integrada.
          </p>
          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-safepalette-gold" />
        </header>

        <div className="flex flex-col gap-20">
          {blocks.map((b, i) => {
            const isEven = i % 2 === 0; // 0,2,... pares
            return (
              <article
                key={b.id}
                id={b.id}
                className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10"
              >
                {/* Texto con barra lateral */}
                <div
                  className={`
                    order-1 ${isEven ? "md:order-1" : "md:order-2"}
                    relative pl-6 border-l-4 border-safepalette-gold/70
                  `}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[9px] top-2 h-3.5 w-3.5 rounded-full bg-safepalette-gold shadow-[0_0_0_4px_rgba(250,204,21,0.15)]"
                  />
                  <h3 className="text-2xl md:text-[1.7rem] font-semibold text-white">{b.title}</h3>
                  <p className="mt-3 text-slate-300 leading-relaxed">{b.desc}</p>
                </div>

                {/* Imagen (intercalada) */}
                <div
                  className={`
                    order-2 ${isEven ? "md:order-2" : "md:order-1"}
                    flex justify-center
                  `}
                >
                  <img
                    src={b.img}
                    alt={b.title}
                    className="w-full max-w-[450px] rounded-xl shadow-[0_10px_40px_rgba(250,204,21,0.15)] object-contain hover:scale-[1.02] transition-transform"
                    loading="lazy"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
