// src/pages/Inicio.jsx
import React from "react";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import ContactHome from "@/components/ContactHome";

export default function Inicio() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <main className="flex-1">
        <Hero />
        <Servicios />
        <ContactHome />
      </main>
    </div>
  );
}
