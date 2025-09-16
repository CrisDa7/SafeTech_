// src/pages/safeServicios.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Componentes
import Contacto from "@/components/Contacto";       // formulario de contacto (id="contacto")
import Achievements from "@/components/Achievements";

// Fondo
import fondoBus from "@/assets/bus2.gif";

export default function SafeServicios() {
  useEffect(() => {
    document.title = "Safe Escolar — Servicios";
  }, []);

  // Estilos botones
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
      {/* ===== HERO ===== */}
      <section className="relative min-h-[88svh] md:min-h-screen flex items-center justify-center text-center overflow-hidden">
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

        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <h1 className="text-white font-extrabold leading-tight tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Safe{" "}
            <span className="text-safepalette-gold drop-shadow-[0_6px_24px_rgba(250,204,21,0.25)]">
              Escolar
            </span>
          </h1>
          <p className="mt-5 text-slate-100/95 text-xl md:text-2xl lg:text-[1.7rem]">
            Plataforma integral para instituciones, familias y administración.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className={BTN_WHITE_TO_GOLD} aria-label="Volver al inicio">
              ← Volver al inicio
            </Link>
            <a href="#contacto" className={BTN_WHITE_TO_GOLD} aria-label="Ir a contacto">
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTACTO ===== */}
      <div className="relative z-10">
        <Contacto />
      </div>

      {/* ===== ACHIEVEMENTS ===== */}
      <div className="relative z-10">
        <Achievements />
      </div>
    </div>
  );
}
