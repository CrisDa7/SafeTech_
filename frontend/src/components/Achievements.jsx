import React, { useEffect, useRef, useState } from "react";

// 📊 Datos de estadísticas
const STATS = [
  { value: 90, suffix: "+", label: "Países" },
  { value: 500, suffix: "+", label: "Escuelas" },
  { value: 500000, suffix: "+", label: "Estudiantes" },
  { value: 450000, suffix: "+", label: "Familias satisfechas" },
];

// 🎯 Hook para animación de conteo
function useCountUp(target = 0, duration = 1200) {
  const [val, setVal] = useState(0);
  const startRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const step = (now) => {
      if (!startRef.current) startRef.current = now;
      const p = Math.min(1, (now - startRef.current) / duration);
      setVal(Math.floor(p * target));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return val;
}

function StatCard({ value, suffix = "", label }) {
  const n = useCountUp(value, 1200);
  const formatted = n.toLocaleString("es-EC");

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-safepalette-white">
        {formatted}
        <span className="align-super text-2xl md:text-3xl text-safepalette-gold">{suffix}</span>
      </div>
      <p className="mt-1 text-sm md:text-base text-safepalette-white/80">{label}</p>
    </div>
  );
}

export default function Achievements() {
  return (
    <section
      id="hitos"
      aria-labelledby="hitos-title"
      className="px-4 py-14 md:py-18 bg-safepalette-ink"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="hitos-title" className="sr-only">
          Hitos de Éxito
        </h2>

        <div className="rounded-2xl bg-safepalette-surface shadow-goldglow border border-safepalette-edge">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-safepalette-edge">
            {STATS.map((s, i) => (
              <div key={i} className="p-6 md:p-8">
                <StatCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/*
Usa los colores de tu paleta de Tailwind:
- Fondo principal: bg-safepalette-ink
- Tarjeta: bg-safepalette-surface
- Bordes: border-safepalette-edge
- Texto: text-safepalette-white
- Resaltado: text-safepalette-gold
- Sombra: shadow-goldglow
*/
