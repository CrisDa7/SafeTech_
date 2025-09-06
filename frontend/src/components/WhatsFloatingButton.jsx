import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaTimes, FaClock, FaHeadset } from "react-icons/fa";

export default function WhatsFloatingButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Datos de la empresa
  const whatsappNumber = "593999047935"; // formato internacional para wa.me
  const phoneDisplay = "099 904 7935";   // formato legible
  const message = "Hola, me gustaría obtener más información sobre SafeTech.";
  const emailSoporte = "soporte@safetech-ec.com";

  // Cierra el modal si se hace click afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe57] shadow-lg transition-all duration-300 transform hover:scale-110 group"
          style={{
            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.5)",
            animation: "pulse 2s infinite",
          }}
          aria-label="Abrir chat de WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8 text-white" />
        </button>

        <style jsx>{`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }
        `}</style>
      </div>

      {/* Overlay + Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 md:block"
          aria-label="Fondo de diálogo de WhatsApp"
        >
          <div
            ref={modalRef}
            className={
              // Móvil: centrado, bordes redondeados y CLIPPING para que el header no “cuadre” las esquinas
              "bg-white rounded-2xl shadow-2xl w-[92vw] max-w-sm overflow-hidden " +
              "animate-[popIn_.3s_ease-out_forwards] " +
              // Desktop (md+): como antes (anclado a la derecha)
              "md:rounded-xl md:fixed md:right-[100px] md:bottom-[85px] md:w-80"
            }
          >
            {/* Flechita solo en desktop */}
            <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rotate-45 bg-white md:block" />

            {/* Header */}
            <div className="bg-[#25D366] p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-white p-1 rounded-full mr-2">
                  <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Chatea con nosotros</h2>
                  <p className="text-green-100 text-sm">Estamos aquí para ayudarte</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-green-200 transition-colors duration-200"
                aria-label="Cerrar panel de WhatsApp"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            {/* Wrapper con scroll en móvil para mantener overflow-hidden en el card */}
            <div className="max-h-[70vh] overflow-y-auto md:max-h-none md:overflow-visible">
              {/* Contenido */}
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <FaHeadset className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Soporte SafeTech</h3>
                    <p className="text-xs text-gray-600">Respuesta rápida garantizada</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center mb-2">
                    <FaClock className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Horario de atención</span>
                  </div>
                  <p className="text-xs text-gray-600">Lunes a Viernes: 8:00 - 18:00</p>
                  <p className="text-xs text-gray-600">Sábados: 9:00 - 13:00</p>
                </div>

                <p className="text-sm text-gray-700 mb-4 text-center">
                  ¿Tienes preguntas sobre nuestros servicios? Estamos aquí para ayudarte por WhatsApp o correo.
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe57] text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 text-sm"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Iniciar conversación por WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  Iniciar conversación
                </a>
              </div>

              {/* Footer */}
              <div className="bg-gray-100 p-3 text-center">
                <p className="text-xs text-gray-500">
                  Tel:{" "}
                  <a href={`tel:${phoneDisplay}`} className="text-[#25D366] font-medium">
                    {phoneDisplay}
                  </a>
                  <br />
                  Email:{" "}
                  <a href={`mailto:${emailSoporte}`} className="text-[#25D366] font-medium">
                    {emailSoporte}
                  </a>
                </p>
              </div>
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
