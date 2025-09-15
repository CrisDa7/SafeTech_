// src/pages/safeServicios.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Fondo (gif / video / imagen)
import fondoBus from "@/assets/bus2.gif";

// Imágenes de cada módulo
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
        "Módulo para la institución: control académico, asistencia y reportes. Pensado para directivos y docentes.",
      bullets: [
        "Panel de gestión académica",
        "Asistencia y reportes exportables",
        "Alertas y comunicación interna",
      ],
      img: schoolCardImg,
    },
    {
      id: "safe-padres",
      title: "Safe Padres",
      desc:
        "Portal para representantes: seguimiento de calificaciones, asistencia y notificaciones en tiempo real.",
      bullets: [
        "Calificaciones y tareas",
        "Notificaciones al instante",
        "Mensajería con la institución",
      ],
      img: padresCardImg,
    },
    {
      id: "safe-admin",
      title: "Safe Administración",
      desc:
        "Backoffice administrativo: matrículas, cobros, estados de cuenta y conciliaciones.",
      bullets: [
        "Gestión de matrículas",
        "Cobros y conciliaciones",
        "Reportes financieros",
      ],
      img: adminCardImg,
    },
  ];

  // Botón base
  const BTN =
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium transition focus:outline-none";
  const BTN_PRIMARY =
    `${BTN} bg-safepalette-700 text-white hover:bg-safepalette-600 focus-visible:ring-4 focus-visible:ring-safepalette-300/40`;
  const BTN_SECONDARY =
    `${BTN} border border-white/40 text-white/95 hover:bg-white hover:text-safepalette-900 focus-visible:ring-4 focus-visible:ring-safepalette-300/40`;

  return (
    <div className="bg-slate-950">
      {/* HERO */}
      <section className="relative min-h-[88svh] md:min-h-screen flex items-center justify-center text-center overflow-hidden bg-safepalette-900">
        {/* Fondo */}
        <img
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          src={fondoBus}
          alt="Fondo Safe Escolar"
          aria-hidden="true"
        />
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-black/85" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl text-white">
            Safe <span className="text-safepalette-300">Escolar</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200/90">
            Plataforma integral para instituciones educativas, familias y administración.
            Todo lo que necesitas para gestionar tu comunidad en un solo lugar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className={BTN_SECONDARY} aria-label="Volver al inicio">
              ← Volver al inicio
            </Link>
            <a href="#modulos" className={BTN_PRIMARY} aria-label="Ver módulos de Safe Escolar">
              Ver módulos
            </a>
          </div>
        </div>
      </section>

      {/* SECCIONES POR MÓDULO */}
      <section
        id="modulos"
        className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20"
        aria-labelledby="modulos-heading"
      >
        <header className="mb-12 text-center">
          <h2 id="modulos-heading" className="text-3xl font-bold text-white md:text-4xl">
            Módulos incluidos
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Cada módulo está diseñado para un rol específico, pero todos se integran entre sí.
          </p>
          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-safepalette-600" />
        </header>

        <div className="flex flex-col gap-12 md:gap-20">
          {blocks.map((b, i) => {
            const isEven = i % 2 === 0; // alterna orden
            return (
              <section key={b.id} id={b.id} aria-labelledby={`${b.id}-title`} className="relative">
                <div
                  className="
                    grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12
                    rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950
                    p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                  "
                >
                  {/* Imagen */}
                  <div
                    className={`${isEven ? "order-1" : "order-2"} ${isEven ? "md:order-2" : "md:order-1"} flex justify-center`}
                  >
                    <div className="relative">
                      <img
                        src={b.img}
                        alt={b.title}
                        className="w-full max-w-[520px] h-auto object-contain drop-shadow-[0_10px_40px_rgba(113,125,227,.35)]"
                        loading="lazy"
                      />
                      {/* Glow decorativo */}
                      <div
                        className="pointer-events-none absolute -inset-x-6 -bottom-4 h-24 blur-3xl opacity-50"
                        style={{
                          background:
                            "radial-gradient(50% 60% at 50% 50%, rgba(113,125,227,0.35), rgba(113,125,227,0) 70%)",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Texto */}
                  <div className={`${isEven ? "order-2" : "order-1"} ${isEven ? "md:order-1" : "md:order-2"}`}>
                    <h3 id={`${b.id}-title`} className="text-2xl md:text-3xl font-semibold text-white">
                      {b.title}
                    </h3>
                    <p className="mt-3 text-slate-300">{b.desc}</p>

                    <ul className="mt-5 space-y-3">
                      {b.bullets.map((x) => (
                        <li key={x} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md border border-safepalette-500/30 bg-safepalette-600/15 text-safepalette-300">
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
                          </span>
                          <span className="text-slate-200">{x}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href="#contacto" className={BTN_PRIMARY} aria-label={`Solicitar demo de ${b.title}`}>
                        Solicitar demo
                      </a>
                      <a href={`#${b.id}`} className={BTN_SECONDARY} aria-label={`Más información sobre ${b.title}`}>
                        Más información
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
}
