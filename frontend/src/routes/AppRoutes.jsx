import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Spinner } from "flowbite-react";

const Inicio = lazy(() => import("../pages/Inicio"));
const Nosotros = lazy(() => import("../components/Nosotros"));
const Servicios = lazy(() => import("../components/Servicios"));
const SafeServicios = lazy(() => import("../pages/safeServicios")); // 👈 nuevo

export default function AppRoutes() {
  return (
    <BrowserRouter>
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
              <Route path="/safe-escolar" element={<SafeServicios />} /> {/* 👈 aquí */}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
