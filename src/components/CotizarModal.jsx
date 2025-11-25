import { useState } from "react";

// -------------------------
// COMPONENTE PRINCIPAL
// -------------------------
export default function CotizarConCalificacion() {
  const [showModal, setShowModal] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  // Primer formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [tipoProyecto, setTipoProyecto] = useState("");
  const [loading, setLoading] = useState(false);

  // Segundo formulario
  const [urgencia, setUrgencia] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [tipo2, setTipo2] = useState("");
  const [rubro, setRubro] = useState("");
  const [conocimiento, setConocimiento] = useState("");
  const [problema, setProblema] = useState("");

  // -------------------------
  // ENVÍO PRIMER FORM
  // -------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Formatear WhatsApp
    let wpp = whatsapp.replace(/\D/g, "");
    if (wpp && !wpp.startsWith("549")) wpp = "549" + wpp;
    if (wpp) wpp = "+" + wpp;

    try {
      const res = await fetch("/.netlify/functions/sendLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          email,
          whatsapp: wpp,
          tipoProyecto,
        }),
      });

      if (res.ok) {
        // Limpia
        setShowModal(false);
        setShowSecond(true); // 👉 Abre el segundo formulario
      } else {
        alert("Hubo un error al enviar el formulario.");
      }
    } catch (error) {
      alert("Error de conexión.");
    } finally {
      setLoading(false);
    }
  };

  // -------------------------
  // ENVÍO SEGUNDO FORM —> WhatsApp
  // -------------------------
  const enviarWhatsApp = (e) => {
    e.preventDefault();

    const mensaje = `
✨ *Nuevo Lead Calificado* ✨

*Urgencia:* ${urgencia}
*Presupuesto:* ${presupuesto}
*Tipo de proyecto:* ${tipo2}
*Rubro:* ${rubro}
*Conocimiento digital:* ${conocimiento}
*Problema principal:* ${problema}
`;

    const numero = "1170618004"; // tu número

    const url = `https://wa.me/54${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
    setShowSecond(false);
  };

  return (
    <>
      {/* BOTÓN COTIZAR */}
      <button
        className="bg-black hover:text-fuchsia-500 glow p-4 rounded lg:text-5xl text-white font-raleway"
        onClick={() => setShowModal(true)}
      >
        Cotizar
      </button>

      {/* -------------------- PRIMER FORMULARIO -------------------- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-96">
            <button onClick={() => setShowModal(false)} className="float-right">
              ✖
            </button>

            <h3 className="text-xl font-bold mb-3">Cotización</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                name="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="border p-2 rounded"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border p-2 rounded"
              />
              <input
                name="whatsapp"
                placeholder="WhatsApp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="border p-2 rounded"
              />

              <select
                value={tipoProyecto}
                onChange={(e) => setTipoProyecto(e.target.value)}
                required
                className="border p-2 rounded"
              >
                <option value="">Tipo de proyecto</option>
                <option value="Landing page">Landing page</option>
                <option value="Tienda online">Tienda online</option>
                <option value="Página institucional">
                  Página institucional
                </option>
                <option value="Personalizado">Algo más personalizado</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="bg-fuchsia-600 text-white p-2 rounded"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* -------------------- SEGUNDO FORMULARIO -------------------- */}
      {showSecond && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-xl shadow-xl relative">
            <button
              className="absolute top-2 right-3"
              onClick={() => setShowSecond(false)}
            >
              ✖
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center">
              Para conocerte mejor 💬
            </h2>

            <form onSubmit={enviarWhatsApp} className="flex flex-col gap-3">
              <select
                value={urgencia}
                onChange={(e) => setUrgencia(e.target.value)}
                required
                className="border p-2 rounded"
              >
                <option value="">¿Qué tanta urgencia tenés?</option>
                <option value="Lo necesito esta semana">
                  Lo necesito esta semana
                </option>
                <option value="Este mes">Este mes</option>
                <option value="Estoy averiguando">
                  Solo estoy averiguando
                </option>
              </select>

              <select
                value={presupuesto}
                onChange={(e) => setPresupuesto(e.target.value)}
                required
                className="border p-2 rounded"
              >
                <option value="">Presupuesto estimado</option>
                <option value="-100000">Menos de $100.000</option>
                <option value="100000-300000">$100.000 – $300.000</option>
                <option value="+300000">Más de $300.000</option>
              </select>

              <select
                value={tipo2}
                onChange={(e) => setTipo2(e.target.value)}
                required
                className="border p-2 rounded"
              >
                <option value="">Tipo de proyecto</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Tienda online">Tienda Online</option>
                <option value="Página institucional">
                  Página institucional
                </option>
                <option value="Personalizado">Personalizado</option>
              </select>

              <input
                type="text"
                placeholder="¿En qué rubro trabajás?"
                value={rubro}
                onChange={(e) => setRubro(e.target.value)}
                required
                className="border p-2 rounded"
              />

              <select
                value={conocimiento}
                onChange={(e) => setConocimiento(e.target.value)}
                required
                className="border p-2 rounded"
              >
                <option value="">Nivel de conocimiento digital</option>
                <option value="Bajo">Bajo</option>
                <option value="Medio">Medio</option>
                <option value="Alto">Alto</option>
              </select>

              <textarea
                placeholder="¿Qué problema querés resolver?"
                value={problema}
                onChange={(e) => setProblema(e.target.value)}
                required
                className="border p-2 rounded"
                rows={3}
              />

              <button
                type="submit"
                className="bg-fuchsia-600 text-white py-2 rounded-lg hover:bg-fuchsia-500 transition"
              >
                Enviar a WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
