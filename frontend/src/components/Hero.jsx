// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import fondoBusMp4 from "@/assets/bus.mp4";
// Opcional: agrega un webm si lo tienes (mejor compatibilidad Android/Chrome)
// import fondoBusWebm from "@/assets/bus.webm";
// Opcional: agrega un poster liviano (jpg/png/webp) para el fallback
// import posterImg from "@/assets/hero-poster.jpg";

export default function Hero() {
  const videoRef = useRef(null);
  const [videoOk, setVideoOk] = useState(true); // si falla, mostramos fallback
  const OVERLAY_ALPHA = 0.7;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Asegurar flags de autoplay móvil
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", ""); // Safari iOS a veces requiere el atributo
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.controls = false;

    // Respeta "prefiere reducir movimiento"
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cancelled = false;
    let retries = 0;
    const maxRetries = 4;

    const tryPlay = () => {
      if (cancelled) return;
      v.play()
        .then(() => {
          if (!cancelled) setVideoOk(true);
        })
        .catch(() => {
          // Reintento con pequeño backoff
          if (retries < maxRetries) {
            retries += 1;
            const delay = 200 * retries; // 200ms, 400ms, 600ms, 800ms
            setTimeout(() => !cancelled && tryPlay(), delay);
          } else {
            // No se pudo reproducir → fallback
            if (!cancelled) setVideoOk(false);
          }
        });
    };

    const onVisibility = () => {
      if (document.hidden) {
        v.pause();
      } else if (!reduceMotion) {
        tryPlay();
      }
    };

    // Desbloqueo por gesto (iOS/Android)
    const unlockOnGesture = () => {
      tryPlay();
    };

    if (!reduceMotion) {
      const onLoadedMeta = () => tryPlay();
      const onCanPlay = () => tryPlay();

      v.addEventListener("loadedmetadata", onLoadedMeta);
      v.addEventListener("canplay", onCanPlay);
      document.addEventListener("visibilitychange", onVisibility);

      // Gesto de usuario (amplio: pointerdown + touchstart + click)
      window.addEventListener("pointerdown", unlockOnGesture, { passive: true });
      window.addEventListener("touchstart", unlockOnGesture, { passive: true });
      window.addEventListener("click", unlockOnGesture);

      // Intento inicial
      tryPlay();

      return () => {
        cancelled = true;
        v.removeEventListener("loadedmetadata", onLoadedMeta);
        v.removeEventListener("canplay", onCanPlay);
        document.removeEventListener("visibilitychange", onVisibility);
        window.removeEventListener("pointerdown", unlockOnGesture);
        window.removeEventListener("touchstart", unlockOnGesture);
        window.removeEventListener("click", unlockOnGesture);
      };
    } else {
      // Si el usuario prefiere reducir movimiento, no forzamos reproducción
      v.pause();
      setVideoOk(false); // usa fallback visual
    }
  }, []);

  // 🎨 Botón borde blanco + hover dorado (paleta)
  const BTN_BASE =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium shadow-soft transition focus:outline-none focus-visible:ring-4 focus-visible:ring-safepalette-gold/40";
  const BTN_WHITE_TO_GOLD = `
    ${BTN_BASE}
    border-2 border-safepalette-white
    bg-transparent text-safepalette-white
    hover:bg-safepalette-gold hover:border-safepalette-gold hover:text-safepalette-blue
    transition-colors duration-300
  `;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden md:min-h-screen"
    >
      {/* 🎥 Video de fondo (si se pudo reproducir) */}
      {videoOk && (
        <video
          ref={videoRef}
          className="hero-video pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          controlsList="nodownload noplaybackrate nofullscreen"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          // poster={posterImg} // opcional si importas un póster
        >
          {/* Orden: primero webm (si lo tienes), luego mp4 */}
          {/* <source src={fondoBusWebm} type="video/webm" /> */}
          <source src={fondoBusMp4} type="video/mp4" />
        </video>
      )}

      {/* Estilos para esconder controles nativos en WebKit */}
      <style>{`
        .hero-video::-webkit-media-controls-start-playback-button { display: none !important; }
        .hero-video::-webkit-media-controls { display: none !important; }
      `}</style>

      {/* Overlay con tu paleta */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-safepalette-ink"
        style={{ opacity: OVERLAY_ALPHA }}
      />

      {/* Gradiente superior/inferior con tu paleta */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-safepalette-ink/40 via-transparent to-safepalette-ink/40"
      />

      {/* Fallback visual cuando el video no puede reproducirse */}
      {!videoOk && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          // Si tienes posterImg descomenta esto y comenta el bg-gradient
          // style={{ backgroundImage: `url(${posterImg})` }}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(6,9,12,0.5), rgba(6,9,12,0.5)), radial-gradient(80% 60% at 50% 40%, rgba(255,215,0,0.08), transparent 60%)",
          }}
        />
      )}

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-20 text-center md:py-28">
        <h1
          id="hero-title"
          className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-safepalette-white md:text-7xl lg:text-8xl"
        >
          Bienvenido a SafeTech
        </h1>

        <p className="mx-auto mb-10 max-w-4xl text-xl text-safepalette-white/90 md:text-2xl lg:text-3xl">
          Empresa tecnológica enfocada en brindar soluciones de seguridad avanzada con innovación y confianza
        </p>

        {/* CTA principal */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a href="#servicios" className={BTN_WHITE_TO_GOLD} aria-label="Ver la sección de Servicios">
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
}
