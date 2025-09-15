import React, { useState, useRef, useEffect } from "react";
import {
  MdEmail,
  MdClose,
  MdContentCopy,
  MdAccessTime,
  MdSupportAgent,
} from "react-icons/md";

export default function ProfessionalEmailFloatingButton() {
  const [openPopover, setOpenPopover] = useState(false);
  const [copied, setCopied] = useState(false);
  const popoverRef = useRef(null);

  const emailDestino = "soporte@safetech-ec.com";

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
          className="flex h-16 w-16 items-center justify-center rounded-full bg-safepalette-gold shadow-lg transition-transform duration-300 hover:scale-110"
          style={{
            boxShadow: "0 4px 20px rgba(244, 180, 0, 0.5)",
            animation: "pulse-email 2s infinite",
          }}
          aria-label="Contactar por correo"
        >
          <MdEmail className="h-7 w-7 text-black" aria-hidden="true" />
        </button>

        <style>{`
          @keyframes pulse-email {
            0% { box-shadow: 0 0 0 0 rgba(244, 180, 0, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(244, 180, 0, 0); }
            100% { box-shadow: 0 0 0 0 rgba(244, 180, 0, 0); }
          }
        `}</style>
      </div>

      {/* Overlay + Modal */}
      {openPopover && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center md:block"
          aria-label="Fondo de diálogo de contacto por correo"
        >
          <div
            ref={popoverRef}
            className="bg-white shadow-2xl w-[92vw] max-w-sm overflow-hidden rounded-2xl animate-[popIn_.3s_ease-out_forwards] md:rounded-xl md:fixed md:right-[100px] md:bottom-[170px] md:w-80"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-safepalette-gold p-4">
              <div className="flex items-center">
                <div className="mr-2 rounded-full bg-white p-1">
                  <MdEmail
                    className="h-6 w-6 text-safepalette-700"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-black">
                    Chatea por correo
                  </h2>
                  <p className="text-sm text-black/70">
                    Estamos aquí para ayudarte
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpenPopover(false)}
                className="text-black transition-colors duration-200 hover:text-safepalette-700"
                aria-label="Cerrar panel de correo"
              >
                <MdClose className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Cuerpo */}
            <div className="p-4 bg-white">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-safepalette-100">
                  <MdSupportAgent
                    className="h-5 w-5 text-safepalette-700"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    Soporte SafeTech
                  </h3>
                  <p className="text-xs text-gray-600">
                    Respuesta rápida garantizada
                  </p>
                </div>
              </div>

              {/* Email copiable */}
              <div className="mb-4">
                <p className="mb-2 text-sm text-gray-700">Escríbenos a:</p>
                <div className="flex items-center justify-between rounded-md bg-gray-100 px-3 py-2">
                  <span className="truncate text-sm font-medium text-gray-900">
                    {emailDestino}
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className="ml-2 rounded text-safepalette-700 hover:text-safepalette-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-safepalette-300/70"
                    aria-label="Copiar correo"
                  >
                    <MdContentCopy className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                {copied && (
                  <p className="mt-1 text-xs text-green-600">
                    ¡Correo copiado!
                  </p>
                )}
              </div>

              {/* Horario */}
              <div className="mb-4 rounded-lg bg-gray-50 p-3">
                <div className="mb-2 flex items-center">
                  <MdAccessTime
                    className="mr-2 h-4 w-4 text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-gray-800">
                    Horario de atención
                  </span>
                </div>
                <p className="text-xs text-gray-700">
                  Lunes a Viernes: 8:00 - 18:00
                </p>
                <p className="text-xs text-gray-700">Sábados: 9:00 - 13:00</p>
              </div>

              <p className="mb-4 text-center text-sm text-gray-700">
                ¿Tienes preguntas sobre nuestros servicios? Escríbenos por
                correo electrónico.
              </p>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  emailDestino
                )}&su=${encodeURIComponent(
                  "Consulta"
                )}&body=${encodeURIComponent(
                  "Hola, me gustaría obtener más información acerca de sus servicios."
                )}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenPopover(false)}
                className="flex items-center justify-center rounded-lg bg-safepalette-gold px-4 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-safepalette-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-safepalette-300/70"
              >
                <MdEmail className="mr-2 h-5 w-5" aria-hidden="true" />
                Abrir Gmail
              </a>
            </div>

            {/* Footer del modal */}
            <div className="bg-gray-100 p-3 text-center">
              <p className="text-xs text-gray-600">
                Email:{" "}
                <span className="font-medium text-safepalette-700">
                  {emailDestino}
                </span>
              </p>
            </div>
          </div>

          <style>{`
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
