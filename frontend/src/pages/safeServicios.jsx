// src/pages/safeServicios.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Video de fondo
import fondoBus from "../assets/bus.mp4";

// Imágenes de cada módulo
import adminCardImg from "../assets/admin.png";
import schoolCardImg from "../assets/school.png";
import padresCardImg from "../assets/padres.png";

export default function SafeServicios() {
  useEffect(() => {
    document.title = "Safe Escolar — Servicios";
  }, []);

  const blocks = [
    {
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

  const BTN_BASE =
    "inline-flex items-center justify-center px-5 py-3 text-base font-medium focus:outline-none transition";
  const BTN_SECONDARY =
    `${BTN_BASE} rounded-md border border-white text-white/90 hover:bg-white hover:text-hawkes-blue-900 focus-visible:ring-4 focus-visible:ring-hawkes-blue-200`;

  const CARD =
    "group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-1 hover:ring-hawkes-blue-100";
  const CARD_MEDIA =
    "flex items-center justify-center bg-gradient-to-b from-hawkes-blue-50 to-white border-b border-gray-100 px-6 pt-6 pb-6";
  const CARD_BODY = "flex grow flex-col gap-4 p-6";

  return (
    <div className="bg-gray-50">
      {/* HERO centrado */}
      <section className="relative min-h-[88svh] md:min-h-screen flex items-center justify-center text-center overflow-hidden bg-hawkes-blue-900">
        <video
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
          src={fondoBus}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/85" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl text-white">
            Safe <span className="text-hawkes-blue-300">Escolar</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100/90">
            Plataforma integral para instituciones educativas, familias y
            administración. Todo lo que necesitas para gestionar tu comunidad en un solo lugar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="w-full sm:w-auto text-center rounded-md border border-white/70 px-5 py-3 text-white/95 hover:bg-white hover:text-hawkes-blue-900 transition"
              aria-label="Volver al inicio"
            >
              ← Volver al inicio
            </Link>
            <a
              href="#modulos"
              className="w-full sm:w-auto text-center rounded-md bg-hawkes-blue-600 px-5 py-3 text-white hover:bg-hawkes-blue-700 focus-visible:ring-4 focus-visible:ring-hawkes-blue-300 transition"
              aria-label="Ver módulos de Safe Escolar"
            >
              Ver módulos
            </a>
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section
        id="modulos"
        className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20"
      >
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Módulos incluidos
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Cada módulo está diseñado para un rol específico, pero todos se integran entre sí.
          </p>
          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-hawkes-blue-600" />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {blocks.map((b) => (
            <article key={b.title} className={CARD}>
              {/* Imagen más grande */}
              <div className={CARD_MEDIA}>
                <img
                  src={b.img}
                  alt={b.title}
                  className="h-28 sm:h-32 md:h-40 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className={CARD_BODY}>
                {/* quitamos h3 */}
                <p className="text-gray-700">{b.desc}</p>
                <ul className="mt-2 space-y-2">
                  {b.bullets.map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md border border-hawkes-blue-200 bg-hawkes-blue-50 text-hawkes-blue-600">
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
                      <span className="text-gray-800">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
