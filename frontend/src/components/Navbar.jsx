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

  // Móvil: permite abrir varios a la vez
  const [mobileSectionsOpen, setMobileSectionsOpen] = useState({
    Principal: false,
    Nosotros: false,
    Acceder: false,
    Productos: false,
    "Soporte en línea": false,
  });
  const [mobilePrincipalOpen, setMobilePrincipalOpen] = useState({ quienes: false });
  const [mobileNosotrosOpen, setMobileNosotrosOpen] = useState({ mision: false, vision: false });
  const [mobileAccederOpen, setMobileAccederOpen] = useState({
    administrador: false,
    padres: false,
    school: false,
  });

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
        "En SafeTech somos una empresa dedicada a brindar soluciones inteligentes de seguridad.\n" +
        "Combinamos experiencia y tecnología de vanguardia en CCTV, control de accesos y monitoreo 24/7\n" +
        "para proteger lo que más importa con confianza y compromiso.",
      image: autobusImg,
    },
  };
  const currentMenuPrincipalData = menuPrincipalData[menuPrincipalActive];

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
      details: [
        "Catálogo en preparación",
        "Integraciones y precios",
        "Demos y documentación",
      ],
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

  // Helpers
  const isMdUp = () => window.matchMedia("(min-width: 768px)").matches;

  const toggleDropdown = (name) => {
    if (isMdUp()) {
      setActiveDropdown((prev) => (prev === name ? null : name)); // desktop
    } else {
      setMobileSectionsOpen((s) => ({ ...s, [name]: !s[name] })); // móvil multi-open
    }
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

  // =============== MOBILE SMALL PARTS ===============
  // Botón de fila principal (sobre fondo del navbar)
  const MRow = ({ open, onToggle, title }) => (
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between text-left px-3 py-3 rounded-md bg-white/10 hover:bg-white/15"
      aria-expanded={open}
    >
      <span className={`font-semibold ${open ? "text-hawkes-blue-200" : "text-hawkes-blue-100"}`}>
        {title}
      </span>
      <FaChevronDown
        className={`w-3 h-3 text-white transition-transform ${open ? "rotate-180" : ""}`}
        aria-hidden="true"
      />
    </button>
  );

  // Sub-fila suave (acordeón interno) —> oscuro
  const SubRow = ({ open, onToggle, title }) => (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-md border
        ${open ? "bg-neutral-800 border-neutral-700" : "bg-neutral-900 border-neutral-800"} `}
    >
      <span className="font-medium text-neutral-100">{title}</span>
      <FaChevronDown
        className={`w-3 h-3 text-hawkes-blue-300 transition-transform ${open ? "rotate-180" : ""}`}
        aria-hidden="true"
      />
    </button>
  );

  const MCollapse = ({ open, children }) => (
    <div className={`grid transition-all ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
      <div className="overflow-hidden">
        {/* scroll táctil dentro del bloque */}
        <div className="mt-2 bg-neutral-900 text-neutral-100 rounded-md shadow border border-neutral-800 p-4 max-h-[60vh] overflow-y-auto">
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
            aria-controls="primary-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Menú desktop */}
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

        {/* MÓVIL: acordeones multi-open y sub-acordeones suaves */}
        <div
          className={`md:hidden origin-top transition-all ${
            menuOpen ? "max-h-[2400px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
          id="primary-menu"
        >
          <ul className="flex flex-col gap-3 py-3" role="menu">
            {/* PRINCIPAL */}
            <li>
              <MRow
                title="Principal"
                open={mobileSectionsOpen["Principal"]}
                onToggle={() =>
                  setMobileSectionsOpen((s) => ({ ...s, Principal: !s.Principal }))
                }
              />
              <MCollapse open={mobileSectionsOpen["Principal"]}>
                <div className="space-y-2">
                  <SubRow
                    title="¿Quiénes somos?"
                    open={mobilePrincipalOpen.quienes}
                    onToggle={() =>
                      setMobilePrincipalOpen((s) => ({ ...s, quienes: !s.quienes }))
                    }
                  />
                  <MCollapse open={mobilePrincipalOpen.quienes}>
                    <h4 className="font-semibold mb-2">¿Quiénes somos?</h4>
                    <p className="text-sm text-neutral-300 whitespace-pre-line">
                      {menuPrincipalData.quienes.description}
                    </p>
                    <img
                      src={menuPrincipalData.quienes.image}
                      alt={menuPrincipalData.quienes.title}
                      className="mt-3 w-full max-h-44 object-cover border border-neutral-800"
                      loading="lazy"
                    />
                  </MCollapse>
                </div>
              </MCollapse>
            </li>

            {/* NOSOTROS */}
            <li>
              <MRow
                title="Nosotros"
                open={mobileSectionsOpen["Nosotros"]}
                onToggle={() =>
                  setMobileSectionsOpen((s) => ({ ...s, Nosotros: !s.Nosotros }))
                }
              />
              <MCollapse open={mobileSectionsOpen["Nosotros"]}>
                <div className="space-y-2">
                  {/* Misión */}
                  <SubRow
                    title="Misión"
                    open={mobileNosotrosOpen.mision}
                    onToggle={() =>
                      setMobileNosotrosOpen((s) => ({ ...s, mision: !s.mision }))
                    }
                  />
                  <MCollapse open={mobileNosotrosOpen.mision}>
                    <h4 className="font-semibold mb-2">{nosotrosData.mision.title}</h4>
                    <p className="text-sm text-neutral-300">{nosotrosData.mision.description}</p>
                    <ul className="mt-2 space-y-2">
                      {nosotrosData.mision.details.map((d, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <FaShieldAlt className="text-hawkes-blue-400 mt-0.5 mr-2" />
                          <span className="text-neutral-200">{d}</span>
                        </li>
                      ))}
                    </ul>
                    <img
                      src={nosotrosData.mision.image}
                      alt="Misión"
                      className="mt-3 w-full max-h-44 object-cover border border-neutral-800"
                      loading="lazy"
                    />
                  </MCollapse>

                  {/* Visión */}
                  <SubRow
                    title="Visión"
                    open={mobileNosotrosOpen.vision}
                    onToggle={() =>
                      setMobileNosotrosOpen((s) => ({ ...s, vision: !s.vision }))
                    }
                  />
                  <MCollapse open={mobileNosotrosOpen.vision}>
                    <h4 className="font-semibold mb-2">{nosotrosData.vision.title}</h4>
                    <p className="text-sm text-neutral-300">{nosotrosData.vision.description}</p>
                    <ul className="mt-2 space-y-2">
                      {nosotrosData.vision.details.map((d, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <FaShieldAlt className="text-hawkes-blue-400 mt-0.5 mr-2" />
                          <span className="text-neutral-200">{d}</span>
                        </li>
                      ))}
                    </ul>
                    <img
                      src={nosotrosData.vision.image}
                      alt="Visión"
                      className="mt-3 w-full max-h-44 object-cover border border-neutral-800"
                      loading="lazy"
                    />
                  </MCollapse>
                </div>
              </MCollapse>
            </li>

            {/* ACCEDER */}
            <li>
              <MRow
                title="Acceder"
                open={mobileSectionsOpen["Acceder"]}
                onToggle={() =>
                  setMobileSectionsOpen((s) => ({ ...s, Acceder: !s.Acceder }))
                }
              />
              <MCollapse open={mobileSectionsOpen["Acceder"]}>
                <div className="space-y-2">
                  {Object.keys(accederData).map((key) => (
                    <div key={key} className="space-y-2">
                      <SubRow
                        title={accederData[key].title}
                        open={mobileAccederOpen[key]}
                        onToggle={() =>
                          setMobileAccederOpen((s) => ({ ...s, [key]: !s[key] }))
                        }
                      />
                      <MCollapse open={mobileAccederOpen[key]}>
                        <h4 className="font-semibold">{accederData[key].title}</h4>
                        <p className="text-sm text-neutral-300">
                          {accederData[key].description}
                        </p>
                        <ul className="mt-2 space-y-2">
                          {accederData[key].details.map((d, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <FaShieldAlt className="text-hawkes-blue-400 mt-0.5 mr-2" />
                              <span className="text-neutral-200">{d}</span>
                            </li>
                          ))}
                        </ul>
                        <img
                          src={accederData[key].image}
                          alt={accederData[key].title}
                          className="mt-3 w-full max-h-44 object-contain border border-neutral-800"
                          loading="lazy"
                        />
                        <a
                          href={accederData[key].buttonLink}
                          className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-hawkes-blue-600 text-white rounded-md hover:bg-hawkes-blue-700 focus-visible:ring-2 focus-visible:ring-hawkes-blue-300"
                        >
                          {accederData[key].buttonText} <FaChevronRight aria-hidden="true" />
                        </a>
                      </MCollapse>
                    </div>
                  ))}
                </div>
              </MCollapse>
            </li>

            {/* PRODUCTOS */}
            <li>
              <MRow
                title="Productos"
                open={mobileSectionsOpen["Productos"]}
                onToggle={() =>
                  setMobileSectionsOpen((s) => ({ ...s, Productos: !s.Productos }))
                }
              />
              <MCollapse open={mobileSectionsOpen["Productos"]}>
                <h4 className="font-semibold">Productos</h4>
                <p className="text-sm text-neutral-300">
                  Esta parte está en configuración. Muy pronto podrás explorar nuestro catálogo de soluciones.
                </p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start text-neutral-200">
                    <FaShieldAlt className="text-hawkes-blue-400 mt-0.5 mr-2" /> Catálogo en preparación
                  </li>
                  <li className="flex items-start text-neutral-200">
                    <FaShieldAlt className="text-hawkes-blue-400 mt-0.5 mr-2" /> Integraciones y precios
                  </li>
                  <li className="flex items-start text-neutral-200">
                    <FaShieldAlt className="text-hawkes-blue-400 mt-0.5 mr-2" /> Demos y documentación
                  </li>
                </ul>
                <img
                  src={configuracionImg}
                  alt="Sección en configuración"
                  className="mt-3 w-full max-h-44 object-contain border border-neutral-800"
                  loading="lazy"
                />
                <div className="mt-3 inline-flex items-center justify-center w-full px-4 py-2 bg-neutral-800 text-neutral-300 border border-neutral-700 rounded-md cursor-not-allowed">
                  Muy pronto
                </div>
              </MCollapse>
            </li>

            {/* SOPORTE EN LÍNEA */}
            <li>
              <MRow
                title="Soporte en línea"
                open={mobileSectionsOpen["Soporte en línea"]}
                onToggle={() =>
                  setMobileSectionsOpen((s) => ({
                    ...s,
                    ["Soporte en línea"]: !s["Soporte en línea"],
                  }))
                }
              />
              <MCollapse open={mobileSectionsOpen["Soporte en línea"]}>
                <h4 className="font-semibold">Centro de Ayuda</h4>
                <p className="text-sm text-neutral-300">Guías, tutoriales y documentación.</p>
                <h4 className="text-lg font-semibold mt-2">Soporte Técnico</h4>
                <ul className="mt-1 space-y-1 text-sm text-neutral-300">
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
              </MCollapse>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
