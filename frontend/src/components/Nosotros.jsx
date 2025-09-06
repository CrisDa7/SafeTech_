import React from "react";
import nosotrosImg from "../assets/nosotros.png"; // importa la imagen

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado con título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quiénes Somos
          </h1>
          {/* Línea decorativa en hawkes-blue */}
          <div className="w-20 h-1 bg-hawkes-blue-600 mx-auto"></div>
        </div>

        {/* Sección con imagen y descripción */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          {/* Texto */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Identidad</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              En <span className="font-semibold text-hawkes-blue-700">SafeTech</span> creemos que la seguridad escolar debe ser moderna, accesible y confiable. 
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

          {/* Imagen */}
          <div className="lg:w-1/2 flex justify-center">
  <img
    src={nosotrosImg}
    alt="Nosotros - SafeTech"
    className="w-full max-w-sm h-auto rounded-lg shadow-md"
    loading="lazy"
  />
</div>

        </div>

        {/* Aquí se mantienen las secciones de Misión, Visión y Valores */}
      </div>
    </section>
  );
}
