// Detalles.js
import React from "react";
import { useParams } from "react-router-dom";

const obtenerDetallesDelProyecto = (id) => {
  const proyectos = [
    {
      id: "1",
      nombre: "Proyecto Ecommerce Smile",
      imagen: "/proyecto1.png",
      descripcion:
        "Ecommerce Smile es una simulación de tienda online que permite a los usuarios comprar productos en línea. Incluye funcionalidades como el filtro de categorías, agregar productos al carrito y el logueo de usuarios.",
      tecnologias: ["React", "Node.js", "Tailwind"],
      funcionalidades: [
        "Filtro de productos",
        "Carrito de compras",
        "Logueo de usuarios",
      ],
      secciones: [
        "/secciones/app1.png",
        "/secciones/app2.png",
        "/secciones/app3.png",
      ],
    },
    {
      id: "2",
      nombre: "Blog",
      imagen: "/vista-app-blog.png",
      descripcion:
        "Blog moderno escalable. El objetivo del proyecto fue practicar el diseño con la libreria Tailwind CSS, haciendolo totalmente responsive.Ademas se puede cambiar el modo de noche/dia ",
      tecnologias: ["React", "Node.js", "Tailwind"],
      funcionalidades: [
        "Publicación de entradas",
        "Comentarios",
        "Categorías",
        "Sistema de administración",
      ],
      secciones: [
        "/secciones/app9.png",
        "/secciones/app10.png",
        "/secciones/app11.png",
      ],
    },
    {
      id: "3",
      nombre: "Aplicación de clima",
      imagen: "/vista-app-clima.png",
      descripcion:
        "Una aplicación que permite a los usuarios buscar el clima actual en cualquier ciudad. Utiliza una API para obtener datos meteorológicos en tiempo real.",
      tecnologias: ["React", "OpenWeatherMap API", "Tailwind"],
      funcionalidades: [
        "Búsqueda de clima por ciudad",
        "Visualización de datos meteorológicos",
        "Actualización en tiempo real",
      ],
      secciones: ["/secciones/app18.png", "/secciones/app19.png"],
    },
    {
      id: "4",
      nombre: "Ecommerce Food",
      imagen: "/vista-app-ecommerce-food.png",
      descripcion:
        "Ecommerce Food es una simulacion  de comercio electrónico enfocada en la venta de productos alimenticios. Al momento su funcionalidad incluye el logeo de usuarios con FirebaseAuth, agregar productos al carrito y hacer el pedido, el cual se aloja en Firestore, la base de datos de Firebase",
      tecnologias: ["React", "Node.js", "Firebase", "Tailwind"],
      funcionalidades: [
        "Catálogo de productos",
        "Filtro de productos",
        "Carrito de compras",
        "Logueo ",
        "Realizar pedidos",
      ],
      secciones: [
        "/secciones/app4.png",
        "/secciones/app5.png",
        "/secciones/app6.png",
        "/secciones/app7.png",
        "/secciones/app8.png",
      ],
    },
    {
      id: "5",
      nombre: "Login con Firebase",
      imagen: "/vista-app-login.png",
      descripcion:
        "Una aplicación de inicio de sesión utilizando Firebase para la autenticación de usuarios. Ofrece opciones de registro, inicio de sesión y recuperación de contraseña.",
      tecnologias: ["React", "Firebase", "Tailwind"],
      funcionalidades: [
        "Registro de usuarios",
        "Inicio de sesión",
        "Recuperación de contraseña",
        "Autenticación segura",
      ],
      secciones: ["/secciones/app16.png", "/secciones/app17.png"],
    },
    {
      id: "6",
      nombre: "Aplicación de turnos de masajes",
      imagen: "/vista-app-turnos-masajes.png",
      descripcion:
        "Una aplicación para la gestión de turnos en un centro de masajes. Permite a los usuarios reservar citas, ver disponibilidad y recibir confirmaciones de turno. Utiliza una API para acceder a un calendario donde muestra horarios disponibles y fechas",
      tecnologias: [
        "React",
        "Node.js",
        ,
        "Calendly API",
        "Firebase",
        "Tailwind",
      ],
      funcionalidades: [
        "Reserva de turnos",
        "Calendario",
        "Confirmación de citas",
        "Gestión de reservas en Calendly",
      ],
      secciones: [
        "/secciones/app12.png",
        "/secciones/app13.png",
        "/secciones/app14.png",
        "/secciones/app15.png",
      ],
    },
    {
      id: "7",
      nombre: "Aplicación de venta de libros infantiles",
      imagen: "/vista-app-libros.png",
      descripcion:
        "Una aplicación para la venta de libros infantiles. La realizamos en equipo de 4 personas en una simulacin laboral llamada NoCountry, donde colaboré en la creacion de los formularios de registro y loguin. Fue un proyecto muy lindo de compartir donde conoci gente muy amable y compañera.",
      tecnologias: ["React", "Node.js", "CSS", "PostgreSQL"],
      funcionalidades: [
        "Agregar al carrito",
        "Logueo",
        "Registro",
        "Pasarela de pago",
      ],
    },
  ];

  return proyectos.find((proyecto) => proyecto.id === id);
};

const Detalles = () => {
  const { id } = useParams(); // Obtener el parámetro id de la URL

  // Obtener los detalles del proyecto usando el id
  const proyecto = obtenerDetallesDelProyecto(id);

  return (
    <div className="p-6 md:p-10 lg:p-16 min-h-screen m-8">
      {proyecto ? (
        <div className="container mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          {/* Encabezado */}
          <div className="bg-fuchsia-400 p-6 text-white text-center">
            <h1 className="text-2xl font-bold">{proyecto.nombre}</h1>
          </div>

          {/* Contenido principal */}
          <div className="p-6 md:flex md:items-start">
            <div className="md:w-1/2 md:pr-6">
              {/* Imagen del proyecto */}
              <img
                src={proyecto.imagen}
                alt={proyecto.nombre}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
              {/* Descripción */}
              <p className="text-gray-800 mb-4">{proyecto.descripcion}</p>

              {/* Tecnologías */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Tecnologías</h2>
                <ul className="list-disc pl-5">
                  {proyecto.tecnologias.map((tecnologia, index) => (
                    <li key={index} className="text-gray-700">
                      {tecnologia}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Funcionalidades */}
              <div>
                <h2 className="text-xl font-semibold mb-2">Funcionalidades</h2>
                <ul className="list-disc pl-5">
                  {proyecto.funcionalidades.map((funcionalidad, index) => (
                    <li key={index} className="text-gray-700">
                      {funcionalidad}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-fuchsia-400 p-6 text-white text-center">
            <h1 className="text-2xl font-bold">Secciones del proyecto</h1>
          </div>
          <div className="overflow-x-auto p-6 ">
            <div className="flex space-x-4 text-center justify-center">
              {proyecto.secciones &&
                proyecto.secciones.map((imagen, index) => (
                  <img
                    key={index}
                    src={imagen}
                    alt={`Sección ${index + 1}`}
                    className="w-1/4 h-auto object-contain rounded-lg "
                  />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-800">Proyecto no encontrado</p>
      )}
    </div>
  );
};

export default Detalles;
