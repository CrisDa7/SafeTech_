import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import ContactHome from "@/components/ContactHome";

export default function Inicio() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");

    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 40) {
        attempts += 1;
        requestAnimationFrame(tryScroll); // reintenta en el próximo frame
      }
    };

    tryScroll();
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <main className="flex-1">
        <Hero />
        <Servicios />
        {/* Asegúrate que el id coincide con tu sección */}
        <ContactHome />
      </main>
    </div>
  );
}
