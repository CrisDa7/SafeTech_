import React, { useState, useRef, useEffect } from "react";
import {
  MdEmail,
  MdClose,
  MdContentCopy,
  MdAccessTime,
  MdSupportAgent,
} from "react-icons/md";

/**
 * Modal de Email:
 * - Móvil: centrado en pantalla
 * - Desktop (md+): flotante a la derecha (como WhatsApp)
 */
export default function ProfessionalEmailFloatingButton() {
  const [openPopover, setOpenPopover] = useState(false);
  const [copied, setCopied] = useState(false);
  const popoverRef = useRef(null);

  const emailDestino = "soporte@safetech-ec.com";

  // Cerrar por click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setOpenPopover(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailDestino);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* FAB de Email */}
      <div className="fixed bottom-28 right-6 z-50">
        <button
          onClick={() => setOpenPopover(true)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-hawkes-blue-600 to-hawkes-blue-500 shadow-lg transition-transform duration-300 hover:scale-110 hover:from-hawkes-blue-700 hover:to-hawkes-blue-600"
          style={{
            boxShadow: "0 4px 20px rgba(85, 88, 214, 0.5)",
            animation: "pulse-email 2s infinite",
          }}
          aria-label="Contactar por correo"
        >
          <MdEmail className="h-7 w-7 text-white" aria-hidden="true" />
        </button>

        <style jsx>{`
          @keyframes pulse-email {
            0% {
              box-shadow: 0 0 0 0 rgba(85, 88, 214, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(85, 88, 214, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(85, 88, 214, 0);
            }
          }
        `}</style>
      </div>

      {/* Overlay + Modal */}
      {openPopover && (
        <div
          className={
            // móvil: centrado; md+: como antes
            "fixed inset-0 z-50 bg-black/50 " +
            "flex items-center justify-center md:block"
          }
          aria-label="Fondo de diálogo de contacto por correo"
        >
          <div
            ref={popoverRef}
            className={
              // móvil: centrado y responsivo
              "bg-white shadow-2xl w-[92vw] max-w-sm overflow-hidden rounded-2xl " +
              "animate-[popIn_.3s_ease-out_forwards] " +
              // md+: flotante a la derecha como antes
              "md:rounded-xl md:fixed md:right-[100px] md:bottom-[170px] md:w-80"
            }
          >
            {/* Flechita solo en desktop */}
            <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rotate-45 bg-white md:block" />

            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-hawkes-blue-600 to-hawkes-blue-500 p-4">
              <div className="flex items-center">
                <div className="mr-2 rounded-full bg-white p-1">
                  <MdEmail className="h-6 w-6 text-hawkes-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Chatea por correo</h2>
                  <p className="text-sm text-hawkes-blue-100">Estamos aquí para ayudarte</p>
                </div>
              </div>
              <button
                onClick={() => setOpenPopover(false)}
                className="text-white transition-colors duration-200 hover:text-hawkes-blue-200"
                aria-label="Cerrar panel de correo"
              >
                <MdClose className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Cuerpo */}
            <div className="p-4">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-hawkes-blue-50">
                  <MdSupportAgent className="h-5 w-5 text-hawkes-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Soporte SafeTech</h3>
                  <p className="text-xs text-gray-600">Respuesta rápida garantizada</p>
                </div>
              </div>

              {/* Email copiable */}
              <div className="mb-4">
                <p className="mb-2 text-sm text-gray-600">Escríbenos a:</p>
                <div className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
                  <span className="truncate text-sm font-medium text-gray-800">
                    {emailDestino}
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className="ml-2 rounded text-hawkes-blue-600 transition-colors hover:text-hawkes-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-hawkes-blue-300/70"
                    aria-label="Copiar correo"
                    title="Copiar correo"
                  >
                    <MdContentCopy className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                {copied && (
                  <p className="mt-1 text-xs text-green-600">¡Correo copiado!</p>
                )}
              </div>

              {/* Horario */}
              <div className="mb-4 rounded-lg bg-gray-50 p-3">
                <div className="mb-2 flex items-center">
                  <MdAccessTime className="mr-2 h-4 w-4 text-gray-500" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-700">
                    Horario de atención
                  </span>
                </div>
                <p className="text-xs text-gray-600">Lunes a Viernes: 8:00 - 18:00</p>
                <p className="text-xs text-gray-600">Sábados: 9:00 - 13:00</p>
              </div>

              <p className="mb-4 text-center text-sm text-gray-700">
                ¿Tienes preguntas sobre nuestros servicios? Escríbenos por correo
                electrónico.
              </p>

              {/* CTA: abrir redacción en Gmail */}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  emailDestino
                )}&su=${encodeURIComponent("Consulta")}&body=${encodeURIComponent(
                  "Hola, me gustaría obtener más información acerca de sus servicios."
                )}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenPopover(false)}
                className="flex items-center justify-center rounded-lg bg-gradient-to-r from-hawkes-blue-600 to-hawkes-blue-500 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:from-hawkes-blue-700 hover:to-hawkes-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-hawkes-blue-300/70"
                aria-label="Abrir Gmail para escribirnos"
              >
                <MdEmail className="mr-2 h-5 w-5" aria-hidden="true" />
                Abrir Gmail
              </a>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 p-3 text-center">
              <p className="text-xs text-gray-500">
                Email:{" "}
                <span className="font-medium text-hawkes-blue-600">{emailDestino}</span>
              </p>
            </div>
          </div>

          {/* animación del modal */}
          <style jsx>{`
            @keyframes popIn {
              0% { opacity: 0; transform: scale(0.92) translateY(8px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
