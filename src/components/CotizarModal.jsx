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

  // --- Manejo del primer formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // --- Manejo del segundo formulario
  const handleAdvancedChange = (e) => {
    setAdvancedForm({ ...advancedForm, [e.target.name]: e.target.value });
  };

  // --- Formatea WhatsApp a +549...
  const formatWhatsapp = (value) => {
    let clean = value.replace(/\D/g, "");
    if (clean && !clean.startsWith("549")) clean = "549" + clean;
    return "+" + clean;
  };

  // --- Envío del primer formulario a Make
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

      // Abrir el segundo modal después de 1.2s
      setTimeout(() => {
        setShowModal(false);
        setSuccess("");
        setShowSecondModal(true);
      }, 1200);
    } catch (err) {
      console.error(err);
      setError("Hubo un error al enviar el formulario. Probá nuevamente.");
    }

    setLoading(false);
  };

  // --- Envío del segundo formulario a WhatsApp
  const handleAdvancedSubmit = (e) => {
    e.preventDefault();

    const text = `
Hola!, soy *${form.nombre}* 🙋‍♂️🙋‍♀️

Estoy interesado/a en una *${form.tipoProyecto}*.

📌 *Objetivo del sitio:* ${advancedForm.objetivo}
💰 *Presupuesto estimado:* ${advancedForm.presupuesto}
⏳ *Tiempo esperado:* ${advancedForm.tiempo}

📱 Mi WhatsApp: ${form.whatsapp}
📧 Mi email: ${form.email}

¡Hablemos! 😊
    `;

    const encoded = encodeURIComponent(text);
    const phone = "5491170618004"; // TU WHATSAPP

    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");

    // Resetear ambos formularios después de enviar
    setShowSecondModal(false);
    setForm({
      nombre: "",
      email: "",
      whatsapp: "",
      tipoProyecto: "",
    });
    setAdvancedForm({
      objetivo: "",
      presupuesto: "",
      tiempo: "",
    });
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

      {/* MODAL 1 - Cotización */}
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

      {/* MODAL 2 - Preguntas avanzadas */}
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
              Para que el equipo te contacte más rápido, respondé estas
              preguntas 🙂
            </h3>

            <p className="text-center text-gray-600 mb-3">
              Esto nos ayuda a orientarte mejor.
            </p>

            <form
              onSubmit={handleAdvancedSubmit}
              className="flex flex-col gap-3 text-black"
            >
              <select
                name="objetivo"
                value={advancedForm.objetivo}
                onChange={handleAdvancedChange}
                required
                className="p-2 border rounded"
              >
                <option value="">Objetivo principal del sitio</option>
                <option value="Vender productos físicos">
                  Vender productos físicos
                </option>
                <option value="Vender servicios">Vender servicios</option>
                <option value="Mostrar información del negocio">
                  Mostrar información del negocio
                </option>
                <option value="Conseguir más clientes (leads)">
                  Conseguir más clientes (leads)
                </option>
                <option value="Agendar turnos">Agendar turnos</option>
                <option value="Mostrar catálogo sin carrito">
                  Mostrar catálogo sin carrito
                </option>
                <option value="Otro">Otro</option>
              </select>

              <select
                name="presupuesto"
                value={advancedForm.presupuesto}
                onChange={handleAdvancedChange}
                required
                className="p-2 border rounded"
              >
                <option value="">Presupuesto estimado</option>
                <option value="Menos de $200.000">Menos de $200.000</option>
                <option value="$250.000 a $500.000">$250.000 a $500.000</option>
                <option value="$500.000 - $1.000.000">
                  $500.000 - $1.000.000
                </option>
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
