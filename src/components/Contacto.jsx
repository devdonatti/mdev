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

    const telefonoDestino = "5491170618004"; // Tu número con código de país, sin "+" ni espacios
    const mensaje = `Hola! Soy ${formData.nombre} (%0AEmail: ${formData.email})%0A%0A${formData.mensaje}`;

    const url = `https://wa.me/${telefonoDestino}?text=${mensaje}`;
    window.open(url, "_blank");
  };

  return (
    <div
      id="Contacto"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl font-raleway mb-8 p-4 leading-normal uppercase text-fuchsia-600">
        Contactanos
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-9">
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 text-xl text-slate-500"
            placeholder="Nombre"
            type="text"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 text-xl text-slate-500"
            placeholder="Email"
            type="email"
            required
          />
        </div>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 text-xl text-slate-500"
          placeholder="Escribe tu mensaje..."
          rows="5"
          required
        />
        <button className="shadow-xl hover:shadow-fuchsia-800 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase text-xl font-bold">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
