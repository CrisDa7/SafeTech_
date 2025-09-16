import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/*
⚙️ Configura EmailJS y variables de entorno:
1) npm i emailjs-com
2) Crea cuenta en https://www.emailjs.com/, añade un Email Service (Gmail/SMTP),
   crea un Email Template con estos campos: school, state, role, firstName, lastName,
   email, phone, jobTitle, message.
3) Copia tus IDs y colócalos en .env:
   VITE_EMAILJS_SERVICE_ID=xxxxx
   VITE_EMAILJS_TEMPLATE_ID=xxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxx
4) Reinicia el dev server.
*/

export default function Contacto() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Enviando…" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Datos extras para enviar copia a un correo fijo
      const toEmail = "davidajila07@gmail.com"; // destino solicitado

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
        // Variables adicionales que puedes mapear en tu template
        to_email: toEmail,
      });

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
          <h2 className="text-4xl md:text-5xl font-bold text-safepalette-white">
            Ponte en <span className="text-safepalette-gold">Contacto</span>
          </h2>
          <p className="mt-3 text-safepalette-white/80">
            Déjanos tus datos y te escribimos de inmediato.
          </p>
        </header>

        <div className="rounded-2xl bg-safepalette-surface border border-safepalette-edge shadow-goldglow p-6 md:p-8">
          <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
            {/* Fila 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-safepalette-white/80">* Nombre de la escuela o distrito</label>
                <input name="school" required placeholder="Nombre de la escuela o distrito" className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold" />
              </div>
              <div>
                <label className="text-sm text-safepalette-white/80">Estado o país</label>
                <input name="state" placeholder="Estado o país" className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold" />
              </div>
            </div>

            <p className="pt-2 text-safepalette-white font-medium">Información para miembros del personal</p>

            {/* Fila 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-safepalette-white/80">Rol</label>
                <select name="role" defaultValue="" className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold">
                  <option value="" disabled>
                    - Por favor, elige -
                  </option>
                  <option>Docente</option>
                  <option>Directivo</option>
                  <option>Representante</option>
                  <option>Administrativo</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-safepalette-white/80">* Nombre</label>
                <input name="firstName" required placeholder="Nombre" className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold" />
              </div>
              <div>
                <label className="text-sm text-safepalette-white/80">* Apellido</label>
                <input name="lastName" required placeholder="Apellido" className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold" />
              </div>
            </div>

            {/* Fila 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-safepalette-white/80">* E‑mail</label>
                <input type="email" name="email" required placeholder="correo@dominio.com" className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold" />
              </div>
              <div>
                <label className="text-sm text-safepalette-white/80">Número de teléfono</label>
                <input name="phone" placeholder="09xxxxxxxx" className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold" />
              </div>
            </div>

            {/* Fila 4 */}
            <div>
              <label className="text-sm text-safepalette-white/80">Título del puesto en la escuela o distrito</label>
              <input name="jobTitle" placeholder="Ej.: Coordinador académico" className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold" />
            </div>

            {/* Fila 5 */}
            <div>
              <label className="text-sm text-safepalette-white/80">¿Cómo podemos ayudarle?</label>
              <textarea name="message" rows={4} placeholder="Cuéntenos brevemente su necesidad…" className="mt-1 w-full rounded-xl border border-safepalette-edge bg-black/30 text-safepalette-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-safepalette-gold" />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-safepalette-gold text-black px-6 py-3 font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-safepalette-gold/40 disabled:cursor-not-allowed"
              >
                {status.type === "loading" ? "Enviando…" : "Estoy interesado, por favor, ponte en contacto conmigo."}
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

/*
➡️ Para que el botón "Conoce más" te lleve a este formulario desde Servicios.jsx:
1) Cambia el link del item a link: "/contacto" (si usarás una ruta) o "#contacto" (si es misma página).
2) Si usas ruta: crea una ruta en tu router
   <Route path="/contacto" element={<Contacto/>} />
3) Si es misma página, asegúrate de tener <Contacto /> en esa página y usa link: "#contacto".
*/
