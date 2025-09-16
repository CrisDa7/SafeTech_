// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaChevronDown, FaShieldAlt } from "react-icons/fa";

// Imágenes (con alias @)
import adminImg from "@/assets/admin.png";
import padresImg from "@/assets/padres.png";
import schoolImg from "@/assets/school.png";
import autobusImg from "@/assets/autobus.jpg";
import configuracionImg from "@/assets/configuracion.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // desktop
  const [scrolled, setScrolled] = useState(false);

  // Desktop (tabs)
  const [accederActiveOption, setAccederActiveOption] = useState("administrador");
  const [nosotrosActiveOption, setNosotrosActiveOption] = useState("quienes");

  // Móvil (drawer)
  const [mobileActiveSection, setMobileActiveSection] = useState(null);
  const [mobileSubKey, setMobileSubKey] = useState(null);

  const navRef = useRef(null);

  // Data
  const accederData = {
    administrador: {
      title: "Safe Conductor",
      description: "Herramientas simples y claras para conductores de transporte escolar.",
      details: [
        "Itinerarios y paradas al día.",
        "Alertas de ruta y mantenimiento.",
        "Comunicación directa con coordinación.",
      ],
      image: adminImg,
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
    },
  };
  const currentAccederData = accederData[accederActiveOption];

  const nosotrosData = {
    quienes: {
      title: "¿Quiénes somos?",
      description:
        "En SafeTech nos especializamos en el diseño e implementación de sistemas de seguridad de vanguardia.",
      details: [],
      image: autobusImg,
    },
    mision: {
      title: "Misión",
      description: "Brindar protección y tranquilidad a través de tecnología confiable y moderna",
      image: autobusImg,
    },
    vision: {
      title: "Visión",
      description: "Ser líderes en soluciones tecnológicas que inspiren seguridad y confianza.",
      image: autobusImg,
    },
  };
  const currentNosotrosData = nosotrosData[nosotrosActiveOption];

  const productosData = {
    estado: {
      title: "Productos",
      description:
        "Esta parte está en configuración. Muy pronto podrás explorar nuestro catálogo de soluciones.",
      details: ["Próximamente"],
      image: configuracionImg,
    },
  };

  // Solo estas secciones: Nosotros, Productos, Acceso
  const menuItems = [
    { name: "Nosotros", isNosotros: true },
    { name: "Productos", isProductos: true },
    { name: "Acceso", isAcceso: true },
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
        setMobileActiveSection(null);
        setMobileSubKey(null);
      }
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

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
      setMobileActiveSection((prev) => (prev === name ? null : name));
      setMobileSubKey(null);
    }
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileActiveSection(null);
    setMobileSubKey(null);
  };

  // ========== THEME helpers para escritorio (solo colores) ==========
  const PANEL_OUTER =
    "w-[min(92vw,920px)] bg-neutral-950 text-white shadow-2xl border border-white/10 overflow-hidden";
  const PANEL_COL_BORDER = "md:border-r border-white/10";
  const TAB_BASE = "w-full text-left p-5 transition";
  const TAB_ACTIVE = "bg-white/10 border-l-4 border-safepalette-gold"; // dorado
  const TAB_HOVER = "hover:bg-white/5";
  const MEDIA_BG = "bg-safepalette-gray/10"; // gris metálico muy tenue

  // Panel wrapper (desktop)
  const PanelWrapper = ({ children, label }) => (
    <div className="fixed inset-x-0 top-[56px] md:top-[64px] z-[60]" role="menu" aria-label={label}>
      <div className="mx-auto max-w-screen-xl px-4 flex justify-end">
        <div className={PANEL_OUTER}>{children}</div>
      </div>
    </div>
  );

  // ======================== RENDER ========================
  return (
    <nav
      ref={navRef}
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/80 py-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60"
          : "bg-transparent py-3"
      }`}
      aria-label="Barra de navegación principal"
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-14 items-center justify-between md:h-16">
          {/* Texto SafeTech (logo eliminado) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex min-w-0 shrink-0 cursor-pointer items-center gap-2 md:gap-3"
            aria-label="SafeTech - Inicio"
            role="button"
          >
            <span className="max-w-[40vw] truncate whitespace-nowrap text-lg font-extrabold text-white md:max-w-none md:text-2xl">
              SafeTech
            </span>
          </a>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-safepalette-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-safepalette-gold/50 md:hidden"
            aria-controls="mobile-drawer"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg
              className="h-6 w-6"
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
              className="flex items-center gap-2 font-medium lg:gap-4"
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
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-white hover:text-safepalette-gold focus-visible:ring-2 focus-visible:ring-safepalette-gold/50"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.name}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span className="text-sm lg:text-base">{item.name}</span>
                    <FaChevronDown className="h-3 w-3" aria-hidden="true" />
                  </button>

                  {/* Nosotros */}
                  {item.isNosotros && activeDropdown === "Nosotros" && (
                    <PanelWrapper label="Menú Nosotros">
                      <div className="flex flex-col md:flex-row">
                        {/* Tabs: quienes, mision, vision */}
                        <div className="border-b border-white/10 md:w-1/4 md:border-b-0 md:border-r">
                          {[
                            { key: "quienes", label: "¿Quiénes somos?" },
                            { key: "mision", label: "Misión" },
                            { key: "vision", label: "Visión" },
                          ].map((opt) => (
                            <button
                              key={opt.key}
                              onMouseEnter={() => setNosotrosActiveOption(opt.key)}
                              onFocus={() => setNosotrosActiveOption(opt.key)}
                              className={`${TAB_BASE} ${
                                nosotrosActiveOption === opt.key ? TAB_ACTIVE : TAB_HOVER
                              }`}
                            >
                              <span
                                className={`font-medium ${
                                  nosotrosActiveOption === opt.key
                                    ? "text-white"
                                    : "text-neutral-200"
                                }`}
                              >
                                {opt.label}
                              </span>
                            </button>
                          ))}
                        </div>

                        {/* Content */}
                        <div className={`p-6 ${PANEL_COL_BORDER} md:w-2/4`}>
                          <h2 className="mb-3 text-xl font-bold text-white lg:text-2xl">
                            {currentNosotrosData.title}
                          </h2>
                          <p className="mb-6 whitespace-pre-line text-neutral-200">
                            {currentNosotrosData.description}
                          </p>
                          {currentNosotrosData.details?.length > 0 && (
                            <ul className="space-y-3">
                              {currentNosotrosData.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start">
                                  <FaShieldAlt
                                    className="mt-1 mr-3 shrink-0 text-safepalette-gold"
                                    aria-hidden="true"
                                  />
                                  <span className="text-neutral-100">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* Media */}
                        <div
                          className={`${MEDIA_BG} flex items-center justify-center p-6 md:w-1/4`}
                        >
                          <img
                            src={currentNosotrosData.image}
                            alt={currentNosotrosData.title}
                            className="max-h-48 max-w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </PanelWrapper>
                  )}

                  {/* Acceso */}
                  {item.isAcceso && activeDropdown === "Acceso" && (
                    <PanelWrapper label="Menú Acceso">
                      <div className="flex flex-col md:flex-row">
                        <div className="border-b border-white/10 md:w-1/4 md:border-b-0 md:border-r">
                          {Object.keys(accederData).map((key) => (
                            <button
                              key={key}
                              onMouseEnter={() => setAccederActiveOption(key)}
                              onFocus={() => setAccederActiveOption(key)}
                              className={`${TAB_BASE} ${
                                accederActiveOption === key ? TAB_ACTIVE : TAB_HOVER
                              }`}
                            >
                              <span
                                className={`font-medium ${
                                  accederActiveOption === key
                                    ? "text-white"
                                    : "text-neutral-200"
                                }`}
                              >
                                {accederData[key].title}
                              </span>
                            </button>
                          ))}
                        </div>

                        <div className={`p-6 ${PANEL_COL_BORDER} md:w-2/4`}>
                          <h2 className="mb-3 text-xl font-bold text-white lg:text-2xl">
                            {currentAccederData.title}
                          </h2>
                          <p className="mb-6 text-neutral-200">
                            {currentAccederData.description}
                          </p>
                          <ul className="space-y-3">
                            {currentAccederData.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaShieldAlt
                                  className="mt-1 mr-3 shrink-0 text-safepalette-gold"
                                  aria-hidden="true"
                                />
                                <span className="text-neutral-100">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Solo imagen (sin botón) */}
                        <div
                          className={`${MEDIA_BG} flex items-center justify-center p-6 md:w-1/4`}
                        >
                          <div className="flex h-36 w-36 items-center justify-center border border-white/10 bg-neutral-950 p-4 shadow-md md:h-40 md:w-40">
                            <img
                              src={currentAccederData.image}
                              alt={currentAccederData.title}
                              className="max-h-full max-w-full object-contain"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </PanelWrapper>
                  )}

                  {/* Productos */}
                  {item.isProductos && activeDropdown === "Productos" && (
                    <PanelWrapper label="Menú Productos">
                      <div className="flex flex-col md:flex-row">
                        <div className={`p-6 ${PANEL_COL_BORDER} md:w-2/3`}>
                          <h2 className="mb-3 text-xl font-bold text-white lg:text-2xl">
                            {productosData.estado.title}
                          </h2>
                          <p className="mb-6 text-neutral-200">
                            {productosData.estado.description}
                          </p>
                          <ul className="space-y-3">
                            {productosData.estado.details.map((d, i) => (
                              <li key={i} className="flex items-start">
                                <FaShieldAlt
                                  className="mt-1 mr-3 shrink-0 text-safepalette-gold"
                                  aria-hidden="true"
                                />
                                <span className="text-neutral-100">{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div
                          className={`${MEDIA_BG} flex items-center justify-center p-6 md:w-1/3`}
                        >
                          <img
                            src={productosData.estado.image}
                            alt="Sección en configuración"
                            className="max-h-48 w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </PanelWrapper>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* =================== MÓVIL: DRAWER EN PORTAL =================== */}
      {menuOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <>
            {/* Backdrop global */}
            <div
              className={`fixed inset-0 z-[1000] transition ${
                menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              } bg-black/50 md:hidden`}
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            {/* Drawer global */}
            <aside
              id="mobile-drawer"
              className={`fixed right-0 top-0 z-[1001] h-full w-[88%] max-w-sm transform border-l border-white/10 bg-neutral-950 transition-transform duration-300 md:hidden ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Menú de SafeTech"
            >
              {/* Header del drawer */}
              <div className="flex h-14 items-center justify-between border-b border-white/10 px-4">
                <div className="flex items-center gap-2">
                  <span className="text-base font-extrabold text-white">SafeTech</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  type="button"
                  className="rounded-md p-2 text-neutral-200 hover:bg-white/10 hover:text-safepalette-gold"
                  aria-label="Cerrar menú"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* Lista principal (móvil) */}
              <ul className="h-[calc(100%-3.5rem)] space-y-2 overflow-y-auto px-2 py-3">
                {menuItems.map((item) => {
                  const open = mobileActiveSection === item.name;
                  return (
                    <li key={item.name} className="rounded-lg bg-white/10">
                      <button
                        type="button"
                        onClick={() => setMobileActiveSection(open ? null : item.name)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left"
                        aria-expanded={open}
                      >
                        <span
                          className={`font-medium ${
                            open ? "text-safepalette-gold" : "text-neutral-100"
                          }`}
                        >
                          {item.name}
                        </span>
                        <FaChevronDown
                          className={`h-4 w-4 transition-transform ${
                            open ? "rotate-180" : ""
                          } ${open ? "text-safepalette-gold" : "text-white"}`}
                          aria-hidden="true"
                        />
                      </button>

                      <div
                        className={`grid transition-all ${
                          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-3 px-4 pb-4">
                            {/* NOSOTROS */}
                            {item.isNosotros && (
                              <div className="space-y-2">
                                {[
                                  { key: "quienes", data: nosotrosData.quienes, label: "¿Quiénes somos?" },
                                  { key: "mision", data: nosotrosData.mision, label: "Misión" },
                                  { key: "vision", data: nosotrosData.vision, label: "Visión" },
                                ].map(({ key, data, label }) => (
                                  <div key={key}>
                                    <button
                                      type="button"
                                      className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-left text-sm text-white hover:bg-white/15"
                                      onClick={() => setMobileSubKey((k) => (k === key ? null : key))}
                                      aria-expanded={mobileSubKey === key}
                                    >
                                      {label}
                                    </button>
                                    <div
                                      className={`grid transition-all ${
                                        mobileSubKey === key ? "mt-2 grid-rows-[1fr]" : "grid-rows-[0fr]"
                                      }`}
                                    >
                                      <div className="overflow-hidden">
                                        <p className="text-sm text-neutral-200 whitespace-pre-line">
                                          {data.description}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* ACCESO */}
                            {item.isAcceso && (
                              <div className="space-y-3">
                                {Object.keys(accederData).map((key) => {
                                  const d = accederData[key];
                                  return (
                                    <div key={key} className="rounded-md border border-white/10 p-3">
                                      <div className="flex items-center gap-3">
                                        <img
                                          src={d.image}
                                          alt={d.title}
                                          className="h-12 w-12 bg-neutral-900 object-contain border border-white/10"
                                          loading="lazy"
                                        />
                                        <div className="min-w-0">
                                          <p className="text-sm font-medium text-white">{d.title}</p>
                                          <p className="line-clamp-2 text-xs text-neutral-200">
                                            {d.description}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {/* PRODUCTOS */}
                            {item.isProductos && (
                              <div className="space-y-2">
                                <p className="text-sm text-neutral-200">
                                  {productosData.estado.description}
                                </p>
                                <ul className="space-y-1 text-sm">
                                  {productosData.estado.details.map((d, i) => (
                                    <li key={i} className="flex items-start text-neutral-100">
                                      <FaShieldAlt className="mr-2 mt-0.5 text-safepalette-gold" /> {d}
                                    </li>
                                  ))}
                                </ul>
                                <img
                                  src={productosData.estado.image}
                                  alt="Sección en configuración"
                                  className="mt-2 w-full max-h-40 border border-white/10 object-contain"
                                  loading="lazy"
                                />
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
          </>,
          document.body
        )}
    </nav>
  );
}
