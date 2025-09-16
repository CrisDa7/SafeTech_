// src/routes/AppRoutes.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsFloatingButton from "@/components/WhatsFloatingButton";
import { Spinner } from "flowbite-react";
import ScrollToTop from "@/components/ScrollToTop";

// Cargas diferidas (lazy) — tal como las tienes
const Inicio = lazy(() => import("@/pages/Inicio"));
const Nosotros = lazy(() => import("@/components/Nosotros"));
const Servicios = lazy(() => import("@/components/Servicios"));
const SafeServicios = lazy(() => import("@/pages/safeServicios"));
const Contacto = lazy(() => import("@/components/Contacto"));
const ContactoHome = lazy(() => import("@/components/ContactHome"));

export default function AppRoutes() {
  return (
    // BASE_URL funciona bien con Vite; si usas VITE_BASE en tu vite.config, también sirve.
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-dvh flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Suspense
            fallback={
              <div className="py-24 flex justify-center">
                <Spinner size="xl" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/safe-escolar" element={<SafeServicios />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/contacto-home" element={<ContactoHome />} />

              {/* Catch-all: redirige cualquier ruta desconocida al inicio */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>

          <WhatsFloatingButton />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
