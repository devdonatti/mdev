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
];

const Servicios = () => {
  const abrirWhatsapp = (mensaje) => {
    const numero = "5491170618004"; // número de WhatsApp de tu marca (AR)
    const url = `https://wa.me/54${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="py-20 px-6 md:px-16 bg-opacity-60 text-white">
      <h1
        data-aos="fade-right"
        className="text-6xl font-raleway text-center mb-12 p-4 leading-normal text-white"
      >
        Servicios
      </h1>

      {/* items-stretch asegura que las tarjetas ocupen el alto disponible */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
        {servicios.map((servicio, index) => {
          const precioOriginal = servicio.precio;
          const precioPromo = Math.round(precioOriginal / 2);

          return (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-fuchsia-500/50 transition duration-300 transform hover:-translate-y-2 h-full flex flex-col"
            >
              {/* Contenido flexible que crece */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-fuchsia-400">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-300 mb-5">{servicio.descripcion}</p>

                <ul className="list-disc pl-5 text-sm text-start text-gray-400 mb-5 space-y-1">
                  {servicio.incluye.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Precios */}
                <div className="mb-5">
                  <p className="text-gray-500 line-through text-lg">
                    ${precioOriginal.toLocaleString("es-AR")}
                  </p>
                  <p className="text-2xl font-extrabold text-fuchsia-300 animate-pulse">
                    ${precioPromo.toLocaleString("es-AR")}{" "}
                    <span className="text-sm">(50% OFF)</span>
                  </p>
                </div>
              </div>

              {/* Botonera fija al fondo */}
              <div className="mt-auto flex flex-col gap-3">
                <button
                  onClick={() =>
                    abrirWhatsapp(
                      `Hola, estoy interesado/a en el servicio de ${servicio.titulo}. ¿Me podés contar más?`
                    )
                  }
                  className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-4 py-2 rounded-xl transition-all font-medium"
                >
                  Solicitar este servicio
                </button>

                <button
                  onClick={() => abrirWhatsapp("reservar mi lugar")}
                  className="border border-fuchsia-400 text-fuchsia-300 hover:bg-fuchsia-600 hover:text-white px-4 py-2 rounded-xl transition-all font-medium"
                >
                  Reservar lugar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Servicios;
