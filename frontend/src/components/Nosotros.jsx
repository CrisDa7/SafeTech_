// src/components/Nosotros.jsx
import React from "react";
import nosotrosImg from "@/assets/nosotros.png";

export default function Nosotros() {
  return (
    <section id="nosotros" className="px-4 py-16 md:py-24 bg-safepalette-ink">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold text-safepalette-white">
            Quiénes Somos
          </h1>
          <div className="mx-auto h-[3px] w-24 rounded-full bg-safepalette-gold" />
        </div>

        {/* Bloque principal */}
        <div className="mb-20 flex flex-col items-center gap-10 lg:flex-row">
          {/* Texto */}
          <div className="lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-safepalette-white">
              Nuestra Identidad
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-safepalette-white/80">
              En{" "}
              <span className="font-semibold text-safepalette-gold">
                SafeTech
              </span>{" "}
              creemos que la seguridad escolar debe ser moderna, accesible y
              confiable. Somos una empresa ecuatoriana comprometida con la
              innovación tecnológica aplicada al bienestar de estudiantes, padres
              de familia y administradores educativos.
            </p>
            <p className="text-lg leading-relaxed text-safepalette-white/80">
              A través de herramientas inteligentes, sistemas de monitoreo en
              tiempo real y canales de comunicación efectivos, trabajamos para
              que cada institución educativa cuente con un entorno seguro,
              tranquilo y adaptado a las necesidades del presente. Nuestra meta
              es transformar la manera en que se entiende y gestiona la seguridad
              en los colegios.
            </p>
          </div>

          {/* Imagen */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={nosotrosImg}
                alt="Nosotros - SafeTech"
                loading="lazy"
                className="w-full h-auto rounded-xl border border-safepalette-edge shadow-soft"
              />
              {/* Glow sutil */}
              <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-b from-safepalette-gold/10 via-transparent to-safepalette-gold/10" />
            </div>
          </div>
        </div>

        {/* Si después quieres Misión / Visión, aquí puedes reusar tu nosotrosData */}
      </div>
    </section>
  );
}
