import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const telefonoDestino = "5491170618004";
    const mensaje = `Hola! Soy ${formData.nombre} (%0AEmail: ${formData.email})%0A%0A${formData.mensaje}`;
    const url = `https://wa.me/${telefonoDestino}?text=${mensaje}`;
    window.open(url, "_blank");
  };

  return (
    <div
      id="Contacto"
      className="p-6 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl md:text-5xl font-raleway font-extrabold mb-10 text-center text-fuchsia-600 tracking-tight uppercase">
        Contactanos
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full lg:w-1/2"
      >
        {/* Inputs lado a lado en desktop */}
        <div className="lg:flex gap-6">
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-gray-300 font-medium pl-1">
              Nombre
            </label>
            <input
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-900 p-4 border border-fuchsia-800 text-lg text-white placeholder-slate-500
                         focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-700 transition-all duration-200 shadow-inner"
              placeholder="Tu nombre"
              type="text"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-2 mt-4 lg:mt-0">
            <label className="text-sm text-gray-300 font-medium pl-1">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-900 p-4 border border-fuchsia-800 text-lg text-white placeholder-slate-500
                         focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-700 transition-all duration-200 shadow-inner"
              placeholder="Tu email"
              type="email"
              required
            />
          </div>
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300 font-medium pl-1">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-900 p-4 border border-fuchsia-800 text-lg text-white placeholder-slate-500 leading-relaxed
                       focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-700 transition-all duration-200 shadow-inner"
            placeholder="Escribí tu consulta..."
            rows={6}
            required
          />
        </div>

        {/* Botón */}
        <button
          className="shadow-lg hover:shadow-fuchsia-900/50 text-white border border-fuchsia-700 bg-fuchsia-700 
                     hover:bg-fuchsia-600 rounded-xl py-4 px-8 mt-4 uppercase text-lg font-bold tracking-wide 
                     transition-all duration-200"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contacto;
