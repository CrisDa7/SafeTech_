// src/pages/Contacto.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Enviando…" });
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // service_9u4w5c9
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // template_shulevi
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // om3lgx42D4GW0TEf0
      );
      setStatus({ type: "success", msg: "¡Gracias! Tu mensaje fue enviado." });
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", msg: "No se pudo enviar. Intenta nuevamente." });
    }
  };

  return (
    <section id="contacto" className="bg-safepalette-ink px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-safepalette-gold">
            Contáctanos
          </h2>
          <p className="mt-3 text-safepalette-white/80">
            Déjanos tus datos y te escribimos de inmediato.
          </p>
        </header>

        <div className="rounded-2xl bg-safepalette-surface border border-safepalette-edge shadow-goldglow p-6 md:p-8">
          <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
            {/* Variables ocultas */}
            <input type="hidden" name="title" value="Solicitud de contacto" />

            {/* Fila 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-safepalette-white/80">
                  Nombre de la escuela o establecimiento (opcional)
                </label>
                <input
                  name="school"
                  placeholder="Ej.: Unidad Educativa..."
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
              <div>
                <label className="text-sm text-safepalette-white/80">Ciudad *</label>
                <input
                  /* Mantengo name="state" para que llegue a {{state}} en tu template */
                  name="state"
                  required
                  placeholder="Ej.: Guayaquil"
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                />
              </div>
            </div>

            {/* Fila 2 */}
            <p className="pt-2 text-safepalette-white font-medium">Datos</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-safepalette-white/80">Rol (opcional)</label>
                <select
                  name="role"
                  defaultValue=""
                  className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold"
                >
                  <option value="" disabled>- Selecciona si aplica -</option>
                  <option>Docente</option>
                  <option>Directivo</option>
                  <option>Representante</option>
                  <option>Administrativo</option>
                </select>
              </div>
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

            {/* Fila 3 */}
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

            {/* (Se elimina el campo de Título del puesto) */}

            {/* Fila 4 */}
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
