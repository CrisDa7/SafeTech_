import React from "react";

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado con título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sobre SafeTech</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Sección "¿Qué es SafeTech?" con imagen y texto */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué es SafeTech?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              SafeTech es más que un simple sistema de seguridad escolar: es una forma inteligente de garantizar 
              la protección de los estudiantes. Diseñado para instituciones educativas, administradores y padres de familia, 
              SafeTech moderniza toda la experiencia de seguridad escolar con tecnología avanzada y características fáciles de usar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Desde el monitoreo en tiempo real hasta la comunicación transparente, SafeTech hace que cada día escolar 
              sea más seguro, tranquilo y sin preocupaciones para toda la comunidad educativa.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-md">
              <img 
                src="/src/assets/qq.jpg" 
                alt="Tecnología SafeTech" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-80"
              />
              <div className="absolute -inset-2 border-2 border-blue-200 rounded-2xl opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Separador visual */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Nuestra misión es brindar soluciones tecnológicas innovadoras que transformen la seguridad escolar en Ecuador.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Ser líderes en innovación tecnológica, ofreciendo servicios confiables y soluciones de alto impacto para la comunidad educativa.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estos principios guían cada aspecto de nuestro trabajo y nuestra relación con la comunidad educativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Calidad</h3>
            <p className="text-gray-700 text-center">Ofrecemos productos y servicios con los más altos estándares de calidad.</p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Responsabilidad</h3>
            <p className="text-gray-700 text-center">Actuamos con ética y responsabilidad en todas nuestras acciones.</p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Innovación</h3>
            <p className="text-gray-700 text-center">Siempre buscando nuevas formas de mejorar y actualizar nuestras soluciones.</p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Compromiso</h3>
            <p className="text-gray-700 text-center">Estamos comprometidos con la seguridad y satisfacción de nuestros clientes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
