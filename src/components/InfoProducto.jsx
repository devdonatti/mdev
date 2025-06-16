import { useParams } from "react-router-dom";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const productos = {
  "pedidos-whatsapp": {
    nombre: "App Pedidos al WhatsApp",
    descripcion:
      "Ideal para emprendimientos de comida rápida o negocios que gestionan pedidos por WhatsApp. El cliente elige productos, completa un formulario y confirma su pedido directo desde la web.",
    caracteristicas: [
      "Menú visual e intuitivo",
      "Formulario con datos del cliente",
      "Botón de enviar pedido directo a WhatsApp",
      "Diseño moderno y adaptable a celular",
    ],
    demoLink: "https://pedidoswp.netlify.app/",
    imgSrc: "/vistapedidos.png",
    whatsappMsg:
      "Hola, estoy interesado/a en la App Pedidos al WhatsApp. ¿Podrías contarme más?",
  },
  "tienda-online": {
    nombre: "App Tienda Online",
    descripcion:
      "Tu negocio digital en minutos. Mostrá tus productos, integrá un carrito de compras y permití pagos con MercadoPago. Perfecto para marcas que quieren vender online con una imagen profesional.",
    caracteristicas: [
      "Catálogo editable",
      "Carrito de compras",
      "Integración con pasarelas de pago",
      "Diseño profesional y responsive",
      "Panel de administración",
      "Visualizacion de pedidos",
    ],
    demoLink: "https://tiendasmile.vercel.app/",
    imgSrc: "/vistasmile.png",
    whatsappMsg:
      "Hola, me interesa la App Tienda Online que ofrecen. ¿Podrían brindarme más info?",
  },
};

const InfoProducto = () => {
  const { id } = useParams();
  const producto = productos[id];

  if (!producto) {
    return (
      <div className="p-10 text-white text-center text-xl">
        Producto no encontrado.
      </div>
    );
  }

  const handleWhatsapp = () => {
    const numero = "1170618004";
    const url = `https://wa.me/54${numero}?text=${encodeURIComponent(
      producto.whatsappMsg
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-6 md:p-16 text-white max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-fuchsia-500 mb-6 uppercase tracking-wide">
        {producto.nombre}
      </h1>

      <img
        className="rounded-2xl shadow-lg border-2 border-fuchsia-800 mb-8 mx-auto max-w-full md:max-w-2xl"
        src={producto.imgSrc}
        alt={producto.nombre}
      />

      <p className="text-lg md:text-xl text-center mb-6 max-w-3xl mx-auto text-gray-200">
        {producto.descripcion}
      </p>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-fuchsia-400 mb-4 text-center">
          ¿Qué incluye?
        </h2>
        <ul className="grid gap-3 md:grid-cols-2 list-none max-w-2xl mx-auto">
          {producto.caracteristicas.map((caracteristica, i) => (
            <li key={i} className="flex items-start gap-2">
              <FaCheckCircle className="text-green-400 mt-1" />
              <span>{caracteristica}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <a
          href={producto.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-6 py-3 rounded-xl font-semibold transition-all"
        >
          Ver demo en vivo
        </a>

        <button
          onClick={handleWhatsapp}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-semibold transition-all"
        >
          <FaWhatsapp />
          Quiero esta App
        </button>
      </div>
    </div>
  );
};

export default InfoProducto;
