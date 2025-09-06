import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronRight, FaShieldAlt, FaEnvelope } from "react-icons/fa";

// Imágenes (sin cambiar rutas)
import logoAzul from "../assets/logoAzul.png";
import logoBlanco from "../assets/logoBlanco.png";
import adminImg from "../assets/admin.png";
import padresImg from "../assets/padres.png";
import schoolImg from "../assets/school.png";
import autobusImg from "../assets/autobus.jpg";
import configuracionImg from "../assets/configuracion.png"; // NUEVA: para "Productos"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // desktop
  const [scrolled, setScrolled] = useState(false);

  // Desktop (tabs)
  const [accederActiveOption, setAccederActiveOption] = useState("administrador");
  const [menuPrincipalActive, setMenuPrincipalActive] = useState("quienes");
  const [nosotrosActiveOption, setNosotrosActiveOption] = useState("mision");

  // Móvil: UNA sola sección abierta
  const [mobileActiveSection, setMobileActiveSection] = useState(null); // 'Principal' | 'Nosotros' | 'Acceder' | 'Productos' | 'Soporte en línea' | null
  const [mobileSubKey, setMobileSubKey] = useState(null); // sub-acordeón único (ej. 'quienes' | 'mision' | 'vision' | 'administrador' | ...)

  const navRef = useRef(null);

  // Data
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

  const menuPrincipalData = {
    quienes: {
      title: "¿Quiénes somos?",
      description:
        "En SafeTech somos una empresa dedicada a brindar soluciones inteligentes de seguridad.\nCombinamos experiencia y tecnología de vanguardia en CCTV, control de accesos y monitoreo 24/7 para proteger lo que más importa con confianza y compromiso.",
      image: autobusImg,
    },
  };
  const currentMenuPrincipalData = menuPrincipalData[menuPrincipalActive];

  const nosotrosData = {
    mision: {
      title: "Misión",
      description:
        "Proteger a las comunidades educativas mediante soluciones inteligentes de seguridad. Garantizamos trayectos escolares seguros, confianza para las familias y herramientas eficientes para las instituciones.",
      details: [
        "Enfoque en prevención y monitoreo 24/7.",
        "Tecnología accesible y confiable.",
        "Acompañamiento cercano a instituciones y familias.",
      ],
      image: autobusImg,
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
    },
  };
  const currentNosotrosData = nosotrosData[nosotrosActiveOption];

  const productosData = {
    estado: {
      title: "Productos",
      description:
        "Esta parte está en configuración. Muy pronto podrás explorar nuestro catálogo de soluciones.",
      details: ["Catálogo en preparación", "Integraciones y precios", "Demos y documentación"],
      image: configuracionImg,
      buttonText: "Muy pronto",
    },
  };

  const menuItems = [
    { name: "Principal", isMenuPrincipal: true },
    { name: "Nosotros", isNosotros: true },
    { name: "Acceder", isAcceder: true },
    { name: "Productos", isProductos: true },
    { name: "Soporte en línea", isSoporte: true },
  ];

  // Efectos
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar con ESC (desktop y mobile)
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMenuOpen(false);
        setMobileActiveSection(null);
        setMobileSubKey(null);
      }
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  // Bloqueo de scroll al abrir menú móvil
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  // Helpers
  const isMdUp = () => window.matchMedia("(min-width: 768px)").matches;

  const toggleDropdown = (name) => {
    if (isMdUp()) {
      setActiveDropdown((prev) => (prev === name ? null : name)); // desktop
    } else {
      // móvil: abrimos esa sección y cerramos las demás
      setMobileActiveSection((prev) => (prev === name ? null : name));
      setMobileSubKey(null);
    }
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileActiveSection(null);
    setMobileSubKey(null);
  };

  // Panel wrapper (desktop) —> oscuro
  const PanelWrapper = ({ children, label }) => (
    <div className="fixed inset-x-0 top-[56px] md:top-[64px] z-[60]" role="menu" aria-label={label}>
      <div className="mx-auto max-w-screen-xl px-4 flex justify-end">
        <div className="w-[min(92vw,920px)] bg-neutral-900 text-neutral-100 shadow-2xl border border-neutral-700 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );

  // ======================== RENDER ========================
  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-hawkes-blue-900/80 backdrop-blur supports-[backdrop-filter]:bg-hawkes-blue-900/60 shadow-lg py-2"
          : "bg-transparent py-3"
      }`}
      aria-label="Barra de navegación principal"
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex min-w-0 items-center gap-2 shrink-0 cursor-pointer"
            aria-label="SafeTech - Inicio"
            role="button"
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
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-hawkes-blue-300/70"
            aria-controls="mobile-drawer"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Menú desktop (igual que tenías) */}
          <div className="hidden md:flex">
            <ul id="primary-menu" className="flex items-center gap-2 lg:gap-4 font-medium" role="menubar">
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
                    className="flex items-center gap-1 px-3 py-2 text-white hover:text-hawkes-blue-200 focus-visible:ring-2 focus-visible:ring-hawkes-blue-300/70 rounded-md"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.name}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span className="text-sm lg:text-base">{item.name}</span>
                    <FaChevronDown className="w-3 h-3" aria-hidden="true" />
                  </button>

                  {/* Principal */}
                  {item.isMenuPrincipal && activeDropdown === "Principal" && (
                    <PanelWrapper label="Menú Principal">
                      <div className="flex flex-col md:flex-row">
                        {/* Tabs */}
                        <div className="md:w-1/4 border-b md:border-b-0 md:border-r border-neutral-800">
                          <button
                            onMouseEnter={() => setMenuPrincipalActive("quienes")}
                            onFocus={() => setMenuPrincipalActive("quienes")}
                            className={`w-full text-left p-5 transition ${
                              menuPrincipalActive === "quienes"
                                ? "bg-neutral-800 border-l-4 border-hawkes-blue-600"
                                : "hover:bg-neutral-800/60"
                            }`}
                          >
                            <span className={`${menuPrincipalActive === "quienes" ? "text-white" : "text-neutral-300"} font-medium`}>
                              ¿Quiénes somos?
                            </span>
                          </button>
                        </div>

                        {/* Content */}
                        <div className="md:w-2/4 p-6 md:border-r border-neutral-800">
                          <h2 className="text-xl lg:text-2xl font-bold text-white mb-3">
                            {currentMenuPrincipalData.title}
                          </h2>
                          <p className="text-neutral-300 whitespace-pre-line">
                            {currentMenuPrincipalData.description}
                          </p>
                        </div>

                        {/* Media */}
                        <div className="md:w-1/4 bg-neutral-800 p-6 flex items-center justify-center">
                          <img src={currentMenuPrincipalData.image} alt={currentMenuPrincipalData.title} className="max-w-full max-h-48 object-contain" loading="lazy" />
                        </div>
                      </div>
                    </PanelWrapper>
                  )}

                  {/* Nosotros */}
                  {item.isNosotros && activeDropdown === "Nosotros" && (
                    <PanelWrapper label="Menú Nosotros">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 border-b md:border-b-0 md:border-r border-neutral-800">
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
                                  ? "bg-neutral-800 border-l-4 border-hawkes-blue-600"
                                  : "hover:bg-neutral-800/60"
                              }`}
                            >
                              <span className={`${nosotrosActiveOption === opt.key ? "text-white" : "text-neutral-300"} font-medium`}>
                                {opt.label}
                              </span>
                            </button>
                          ))}
                        </div>

                        <div className="md:w-2/4 p-6 md:border-r border-neutral-800">
                          <h2 className="text-xl lg:text-2xl font-bold text-white mb-3">
                            {currentNosotrosData.title}
                          </h2>
                          <p className="text-neutral-300 mb-6">{currentNosotrosData.description}</p>
                          <ul className="space-y-3">
                            {currentNosotrosData.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaShieldAlt className="text-hawkes-blue-400 mt-1 mr-3 shrink-0" aria-hidden="true" />
                                <span className="text-neutral-200">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="md:w-1/4 bg-neutral-800 p-6 flex items-center justify-center">
                          <img src={currentNosotrosData.image} alt={currentNosotrosData.title} className="max-w-full max-h-48 object-contain" loading="lazy" />
                        </div>
                      </div>
                    </PanelWrapper>
                  )}

                  {/* Acceder */}
                  {item.isAcceder && activeDropdown === "Acceder" && (
                    <PanelWrapper label="Menú Acceder">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 border-b md:border-b-0 md:border-r border-neutral-800">
                          {Object.keys(accederData).map((key) => (
                            <button
                              key={key}
                              onMouseEnter={() => setAccederActiveOption(key)}
                              onFocus={() => setAccederActiveOption(key)}
                              className={`w-full text-left p-5 transition ${
                                accederActiveOption === key
                                  ? "bg-neutral-800 border-l-4 border-hawkes-blue-600"
                                  : "hover:bg-neutral-800/60"
                              }`}
                            >
                              <span className={`${accederActiveOption === key ? "text-white" : "text-neutral-300"} font-medium`}>
                                {accederData[key].title}
                              </span>
                            </button>
                          ))}
                        </div>

                        <div className="md:w-2/4 p-6 md:border-r border-neutral-800">
                          <h2 className="text-xl lg:text-2xl font-bold text-white mb-3">{currentAccederData.title}</h2>
                          <p className="text-neutral-300 mb-6">{currentAccederData.description}</p>
                          <ul className="space-y-3">
                            {currentAccederData.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaShieldAlt className="text-hawkes-blue-400 mt-1 mr-3 shrink-0" aria-hidden="true" />
                                <span className="text-neutral-200">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="md:w-1/4 bg-neutral-800 p-6 flex flex-col items-center justify-center">
                          <div className="mb-6 w-36 h-36 md:w-40 md:h-40 bg-neutral-900 border border-neutral-800 shadow-md flex items-center justify-center p-4">
                            <img src={currentAccederData.image} alt={currentAccederData.title} className="max-w-full max-h-full object-contain" loading="lazy" />
                          </div>
                          <a
                            href={currentAccederData.buttonLink}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-hawkes-blue-600 text-white font-medium hover:bg-hawkes-blue-700 focus-visible:ring-2 focus-visible:ring-hawkes-blue-300 w-full text-center rounded-md"
                          >
                            {currentAccederData.buttonText} <FaChevronRight className="inline" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </PanelWrapper>
                  )}

                  {/* Productos */}
                  {item.isProductos && activeDropdown === "Productos" && (
                    <PanelWrapper label="Menú Productos">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/3 p-6 md:border-r border-neutral-800">
                          <h2 className="text-xl lg:text-2xl font-bold text-white mb-3">
                            {productosData.estado.title}
                          </h2>
                          <p className="text-neutral-300 mb-6">{productosData.estado.description}</p>
                          <ul className="space-y-3">
                            {productosData.estado.details.map((d, i) => (
                              <li key={i} className="flex items-start">
                                <FaShieldAlt className="text-hawkes-blue-400 mt-1 mr-3 shrink-0" aria-hidden="true" />
                                <span className="text-neutral-200">{d}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-800 text-neutral-300 border border-neutral-700 font-medium cursor-not-allowed rounded-md">
                            {productosData.estado.buttonText}
                          </div>
                        </div>
                        <div className="md:w-1/3 bg-neutral-800 p-6 flex items-center justify-center">
                          <img
                            src={productosData.estado.image}
                            alt="Sección en configuración"
                            className="max-w-full max-h-48 object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </PanelWrapper>
                  )}

                  {/* Soporte */}
                  {item.isSoporte && activeDropdown === "Soporte en línea" && (
                    <PanelWrapper label="Menú Soporte en línea">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 border-b md:border-b-0 md:border-r border-neutral-800 p-6">
                          <h3 className="text-lg font-semibold text-white">Centro de Ayuda</h3>
                          <p className="text-sm text-neutral-300 mt-2">Encuentra guías, tutoriales y documentación.</p>
                        </div>
                        <div className="md:w-2/4 p-6 md:border-r border-neutral-800">
                          <h3 className="text-lg font-semibold text-white">Soporte Técnico</h3>
                          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                            <li>✔ Preguntas frecuentes</li>
                            <li>✔ Tutoriales interactivos</li>
                            <li>✔ Reportar incidencias</li>
                          </ul>
                        </div>
                        <div className="md:w-1/4 bg-neutral-800 p-6 flex flex-col items-center justify-center">
                          <a href="https://wa.me/593999047935" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-600 text-white font-medium hover:bg-green-700 w-full text-center mb-3 rounded-md" aria-label="Chatear por WhatsApp">
                            WhatsApp
                          </a>
                          <a href="mailto:soporte@safetech-ec.com" className="px-6 py-3 bg-red-600 text-white font-medium hover:bg-red-700 w-full text-center flex items-center justify-center gap-2 rounded-md" aria-label="Enviar correo a soporte@safetech-ec.com">
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

        {/* ============= MÓVIL: DRAWER A PANTALLA COMPLETA ============= */}
        {/* Backdrop */}
        <div
          className={`md:hidden fixed inset-0 z-[60] transition ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } bg-black/50`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Drawer */}
        <aside
          id="mobile-drawer"
          className={`md:hidden fixed right-0 top-0 h-full w-[88%] max-w-sm z-[61] transform transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "translate-x-full"} bg-neutral-900 border-l border-neutral-800`}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          {/* Header del drawer */}
          <div className="flex items-center justify-between px-4 h-14 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <img src={logoBlanco} className="h-6 w-auto" alt="" />
              <span className="text-white font-semibold">Menú</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md text-neutral-200 hover:bg-white/10"
              aria-label="Cerrar menú"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Lista principal */}
          <ul className="px-2 py-3 space-y-2 overflow-y-auto h-[calc(100%-3.5rem)]">
            {menuItems.map((item) => {
              const open = mobileActiveSection === item.name;
              return (
                <li key={item.name} className="rounded-lg bg-white/5">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between text-left px-4 py-3"
                    aria-expanded={open}
                  >
                    <span className={`font-medium ${open ? "text-white" : "text-neutral-200"}`}>
                      {item.name}
                    </span>
                    <FaChevronDown
                      className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Contenido de cada sección - RESUMIDO para móvil */}
                  <div
                    className={`grid transition-all ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 space-y-3">
                        {/* PRINCIPAL */}
                        {item.isMenuPrincipal && (
                          <div>
                            <button
                              className="w-full text-left text-sm py-2 px-3 rounded-md bg-neutral-800 hover:bg-neutral-700"
                              onClick={() =>
                                setMobileSubKey((k) => (k === "quienes" ? null : "quienes"))
                              }
                              aria-expanded={mobileSubKey === "quienes"}
                            >
                              ¿Quiénes somos?
                            </button>
                            <div
                              className={`grid transition-all ${mobileSubKey === "quienes" ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"}`}
                            >
                              <div className="overflow-hidden">
                                <p className="text-sm text-neutral-300">
                                  {menuPrincipalData.quienes.description.slice(0, 160)}…
                                </p>
                                <img
                                  src={menuPrincipalData.quienes.image}
                                  alt={menuPrincipalData.quienes.title}
                                  className="mt-3 w-full max-h-40 object-cover border border-neutral-800"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* NOSOTROS */}
                        {item.isNosotros && (
                          <div className="space-y-2">
                            {[
                              { key: "mision", data: nosotrosData.mision, label: "Misión" },
                              { key: "vision", data: nosotrosData.vision, label: "Visión" },
                            ].map(({ key, data, label }) => (
                              <div key={key}>
                                <button
                                  className="w-full text-left text-sm py-2 px-3 rounded-md bg-neutral-800 hover:bg-neutral-700"
                                  onClick={() =>
                                    setMobileSubKey((k) => (k === key ? null : key))
                                  }
                                  aria-expanded={mobileSubKey === key}
                                >
                                  {label}
                                </button>
                                <div
                                  className={`grid transition-all ${mobileSubKey === key ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"}`}
                                >
                                  <div className="overflow-hidden">
                                    <p className="text-sm text-neutral-300">
                                      {data.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* ACCEDER */}
                        {item.isAcceder && (
                          <div className="space-y-3">
                            {Object.keys(accederData).map((key) => {
                              const d = accederData[key];
                              return (
                                <div key={key} className="rounded-md border border-neutral-800 p-3">
                                  <div className="flex items-center gap-3">
                                    <img
                                      src={d.image}
                                      alt={d.title}
                                      className="w-12 h-12 object-contain border border-neutral-800 bg-neutral-900"
                                      loading="lazy"
                                    />
                                    <div className="min-w-0">
                                      <p className="text-sm font-medium text-white">{d.title}</p>
                                      <p className="text-xs text-neutral-300 line-clamp-2">
                                        {d.description}
                                      </p>
                                    </div>
                                  </div>
                                  <a
                                    href={d.buttonLink}
                                    onClick={closeMobileMenu}
                                    className="mt-3 inline-flex items-center gap-2 px-3 py-2 text-sm bg-hawkes-blue-600 text-white rounded-md hover:bg-hawkes-blue-700"
                                  >
                                    {d.buttonText} <FaChevronRight aria-hidden="true" />
                                  </a>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* PRODUCTOS */}
                        {item.isProductos && (
                          <div className="space-y-2">
                            <p className="text-sm text-neutral-300">
                              {productosData.estado.description}
                            </p>
                            <ul className="text-sm space-y-1">
                              {productosData.estado.details.map((d, i) => (
                                <li key={i} className="flex items-start text-neutral-200">
                                  <FaShieldAlt className="mt-0.5 mr-2" /> {d}
                                </li>
                              ))}
                            </ul>
                            <img
                              src={productosData.estado.image}
                              alt="Sección en configuración"
                              className="mt-2 w-full max-h-40 object-contain border border-neutral-800"
                              loading="lazy"
                            />
                            <div className="mt-2 inline-flex items-center justify-center w-full px-3 py-2 bg-neutral-800 text-neutral-300 border border-neutral-700 rounded-md cursor-not-allowed text-sm">
                              Muy pronto
                            </div>
                          </div>
                        )}

                        {/* SOPORTE */}
                        {item.isSoporte && (
                          <div className="space-y-2">
                            <p className="text-sm text-neutral-300">¿Necesitas ayuda?</p>
                            <a
                              href="https://wa.me/593999047935"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeMobileMenu}
                              className="block w-full text-center px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-md text-sm"
                              aria-label="Chatear por WhatsApp"
                            >
                              WhatsApp
                            </a>
                            <a
                              href="mailto:soporte@safetech-ec.com"
                              onClick={closeMobileMenu}
                              className="block w-full text-center px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md text-sm"
                              aria-label="Enviar correo a soporte@safetech-ec.com"
                            >
                              <span className="inline-flex items-center gap-2 justify-center">
                                <FaEnvelope aria-hidden="true" /> Gmail
                              </span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </nav>
  );
}
