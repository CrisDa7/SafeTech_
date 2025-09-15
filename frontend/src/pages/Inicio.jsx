import React from "react";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";

export default function Inicio() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Servicios />
      </main>
    </div>
  );
}
