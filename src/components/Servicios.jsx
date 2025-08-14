import React from "react";

const servicios = [
  {
    titulo: "Landing Page",
    descripcion:
      "Ideal para promociones o lanzamientos. Rápida, atractiva y enfocada en la conversión.",
    incluye: [
      "Diseño personalizado",
      "1 seccion con scroll",
      "Formulario de contacto y botón WhatsApp",
      "Adaptada a dispositivos móviles",
      "Incluye dominio por un año + mantenimiento gratis 1 mes",
    ],
    precio: "$300.000",
  },
  {
    titulo: "Tienda Online",
    descripcion:
      "Venta de productos con pasarela de pagos integrada. Todo listo para vender online.",
    incluye: [
      "Diseño personalizado",
      "Catálogo autogestionable, carrito,logueo botón a WhatsApp y pasarela de pago",
      "Adaptada a dispositivos móviles",
      "Incluye dominio por un año + mantenimiento gratis 1 mes",
    ],
    precio: "$750.000",
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
    precio: "$400.000",
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
    precio: "Desde $350.000",
  },
  {
    titulo: "Creación de Contenido",
    descripcion:
      "Diseño gráfico y textos para tus redes, sitio o blog. Todo lo que tu marca necesita para brillar.",
    incluye: [
      "Diseño de posts e historias",
      "Reediseño de redes sociales",
      "Contenido entregable por drive",
    ],
    precio: "Desde $20.000 por pack",
  },
  {
    titulo: "Manejo de Redes + Publicidad",
    descripcion:
      "Gestión profesional de tus redes sociales + campañas publicitarias efectivas.",
    incluye: [
      "Calendario de contenido mensual",
      "Diseño de piezas gráficas",
      "Administración de campañas en Meta Ads",
    ],
    precio: "$260.000 /mes",
  },
];

const Servicios = () => {
  const enviarWhatsapp = (titulo) => {
    const numero = "1170618004"; // número de WhatsApp de tu marca
    const mensaje = `Hola, estoy interesado/a en el servicio de ${titulo}. ¿Me podés contar más?`;
    const url = `https://wa.me/54${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="py-20 px-6 md:px-16 bg-opacity-60 text-white">
      <h1
        data-aos="fade-right"
        className="text-6xl font-raleway text-center mb-8 p-4 leading-normal text-white"
      >
        Servicios
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-8">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-fuchsia-500/30 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2 text-fuchsia-400">
              {servicio.titulo}
            </h3>
            <p className="text-gray-300 mb-4">{servicio.descripcion}</p>
            <ul className="list-disc pl-5 text-sm text-start text-gray-400 mb-4">
              {servicio.incluye.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-lg font-bold text-fuchsia-300 mb-4">
              Precio: {servicio.precio}
            </p>
            <button
              onClick={() => enviarWhatsapp(servicio.titulo)}
              className="mt-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-4 py-2 rounded-xl transition-all"
            >
              Solicitar este servicio
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
