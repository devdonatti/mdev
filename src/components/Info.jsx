import React from "react";

const Info = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-6 pt-24">
      <h1 className="text-4xl font-bold mb-6">📱 App de Pedidos a WhatsApp</h1>

      <p className="text-lg max-w-2xl">
        Una solución digital simple y efectiva para negocios gastronómicos.
        Permite a los clientes ver el menú, seleccionar productos y enviar su
        pedido directamente al WhatsApp del negocio en solo unos clics.
      </p>

      <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-2xl font-bold text-yellow-400">
          Beneficios clave:
        </h2>
        <ul
          className="mt-4 text-left text-lg list-inside space-y-2 list-none
 "
        >
          <li>
            ✅ <b>Fácil y rápida:</b> Sin registros ni complicaciones.
          </li>
          <li>
            ✅ <b>Automatización del pedido:</b> Mensaje listo para enviar.
          </li>
          <li>
            ✅ <b>Sin costos adicionales:</b> No requiere pasarelas de pago.
          </li>
          <li>
            ✅ <b>Diseño adaptable:</b> Funciona en cualquier dispositivo.
          </li>
          <li>
            ✅ <b>Configuración sencilla:</b> Personaliza el menú fácilmente.
          </li>
        </ul>
      </div>

      <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-2xl font-bold text-yellow-400">
          Funcionalidades principales:
        </h2>
        <ul className="mt-4 text-left text-lg list-none list-inside space-y-2">
          <li>
            📋 <b>Menú digital:</b> Productos con imágenes, descripciones y
            precios.
          </li>
          <li>
            🛒 <b>Carrito de compras:</b> Los clientes pueden seleccionar varios
            productos.
          </li>
          <li>
            📩 <b>Envío directo a WhatsApp:</b> Pedido listo para enviar al
            negocio.
          </li>
          <li>
            <b>Interfaz moderna:</b> Diseño atractivo y experiencia intuitiva.
          </li>
        </ul>
      </div>

      <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-2xl font-bold text-yellow-400">
          ¿Para quién es esta app?
        </h2>
        <p className="mt-4 text-lg">
          <b>Negocios gastronómicos:</b> Restaurantes, cafeterías, pizzerías,
          food trucks, heladerías y más.
        </p>
        <p className="mt-2 text-lg">
          <b>Emprendedores:</b> Si vendes productos por WhatsApp, esta app
          facilitará tu proceso de pedidos.
        </p>
      </div>

      <div className="bg-yellow-500 p-4 mt-6 rounded-lg shadow-lg max-w-2xl m-6">
        <h2 className="text-2xl font-bold text-fuchsia-600">
          ¿Querés esta app para tu negocio?
        </h2>
        <p className="mt-5 text-lg text-gray-900">
          📩 Contáctame para más información y personalización. 🚀
        </p>
      </div>
    </div>
  );
};

export default Info;
