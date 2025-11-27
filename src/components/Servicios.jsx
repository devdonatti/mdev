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
      "Análisis personalizado de tu negocio y público objetivo",
      "Diseño de campañas según tus objetivos comerciales",
      "Segmentación avanzada para llegar a tu público ideal",
      "Monitoreo y optimización continua de resultados",
    ],
    precio: 600000,
  },
  {
    titulo: "Automatizaciones",
    descripcion:
      "Implementación de sistemas automatizados para tu negocio, optimizando procesos, ventas y comunicación con clientes.",
    incluye: [
      "Automatización de correos electrónicos y respuestas automáticas",
      "Formularios  de captación de leads",
      "Filtros especializados a tu rubro",
      "Creación de flujos de ventas ",
    ],
    precio: 600000,
  },
];

const Servicios = () => {
  const abrirWhatsapp = (mensaje) => {
    const numero = "5491170618004"; // número de WhatsApp de tu marca (AR)
    const url = `https://wa.me/54${numero}?text=${encodeURIComponent(mensaje)}`;
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

      {/* GRID PREMIUM RESPONSIVO */}
      <div
        className="
    grid 
    gap-6 
    justify-center
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-2
    lg:grid-cols-3
    max-w-6xl mx-auto
  "
      >
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="
              bg-slate-900/70 backdrop-blur-xl 
              rounded-3xl 
              p-6 md:p-8 
              border border-white/10 
              shadow-xl 
              hover:shadow-fuchsia-500/40 
              transition 
              duration-300 
              hover:-translate-y-2
              flex flex-col
            "
          >
            {/* Contenido */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-fuchsia-400 tracking-wide">
                {servicio.titulo}
              </h3>

              <p className="text-gray-300 mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
                {servicio.descripcion}
              </p>

              <ul className="list-disc pl-4 text-xs sm:text-sm md:text-base text-gray-400 mb-6 space-y-1">
                {servicio.incluye.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Botones */}
            <div className="mt-auto flex flex-col gap-3">
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
                  px-4 py-2 
                  rounded-xl 
                  transition-all 
                  font-semibold
                  text-sm md:text-base
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
                  px-4 py-2 
                  rounded-xl 
                  transition-all 
                  font-semibold 
                  text-sm md:text-base
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
