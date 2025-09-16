import React from "react";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
//import Achievements from "@/components/Achievements";
//import Contacto from "../components/Contacto";
import ContactHome from "@/components/ContactHome";


export default function Inicio() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Servicios />
        <ContactHome />
      </main>
    </div>
  );
}
