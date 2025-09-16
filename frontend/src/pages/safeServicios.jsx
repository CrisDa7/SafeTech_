// src/pages/safeServicios.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Importo componentes internos
import Contacto from "@/components/Contacto";       // Formulario de contacto (usa template principal)
import Achievements from "@/components/Achievements"; // Sección de estadísticas / logros

// Fondo para el hero
import fondoBus from "@/assets/bus2.gif";

// Imágenes para la sección "¿Por qué es una decisión acertada?"
import busArrivalImg from "@/assets/admin.png";
import safetyImg from "@/assets/admin.png";
import transparencyImg from "@/assets/admin.png";

export default function SafeServicios() {
  useEffect(() => {
    // Cambia el título de la pestaña cuando se carga la página
    document.title = "Safe Escolar — Servicios";
  }, []);

  // Clases base para botones (tailwind)
  const BTN_BASE =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition shadow-md focus:outline-none";

  // Variación de botón: borde blanco → hover dorado
  const BTN_WHITE_TO_GOLD = `
    ${BTN_BASE}
    border-2 border-white text-white bg-transparent
    hover:bg-safepalette-gold hover:border-safepalette-gold hover:text-black
    focus-visible:ring-4 focus-visible:ring-safepalette-gold/40
    transition-colors duration-300
  `;

  return (
    <div className="relative bg-black">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[88svh] md:min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Fondo con imagen animada */}
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={fondoBus}
          alt="Fondo Safe Escolar"
          aria-hidden="true"
        />
        {/* Capa oscura para contraste */}
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        {/* Degradado sutil superior e inferior */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/35"
        />
        {/* Contenido principal del hero */}
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

          {/* Botones de navegación */}
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

      {/* ================= ¿QUÉ ES SAFE SCHOOL? ================= */}
      <section className="relative z-10 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl rounded-2xl bg-safepalette-surface border border-safepalette-edge shadow-goldglow p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-safepalette-gold">
            ¿Qué es Safe School?
          </h2>
          {/* Párrafos descriptivos */}
          <div className="mt-4 space-y-4 text-safepalette-white/90 leading-relaxed">
            <p>
              <span className="font-semibold">SAFE SCHOOL</span> es más que un sistema de
              transporte escolar: es una forma más inteligente de garantizar la seguridad
              en el transporte escolar.
            </p>
            <p>
              <span className="font-semibold">SAFE SCHOOL</span> está diseñado para
              cualquier Establecimiento Educativo, sea privado o público.
            </p>
            <p>
              <span className="font-semibold">SAFE SCHOOL</span> agiliza todo el viaje
              escolar con tecnología avanzada y funciones fáciles de usar. Desde el
              seguimiento en tiempo real hasta la comunicación transparente, SAFE SCHOOL
              hace que cada recorrido escolar dentro del territorio nacional sea más
              seguro y sin preocupaciones para los padres y el Establecimiento Educativo.
            </p>
            <p>
              Al implementar <span className="font-semibold">SAFE SCHOOL</span>, los
              Establecimientos Educativos pueden mejorar significativamente la seguridad,
              optimizar la eficiencia operativa, reducir costos y aumentar la satisfacción
              de los padres.
            </p>
          </div>
        </div>
      </section>

      {/* ================= POR QUÉ ES UNA DECISIÓN ACERTADA ================= */}
      <section className="relative z-10 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl rounded-2xl bg-safepalette-surface border border-safepalette-edge shadow-goldglow p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-safepalette-gold text-center">
            ¿Por qué SAFE SCHOOL es una decisión acertada?
          </h2>
          {/* Grid de beneficios con imágenes */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <img src={busArrivalImg} alt="Estimación precisa de llegada" className="rounded-xl shadow-md" />
              <p className="mt-3 font-semibold text-safepalette-gold text-lg">
                Estimación precisa de llegada del bus
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={safetyImg} alt="Mayor seguridad estudiantil" className="rounded-xl shadow-md" />
              <p className="mt-3 font-semibold text-safepalette-gold text-lg">
                Mayor seguridad para los estudiantes
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={transparencyImg} alt="Transparencia total" className="rounded-xl shadow-md" />
              <p className="mt-3 font-semibold text-safepalette-gold text-lg">
                Transparencia completa y comunicación clara
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORMULARIO DE CONTACTO ================= */}
      <div className="relative z-10">
        <Contacto />
      </div>

      {/* ================= SECCIÓN DE LOGROS / ESTADÍSTICAS ================= */}
      <div className="relative z-10">
        <Achievements />
      </div>
    </div>
  );
}
