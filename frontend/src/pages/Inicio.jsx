import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Nosotros from "../components/Nosotros";
import Servicios from "../components/Servicios";
import WhatsFloatingButton from "../components/WhatsFloatingButton";
import EmailFloatingButton from "../components/EmailFloatingButton";

export default function Inicio() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow"> {/* pagina principal */}
        <Hero />
        <Nosotros />
        <Servicios />
      </main>
      <WhatsFloatingButton />
      <EmailFloatingButton />
    </div>
  );
}