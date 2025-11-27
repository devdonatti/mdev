import React from "react";

const servicios = [
  {
    titulo: "Landing Page",
    descripcion:
      "Ideal para promociones o lanzamientos. Rápida, atractiva y enfocada en la conversión.",
    incluye: [
      "Diseño personalizado",
      "1 sección con scroll",
      "Formulario de contacto y botón WhatsApp",
      "Adaptada a dispositivos móviles",
      "Incluye dominio por un año + mantenimiento gratis 1 mes",
    ],
    precio: 400000,
  },
  {
    titulo: "Tienda Online",
    descripcion:
      "Venta de productos con pasarela de pagos integrada. Todo listo para vender online.",
    incluye: [
      "Diseño personalizado",
      "Catálogo autogestionable, carrito, logueo, botón a WhatsApp y pasarela de pago",
      "Adaptada a dispositivos móviles",
      "Incluye dominio por un año + mantenimiento gratis 1 mes",
    ],
    precio: 900000,
  },
  {
    titulo: "Página Institucional",
    descripcion:
      "Sitio profesional para mostrar la identidad, valores y servicios de tu negocio.",
    incluye: [
      "Hasta 5 secciones (Inicio, Nosotros, Servicios, Contacto, etc.)",
      "Formulario de contacto",
      "Diseño adaptable a celulares",
      "Incluye dominio por un año + mantenimiento gratis 1 mes",
    ],
    precio: 450000,
  },
  {
    titulo: "Web Personalizada",
    descripcion:
      "Desarrollo a medida para proyectos únicos. Adaptado a tus necesidades específicas.",
    incluye: [
      "Análisis personalizado",
      "Funcionalidades específicas",
      "Diseño único según tus objetivos",
      "Incluye dominio por un año + mantenimiento gratis 1 mes",
    ],
    precio: 600000,
  },
  {
    titulo: "Campañas en Meta Ads",
    descripcion:
      "Creación y gestión completa de campañas publicitarias en Facebook e Instagram para maximizar tus resultados.",
    incluye: [
      "Análisis de tu negocio y público objetivo",
      "Diseño de campañas según objetivos comerciales",
      "Segmentación avanzada",
      "Monitoreo y optimización continua",
    ],
    precio: 600000,
  },
  {
    titulo: "Automatizaciones",
    descripcion:
      "Sistemas automatizados para tu negocio, optimizando procesos, ventas y comunicación.",
    incluye: [
      "Automatización de emails",
      "Formularios de captación de leads",
      "Filtros por rubro",
      "Flujos de ventas",
    ],
    precio: 600000,
  },
];

const Servicios = () => {
  const abrirWhatsapp = (mensaje) => {
    const numero = "5491170618004";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="py-20 px-4 md:px-16 text-white">
      <h1
        data-aos="fade-right"
        className="text-4xl md:text-6xl font-raleway text-center mb-16 leading-tight"
      >
        Servicios
      </h1>

      <div
        className="
      grid 
      gap-4 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      max-w-6xl 
      mx-auto
    "
      >
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="
            bg-slate-900/70 backdrop-blur-xl 
            rounded-3xl 
            p-4 sm:p-6 md:p-8 
            border border-white/10 
            shadow-xl 
            hover:shadow-fuchsia-500/40 
            transition 
            duration-300 
            hover:-translate-y-2
            flex flex-col

            /* 🔥 COMPACTO EN MOBILE */
            max-h-[420px] sm:max-h-none 
            overflow-hidden sm:overflow-visible
          "
          >
            <div className="flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-fuchsia-400 tracking-wide">
                {servicio.titulo}
              </h3>

              <p className="text-gray-300 mb-3 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
                {servicio.descripcion}
              </p>

              <ul className="list-disc pl-4 text-xs sm:text-sm md:text-base text-gray-400 mb-4 space-y-0.5 sm:space-y-1 line-clamp-4 sm:line-clamp-none">
                {servicio.incluye.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-col gap-2 sm:gap-3">
              <button
                onClick={() =>
                  abrirWhatsapp(
                    `Hola MDev, estoy interesado/a en el servicio de ${servicio.titulo}. ¿Me podés contar más?`
                  )
                }
                className="
                bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 
                hover:brightness-110 
                text-white 
                px-3 py-2 
                rounded-xl 
                transition-all 
                font-semibold
                text-xs sm:text-sm md:text-base
              "
              >
                Solicitar este servicio
              </button>

              <button
                onClick={() => abrirWhatsapp("reservar mi lugar")}
                className="
                border border-fuchsia-400 
                text-fuchsia-300 
                hover:bg-fuchsia-600 hover:text-white 
                px-3 py-2 
                rounded-xl 
                transition-all 
                font-semibold 
                text-xs sm:text-sm md:text-base
              "
              >
                Reservar lugar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
