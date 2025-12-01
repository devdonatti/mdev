// InfoProducto.jsx (super animado, llamativo y profesional)
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const productos = {
  "pedidos-whatsapp": {
    nombre: "App Pedidos al WhatsApp",
    publico: "foodtrucks · pizzerías · cafeterías · fast food",
    descripcion:
      "Si recibís muchos pedidos por WhatsApp y te cuesta organizarlos, esta app te ahorra tiempo y reduce errores.",
    dolor: [
      "Pedidos desordenados y mensajes incompletos.",
      "Perdés tiempo anotando todo a mano.",
      "Muchos chats abiertos en horas pico.",
    ],
    solucion:
      "Un menú visual donde el cliente selecciona sus productos y envía el pedido con todos los datos listos, sin errores.",
    beneficios: [
      "Pedidos claros y completos.",
      "Menos tiempo respondiendo.",
      "Tu negocio se ve más profesional.",
      "No pagás mensualidades.",
    ],
    testimonios: [
      {
        nombre: "Lucas – Burgers del Centro",
        comentario:
          "Ahora los pedidos llegan claros y completos. Bajó el caos del WhatsApp.",
      },
    ],
    demoLink: "https://pedidoswp.netlify.app/",
    imgSrc: "/vistapedidos.png",
    whatsappMsg:
      "Hola, me interesa la App Pedidos al WhatsApp. ¿Podrías darme más info?",
  },

  "tienda-online": {
    nombre: "Tienda Online Profesional",
    publico: "emprendedoras · marcas de ropa · accesorios · cosmética",
    descripcion:
      "Una tienda moderna con carrito, pagos y gestión simple. Vendé sin responder chats todo el día.",
    dolor: [
      "Tus clientes te piden precios por DM todo el día.",
      "No tenés un catálogo claro ni proceso automático.",
      "Perdés ventas porque la gente se cansa de preguntar.",
    ],
    solucion:
      "Tu tienda lista para usar, con carrito, pagos y panel de administración simple.",
    beneficios: [
      "Más ventas sin esfuerzo.",
      "Imagen profesional inmediata.",
      "Pagos automáticos por MercadoPago.",
      "Catálogo ordenado y editable.",
    ],
    testimonios: [
      {
        nombre: "Rocío – Indumentaria Femenina",
        comentario: "Mis clientas ahora compran solas. Subieron mis ventas.",
      },
    ],
    demoLink: "https://tiendasmile.vercel.app/",
    imgSrc: "/vistasmile.png",
    whatsappMsg:
      "Hola, quiero más información sobre la Tienda Online Profesional.",
  },

  "pagina-institucional": {
    precioAntes: "280.000",
    precio: "160.000",
    incluye: "Incluye dominio .com por 1 año",
    nombre: "Página Institucional Profesional",
    publico: "abogados · estudios jurídicos · escribanías · consultoras",
    descripcion:
      "Mostrá tu profesión con una imagen moderna, confiable y lista para captar clientes. Tu web institucional ordenada, clara y adaptada a tu identidad.",
    dolor: [
      "Tu web actual se ve vieja, desactualizada o directamente no tenés una.",
      "Los clientes no encuentran la información importante: servicios, contacto, trayectoria.",
      "Dudás profesionalmente porque tu presencia online no refleja la calidad de tu trabajo.",
      "Perdés oportunidades por no tener una imagen seria y actualizada.",
    ],
    solucion:
      "Creamos una web institucional moderna, clara y profesional, pensada especialmente para estudios jurídicos y profesionales independientes. Incluye secciones completas, diseño serio, carga rápida y estructura optimizada.",
    beneficios: [
      "Transmití confianza y profesionalismo desde el primer vistazo.",
      "Mostrá tus áreas de práctica, trayectoria, valores y equipo.",
      "Diseño moderno, rápido y adaptable a tu estudio.",
      "Botones directos a WhatsApp para recibir consultas fácilmente.",
      "Sin mensualidades: pago único y la web es tuya.",
    ],
    testimonios: [
      {
        nombre: "Epex e hijos",
        comentario:
          "La web quedó súper profesional y muy completa. La gente encuentra todo mucho más rápido.",
      },
      {
        nombre: "Gestoria Cisneros",
        comentario:
          "Ordenamos toda la información del estudio y la web transmite mucha más confianza.",
      },
    ],

    demoLink: "https://plantillas-estudios.netlify.app/",
    imgSrc: "/plantilla.png",
    whatsappMsg: "Hola, quiero la Página Institucional Profesional.",
  },
};

