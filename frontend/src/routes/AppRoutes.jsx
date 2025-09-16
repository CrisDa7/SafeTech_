// src/AppRoutes.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsFloatingButton from "@/components/WhatsFloatingButton";
import { Spinner } from "flowbite-react";
import ScrollToTop from "@/components/ScrollToTop";

const Inicio = lazy(() => import("@/pages/Inicio"));
const Nosotros = lazy(() => import("@/components/Nosotros"));
const Servicios = lazy(() => import("@/components/Servicios"));
const SafeServicios = lazy(() => import("@/pages/safeServicios"));
// 👇 ahora usamos el Contacto desde components
const Contacto = lazy(() => import("@/components/Contacto"));
const ContactoHome = lazy(() => import("@/components/ContactHome"));

export default function AppRoutes() {
  return (
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
            </Routes>
          </Suspense>

          <WhatsFloatingButton />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
