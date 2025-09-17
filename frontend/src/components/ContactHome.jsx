// src/components/ContactHome.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactHome() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    // honeypot: si viene con valor, ignoramos envío
    if (e.currentTarget?.elements?.bot_field?.value) {
      setStatus({ type: "success", msg: "Gracias, recibido." });
      return;
    }

    setStatus({ type: "loading", msg: "Enviando…" });

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_HOME ||
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus({ type: "success", msg: "¡Gracias! Tu mensaje fue enviado." });
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", msg: "No se pudo enviar. Intenta nuevamente." });
    }
  };

  const clearStatusOnInput = () => {
    if (status.type !== "idle") setStatus({ type: "idle", msg: "" });
  };

  return (
    <section id="contacto-home" className="bg-safepalette-ink px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-safepalette-gold">
            Contáctanos
          </h2>
          <p className="mt-3 text-safepalette-white/80">
            Déjanos tus datos y cuéntanos en qué podemos ayudarte.
          </p>
        </header>

        {/* Tarjeta con degradado sutil y borde de tu paleta */}
        <div className="rounded-2xl border border-safepalette-edge shadow-goldglow p-6 md:p-8 bg-gradient-to-b from-safepalette-surface via-safepalette-surface/90 to-safepalette-ink">
          <form ref={formRef} onSubmit={onSubmit} onInput={clearStatusOnInput} className="space-y-6">
            {/* Variables ocultas */}
            <input type="hidden" name="title" value="Solicitud de contacto (Home)" />

            {/* Honeypot anti-bots (oculto visualmente) */}
            <div className="hidden" aria-hidden="true">
              <label>
                No llenar este campo:
                <input name="bot_field" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            {/* Ubicación */}
            <div>
              <label htmlFor="state" className="text-sm text-safepalette-white/80">Ciudad / Provincia *</label>
              <input
                id="state"
                name="state"
                required
                placeholder="Ej.: Guayaquil"
                autoComplete="address-level2"
                className="mt-1 w-full rounded-xl border border-safepalette-edge bg-safepalette-ink/40 text-safepalette-white placeholder-safepalette-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
              />
            </div>

            {/* Información del solicitante */}
            <p className="pt-2 text-safepalette-white font-medium">Tus datos</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="text-sm text-safepalette-white/80">Nombre *</label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="Nombre"
                  autoComplete="given-name"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-safepalette-ink/40 text-safepalette-white placeholder-safepalette-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-sm text-safepalette-white/80">Apellido *</label>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Apellido"
                  autoComplete="family-name"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-safepalette-ink/40 text-safepalette-white placeholder-safepalette-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="text-sm text-safepalette-white/80">E-mail *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="correo@dominio.com"
                  autoComplete="email"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-safepalette-ink/40 text-safepalette-white placeholder-safepalette-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm text-safepalette-white/80">Número de teléfono *</label>
                <input
                  id="phone"
                  name="phone"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="09xxxxxxxx"
                  pattern="^\+?\d[\d\s-]{7,}$"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-safepalette-ink/40 text-safepalette-white placeholder-safepalette-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="text-sm text-safepalette-white/80">¿Cómo podemos ayudarle? *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Cuéntenos brevemente su necesidad…"
                className="mt-1 w-full rounded-xl border border-safepalette-edge bg-safepalette-ink/40 text-safepalette-white placeholder-safepalette-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
              />
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-safepalette-gold text-safepalette-blue px-6 py-3 font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-safepalette-gold/40 disabled:cursor-not-allowed"
              >
                {status.type === "loading" ? "Enviando…" : "Enviar mensaje"}
              </button>
            </div>

            {/* Estado */}
            {status.type !== "idle" && (
              <p
                role="status"
                className={
                  "text-sm " +
                  (status.type === "success"
                    ? "text-green-400"
                    : status.type === "error"
                    ? "text-red-400"
                    : "text-safepalette-white/60")
                }
              >
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