// CARD animada
const Card = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-lg backdrop-blur-md hover:shadow-fuchsia-700/30 transition-all ${className}`}
  >
    {children}
  </motion.div>
);

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
    <div className="pt-24 p-6 md:pt-16 md:p-16 text-white max-w-5xl mx-auto space-y-16 bg-slate-950">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-3"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-fuchsia-500">
          {producto.nombre}
        </h1>
        <p className="text-gray-400 text-xs uppercase tracking-widest">
          {producto.publico}
        </p>
      </motion.div>

      {/* Imagen con blurecito */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Card className="p-3">
          <img
            className="rounded-xl shadow-lg border border-slate-700"
            src={producto.imgSrc}
            alt={producto.nombre}
          />
        </Card>
      </motion.div>

      {/* Descripción */}
      <Card className="text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-300">{producto.descripcion}</p>
      </Card>

      {/* 🔥 ANIMACIÓN EN LISTA (DOLOR) */}
      <Card>
        <h2 className="text-2xl font-semibold text-fuchsia-400 mb-4 text-center">
          ¿Te pasa esto?
        </h2>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-3 max-w-2xl mx-auto"
        >
          {producto.dolor.map((d, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0 },
              }}
              className="flex items-start gap-3"
            >
              <FaCheckCircle className="text-red-400 mt-1 text-lg" />
              <span className="text-gray-300">{d}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Card>

      {/* SOLUCIÓN */}
      <Card>
        <h2 className="text-2xl font-semibold text-fuchsia-400 mb-4 text-center">
          La solución
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto">
          {producto.solucion}
        </p>
      </Card>

      {/* BENEFICIOS */}
      <Card>
        <h2 className="text-2xl font-semibold text-fuchsia-400 mb-4 text-center">
          Beneficios clave
        </h2>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-3 max-w-2xl mx-auto"
        >
          {producto.beneficios.map((b, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0 },
              }}
              className="flex items-start gap-3"
            >
              <FaCheckCircle className="text-green-400 mt-1 text-lg" />
              <span className="text-gray-300">{b}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Card>

      {/* TESTIMONIOS */}
      <Card>
        <h2 className="text-2xl font-semibold text-fuchsia-400 mb-6 text-center">
          Opiniones reales
        </h2>

        {producto.testimonios.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-5 rounded-xl border border-slate-700 mb-3"
          >
            <p className="italic text-gray-300">"{t.comentario}"</p>
            <p className="text-right font-semibold mt-3 text-fuchsia-300">
              - {t.nombre}
            </p>
          </motion.div>
        ))}
      </Card>
      {/* SECCIONES EXCLUSIVAS PARA PAGINA INSTITUCIONAL */}
      {producto.nombre === "Página Institucional Profesional" && (
        <>
          {/* QUÉ INCLUYE */}
          <Card>
            <h2 className="text-2xl font-semibold text-fuchsia-400 mb-6 text-center">
              ¿Qué incluye tu Página Institucional?
            </h2>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="space-y-4 max-w-2xl mx-auto"
            >
              {[
                "Diseño moderno y profesional pensado para estudios jurídicos.",
                "Secciones: Quiénes somos, Áreas de práctica, Servicios, Contacto y más.",
                "Integración con WhatsApp para consultas directas.",
                "Formulario de contacto optimizado.",
                "Adaptada a escritorio y celular.",
                "Carga rápida y optimizada para captar clientes.",
                "Pago único. Sin mensualidades ni costos ocultos.",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-fuchsia-400 mt-1 text-lg" />
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </Card>

          {/* CÓMO TRABAJAMOS */}
          <Card>
            <h2 className="text-2xl font-semibold text-fuchsia-400 mb-6 text-center">
              ¿Cómo trabajamos?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  titulo: "1. Enviás la información",
                  desc: "Escribinos via WhatsApp y pedinos tu formulario para completar con tus datos e informacion ",
                },
                {
                  titulo: "2. Abonás la seña",
                  desc: "Pagás el 25% para comenzar el trabajo. El 75% restante al finalizar.",
                },
                {
                  titulo: "3. Configuramos tu web",
                  desc: "Con la seña acreditada, cargamos tus datos y compramos tu dominio por 1 año.",
                },
                {
                  titulo: "4. Publicamos tu página",
                  desc: "La web queda activa, profesional y lista para que tus clientes te encuentren.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-md text-center"
                >
                  <h3 className="text-xl font-semibold text-fuchsia-300 mb-2">
                    {step.titulo}
                  </h3>
                  <p className="text-gray-300 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* PREGUNTAS FRECUENTES */}
          <Card>
            <h2 className="text-2xl font-semibold text-fuchsia-400 mb-6 text-center">
              Preguntas frecuentes
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  p: "¿Cuánto tarda en estar lista?",
                  r: "Despues de recibida la informacion, en 24 hs te la entregamos lista para funcionar.",
                },
                {
                  p: "¿Tengo que pagar algo por mes?",
                  r: "No. Es un pago único. La web es tuya.",
                },
                {
                  p: "¿Puedo pedir cambios?",
                  r: "Sí, ajustamos tu información y secciones según tus necesidades, a cotizar.",
                },
                {
                  p: "¿Puedo agregar más servicios o secciones?",
                  r: "Sí, se puede ampliar o personalizar según tu estudio.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 p-4 rounded-xl border border-slate-700"
                >
                  <h3 className="text-lg font-semibold text-fuchsia-300">
                    {faq.p}
                  </h3>
                  <p className="text-gray-300 mt-1">{faq.r}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </>
      )}

      {/* CTA CON ANIMACIÓN */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex flex-col md:flex-row justify-center items-center gap-6"
      >
        <motion.a
          href={producto.demoLink}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-8 py-3 rounded-xl font-semibold transition-all"
        >
          Ver en vivo
        </motion.a>

        <motion.button
          onClick={handleWhatsapp}
          whileHover={{
            scale: 1.05,
            rotate: 1,
            transition: { type: "spring", stiffness: 200 },
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-7 py-3 rounded-xl font-semibold transition-all"
        >
          <FaWhatsapp className="text-xl" /> Quiero esta App
        </motion.button>
      </motion.div>
      {/* BLOQUE DE PRECIOS */}
      {/* CTA CON PRECIO (solo si el producto tiene precio) */}
      {producto.precio && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center max-w-xl mx-auto space-y-4 shadow-xl"
        >
          {/* Precios */}
          <div className="space-y-1">
            {producto.precioAntes && (
              <p className="text-gray-400 line-through text-sm">
                Antes: $ {producto.precioAntes}
              </p>
            )}

            <p className="text-4xl font-bold text-fuchsia-400">
              $ {producto.precio}
            </p>

            <p className="text-xs text-gray-400 uppercase tracking-widest">
              Pago único · Sin mensualidades
            </p>
          </div>

          {/* Botón Comprar */}
          <motion.a
            href="https://mpago.la/2KMpciw"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full block bg-fuchsia-600 hover:bg-fuchsia-500 text-white py-3 rounded-xl font-semibold shadow-lg"
          >
            Comprar ahora
          </motion.a>

          {/* Botón WhatsApp */}
          <motion.button
            onClick={handleWhatsapp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl font-semibold"
          >
            <FaWhatsapp /> Consultar por WhatsApp
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default InfoProducto;
