import React from "react";

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado con título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Quiénes Somos</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Sección con imagen y descripción */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Identidad</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              En <span className="font-semibold">SafeTech</span> creemos que la seguridad escolar debe ser moderna, accesible y confiable. 
              Somos una empresa ecuatoriana comprometida con la innovación tecnológica aplicada al bienestar 
              de estudiantes, padres de familia y administradores educativos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A través de herramientas inteligentes, sistemas de monitoreo en tiempo real y canales de comunicación 
              efectivos, trabajamos para que cada institución educativa cuente con un entorno seguro, tranquilo 
              y adaptado a las necesidades del presente. Nuestra meta es transformar la manera en que se entiende 
              y gestiona la seguridad en los colegios.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-md">
              <img 
                src="/src/assets/qq.jpg" 
                alt="Equipo de SafeTech" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-80"
              />
              <div className="absolute -inset-2 border-2 border-blue-200 rounded-2xl opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Aquí se mantienen las secciones de Misión, Visión y Valores */}
      </div>
    </section>
  );
}
