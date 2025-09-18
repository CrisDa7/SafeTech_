// src/components/globales/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  FaChevronDown,
  FaShieldAlt,
  FaBusAlt,
  FaBuilding,
  FaHome,
  FaStar,
} from "react-icons/fa";

// Imágenes
import logoAndroide from "@/assets/logoAndroide.png";
import autobusImg from "@/assets/autobus.jpg";
import configuracionImg from "@/assets/configuracion.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Desktop (tabs)
  const [nosotrosActiveOption, setNosotrosActiveOption] = useState("quienes");

  // Móvil (drawer)
  const [mobileActiveSection, setMobileActiveSection] = useState(null);
  const [mobileSubKey, setMobileSubKey] = useState(null);

  const navRef = useRef(null);

  // ======= DATA =======
  const accederData = {
    safeschool: {
      title: "Safe School",
      description:
        "Plataforma de seguridad y coordinación para instituciones educativas.",
      details: [
        "Monitoreo en vivo del transporte escolar.",
        "Alertas de llegada y salida.",
        "Reportes y trazabilidad para la coordinación.",
      ],
      image: logoAndroide, // tu logo
      ctaText: "Acceder",
      ctaHref: "#",
    },
  };
  const currentAccederData = accederData.safeschool;

  const nosotrosData = {
    quienes: {
      title: "¿Quiénes somos?",
      description:
        "En Safe Tech nos especializamos en el diseño e implementación de sistemas de seguridad de vanguardia. Nuestra misión es brindar protección y tranquilidad a través de tecnología confiable y moderna.\n\nNuestro expertise se centra en:",
      details: [
        {
          icon: <FaBusAlt className="text-safepalette-gold mt-1 mr-3" />,
          text: "Seguridad para Transporte: Soluciones de geolocalización avanzadas, monitoreo en tiempo real y gestión de flotas para transporte institucional, empresarial y particular.",
        },
        {
          icon: <FaBuilding className="text-safepalette-gold mt-1 mr-3" />,
          text: "Seguridad Empresarial y Comercial: Sistemas integrales para oficinas, fábricas, bodegas y restaurantes, incluyendo videovigilancia, control de acceso y alarmas.",
        },
        {
          icon: <FaHome className="text-safepalette-gold mt-1 mr-3" />,
          text: "Seguridad Residencial y Personal: Protección para hogares y familias con tecnología fácil de usar y efectiva.",
        },
        {
          icon: <FaStar className="text-safepalette-gold mt-1 mr-3" />,
          text: "Integramos innovación y servicio para crear un entorno más seguro para nuestros clientes.",
        },
      ],
      image: autobusImg,
    },
    mision: {
      title: "Misión",
      description:
        "Brindar protección y tranquilidad a través de tecnología confiable y moderna",
      image: autobusImg,
    },
    vision: {
      title: "Visión",
      description:
        "Ser líderes en soluciones tecnológicas que inspiren seguridad y confianza.",
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

  const menuItems = [
    { name: "Nosotros", isNosotros: true },
    { name: "Productos", isProductos: true },
    { name: "Acceso", isAcceso: true },
  ];

  // ======= Helpers & efectos =======
  const isMdUp = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px)").matches;

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
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

  useEffect(() => {
    const onClickAway = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, []);

  // ======= Toggles =======
  const toggleDropdown = (name) => {
    if (isMdUp()) {
      setActiveDropdown((prev) => (prev === name ? null : name));
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

  // ======= Estilos helpers =======
  const PANEL_OUTER =
    "w-[min(92vw,920px)] bg-safepalette-ink text-safepalette-white shadow-2xl border border-safepalette-edge overflow-hidden";
  const PANEL_COL_BORDER = "md:border-r border-safepalette-edge";
  const TAB_BASE =
    "w-full text-left p-5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-safepalette-gold/50";
  const TAB_ACTIVE =
    "bg-safepalette-white/10 border-l-4 border-safepalette-gold";
  const TAB_HOVER = "hover:bg-safepalette-white/5";
  const MEDIA_BG = "bg-safepalette-gray/10";
  const BTN_PRIMARY =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold bg-safepalette-gold text-safepalette-blue hover:brightness-110 transition shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-safepalette-gold/50";

  const PanelWrapper = ({ children, label }) => (
    <div
      className="fixed inset-x-0 top-[56px] md:top-[64px] z-[60]"
      role="menu"
      aria-label={label}
    >
      <div className="mx-auto max-w-screen-xl px-4 flex justify-end">
        <div className={PANEL_OUTER}>{children}</div>
      </div>
    </div>
  );

  // ======= Render =======
  return (
    <nav
      ref={navRef}
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-safepalette-ink/80 py-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-safepalette-ink/60"
          : "bg-transparent py-3"
      }`}
      aria-label="Barra de navegación principal"
    >
      <a
        href="#primary-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-safepalette-gold text-safepalette-blue px-3 py-1 rounded"
      >
        Saltar al contenido
      </a>

      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-14 items-center justify-between md:h-16">
          {/* Marca */}
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
            <span className="max-w-[40vw] truncate whitespace-nowrap text-lg font-extrabold text-safepalette-white md:max-w-none md:text-2xl">
              SafeTech
            </span>
          </a>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-safepalette-white hover:text-safepalette-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-safepalette-gold/50 md:hidden"
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
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-safepalette-white hover:text-safepalette-gold focus-visible:ring-2 focus-visible:ring-safepalette-gold/50"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.name}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span className="text-sm lg:text-base">{item.name}</span>
                    <FaChevronDown className="h-3 w-3" aria-hidden="true" />
                  </button>

                  {/* ====== NOSOTROS ====== */}
                  {item.isNosotros && activeDropdown === "Nosotros" && (
                    <PanelWrapper label="Menú Nosotros">
                      <div className="flex flex-col md:flex-row">
                        {/* Tabs */}
                        <div className="border-b border-safepalette-edge md:w-1/4 md:border-b-0 md:border-r">
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
                                    ? "text-safepalette-white"
                                    : "text-safepalette-white/80"
                                }`}
                              >
                                {opt.label}
                              </span>
                            </button>
                          ))}
                        </div>

                        {/* Content */}
                        <div className={`p-6 ${PANEL_COL_BORDER} md:w-2/4`}>
                          <h2 className="mb-3 text-xl font-bold text-safepalette-white lg:text-2xl">
                            {currentNosotrosData.title}
                          </h2>
                          <p className="mb-4 whitespace-pre-line text-safepalette-white/80 leading-relaxed">
                            {currentNosotrosData.description}
                          </p>
                          {currentNosotrosData.details?.length > 0 && (
                            <ul className="space-y-4">
                              {currentNosotrosData.details.map((d, i) => (
                                <li
                                  key={i}
                                  className="flex items-start text-safepalette-white/90 leading-snug"
                                >
                                  {d.icon}
                                  <span>{d.text}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* Media */}
                        <div className="flex items-center justify-center p-6 md:w-1/4">
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

                  {/* ====== ACCESO (Solo Safe School) ====== */}
                  {item.isAcceso && activeDropdown === "Acceso" && (
                    <PanelWrapper label="Menú Acceso">
                      <div className="flex flex-col md:flex-row">
                        {/* Contenido */}
                        <div className={`p-6 ${PANEL_COL_BORDER} md:w-2/3`}>
                          <h2 className="mb-3 text-xl font-bold text-safepalette-white lg:text-2xl">
                            {currentAccederData.title}
                          </h2>
                          <p className="mb-6 text-safepalette-white/80">
                            {currentAccederData.description}
                          </p>
                          <ul className="mb-6 space-y-3">
                            {currentAccederData.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaShieldAlt
                                  className="mt-1 mr-3 shrink-0 text-safepalette-gold"
                                  aria-hidden="true"
                                />
                                <span className="text-safepalette-white/90">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <a
                            href={currentAccederData.ctaHref}
                            className={BTN_PRIMARY}
                            aria-label="Acceder a Safe School"
                          >
                            {currentAccederData.ctaText}
                          </a>
                        </div>

                        {/* Imagen limpia, sin fondos ni bordes */}
                        <div className="flex items-center justify-center p-6 md:w-1/3">
                          <img
                            src={currentAccederData.image}
                            alt={currentAccederData.title}
                            className="max-h-48 w-auto object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </PanelWrapper>
                  )}

                  {/* ====== PRODUCTOS (restaurado) ====== */}
                  {item.isProductos && activeDropdown === "Productos" && (
                    <PanelWrapper label="Menú Productos">
                      <div className="flex flex-col md:flex-row">
                        <div className={`p-6 ${PANEL_COL_BORDER} md:w-2/3`}>
                          <h2 className="mb-3 text-xl font-bold text-safepalette-white lg:text-2xl">
                            {productosData.estado.title}
                          </h2>
                          <p className="mb-6 text-safepalette-white/80">
                            {productosData.estado.description}
                          </p>
                          <ul className="space-y-3">
                            {productosData.estado.details.map((d, i) => (
                              <li key={i} className="flex items-start">
                                <FaShieldAlt
                                  className="mt-1 mr-3 shrink-0 text-safepalette-gold"
                                  aria-hidden="true"
                                />
                                <span className="text-safepalette-white/90">{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className={`${MEDIA_BG} flex items-center justify-center p-6 md:w-1/3`}>
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

      {/* =================== MÓVIL: DRAWER =================== */}
      {menuOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className={`fixed inset-0 z-[1000] transition ${
                menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              } bg-safepalette-ink/70 md:hidden`}
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            {/* Drawer */}
            <aside
              id="mobile-drawer"
              className={`fixed right-0 top-0 z-[1001] h-full w-[88%] max-w-sm transform border-l border-safepalette-edge bg-safepalette-ink transition-transform duration-300 md:hidden ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Menú de SafeTech"
            >
              {/* Header */}
              <div className="flex h-14 items-center justify-between border-b border-safepalette-edge px-4">
                <div className="flex items-center gap-2">
                  <span className="text-base font-extrabold text-safepalette-white">SafeTech</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  type="button"
                  className="rounded-md p-2 text-safepalette-white/80 hover:bg-safepalette-white/10 hover:text-safepalette-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-safepalette-gold/50"
                  aria-label="Cerrar menú"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                    <li key={item.name} className="rounded-lg bg-safepalette-white/10">
                      <button
                        type="button"
                        onClick={() => setMobileActiveSection(open ? null : item.name)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-safepalette-gold/50"
                        aria-expanded={open}
                      >
                        <span
                          className={`font-medium ${
                            open ? "text-safepalette-gold" : "text-safepalette-white/90"
                          }`}
                        >
                          {item.name}
                        </span>
                        <FaChevronDown
                          className={`h-4 w-4 transition-transform ${
                            open ? "rotate-180" : ""
                          } ${open ? "text-safepalette-gold" : "text-safepalette-white"}`}
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
                                  <div key={key} className="rounded-md border border-safepalette-edge p-3">
                                    <button
                                      type="button"
                                      className="w-full text-left text-sm text-safepalette-white"
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
                                        <p className="text-sm text-safepalette-white/80 whitespace-pre-line leading-relaxed">
                                          {data.description}
                                        </p>
                                        {data.details?.length > 0 && (
                                          <ul className="mt-2 space-y-2">
                                            {data.details.map((d, i) => (
                                              <li key={i} className="flex items-start text-sm text-safepalette-white/90">
                                                {d.icon}
                                                <span>{d.text}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* ACCESO — SOLO SAFE SCHOOL */}
                            {item.isAcceso && (
                              <div className="rounded-md border border-safepalette-edge p-3">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={currentAccederData.image}
                                    alt={currentAccederData.title}
                                    className="h-12 w-12 object-contain"
                                    loading="lazy"
                                  />
                                  <div className="min-w-0">
                                    <p className="text-sm font-medium text-safepalette-white">
                                      {currentAccederData.title}
                                    </p>
                                    <p className="line-clamp-2 text-xs text-safepalette-white/80">
                                      {currentAccederData.description}
                                    </p>
                                  </div>
                                </div>

                                <ul className="mt-3 space-y-2">
                                  {currentAccederData.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start text-sm">
                                      <FaShieldAlt className="mr-2 mt-0.5 text-safepalette-gold" aria-hidden="true" />
                                      <span className="text-safepalette-white/90">{detail}</span>
                                    </li>
                                  ))}
                                </ul>

                                <div className="mt-4">
                                  <a
                                    href={currentAccederData.ctaHref}
                                    className={BTN_PRIMARY}
                                    aria-label="Acceder a Safe School"
                                  >
                                    {currentAccederData.ctaText}
                                  </a>
                                </div>
                              </div>
                            )}

                            {/* PRODUCTOS */}
                            {item.isProductos && (
                              <div className="rounded-md border border-safepalette-edge p-3">
                                <p className="text-sm text-safepalette-white/80">
                                  {productosData.estado.description}
                                </p>
                                <ul className="mt-2 space-y-1 text-sm">
                                  {productosData.estado.details.map((d, i) => (
                                    <li key={i} className="flex items-start text-safepalette-white/90">
                                      <FaShieldAlt className="mr-2 mt-0.5 text-safepalette-gold" aria-hidden="true" />
                                      {d}
                                    </li>
                                  ))}
                                </ul>
                                <img
                                  src={productosData.estado.image}
                                  alt="Sección en configuración"
                                  className="mt-3 w-full max-h-40 object-contain"
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
