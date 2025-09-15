import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsFloatingButton from "@/components/WhatsFloatingButton";
import EmailFloatingButton from "@/components/EmailFloatingButton";
import { Spinner } from "flowbite-react";

const Inicio = lazy(() => import("@/pages/Inicio"));
const Nosotros = lazy(() => import("@/components/Nosotros"));   // o "@/pages/Nosotros" si lo moviste
const Servicios = lazy(() => import("@/components/Servicios")); // o "@/pages/Servicios" si lo moviste
const SafeServicios = lazy(() => import("@/pages/safeServicios")); // renómbralo a PascalCase cuando gustes

export default function AppRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
            </Routes>
          </Suspense>

          {/* 🔹 Botones flotantes globales */}
          <WhatsFloatingButton />
          <EmailFloatingButton />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
