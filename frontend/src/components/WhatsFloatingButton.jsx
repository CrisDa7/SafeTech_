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
            animation: "pulse 2s infinite"
          }}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-2xl w-80 overflow-hidden relative animate-pop-in"
            style={{
              animation: "popIn 0.3s ease-out forwards",
              position: "fixed",
              right: "100px",
              bottom: "85px"
            }}
          >
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rotate-45 bg-white"></div>

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
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

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
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Iniciar conversación
              </a>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 p-3 text-center">
              <p className="text-xs text-gray-500">
                Tel: <a href={`tel:${phoneDisplay}`} className="text-[#25D366] font-medium">{phoneDisplay}</a><br />
                Email: <a href={`mailto:${emailSoporte}`} className="text-[#25D366] font-medium">{emailSoporte}</a>
              </p>
            </div>
          </div>

          <style jsx>{`
            @keyframes popIn {
              0% {
                opacity: 0;
                transform: scale(0.8) translateX(20px);
              }
              100% {
                opacity: 1;
                transform: scale(1) translateX(0);
              }
            }
            
            .animate-pop-in {
              animation: popIn 0.3s ease-out forwards;
            }
          `}</style>
        </div>
      )}
    </>
  );
}
