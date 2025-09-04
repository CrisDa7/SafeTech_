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
  // ----- Estado principal -----
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Desktop
  const [scrolled, setScrolled] = useState(false);

  // Desktop tabs
  const [accederActiveOption, setAccederActiveOption] = useState("administrador");
  const [menuPrincipalActive, setMenuPrincipalActive] = useState("quienes");
  const [nosotrosActiveOption, setNosotrosActiveOption] = useState("mision");

  // Móvil: acordeones independientes (pueden abrirse varias a la vez)
  const [mobileSectionsOpen, setMobileSectionsOpen] = useState({
    Principal: false,
    Nosotros: false,
    Acceder: false,
    "Soporte en línea": false,
  });
  // Subacordeones móviles (varios abiertos)
  const [mobileNosotrosOpen, setMobileNosotrosOpen] = useState({
    mision: false,
    vision: false,
  });
  const [mobileAccederOpen, setMobileAccederOpen] = useState({
    administrador: false,
    padres: false,
    school: false,
  });

  const navRef = useRef(null);

  // ----- Data -----
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

  const menuItems = [
    { name: "Principal", isMenuPrincipal: true },
    { name: "Nosotros", isNosotros: true },
    { name: "Acceder", isAcceder: true },
    { name: "Soporte en línea", isSoporte: true },
  ];

  // ----- Efectos -----
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

  // ----- Helpers -----
  const isMdUp = () => window.matchMedia("(min-width: 768px)").matches;
  const toggleDropdown = (name) => {
    if (isMdUp()) {
      setActiveDropdown((prev) => (prev === name ? null : name));
    } else {
      // en móvil, controlamos por mobileSectionsOpen (multi-open)
      setMobileSectionsOpen((s) => ({ ...s, [name]: !s[name] }));
    }
  };

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

  // ---- UI: móvil (componentes pequeños) ----
  const MRow = ({ open, onToggle, title }) => (
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between text-left px-3 py-3 rounded-md bg-white/10 hover:bg-white/15"
      aria-expanded={open}
    >
      {/* 👇 Solo el título en azul de tu paleta */}
      <span className={`font-semibold ${open ? "text-safetech-300" : "text-safetech-400"}`}>
        {title}
      </span>
      <FaChevronDown
        className={`w-3 h-3 text-white transition-transform ${open ? "rotate-180" : ""}`}
        aria-hidden="true"
      />
    </button>
  );

  const MCollapse = ({ open, children }) => (
    <div className={`grid transition-all ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
      <div className="overflow-hidden">
        <div className="mt-2 bg-white text-gray-800 rounded-md shadow border border-gray-200 p-4">
          {children}
        </div>
      </div>
    </div>
  );

  // ============================================================
  //                          RENDER
  // ============================================================
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
            className="flex items-center gap-2 shrink-0"
            aria-label="SafeTech - Inicio"
          >
            <img
              src={scrolled ? logoBlanco : logoAzul}
              className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
              alt="Logo de SafeTech"
            />
            <span className="inline text-base md:text-2xl font-bold text-white">
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
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          {/* Menú desktop */}
          <div className="hidden md:flex">
            <ul className="flex items-center gap-2 lg:gap-4 font-medium" role="menubar">
              {[
                { name: "Principal", panel:
                  <PanelWrapper label="Menú Principal">
                    <div className="flex">
                      <div className="w-1/4 border-r border-gray-200">
                        <button
                          onMouseEnter={() => setMenuPrincipalActive("quienes")}
                          className={`w-full text-left p-5 ${menuPrincipalActive==="quienes"?"bg-blue-50 border-l-4 border-blue-600 text-blue-800":"hover:bg-gray-50 text-gray-700"}`}
                        >
                          ¿Quiénes somos?
                        </button>
                      </div>
                      <div className="w-2/4 p-6 border-r border-gray-200">
                        <h2 className="text-xl font-bold mb-3">{currentMenuPrincipalData.title}</h2>
                        <p className="text-gray-600 whitespace-pre-line">{currentMenuPrincipalData.description}</p>
                      </div>
                      <div className="w-1/4 bg-blue-50 p-6 flex items-center justify-center">
                        <img src={currentMenuPrincipalData.image} alt={currentMenuPrincipalData.title} className="max-h-48"/>
                      </div>
                    </div>
                  </PanelWrapper>
                },
                { name: "Nosotros", panel:
                  <PanelWrapper label="Menú Nosotros">
                    <div className="flex">
                      <div className="w-1/4 border-r border-gray-200">
                        {[
                          { key:"mision", label:"Misión" },
                          { key:"vision", label:"Visión" },
                        ].map(opt=>(
                          <button
                            key={opt.key}
                            onMouseEnter={()=>setNosotrosActiveOption(opt.key)}
                            className={`w-full text-left p-5 ${nosotrosActiveOption===opt.key?"bg-blue-50 border-l-4 border-blue-600 text-blue-800":"hover:bg-gray-50 text-gray-700"}`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                      <div className="w-2/4 p-6 border-r border-gray-200">
                        <h2 className="text-xl font-bold mb-3">{currentNosotrosData.title}</h2>
                        <p className="text-gray-600 mb-4">{currentNosotrosData.description}</p>
                        <ul className="space-y-2">
                          {currentNosotrosData.details.map((d,i)=>(
                            <li key={i} className="flex items-start">
                              <FaShieldAlt className="text-blue-500 mr-2 mt-1"/>{d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-1/4 bg-blue-50 p-6 flex items-center justify-center">
                        <img src={currentNosotrosData.image} alt={currentNosotrosData.title} className="max-h-48"/>
                      </div>
                    </div>
                  </PanelWrapper>
                },
                { name: "Acceder", panel:
                  <PanelWrapper label="Menú Acceder">
                    <div className="flex">
                      <div className="w-1/4 border-r border-gray-200">
                        {Object.keys(accederData).map((key)=>(
                          <button
                            key={key}
                            onMouseEnter={()=>setAccederActiveOption(key)}
                            className={`w-full text-left p-5 ${accederActiveOption===key?"bg-blue-50 border-l-4 border-blue-600 text-blue-800":"hover:bg-gray-50 text-gray-700"}`}
                          >
                            {accederData[key].title}
                          </button>
                        ))}
                      </div>
                      <div className="w-2/4 p-6 border-r border-gray-200">
                        <h2 className="text-xl font-bold mb-3">{currentAccederData.title}</h2>
                        <p className="text-gray-600 mb-4">{currentAccederData.description}</p>
                        <ul className="space-y-2">
                          {currentAccederData.details.map((d,i)=>(
                            <li key={i} className="flex items-start"><FaShieldAlt className="text-blue-500 mr-2 mt-1"/>{d}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-1/4 bg-blue-50 p-6 flex items-center justify-center">
                        <div className="w-36 h-36 bg-white shadow flex items-center justify-center p-4">
                          <img src={currentAccederData.image} alt={currentAccederData.title} className="max-h-full object-contain"/>
                        </div>
                        <a href={currentAccederData.buttonLink} className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                          {currentAccederData.buttonText} <FaChevronRight/>
                        </a>
                      </div>
                    </div>
                  </PanelWrapper>
                },
                { name: "Soporte en línea", panel:
                  <PanelWrapper label="Menú Soporte en línea">
                    <div className="flex">
                      <div className="w-1/3 p-6 border-r border-gray-200">
                        <h3 className="font-semibold">Centro de Ayuda</h3>
                        <p className="text-sm text-gray-600 mt-2">Guías, tutoriales y documentación.</p>
                      </div>
                      <div className="w-1/3 p-6 border-r border-gray-200">
                        <h3 className="font-semibold">Soporte Técnico</h3>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                          <li>✔ Preguntas frecuentes</li>
                          <li>✔ Tutoriales interactivos</li>
                          <li>✔ Reportar incidencias</li>
                        </ul>
                      </div>
                      <div className="w-1/3 p-6 bg-blue-50 flex flex-col items-center justify-center">
                        <a href="https://wa.me/593999047935" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-600 text-white rounded-md mb-2">WhatsApp</a>
                        <a href="mailto:soporte@safetech-ec.com" className="px-6 py-3 bg-red-600 text-white rounded-md flex items-center gap-2"><FaEnvelope/> Gmail</a>
                      </div>
                    </div>
                  </PanelWrapper>
                },
              ].map(({name, panel})=>(
                <li
                  key={name}
                  className="relative"
                  onMouseEnter={()=>isMdUp() && setActiveDropdown(name)}
                  onMouseLeave={()=>isMdUp() && setActiveDropdown(null)}
                >
                  <button onClick={()=>toggleDropdown(name)} className="flex items-center gap-1 px-3 py-2 text-white hover:text-blue-200 rounded-md">
                    {name}
                    <FaChevronDown className="w-3 h-3"/>
                  </button>
                  {activeDropdown===name && panel}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MÓVIL: acordeones multi-open */}
        <div className={`md:hidden origin-top transition-all ${menuOpen ? "max-h-[2200px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`} id="primary-menu">
          <ul className="flex flex-col gap-3 py-3" role="menu">
            {/* Principal */}
            <li>
              <MRow
                title="Principal"
                open={mobileSectionsOpen["Principal"]}
                onToggle={()=>setMobileSectionsOpen((s)=>({...s, Principal: !s.Principal}))}
              />
              <MCollapse open={mobileSectionsOpen["Principal"]}>
                <MRow
                  title="¿Quiénes somos?"
                  open={!!mobileSectionsOpen.__quienes}
                  onToggle={()=>setMobileSectionsOpen((s)=>({...s, __quienes: !s.__quienes}))}
                />
                <MCollapse open={!!mobileSectionsOpen.__quienes}>
                  <h4 className="font-semibold mb-2">{menuPrincipalData.quienes.title}</h4>
                  <p className="text-sm text-gray-700 whitespace-pre-line">{menuPrincipalData.quienes.description}</p>
                  <img src={menuPrincipalData.quienes.image} alt={menuPrincipalData.quienes.title} className="mt-3 w-full max-h-44 object-cover border border-gray-200"/>
                </MCollapse>
              </MCollapse>
            </li>

            {/* Nosotros */}
            <li>
              <MRow
                title="Nosotros"
                open={mobileSectionsOpen["Nosotros"]}
                onToggle={()=>setMobileSectionsOpen((s)=>({...s, Nosotros: !s.Nosotros}))}
              />
              <MCollapse open={mobileSectionsOpen["Nosotros"]}>
                {/* Misión */}
                <MRow
                  title="Misión"
                  open={mobileNosotrosOpen.mision}
                  onToggle={()=>setMobileNosotrosOpen((s)=>({...s, mision: !s.mision}))}
                />
                <MCollapse open={mobileNosotrosOpen.mision}>
                  <h4 className="font-semibold mb-2">{nosotrosData.mision.title}</h4>
                  <p className="text-sm text-gray-700">{nosotrosData.mision.description}</p>
                  <ul className="mt-2 space-y-2">
                    {nosotrosData.mision.details.map((d,i)=>(
                      <li key={i} className="flex items-start text-sm"><FaShieldAlt className="text-blue-500 mr-2 mt-0.5"/>{d}</li>
                    ))}
                  </ul>
                  <img src={nosotrosData.mision.image} alt="Misión" className="mt-3 w-full max-h-44 object-cover border border-gray-200"/>
                </MCollapse>

                {/* Visión */}
                <MRow
                  title="Visión"
                  open={mobileNosotrosOpen.vision}
                  onToggle={()=>setMobileNosotrosOpen((s)=>({...s, vision: !s.vision}))}
                />
                <MCollapse open={mobileNosotrosOpen.vision}>
                  <h4 className="font-semibold mb-2">{nosotrosData.vision.title}</h4>
                  <p className="text-sm text-gray-700">{nosotrosData.vision.description}</p>
                  <ul className="mt-2 space-y-2">
                    {nosotrosData.vision.details.map((d,i)=>(
                      <li key={i} className="flex items-start text-sm"><FaShieldAlt className="text-blue-500 mr-2 mt-0.5"/>{d}</li>
                    ))}
                  </ul>
                  <img src={nosotrosData.vision.image} alt="Visión" className="mt-3 w-full max-h-44 object-cover border border-gray-200"/>
                </MCollapse>
              </MCollapse>
            </li>

            {/* Acceder */}
            <li>
              <MRow
                title="Acceder"
                open={mobileSectionsOpen["Acceder"]}
                onToggle={()=>setMobileSectionsOpen((s)=>({...s, Acceder: !s.Acceder}))}
              />
              <MCollapse open={mobileSectionsOpen["Acceder"]}>
                {Object.keys(accederData).map((key)=>(
                  <div key={key} className="mb-2 last:mb-0">
                    <MRow
                      title={accederData[key].title}
                      open={mobileAccederOpen[key]}
                      onToggle={()=>setMobileAccederOpen((s)=>({...s, [key]: !s[key]}))}
                    />
                    <MCollapse open={mobileAccederOpen[key]}>
                      <h4 className="font-semibold">{accederData[key].title}</h4>
                      <p className="text-sm text-gray-700">{accederData[key].description}</p>
                      <ul className="mt-2 space-y-2">
                        {accederData[key].details.map((d,i)=>(
                          <li key={i} className="flex items-start text-sm"><FaShieldAlt className="text-blue-500 mr-2 mt-0.5"/>{d}</li>
                        ))}
                      </ul>
                      <img src={accederData[key].image} alt={accederData[key].title} className="mt-3 w-full max-h-44 object-contain border border-gray-200"/>
                      <a href={accederData[key].buttonLink} className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        {accederData[key].buttonText} <FaChevronRight/>
                      </a>
                    </MCollapse>
                  </div>
                ))}
              </MCollapse>
            </li>

            {/* Soporte en línea */}
            <li>
              <MRow
                title="Soporte en línea"
                open={mobileSectionsOpen["Soporte en línea"]}
                onToggle={()=>setMobileSectionsOpen((s)=>({...s, ["Soporte en línea"]: !s["Soporte en línea"]}))}
              />
              <MCollapse open={mobileSectionsOpen["Soporte en línea"]}>
                <h4 className="font-semibold">Centro de Ayuda</h4>
                <p className="text-sm text-gray-600">Guías, tutoriales y documentación.</p>
                <h4 className="font-semibold mt-3">Soporte Técnico</h4>
                <ul className="mt-1 space-y-1 text-sm text-gray-600">
                  <li>✔ Preguntas frecuentes</li>
                  <li>✔ Tutoriales interactivos</li>
                  <li>✔ Reportar incidencias</li>
                </ul>
                <div className="pt-3">
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
