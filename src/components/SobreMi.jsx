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
      className="lg:px-56 px-10 lg:py-0 py-20 text center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center "
    >
      <img
        data-aos="fade-down"
        src="/logo021.png"
        width={290}
        height={290}
        className="rounded border-2 p-1 border-fuchsia-500 img_glow"
        alt=""
      />
      <div className="h-full lg:py-40 flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-6xl font-raleway  mb-8 p-4 leading-normal  text-white"
        >
          Nosotros
        </h1>
        <p className="font-raleway text-xl leading-loose" data-aos="fade-left">
          En MDev, nos enfocamos en la creación, desarrollo y mantenimiento de
          páginas web. Trabajamos con el desarrollo a medida, basado en los
          objetivos que persigue el cliente.
        </p>
      </div>
    </div>
  );
};

export default SobreMi;
