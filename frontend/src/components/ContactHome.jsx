// src/components/ContactHome.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactHome() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Enviando…" });

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_HOME ||
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // fallback si quieres
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

        <div className="rounded-2xl bg-safepalette-surface border border-safepalette-edge shadow-goldglow p-6 md:p-8">
          <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
            {/* Variables ocultas */}
            <input type="hidden" name="title" value="Solicitud de contacto (Home)" />

            {/* Ubicación */}
            <div>
              <label className="text-sm text-safepalette-white/80">Ciudad / Provincia *</label>
              <input
                name="state"
                required
                placeholder="Ej.: Guayaquil"
                className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
              />
            </div>

            {/* Información del solicitante */}
            <p className="pt-2 text-safepalette-white font-medium">Tus datos</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-safepalette-white/80">Nombre *</label>
                <input
                  name="firstName"
                  required
                  placeholder="Nombre"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
              <div>
                <label className="text-sm text-safepalette-white/80">Apellido *</label>
                <input
                  name="lastName"
                  required
                  placeholder="Apellido"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-safepalette-white/80">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="correo@dominio.com"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
              <div>
                <label className="text-sm text-safepalette-white/80">Número de teléfono *</label>
                <input
                  name="phone"
                  required
                  placeholder="09xxxxxxxx"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label className="text-sm text-safepalette-white/80">¿Cómo podemos ayudarle? *</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Cuéntenos brevemente su necesidad…"
                className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-safepalette-gold text-black px-6 py-3 font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-safepalette-gold/40 disabled:cursor-not-allowed"
              >
                {status.type === "loading"
                  ? "Enviando…"
                  : "Enviar mensaje"}
              </button>
            </div>

            {status.type !== "idle" && (
              <p
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
