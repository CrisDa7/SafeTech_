// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import fondoBus from "@/assets/bus.mp4";

export default function Hero() {
  const videoRef = useRef(null);
  const OVERLAY_ALPHA = 0.7;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Asegura autoplay en móviles (muted + playsInline)
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;

    const tryPlay = () => v.play().catch(() => {});

    const onCanPlay = () => tryPlay();
    const onLoaded = () => tryPlay();
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };

    // Desbloqueo por gesto (iOS antiguo)
    const unlockOnGesture = () => {
      tryPlay();
      window.removeEventListener("touchstart", unlockOnGesture);
      window.removeEventListener("click", unlockOnGesture);
    };

    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("loadeddata", onLoaded);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("touchstart", unlockOnGesture, { once: true, passive: true });
    window.addEventListener("click", unlockOnGesture, { once: true });

    tryPlay();

    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("loadeddata", onLoaded);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("touchstart", unlockOnGesture);
      window.removeEventListener("click", unlockOnGesture);
    };
  }, []);

  // 🎨 Botón borde blanco + hover amarillo
  const BTN_BASE =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium shadow-md transition focus:outline-none";
  const BTN_WHITE_TO_GOLD = `
    ${BTN_BASE}
    border-2 border-white
    bg-transparent text-white
    hover:bg-safepalette-gold hover:border-safepalette-gold hover:text-black
    focus-visible:ring-4 focus-visible:ring-safepalette-gold/40
    transition-colors duration-300
  `;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden md:min-h-screen"
    >
      {/* 🎥 Video de fondo */}
      <video
        ref={videoRef}
        className="hero-video pointer-events-none absolute inset-0 h-full w-full object-cover"
        src={fondoBus}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        controlsList="nodownload noplaybackrate nofullscreen"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
      />

      <style>{`
        .hero-video::-webkit-media-controls-start-playback-button { display: none !important; }
        .hero-video::-webkit-media-controls { display: none !important; }
      `}</style>

      {/* Overlay oscuro */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: `rgba(0,0,0,${OVERLAY_ALPHA})` }}
      />

      {/* Gradiente superior/inferior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"
      />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-20 text-center md:py-28">
        <h1
          id="hero-title"
          className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Bienvenido a SafeTech
        </h1>

        <p className="mx-auto mb-10 max-w-4xl text-xl text-white md:text-2xl lg:text-3xl">
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
