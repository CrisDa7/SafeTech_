// Footer.jsx
import React from "react";
import {
  FaFacebookF, FaEnvelope, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/negro.png";

export default function Footer() {
  const WRAP = "mx-auto w-full max-w-7xl px-4";
  const HEADING = "mb-4 text-base md:text-lg font-semibold uppercase border-b border-pavlova-700 pb-2";
  const LINK_FOOT =
    "text-pavlova-100 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pavlova-300/70 rounded";
  const ICON_BTN =
    "inline-flex h-9 w-9 items-center justify-center bg-pavlova-800 text-white hover:text-pavlova-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pavlova-300/70 rounded-full";
  const year = new Date().getFullYear();

  // JSON-LD (SEO)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SafeTech",
    "url": "https://safetech-ec.com",
    "logo": "https://safetech-ec.com/assets/negro.png",
    "sameAs": [
      "https://facebook.com",
      "https://tiktok.com",
      "mailto:soporte@safetech-ec.com",
      "https://wa.me/593999047935"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Quito",
      "addressCountry": "EC"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "soporte@safetech-ec.com",
      "telephone": "+593999047935",
      "areaServed": "EC",
      "availableLanguage": ["es"]
    }]
  };

  return (
    <footer className="bg-pavlova-900 text-white" aria-labelledby="footer-heading" role="contentinfo">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      <div className={`${WRAP} py-12 lg:py-16`}>
        <h2 id="footer-heading" className="sr-only">Información y enlaces de SafeTech</h2>

        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <section aria-labelledby="footer-brand">
            <div className="mb-6 flex items-center gap-3">
              <a href="/" className="flex items-center gap-3" aria-label="Ir al inicio">
                <img src={logo} alt="Logo de SafeTech" className="h-12 w-auto object-contain" loading="lazy" width={140} height={48} />
                <span className="text-2xl font-bold">SafeTech</span>
              </a>
            </div>
            <p className="max-w-xs text-pavlova-100">
              Transformando la seguridad escolar a través de la innovación tecnológica en Ecuador.
            </p>

            {/* Social */}
            <div className="mt-5 flex items-center gap-3" aria-label="Redes sociales">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className={ICON_BTN} aria-label="Facebook">
                <FaFacebookF className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="mailto:soporte@safetech-ec.com" className={ICON_BTN} aria-label="Enviar correo">
                <FaEnvelope className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className={ICON_BTN} aria-label="TikTok">
                <FaTiktok className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://wa.me/593999047935" target="_blank" rel="noreferrer" className={ICON_BTN} aria-label="WhatsApp">
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* Enlaces rápidos */}
          <nav aria-labelledby="footer-quicklinks">
            <h3 id="footer-quicklinks" className={HEADING}>Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className={LINK_FOOT}>Inicio</a></li>
              <li><a href="#nosotros" className={LINK_FOOT}>Nosotros</a></li>
              <li><a href="#servicios" className={LINK_FOOT}>Servicios</a></li>
              <li><a href="#contacto" className={LINK_FOOT}>Contacto</a></li>
            </ul>
          </nav>

          {/* Servicios */}
          <nav aria-labelledby="footer-services">
            <h3 id="footer-services" className={HEADING}>Nuestros Servicios</h3>
            <ul className="space-y-3">
              <li><a href="/safe-administrador" className={LINK_FOOT}>Safe Administrador</a></li>
              <li><a href="/safe-school" className={LINK_FOOT}>Safe School</a></li>
              <li><a href="/safe-padres" className={LINK_FOOT}>Safe Padres</a></li>
            </ul>
          </nav>

          {/* Contacto */}
          <address aria-labelledby="footer-contact" className="not-italic">
            <h3 id="footer-contact" className={HEADING}>Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-pavlova-300" aria-hidden="true" />
                <span className="text-pavlova-100">Quito, Ecuador</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-pavlova-300" aria-hidden="true" />
                <a href="mailto:soporte@safetech-ec.com" className={LINK_FOOT}>soporte@safetech-ec.com</a>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-pavlova-300" aria-hidden="true" />
                <a href="tel:+593999047935" className={LINK_FOOT}>+593 999 047 935</a>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-pavlova-300" aria-hidden="true" />
                <a href="https://wa.me/593999047935" target="_blank" rel="noreferrer" className={LINK_FOOT} aria-label="Contactar por WhatsApp">
                  WhatsApp
                </a>
              </li>
            </ul>
          </address>
        </div>

        <hr className="my-8 border-pavlova-700" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-sm text-pavlova-200">© {year} CK Systems. Todos los derechos reservados.</span>
          <ul className="flex items-center gap-6">
            <li><a href="https://safetech-ec.com/politica-de-privacidad" className="text-sm text-pavlova-200 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pavlova-300/70 rounded">Política de Privacidad</a></li>
            <li><a href="https://safetech-ec.com/terminos" className="text-sm text-pavlova-200 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pavlova-300/70 rounded">Términos y Condiciones</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
