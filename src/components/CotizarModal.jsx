import { useState } from "react";

export default function CotizarModal() {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    tipoProyecto: "",
  });

  const [advancedForm, setAdvancedForm] = useState({
    objetivo: "",
    presupuesto: "",
    tiempo: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdvancedChange = (e) => {
    setAdvancedForm({ ...advancedForm, [e.target.name]: e.target.value });
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

      if (!res.ok) throw new Error(data.error || "Error al enviar");

      setSuccess("¡Gracias! Tu cotización fue enviada correctamente 🙌");

      setTimeout(() => {
        setShowModal(false);
        setSuccess("");

        // 👉 abrir el segundo formulario
        setShowSecondModal(true);
      }, 1200);

      setForm({
        nombre: "",
        email: "",
        whatsapp: "",
        tipoProyecto: "",
      });
    } catch (err) {
      console.error(err);
      setError("Hubo un error al enviar el formulario. Probá nuevamente.");
    }

    setLoading(false);
  };

  const handleAdvancedSubmit = (e) => {
    e.preventDefault();

    const text = `
Hola Mica, te dejo más información sobre mi proyecto:

🔹 *Objetivo del sitio:* ${advancedForm.objetivo}
🔹 *Presupuesto estimado:* ${advancedForm.presupuesto}
🔹 *Tiempo esperado:* ${advancedForm.tiempo}

¡Quedo atenta!
    `;

    const encoded = encodeURIComponent(text);
    const phone = "5491170618004"; // TU WHATSAPP

    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");

    setShowSecondModal(false);
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

      {/* MODAL 1 */}
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

            {success && (
              <p className="text-green-600 text-center mt-3">{success}</p>
            )}
            {error && <p className="text-red-600 text-center mt-3">{error}</p>}
          </div>
        </div>
      )}

      {/* MODAL 2 (Preguntas avanzadas) */}
      {showSecondModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 relative shadow-xl">
            <button
              onClick={() => setShowSecondModal(false)}
              className="absolute right-3 top-3 text-xl"
            >
              ✖
            </button>

            <h3 className="text-2xl font-semibold mb-4 text-center text-black">
              Últimos detalles ✨
            </h3>

            <p className="text-center text-gray-600 mb-3">
              Estas preguntas me ayudan a entender mejor tu proyecto.
            </p>

            <form
              onSubmit={handleAdvancedSubmit}
              className="flex flex-col gap-3 text-black"
            >
              <textarea
                name="objetivo"
                placeholder="¿Cuál es el objetivo principal de tu sitio?"
                value={advancedForm.objetivo}
                onChange={handleAdvancedChange}
                required
                className="p-2 border rounded"
              />

              <select
                name="presupuesto"
                value={advancedForm.presupuesto}
                onChange={handleAdvancedChange}
                required
                className="p-2 border rounded"
              >
                <option value="">Presupuesto estimado</option>
                <option value="Menos de $150.000">Menos de $150.000</option>
                <option value="$150.000 a $300.000">$150.000 a $300.000</option>
                <option value="Más de $300.000">Más de $300.000</option>
              </select>

              <select
                name="tiempo"
                value={advancedForm.tiempo}
                onChange={handleAdvancedChange}
                required
                className="p-2 border rounded"
              >
                <option value="">¿Para cuándo lo necesitás?</option>
                <option value="Lo antes posible">Lo antes posible</option>
                <option value="Este mes">Este mes</option>
                <option value="Sin apuro">Sin apuro</option>
              </select>

              <button
                type="submit"
                className="bg-fuchsia-600 text-white py-2 rounded hover:bg-fuchsia-700 transition"
              >
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
