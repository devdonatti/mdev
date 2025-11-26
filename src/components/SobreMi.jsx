import React from "react";

const SobreMi = () => {
  return (
    <section
      id="Nosotros"
      className="relative lg:px-56 px-10 lg:py-0 py-20 flex lg:flex-row flex-col 
      justify-between items-center lg:gap-28 gap-10 overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-gray-200 -z-20" />

      {/* Contenedor estilo glass */}
      <div
        className="absolute inset-4 lg:inset-10 rounded-3xl backdrop-blur-sm 
        bg-white/10 ring-1 ring-black/10 -z-10"
      />

      {/* Imagen / logo */}
      <img
        data-aos="fade-down"
        src="/logo021.png"
        width={280}
        height={280}
        className="rounded-2xl  p-2 shadow-xl 
        hover:shadow-fuchsia-500/40 transition-all duration-300 
        hover:-translate-y-1 hover:scale-[1.03] "
        alt="Logo MDev"
      />

      {/* Texto */}
      <div className="max-w-2xl lg:py-40 text-center lg:text-left text-black">
        <h1
          data-aos="fade-right"
          className="text-2xl lg:text-6xl font-raleway font-extrabold mb-6 leading-tight 
          bg-gradient-to-r from-fuchsia-400 via-black to-fuchsia-300 
          bg-clip-text text-transparent"
        >
          Nosotros
        </h1>

        <p
          data-aos="fade-left"
          className="font-raleway text-lg lg:text-xl leading-relaxed 
          bg-white/40 backdrop-blur-sm border border-black/10 
          rounded-2xl px-6 py-4 shadow-md"
        >
          En MDev, nos enfocamos en la creación, desarrollo y mantenimiento de
          páginas web. Ademas nos enfocamos en ayudarte a escalar tu negocio
          mediante sistemas de automatizacion de venta y pauta publicitaria,
          para que tu negocio se mantenga siempre vivo y puedas brindarle la
          mejor atencion a cada cliente interesada en tu producto o servicio
        </p>
      </div>
    </section>
  );
};

export default SobreMi;
