import React from "react";
import adminImg from "../assets/safe.png";
import configuracionImg from "../assets/configuracion.png"; 

const serviciosData = [
  {
    title: "Safe Escolar",
    features: ["Safe School", "Safe Padres", "Safe Administración"],
    img: adminImg,
    link: "/safe-escolar",
    cta: "Ver más",
    soon: false,
  },
  {
    title: "Configurando",
    features: [],
    img: configuracionImg,
    link: "#",
    cta: "Muy pronto",
    soon: true,
  },
  {
    title: "Configurando",
    features: [],
    img: configuracionImg,
    link: "#",
    cta: "Muy pronto",
    soon: true,
  },
];

export default function Servicios() {
  const BTN_BASE =
    "inline-flex items-center justify-center px-5 py-3 text-base font-medium focus:outline-none transition";
  const BTN_PRIMARY =
    `${BTN_BASE} rounded-md text-white bg-hawkes-blue-600 hover:bg-hawkes-blue-700 focus-visible:ring-4 focus-visible:ring-hawkes-blue-300`;
  const BTN_DISABLED =
    `${BTN_BASE} rounded-md bg-gray-300 text-gray-500 cursor-not-allowed`;

  const CARD =
    "group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white shadow-sm " +
    "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-1 hover:ring-hawkes-blue-100";
  const CARD_MEDIA =
    "flex items-center justify-center bg-gradient-to-b from-hawkes-blue-100 via-hawkes-blue-50 to-white " +
    "border-b border-gray-100 px-6 pt-8 pb-6";
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

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="bg-white px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center md:mb-16">
          <h2
            id="servicios-title"
            className="text-4xl font-bold text-gray-900 md:text-5xl"
          >
            Nuestros <span className="text-hawkes-blue-600">Servicios</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 md:text-xl">
            Soluciones especializadas para cada integrante de la comunidad
          </p>
          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-hawkes-blue-600" />
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {serviciosData.map((item) => (
            <article
              key={item.title}
              className={CARD}
              aria-labelledby={`card-${item.title}-title`}
            >
              <div className={CARD_MEDIA}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-28 w-auto object-contain md:h-32"
                />
              </div>

              <div className={CARD_BODY}>
                <h3
                  id={`card-${item.title}-title`}
                  className="text-xl font-semibold text-gray-900"
                >
                  {item.title}
                </h3>

                {item.features.length > 0 && (
                  <ul className="mt-2 space-y-2.5">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md border border-hawkes-blue-200 bg-hawkes-blue-50 text-hawkes-blue-600">
                          {CHECK_ICON}
                        </span>
                        <span className="text-gray-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4">
                  <a
                    href={item.soon ? undefined : item.link}
                    className={item.soon ? BTN_DISABLED : BTN_PRIMARY}
                    aria-label={
                      item.soon ? `${item.title} próximamente` : `Acceder a ${item.title}`
                    }
                    aria-disabled={item.soon ? "true" : "false"}
                    onClick={(e) => {
                      if (item.soon) e.preventDefault();
                    }}
                  >
                    {item.cta}
                    {!item.soon && (
                      <svg
                        className="ml-2 h-4 w-4 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 10"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    )}
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-hawkes-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
