import React, { useState, useEffect, useRef } from "react";
import img from "../assets/yo.png";

const SobreMi = () => {
  const [showWidget, setShowWidget] = useState(false);
  const widgetRef = useRef(null);

  // Cerrar el widget al hacer clic fuera de él
  const handleClickOutside = (event) => {
    if (widgetRef.current && !widgetRef.current.contains(event.target)) {
      setShowWidget(false);
    }
  };

  useEffect(() => {
    // Agregar evento de clic al documento
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Limpiar el evento al desmontar
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="Nosotros"
      className="relative lg:px-56 px-10 lg:py-0 py-20 text-center lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 gap-10 items-center overflow-hidden"
    >
      {/* Fondo sutil con gradiente */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-fuchsia-900/20 via-transparent to-transparent" />

      {/* Contenedor “glass” sutil */}
      <div className="absolute inset-4 lg:inset-10 rounded-3xl backdrop-blur-sm bg-white/5 ring-1 ring-white/10 -z-10" />

      <img
        data-aos="fade-down"
        src="/logo021.png"
        width={290}
        height={290}
        className="rounded-2xl border border-fuchsia-500/40 p-2 shadow-2xl hover:shadow-fuchsia-500/40 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
        alt="Logo MDev"
      />

      <div className="h-full lg:py-40 flex-col justify-center lg:items-start items-center text-white max-w-2xl">
        <h1
          data-aos="fade-right"
          className="text-5xl lg:text-6xl font-raleway font-extrabold mb-6 leading-tight bg-gradient-to-r from-fuchsia-300 via-white to-fuchsia-200 bg-clip-text text-transparent drop-shadow-[0_1px_10px_rgba(255,255,255,0.15)]"
        >
          Nosotros
        </h1>

        <p
          className="font-raleway text-lg lg:text-xl leading-relaxed text-gray-200 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 shadow-md"
          data-aos="fade-left"
        >
          En MDev, nos enfocamos en la creación, desarrollo y mantenimiento de
          páginas web. Trabajamos con el desarrollo a medida, basado en los
          objetivos que persigue el cliente.
        </p>
      </div>
    </div>
  );
};

export default SobreMi;
