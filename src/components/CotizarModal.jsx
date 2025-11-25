import { useState } from "react";

export default function CotizarModal() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    tipoProyecto: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatWhatsapp = (value) => {
    let clean = value.replace(/\D/g, "");
    if (clean && !clean.startsWith("549")) clean = "549" + clean;
    return "+" + clean;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const formattedPhone = form.whatsapp ? formatWhatsapp(form.whatsapp) : "";

    try {
      const res = await fetch("/.netlify/functions/sendLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          whatsapp: formattedPhone,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al enviar");
      }

      setSuccess("¡Gracias! Tu cotización fue enviada correctamente 🙌");
      setForm({
        nombre: "",
        email: "",
        whatsapp: "",
        tipoProyecto: "",
      });

      setTimeout(() => {
        setShowModal(false);
        setSuccess("");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Hubo un error al enviar el formulario. Probá nuevamente.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* BOTÓN */}
      <button
        className="bg-black hover:text-fuchsia-500 glow p-4 rounded lg:text-5xl text-white font-raleway"
        onClick={() => setShowModal(true)}
      >
        Cotizar
      </button>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 relative shadow-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-3 top-3 text-xl"
            >
              ✖
            </button>

            <h3 className="text-2xl font-semibold mb-4 text-center text-black">
              Cotización
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 mt-3 text-black"
            >
              <input
                name="nombre"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="p-2 border rounded"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="p-2 border rounded"
              />

              <input
                name="whatsapp"
                placeholder="WhatsApp"
                value={form.whatsapp}
                onChange={handleChange}
                className="p-2 border rounded"
              />

              <select
                name="tipoProyecto"
                value={form.tipoProyecto}
                onChange={handleChange}
                required
                className="p-2 border rounded"
              >
                <option value="">Tipo de proyecto</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Página Web Completa">Página Web Completa</option>
                <option value="Tienda Online">Tienda Online</option>
                <option value="Automatizaciones">Automatizaciones</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>

            {/* MENSAJES */}
            {success && (
              <p className="text-green-600 text-center mt-3">{success}</p>
            )}
            {error && <p className="text-red-600 text-center mt-3">{error}</p>}
          </div>
        </div>
      )}
    </>
  );
}
