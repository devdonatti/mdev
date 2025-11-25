import { useState } from "react";

export default function CotizarModal() {
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [tipoProyecto, setTipoProyecto] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // --- Formatear WhatsApp con +549 ---
    let whatsappFormatted = whatsapp.replace(/\D/g, ""); // elimina todo que no sea número
    if (whatsappFormatted && !whatsappFormatted.startsWith("549")) {
      whatsappFormatted = "549" + whatsappFormatted;
    }
    if (whatsappFormatted) {
      whatsappFormatted = "+" + whatsappFormatted;
    }

    try {
      const res = await fetch("/.netlify/functions/sendLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          email,
          whatsapp: whatsappFormatted,
          tipoProyecto,
        }),
      });

      if (res.ok) {
        alert("¡Gracias! Tu cotización fue enviada.");
        setNombre("");
        setEmail("");
        setWhatsapp("");
        setTipoProyecto("");
        setShowModal(false);
      } else {
        const text = await res.text();
        console.error("Server error:", text);
        alert("Ocurrió un error al enviar. Revisá la consola.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Ocurrió un error de conexión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="bg-black hover:text-fuchsia-500 glow p-4 rounded lg:text-5xl text-white font-raleway"
        onClick={() => setShowModal(true)}
      >
        Cotizar
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-96">
            <button onClick={() => setShowModal(false)} className="float-right">
              ✖
            </button>
            <h3>Cotización</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-3">
              <input
                name="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                name="whatsapp"
                placeholder="WhatsApp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
              <select
                name="tipoProyecto"
                value={tipoProyecto}
                onChange={(e) => setTipoProyecto(e.target.value)}
                required
              >
                <option value="">Tipo de proyecto</option>
                <option value="Landing">Landing page</option>
                <option value="Tienda">Tienda online</option>
                <option value="Tienda">Pagina institucional</option>
                <option value="Tienda">Algo más personalizado</option>
              </select>
              <button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
