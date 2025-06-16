import React from "react";
import { Link } from "react-router-dom";
import Comentarios from "./Comentarios";

const Proyectos = () => {
  return (
    <div
      id="Proyectos"
      className="p-5 md:p-20 flex flex-col items-center justify-center "
    >
      <h1
        data-aos="fade-right"
        className="text-6xl font-raleway  mb-8 p-4 leading-normal  text-fuchsia-600"
      >
        Clientes que confiaron en nosotros
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around gap-10 text-white">
        {[
          {
            title: "Tienda online Smile",
            imgSrc: "/vistasmile.png",
            detailsLink: "/detalles/1",
            demoLink: "https://tiendasmile.vercel.app/",
          },
          {
            title: "Gestoría Cisneros",
            imgSrc: "/vistagestoria.png",
            detailsLink: "/detalles/6",
            demoLink: "https://gestoriacisneros.com",
          },
        ].map((proyecto, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="p-2 text-center leading-tight font-raleway">
              {proyecto.title}
            </h2>
            <img
              data-aos="fade-down"
              className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md border-2 border-fuchsia-800 b_glow"
              src={proyecto.imgSrc}
              alt={proyecto.title}
            />
            <div className="flex gap-4 justify-center p-2 leading-tight font-raleway">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={proyecto.demoLink}
              >
                Ver página
              </a>
            </div>
          </div>
        ))}
      </div>
      <Comentarios />
      <h1
        data-aos="fade-right"
        className="text-5xl font-raleway text-center mb-8 p-4 leading-normal text-white"
      >
        Modelos de Página Web disponibles para personalizar
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full justify-center">
        {[
          {
            nombre: "App Pedidos al Whatsapp",
            imgSrc: "/vistapedidos.png",
            infoLink: "/info/pedidos-whatsapp",
            demoLink: "https://pedidoswp.netlify.app/",
            precio: "$200.000",
          },
          {
            nombre: "App Tienda Online",
            imgSrc: "/vistasmile.png",
            infoLink: "/info/tienda-online",
            demoLink: "https://tiendasmile.vercel.app/",
            precio: "$550.000",
          },
        ].map((modelo, index) => (
          <div
            key={index}
            className="bg-fuchsia-800 rounded-2xl p-6 shadow-lg hover:shadow-fuchsia-500/30 transition duration-300 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold text-white mb-2 text-center uppercase font-raleway">
              {modelo.nombre}
            </h2>
            <img
              data-aos="fade-down"
              className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md border-2 border-fuchsia-800 b_glow mb-4"
              src={modelo.imgSrc}
              alt={modelo.nombre}
            />
            <p className="text-fuchsia-300 font-bold text-lg mb-2">
              Precio: {modelo.precio}
            </p>
            <div className="flex gap-4 justify-center text-white mb-4 font-raleway uppercase">
              <Link to={modelo.infoLink}>Info |</Link>
              <a
                href={modelo.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver página
              </a>
            </div>
            <button
              onClick={() => {
                const mensaje = `Hola, estoy interesado/a en la ${modelo.nombre}. ¿Me contás más?`;
                const numero = "1170618004"; // tu número de WhatsApp
                const url = `https://wa.me/54${numero}?text=${encodeURIComponent(
                  mensaje
                )}`;
                window.open(url, "_blank");
              }}
              className="mt-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-4 py-2 rounded-xl transition-all"
            >
              Quiero esta Web App
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
