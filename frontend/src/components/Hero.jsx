// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import fondoBus from "../assets/bus.mp4"; // 👈 video

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;

    v.setAttribute("muted", "");
    v.setAttribute("autoplay", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "true");

    const tryPlay = () => {
      v.play().catch(() => {});
    };

    const onCanPlay = () => tryPlay();
    const onLoaded = () => tryPlay();
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };

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

  // 🎨 Colores actualizados
  const BTN_BASE =
    "inline-flex items-center justify-center px-5 py-3 text-base font-medium focus:outline-none transition";
  const BTN_PRIMARY =
    `${BTN_BASE} text-white rounded-lg bg-golden-600 hover:bg-golden-700 ` +
    `focus-visible:ring-4 focus-visible:ring-golden-300`;
  const BTN_OUTLINE =
    `${BTN_BASE} text-white rounded-lg border border-white hover:bg-white hover:text-golden-900 ` +
    `focus-visible:ring-4 focus-visible:ring-golden-400`;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex items-center justify-center min-h-[90svh] md:min-h-screen overflow-hidden"
    >
      {/* 🎥 Video de fondo */}
      <video
        ref={videoRef}
        className="hero-video absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={fondoBus}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        controlsList="nodownload noplaybackrate nofullscreen"
        disablePictureInPicture
      />

      {/* Ocultar botón grande de reproducir en iOS */}
      <style jsx>{`
        .hero-video::-webkit-media-controls-start-playback-button {
          display: none !important;
        }
        .hero-video::-webkit-media-controls {
          display: none !important;
        }
      `}</style>

      {/* Overlay oscuro */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/85" />
      {/* Gradiente sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"
      />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-20 text-center md:py-28">
        <h1
          id="hero-title"
          className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Bienvenido a <span className="text-golden-400">SafeTech</span>
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-pretty text-neutral-200 text-lg md:text-xl">
          "Empresa tecnológica enfocada en brindar soluciones de seguridad
          avanzada con innovación y confianza"
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          {/* Ejemplo botón primario si lo quieres usar */}
          {/* <a href="#nosotros" className={BTN_PRIMARY}>Nosotros</a> */}

          <a
            href="#servicios"
            className={BTN_OUTLINE}
            aria-label="Ver la sección de Servicios"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
}
