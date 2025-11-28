import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Comentarios from "./Comentarios";

const proyectos = [
  {
    title: "Tienda online Smile",
    imgSrc: "/vistasmile.png",
    demoLink: "https://smiletienda.com.ar/",
  },
  {
    title: "Tienda online VikingTech",
    imgSrc: "/vista-app-viking.png",
    demoLink: "https://vikingtech.com.ar/",
  },
  {
    title: "Epex e Hijos",
    imgSrc: "/vista-epex.png",
    demoLink: "https://epexehijos.com/",
  },
  {
    title: "Gestoría Cisneros",
    imgSrc: "/vistagestoria.png",
    demoLink: "https://gestoriacisneros.com",
  },
  {
    title: "Cerrajeria ",
    imgSrc: "/vista-cerrajeria.png",
    demoLink: "https://cerrajeria24hs.com",
  },
];

const plantillas = [
  {
    nombre: "Pedidos al Whatsapp",
    imgSrc: "/vistapedidos.png",
    infoLink: "/info/pedidos-whatsapp",
    demoLink: "https://pedidoswp.netlify.app/",
    precio: "$200.000",
  },
  {
    nombre: "E-commerce",
    imgSrc: "/vistasmile.png",
    infoLink: "/info/tienda-online",
    demoLink: "https://tiendasmile.com/",
    precio: "$550.000",
  },
  {
    nombre: "Página institucional",
    imgSrc: "/plantilla.png",
    infoLink: "/info/pagina-institucional",
    demoLink: "https://plantillas-estudios.netlify.app/",
    precio: "$550.000",
  },
];

const Proyectos = () => {
  const carouselRef = useRef(null);

  // AUTOPLAY SOLO EN MOBILE
  // AUTOPLAY + TOUCH + DESKTOP SCROLL
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let interval;
    let userInteracted = false;
    let resetTimeout;

    const startAutoplay = () => {
      interval = setInterval(() => {
        if (userInteracted) return;

        carousel.scrollBy({
          left: 260,
          behavior: "smooth",
        });

        // Cuando llega al final → vuelve al inicio
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth - 10
        ) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 3000);
    };

    startAutoplay();

    const handleInteraction = () => {
      userInteracted = true;
      clearTimeout(resetTimeout);

      resetTimeout = setTimeout(() => {
        userInteracted = false;
      }, 4000); // Se reactiva el autoplay si pasan 4s sin moverlo
    };

    // Mobile touch
    carousel.addEventListener("touchstart", handleInteraction);
    carousel.addEventListener("touchmove", handleInteraction);
    carousel.addEventListener("touchend", handleInteraction);

    // Desktop scroll con mouse
    carousel.addEventListener("wheel", handleInteraction);
    carousel.addEventListener("mousedown", handleInteraction);
    carousel.addEventListener("mouseup", handleInteraction);

    return () => {
      clearInterval(interval);

      carousel.removeEventListener("touchstart", handleInteraction);
      carousel.removeEventListener("touchmove", handleInteraction);
      carousel.removeEventListener("touchend", handleInteraction);

      carousel.removeEventListener("wheel", handleInteraction);
      carousel.removeEventListener("mousedown", handleInteraction);
      carousel.removeEventListener("mouseup", handleInteraction);
    };
  }, []);

  return (
    <div id="Proyectos" className="p-5 md:p-20 flex flex-col items-center">
      {/* Título */}
      <h1 className="text-5xl md:text-6xl font-raleway mb-8 p-4 font-bold text-fuchsia-600 text-center tracking-tight">
        Trabajos realizados
      </h1>

      {/* CARRUSEL MOBILE AUTOPLAY */}
      <div
        className="relative w-full overflow-x-auto py-10 snap-x snap-mandatory scroll-smooth"
        ref={carouselRef}
      >
        <div className="flex gap-10 px-4">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center min-w-[240px] md:min-w-[300px] snap-start"
            >
              <h2 className="p-2 text-center leading-snug font-raleway text-white text-lg font-semibold">
                {proyecto.title}
              </h2>

              <img
                data-aos="fade-down"
                className="w-full h-auto max-w-xs md:max-w-sm border-2 border-fuchsia-700 rounded-xl shadow-lg hover:shadow-fuchsia-500/40 transition-all duration-300"
                src={proyecto.imgSrc}
                alt={proyecto.title}
              />

              <div className="flex gap-4 justify-center p-2 font-raleway text-white text-sm uppercase">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={proyecto.demoLink}
                  className="hover:text-fuchsia-300 transition"
                >
                  Ver página
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMENTARIOS */}
      <Comentarios />

      {/* Título Plantillas */}
      <h1
        data-aos="fade-right"
        className="text-4xl md:text-5xl font-raleway text-center mb-8 p-4 text-white font-bold tracking-tight"
      >
        Plantillas
      </h1>

      {/* PLANTILLAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full justify-center">
        {plantillas.map((modelo, index) => (
          <div
            key={index}
            className="bg-fuchsia-800 rounded-2xl p-6 shadow-xl hover:shadow-fuchsia-500/40 transition duration-300 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold text-white mb-2 text-center uppercase font-raleway">
              {modelo.nombre}
            </h2>

            <img
              className="w-full h-auto max-w-xs md:max-w-sm border-2 border-fuchsia-900 rounded-xl shadow-md mb-4"
              src={modelo.imgSrc}
              alt={modelo.nombre}
            />

            <div className="flex gap-4 justify-center text-white mb-4 font-raleway uppercase">
              <Link
                to={modelo.infoLink}
                className="hover:text-fuchsia-300 transition"
              >
                Info |
              </Link>
              <a
                href={modelo.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fuchsia-300 transition"
              >
                Ver página
              </a>
            </div>

            <button
              onClick={() => {
                const mensaje = `Hola, estoy interesado/a en la ${modelo.nombre}. ¿Me contás más?`;
                const numero = "1170618004";
                const url = `https://wa.me/54${numero}?text=${encodeURIComponent(
                  mensaje
                )}`;
                window.open(url, "_blank");
              }}
              className="mt-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-4 py-2 rounded-xl transition-all font-semibold"
            >
              Quiero esta aplicación web
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
