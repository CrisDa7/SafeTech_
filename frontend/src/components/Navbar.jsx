import React, { useState, useEffect, useRef } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaShieldAlt,
  FaEnvelope,
} from "react-icons/fa";

// Imágenes (sin cambiar rutas)
import logoAzul from "../assets/logoAzul.png";
import logoBlanco from "../assets/logoBlanco.png";
import adminImg from "../assets/admin.png";
import padresImg from "../assets/padres.png";
import schoolImg from "../assets/school.png";
import autobusImg from "../assets/autobus.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Acceder
  const [accederActiveOption, setAccederActiveOption] = useState("administrador");

  // Principal: activo por defecto = "quienes"
  const [menuPrincipalActive, setMenuPrincipalActive] = useState("quienes");

  // Nosotros: navegación tipo “servicios” (Misión / Visión)
  const [nosotrosActiveOption, setNosotrosActiveOption] = useState("mision");

  const navRef = useRef(null);

  // Data Acceder
  const accederData = {
    administrador: {
      title: "Safe Administrador",
      description: "Control y gestión completa para instituciones.",
      details: [
        "Rastreo en tiempo real de buses.",
        "Reportes automáticos y detallados.",
        "Gestión eficiente para directivos.",
      ],
      image: adminImg,
      buttonLink: "#admin",
      buttonText: "Acceder",
    },
    padres: {
      title: "Safe Padres",
      description: "Tranquilidad para las familias con transporte seguro.",
      details: [
        "Notificaciones instantáneas.",
        "Localización en tiempo real.",
        "Confianza y seguridad en cada trayecto.",
      ],
      image: padresImg,
      buttonLink: "#padres",
      buttonText: "Acceder",
    },
    school: {
      title: "Safe School",
      description: "Plataforma de seguridad para coordinadores escolares.",
      details: [
        "Monitoreo en vivo de transporte.",
        "Alertas de llegada y salida.",
        "Fortalece la reputación institucional.",
      ],
      image: schoolImg,
      buttonLink: "#school",
      buttonText: "Acceder",
    },
  };
  const currentAccederData = accederData[accederActiveOption];

  // Data Principal: solo "quienes"
  const menuPrincipalData = {
    quienes: {
      title: "¿Quiénes somos?",
      description:
        "En SafeTech somos una empresa dedicada a brindar soluciones inteligentes de seguridad. " +
        "Combinamos experiencia y tecnología de vanguardia en CCTV, control de accesos y monitoreo 24/7 " +
        "para proteger lo que más importa con confianza y compromiso.",
      image: autobusImg,
    },
  };
  const currentMenuPrincipalData = menuPrincipalData[menuPrincipalActive];

  // Data Nosotros (como “servicios”: Misión / Visión)
  const nosotrosData = {
    mision: {
      title: "Misión",
      description:
        "Proteger a las comunidades educativas mediante soluciones inteligentes de seguridad. " +
        "Garantizamos trayectos escolares seguros, confianza para las familias y herramientas eficientes para las instituciones.",
      details: [
        "Enfoque en prevención y monitoreo 24/7.",
        "Tecnología accesible y confiable.",
        "Acompañamiento cercano a instituciones y familias.",
      ],
      image: autobusImg,
      buttonLink: "#mision",
      buttonText: "Conocer más",
    },
    vision: {
      title: "Visión",
      description:
        "Ser el referente regional en seguridad escolar inteligente, construyendo un futuro donde cada estudiante viaje protegido y cada familia tenga tranquilidad.",
      details: [
        "Innovación continua y escalabilidad.",
        "Estándares altos en protección y datos.",
        "Impacto social positivo y sostenible.",
      ],
      image: autobusImg,
      buttonLink: "#vision",
      buttonText: "Conocer más",
    },
  };
  const currentNosotrosData = nosotrosData[nosotrosActiveOption];

  // Items del menú
  const menuItems = [
    { name: "Principal", isMenuPrincipal: true },
    { name: "Nosotros", isNosotros: true },
    { name: "Acceder", isAcceder: true },
    { name: "Soporte en línea", isSoporte: true },
  ];

  // Efectos
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar por click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cerrar por ESC
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  // Cerrar por scroll
  useEffect(() => {
    const onScrollClose = () => setActiveDropdown(null);
    window.addEventListener("scroll", onScrollClose, { passive: true });
    return () => window.removeEventListener("scroll", onScrollClose);
  }, []);

  // Helpers
  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };
  const isMdUp = () => window.matchMedia("(min-width: 768px)").matches;

  // Panel wrapper
  const PanelWrapper = ({ children, label }) => (
    <div
      className="fixed inset-x-0 top-[56px] md:top-[64px] z-[60]"
      role="menu"
      aria-label={label}
    >
      <div className="mx-auto max-w-screen-xl px-4 flex justify-end">
        <div className="w-[min(92vw,920px)] bg-white shadow-2xl border border-gray-200 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-900/80 backdrop-blur supports-[backdrop-filter]:bg-blue-900/60 shadow-lg py-2"
          : "bg-transparent py-3"
      }`}
      aria-label="Barra de navegación principal"
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="https://safetech-ec.com"
            className="flex min-w-0 items-center gap-2 shrink-0"
            aria-label="SafeTech - Inicio"
          >
            <img
              src={scrolled ? logoBlanco : logoAzul}
              className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
              alt="Logo de SafeTech"
              loading="eager"
              width={120}
              height={40}
            />
            <span className="inline text-base md:text-2xl font-bold text-white whitespace-nowrap max-w-[40vw] md:max-w-none truncate">
              SafeTech
            </span>
          </a>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-controls="primary-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Menú desktop */}
          <div className="hidden md:flex">
            <ul
              id="primary-menu"
              className="flex items-center gap-2 lg:gap-4 font-medium"
              role="menubar"
            >
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  role="none"
                  onMouseEnter={() => isMdUp() && setActiveDropdown(item.name)}
                  onMouseLeave={() => isMdUp() && setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 text-white hover:text-blue-200 focus-visible:ring-2 focus-visible:ring-white/70 rounded-md"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.name}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span className="text-sm lg:text-base">{item.name}</span>
                    <FaChevronDown className="w-3 h-3" aria-hidden="true" />
                  </button>

                  {/* Mega-menús */}
                  {item.isMenuPrincipal && activeDropdown === "Principal" && (
                    <PanelWrapper label="Menú Principal">
                      <div className="flex flex-col md:flex-row">
                        {/* Columna 1 */}
                        <div className="md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200">
                          {[
                            { key: "quienes", label: "¿Quiénes somos?" }, // único item
                          ].map((opt) => (
                            <button
                              key={opt.key}
                              onMouseEnter={() => setMenuPrincipalActive(opt.key)}
                              onFocus={() => setMenuPrincipalActive(opt.key)}
                              className={`w-full text-left p-5 transition ${
                                menuPrincipalActive === opt.key
                                  ? "bg-blue-50 border-l-4 border-blue-600"
                                  : "hover:bg-gray-50"
                              }`}
                            >
                              <span
                                className={`${
                                  menuPrincipalActive === opt.key
                                    ? "text-blue-800"
                                    : "text-gray-700"
                                } font-medium`}
                              >
                                {opt.label}
                              </span>
                            </button>
                          ))}
                        </div>

                        {/* Columna 2 */}
                        <div className="md:w-2/4 p-6 md:border-r border-gray-200">
                          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                            {currentMenuPrincipalData.title}
                          </h2>
                          <p className="text-gray-600 whitespace-pre-line">
                            {currentMenuPrincipalData.description}
                          </p>
                        </div>

                        {/* Columna 3 */}
                        <div className="md:w-1/4 bg-blue-50 p-6 flex items-center justify-center">
                          <img
                            src={currentMenuPrincipalData.image}
                            alt={currentMenuPrincipalData.title}
                            className="max-w-full max-h-48 object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </PanelWrapper>
                  )}

                  {/* NOSOTROS: estilo “servicios” (Misión / Visión) */}
                  {item.isNosotros && activeDropdown === "Nosotros" && (
                    <PanelWrapper label="Menú Nosotros">
                      <div className="flex flex-col md:flex-row">
                        {/* Columna 1: opciones */}
                        <div className="md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200">
                          {[
                            { key: "mision", label: "Misión" },
                            { key: "vision", label: "Visión" },
                          ].map((opt) => (
                            <button
                              key={opt.key}
                              onMouseEnter={() => setNosotrosActiveOption(opt.key)}
                              onFocus={() => setNosotrosActiveOption(opt.key)}
                              className={`w-full text-left p-5 transition ${
                                nosotrosActiveOption === opt.key
                                  ? "bg-blue-50 border-l-4 border-blue-600"
                                  : "hover:bg-gray-50"
                              }`}
                            >
                              <span
                                className={`${
                                  nosotrosActiveOption === opt.key
                                    ? "text-blue-800"
                                    : "text-gray-700"
                                } font-medium`}
                              >
                                {opt.label}
                              </span>
                            </button>
                          ))}
                        </div>

                        {/* Columna 2: contenido */}
                        <div className="md:w-2/4 p-6 md:border-r border-gray-200">
                          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                            {currentNosotrosData.title}
                          </h2>
                          <p className="text-gray-600 mb-6">
                            {currentNosotrosData.description}
                          </p>
                          <ul className="space-y-3">
                            {currentNosotrosData.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaShieldAlt
                                  className="text-blue-500 mt-1 mr-3 shrink-0"
                                  aria-hidden="true"
                                />
                                <span className="text-gray-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Columna 3: imagen + botón */}
                        <div className="md:w-1/4 bg-blue-50 p-6 flex flex-col items-center justify-center">
                          <div className="mb-6 w-36 h-36 md:w-40 md:h-40 bg-white shadow-md flex items-center justify-center p-4">
                            <img
                              src={currentNosotrosData.image}
                              alt={currentNosotrosData.title}
                              className="max-w-full max-h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <a
                            href={currentNosotrosData.buttonLink}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-300 w-full text-center rounded-md"
                          >
                            {currentNosotrosData.buttonText}{" "}
                            <FaChevronRight className="inline" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </PanelWrapper>
                  )}

                  {/* ACCEDER */}
                  {item.isAcceder && activeDropdown === "Acceder" && (
                    <PanelWrapper label="Menú Acceder">
                      <div className="flex flex-col md:flex-row">
                        {/* Columna 1 */}
                        <div className="md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200">
                          {Object.keys(accederData).map((key) => (
                            <button
                              key={key}
                              onMouseEnter={() => setAccederActiveOption(key)}
                              onFocus={() => setAccederActiveOption(key)}
                              className={`w-full text-left p-5 transition ${
                                accederActiveOption === key
                                  ? "bg-blue-50 border-l-4 border-blue-600"
                                  : "hover:bg-gray-50"
                              }`}
                            >
                              <span
                                className={`${
                                  accederActiveOption === key
                                    ? "text-blue-800"
                                    : "text-gray-700"
                                } font-medium`}
                              >
                                {accederData[key].title}
                              </span>
                            </button>
                          ))}
                        </div>

                        {/* Columna 2 */}
                        <div className="md:w-2/4 p-6 md:border-r border-gray-200">
                          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                            {currentAccederData.title}
                          </h2>
                          <p className="text-gray-600 mb-6">
                            {currentAccederData.description}
                          </p>
                          <ul className="space-y-3">
                            {currentAccederData.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaShieldAlt
                                  className="text-blue-500 mt-1 mr-3 shrink-0"
                                  aria-hidden="true"
                                />
                                <span className="text-gray-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Columna 3 */}
                        <div className="md:w-1/4 bg-blue-50 p-6 flex flex-col items-center justify-center">
                          <div className="mb-6 w-36 h-36 md:w-40 md:h-40 bg-white shadow-md flex items-center justify-center p-4">
                            <img
                              src={currentAccederData.image}
                              alt={currentAccederData.title}
                              className="max-w-full max-h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <a
                            href={currentAccederData.buttonLink}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-300 w-full text-center rounded-md"
                          >
                            {currentAccederData.buttonText}{" "}
                            <FaChevronRight className="inline" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </PanelWrapper>
                  )}

                  {/* SOPORTE */}
                  {item.isSoporte && activeDropdown === "Soporte en línea" && (
                    <PanelWrapper label="Menú Soporte en línea">
                      <div className="flex flex-col md:flex-row">
                        {/* Columna 1 */}
                        <div className="md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 p-6">
                          <h3 className="text-lg font-semibold text-gray-800">
                            Centro de Ayuda
                          </h3>
                          <p className="text-sm text-gray-600 mt-2">
                            Encuentra guías, tutoriales y documentación.
                          </p>
                        </div>

                        {/* Columna 2 */}
                        <div className="md:w-2/4 p-6 md:border-r border-gray-200">
                          <h3 className="text-lg font-semibold text-gray-800">
                            Soporte Técnico
                          </h3>
                          <p className="text-sm text-gray-600 mt-2">
                            Asistencia inmediata y resolución de problemas 24/7.
                          </p>
                          <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li>✔ Preguntas frecuentes</li>
                            <li>✔ Tutoriales interactivos</li>
                            <li>✔ Reportar incidencias</li>
                          </ul>
                        </div>

                        {/* Columna 3 */}
                        <div className="md:w-1/4 bg-blue-50 p-6 flex flex-col items-center justify-center">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Contáctanos
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 text-center">
                            ¿Necesitas ayuda inmediata? Escríbenos:
                          </p>
                          <a
                            href="https://wa.me/593999047935"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-green-600 text-white font-medium hover:bg-green-700 focus-visible:ring-2 focus-visible:ring-green-300 w-full text-center mb-3 rounded-md"
                            aria-label="Chatear por WhatsApp"
                          >
                            WhatsApp
                          </a>
                          <a
                            href="mailto:soporte@safetech-ec.com"
                            className="px-6 py-3 bg-red-600 text-white font-medium hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-300 w-full text-center flex items-center justify-center gap-2 rounded-md"
                            aria-label="Enviar correo a soporte@safetech-ec.com"
                          >
                            <FaEnvelope aria-hidden="true" /> Gmail
                          </a>
                        </div>
                      </div>
                    </PanelWrapper>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`md:hidden origin-top transition-all ${
            menuOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
          id="primary-menu"
        >
          <ul className="flex flex-col gap-1 py-2" role="menu">
            {menuItems.map((item) => {
              const open = activeDropdown === item.name;
              return (
                <li key={item.name} className="border-b border-white/20">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between text-left text-white px-2 py-3 rounded-md hover:bg-white/10"
                    onClick={() => toggleDropdown(item.name)}
                    aria-expanded={open}
                  >
                    <span>{item.name}</span>
                    <FaChevronDown
                      className={`w-3 h-3 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={`grid transition-all ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* Principal móvil: ¿Quiénes somos? */}
                      {item.isMenuPrincipal && (
                        <div className="bg-white text-gray-800 p-4 space-y-3">
                          {[
                            { key: "quienes", label: "¿Quiénes somos?" },
                          ].map((opt) => (
                            <button
                              key={opt.key}
                              className={`w-full text-left px-3 py-2 rounded-md ${
                                menuPrincipalActive === opt.key
                                  ? "bg-blue-50 text-blue-800"
                                  : "hover:bg-gray-50"
                              }`}
                              onClick={() => setMenuPrincipalActive(opt.key)}
                            >
                              {opt.label}
                            </button>
                          ))}

                          <div className="pt-3 grid grid-cols-5 gap-3 items-start">
                            <div className="col-span-3">
                              <h4 className="font-semibold">
                                {currentMenuPrincipalData.title}
                              </h4>
                              <p className="text-sm text-gray-600 whitespace-pre-line">
                                {currentMenuPrincipalData.description}
                              </p>
                            </div>
                            <div className="col-span-2 justify-self-end">
                              <img
                                src={currentMenuPrincipalData.image}
                                alt={currentMenuPrincipalData.title}
                                loading="lazy"
                                className="w-24 h-24 object-cover border border-gray-200 rounded-none"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Nosotros móvil: tabs Misión / Visión (como Acceder) */}
                      {item.isNosotros && (
                        <div className="bg-white text-gray-800 p-4">
                          <div className="grid grid-cols-5 gap-3 items-start">
                            {/* Izquierda: opciones */}
                            <div className="col-span-3">
                              {[
                                { key: "mision", label: "Misión" },
                                { key: "vision", label: "Visión" },
                              ].map((opt) => (
                                <button
                                  key={opt.key}
                                  className={`w-full text-left px-3 py-2 rounded-md ${
                                    nosotrosActiveOption === opt.key
                                      ? "bg-blue-50 text-blue-800"
                                      : "hover:bg-gray-50"
                                  }`}
                                  onClick={() => setNosotrosActiveOption(opt.key)}
                                >
                                  {opt.label}
                                </button>
                              ))}

                              <div className="pt-2">
                                <h4 className="font-semibold">
                                  {currentNosotrosData.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {currentNosotrosData.description}
                                </p>
                                <ul className="mt-2 space-y-2">
                                  {currentNosotrosData.details.map((d, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                      <FaShieldAlt className="text-blue-500 mt-0.5 mr-2" />
                                      {d}
                                    </li>
                                  ))}
                                </ul>
                                <a
                                  href={currentNosotrosData.buttonLink}
                                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md"
                                >
                                  {currentNosotrosData.buttonText}{" "}
                                  <FaChevronRight aria-hidden="true" />
                                </a>
                              </div>
                            </div>

                            {/* Derecha: miniatura */}
                            <div className="col-span-2 flex items-start justify-end">
                              <img
                                src={currentNosotrosData.image}
                                alt={currentNosotrosData.title}
                                loading="lazy"
                                className="w-24 h-24 object-contain border border-gray-200 rounded-none"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Acceder móvil */}
                      {item.isAcceder && (
                        <div className="bg-white text-gray-800 p-4">
                          <div className="grid grid-cols-5 gap-3 items-start">
                            <div className="col-span-3">
                              {Object.keys(accederData).map((key) => (
                                <button
                                  key={key}
                                  className={`w-full text-left px-3 py-2 rounded-md ${
                                    accederActiveOption === key
                                      ? "bg-blue-50 text-blue-800"
                                      : "hover:bg-gray-50"
                                  }`}
                                  onClick={() => setAccederActiveOption(key)}
                                >
                                  {accederData[key].title}
                                </button>
                              ))}

                              <div className="pt-2">
                                <h4 className="font-semibold">
                                  {currentAccederData.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {currentAccederData.description}
                                </p>
                                <ul className="mt-2 space-y-2">
                                  {currentAccederData.details.map((d, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                      <FaShieldAlt className="text-blue-500 mt-0.5 mr-2" />
                                      {d}
                                    </li>
                                  ))}
                                </ul>
                                <a
                                  href={currentAccederData.buttonLink}
                                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md"
                                >
                                  {currentAccederData.buttonText}{" "}
                                  <FaChevronRight aria-hidden="true" />
                                </a>
                              </div>
                            </div>

                            <div className="col-span-2 flex items-start justify-end">
                              <img
                                src={currentAccederData.image}
                                alt={currentAccederData.title}
                                loading="lazy"
                                className="w-24 h-24 object-contain border border-gray-200 rounded-none"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Soporte móvil */}
                      {item.isSoporte && (
                        <div className="bg-white text-gray-800 p-4 space-y-3">
                          <h4 className="font-semibold">Centro de Ayuda</h4>
                          <p className="text-sm text-gray-600">
                            Guías, tutoriales y documentación.
                          </p>
                          <h4 className="text-lg font-semibold mt-2">Soporte Técnico</h4>
                          <ul className="mt-1 space-y-1 text-sm text-gray-600">
                            <li>✔ Preguntas frecuentes</li>
                            <li>✔ Tutoriales interactivos</li>
                            <li>✔ Reportar incidencias</li>
                          </ul>
                          <div className="pt-2">
                            <a
                              href="https://wa.me/593999047935"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full text-center px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-md"
                              aria-label="Chatear por WhatsApp"
                            >
                              WhatsApp
                            </a>
                            <a
                              href="mailto:soporte@safetech-ec.com"
                              className="mt-2 block w-full text-center px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md"
                              aria-label="Enviar correo a soporte@safetech-ec.com"
                            >
                              <span className="inline-flex items-center gap-2 justify-center">
                                <FaEnvelope aria-hidden="true" /> Gmail
                              </span>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
