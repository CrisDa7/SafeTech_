// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF, FaEnvelope, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import logoFlotante from "@/assets/logoFlotante.png"; // <- NUEVO: reemplaza al anterior logoNavbar.png

export default function Footer() {
  const year = new Date().getFullYear();

  // Utilitarias (alineadas a safepalette)
  const WRAP = "mx-auto w-full max-w-7xl px-4";
  const HEADING =
    "mb-4 text-base md:text-lg font-semibold uppercase border-b pb-2 border-safepalette-edge/40 text-safepalette-white";
  const LINK_FOOT =
    "text-safepalette-white/80 hover:text-safepalette-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-safepalette-gold/60 rounded";
  const ICON_BTN =
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-safepalette-edge/40 bg-safepalette-white/5 text-safepalette-white/80 " +
    "hover:text-safepalette-gold hover:border-safepalette-gold/60 hover:bg-safepalette-white/10 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-safepalette-gold/60";

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
    <footer
      className="
        text-safepalette-white relative
        bg-gradient-to-b
        from-safepalette-ink
        via-safepalette-surface
        to-safepalette-ink
      "
      aria-labelledby="footer-heading"
      role="contentinfo"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      <div className={`${WRAP} py-12 lg:py-16`}>
        <h2 id="footer-heading" className="sr-only">Información y enlaces de SafeTech</h2>

        {/* 3 columnas (quitamos Enlaces Rápidos) */}
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Marca */}
          <section aria-labelledby="footer-brand">
            <div className="mb-6 flex items-center gap-3">
              <a href="/" className="flex items-center gap-3" aria-label="Ir al inicio">
                <img
                  src={logoFlotante}                // <- NUEVO: usa logoFlotante
                  alt="Logo de SafeTech"
                  className="h-14 md:h-16 w-auto object-contain" // un poco más grande
                  loading="lazy"
                  width={160}
                  height={56}
                />
                <span className="text-2xl font-bold">SafeTech</span>
              </a>
            </div>
            <p className="max-w-xs text-safepalette-white/80">
              Transformando la seguridad escolar a través de la innovación tecnológica en Ecuador.
            </p>

            {/* Social */}
            <div className="mt-5 flex items-center gap-3" aria-label="Redes sociales">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={ICON_BTN} aria-label="Facebook">
                <FaFacebookF className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="mailto:soporte@safetech-ec.com" className={ICON_BTN} aria-label="Enviar correo">
                <FaEnvelope className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={ICON_BTN} aria-label="TikTok">
                <FaTiktok className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://wa.me/593999047935" target="_blank" rel="noopener noreferrer" className={ICON_BTN} aria-label="WhatsApp">
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* Servicios */}
          <section aria-labelledby="footer-services">
            <h3 id="footer-services" className={HEADING}>Nuestros Servicios</h3>
            <ul className="space-y-3">
              <li><span className="block text-safepalette-white/80">Safe Conductor</span></li>
              <li><span className="block text-safepalette-white/80">Safe School</span></li>
              <li><span className="block text-safepalette-white/80">Safe Padres</span></li>
            </ul>
          </section>

          {/* Contacto */}
          <address aria-labelledby="footer-contact" className="not-italic">
            <h3 id="footer-contact" className={HEADING}>Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-safepalette-gold" aria-hidden="true" />
                <span className="text-safepalette-white/80">Quito, Ecuador</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-safepalette-gold" aria-hidden="true" />
                <a href="mailto:soporte@safetech-ec.com" className={LINK_FOOT}>soporte@safetech-ec.com</a>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-safepalette-gold" aria-hidden="true" />
                <a href="tel:+593999047935" className={LINK_FOOT}>+593 999 047 935</a>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-safepalette-gold" aria-hidden="true" />
                <a
                  href="https://wa.me/593999047935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK_FOOT}
                  aria-label="Contactar por WhatsApp"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </address>
        </div>

        <hr className="my-8 border-safepalette-edge/40" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-sm text-safepalette-white/70">© {year} CK Systems. Todos los derechos reservados.</span>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="https://safetech-ec.com/politica-de-privacidad"
                className="text-sm text-safepalette-white/80 hover:text-safepalette-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-safepalette-gold/60 rounded"
              >
                Política de Privacidad
              </a>
            </li>
            <li>
              <a
                href="https://safetech-ec.com/terminos"
                className="text-sm text-safepalette-white/80 hover:text-safepalette-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-safepalette-gold/60 rounded"
              >
                Términos y Condiciones
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
