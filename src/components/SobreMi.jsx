import React from "react";

const SobreMi = () => {
  return (
    <section
      id="Nosotros"
      className="
        relative px-6 lg:px-40 
        py-14 lg:py-24 
        flex flex-col lg:flex-row items-center 
        gap-10 lg:gap-20 overflow-hidden
      "
    >
      {/* Fondo sólido */}
      <div className="absolute inset-0 bg-gray-200 -z-20" />

      {/* Capa glass */}
      <div
        className="
          absolute inset-3 lg:inset-8 rounded-3xl 
          backdrop-blur-md bg-white/10 
          ring-1 ring-black/10 -z-10
        "
      />

      {/* Imagen */}
      <img
        data-aos="fade-down"
        src="/logo021.png"
        width={220}
        height={220}
        className="
          
          shadow-xl hover:shadow-fuchsia-500/40
          transition-all duration-300 
          hover:-translate-y-1 hover:scale-[1.03]
        "
        alt="Logo MDev"
      />

      {/* Texto */}
      <div className="max-w-xl text-center lg:text-left text-black">
        <h1
          data-aos="fade-right"
          className="
            text-3xl lg:text-5xl 
            font-raleway font-extrabold mb-4 
            bg-gradient-to-r from-fuchsia-800 via-black to-fuchsia-400 
            bg-clip-text text-transparent
            tracking-tight
          "
        >
          Nosotros
        </h1>

        <p
          data-aos="fade-left"
          className="
            
            text-base sm:text-sm lg:text-xl
            leading-relaxed lg:leading-normal
            bg-white/50 backdrop-blur-sm 
            border border-black/10 
            rounded-2xl px-5 py-4 
            shadow-lg
          "
        >
          En MDev nos especializamos en el desarrollo, diseño y mantenimiento de
          páginas web modernas y funcionales. También te ayudamos a escalar tu
          negocio mediante sistemas de automatización, flujos de venta y
          campañas publicitarias efectivas. Nuestro objetivo es que tu marca
          crezca, venda más y ofrezca una experiencia profesional a cada
          cliente.
        </p>
      </div>
    </section>
  );
};

export default SobreMi;
