{
  /*import React, { useState } from "react";

const MERCADOPAGO_URL =
  "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/?source=link&preference-id=2685135282-55e1bd72-a111-4095-a64e-5d062d5ed7a0&router-request-id=47735e79-d9f6-44f5-94d0-e2ddab30b4eb";
const waNumber = "5491170618004";

const CotizarModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    servicio: "Landing / Página institucional",
    presupuesto: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{7,15}$/;

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "El nombre es obligatorio";
    if (!emailRegex.test(form.email)) e.email = "Email inválido";
    if (!phoneRegex.test(form.whatsapp.replace(/\D/g, "")))
      e.whatsapp = "Número inválido (solo números)";
    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const submitLeadToProxy = async (leadData) => {
    try {
      const response = await fetch("/.netlify/functions/sendLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });
      if (!response.ok) throw new Error("Error enviando lead");
      console.log("Lead enviado correctamente a Zapier vía proxy");
    } catch (err) {
      console.error("Error guardando lead o abriendo MP:", err);
      throw err;
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setServerError("");
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);

    const payload = {
      nombre: form.nombre,
      email: form.email,
      whatsapp: form.whatsapp,
      servicio: form.servicio,
      presupuesto: form.presupuesto,
      mensaje: form.mensaje,
      fecha: new Date().toISOString(),
      estado: "Nuevo",
      source: "Landing - Botón Cotizar",
    };

    try {
      await submitLeadToProxy(payload);
      setSuccess(true);
      window.open(MERCADOPAGO_URL, "_blank", "noopener,noreferrer");
    } catch {
      setServerError(
        "No se pudo guardar tu solicitud automáticamente. Podés intentar de nuevo o abrir MercadoPago manualmente."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const resetAndClose = () => {
    setForm({
      nombre: "",
      email: "",
      whatsapp: "",
      servicio: "Landing / Página institucional",
      presupuesto: "",
      mensaje: "",
    });
    setErrors({});
    setSuccess(false);
    setServerError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">Solicitar cotización</h3>
          <button onClick={resetAndClose} className="text-sm">
            Cerrar ✕
          </button>
        </div>

        {!success ? (
          <>
            <p className="mb-4 text-sm">
              Completá los datos para reservar tu lugar. Después serás
              redirigido al pago de la seña.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Nombre completo"
                className={`w-full p-3 rounded border ${
                  errors.nombre ? "border-red-500" : "border-gray-200"
                }`}
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full p-3 rounded border ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                />
                <input
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="WhatsApp (ej: 5493416xxxxxx)"
                  className={`w-full p-3 rounded border ${
                    errors.whatsapp ? "border-red-500" : "border-gray-200"
                  }`}
                />
              </div>

              <select
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-200"
              >
                <option>Landing / Página institucional</option>
                <option>Tienda online</option>
                <option>Automatización / CRM</option>
                <option>Diseño web + Branding</option>
                <option>Otro</option>
              </select>

              <input
                name="presupuesto"
                value={form.presupuesto}
                onChange={handleChange}
                placeholder="Presupuesto aproximado (opcional)"
                className="w-full p-3 rounded border border-gray-200"
              />

              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Contanos brevemente tu proyecto"
                className="w-full p-3 rounded border border-gray-200"
                rows={4}
              />

              {serverError && (
                <p className="text-red-600 text-sm">{serverError}</p>
              )}

              <div className="flex items-center gap-3 mt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-black text-white px-5 py-3 rounded font-medium"
                >
                  {submitting ? "Procesando..." : "Pagá tu seña y comenzamos"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const waMsg = encodeURIComponent(
                      `Hola, soy ${form.nombre || ""}. Me interesa ${
                        form.servicio
                      }.`
                    );
                    window.open(
                      `https://wa.me/${waNumber}?text=${waMsg}`,
                      "_blank"
                    );
                  }}
                  className="px-4 py-3 border rounded"
                >
                  Chatear por WhatsApp
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">¡Gracias! 🙌</h3>
            <p>
              Tu solicitud quedó registrada y se abrió la pasarela de pago. Si
              no abriste MercadoPago, podés hacerlo desde acá:
            </p>

            <div className="flex justify-center gap-3 mt-3">
              <a
                target="_blank"
                rel="noreferrer"
                href={MERCADOPAGO_URL}
                className="px-4 py-3 bg-black text-white rounded"
              >
                Abrir MercadoPago
              </a>
              <button
                onClick={() => {
                  const waMsg = encodeURIComponent(
                    `Hola, soy ${form.nombre}. He solicitado una cotización y realicé la seña.`
                  );
                  window.open(
                    `https://wa.me/${waNumber}?text=${waMsg}`,
                    "_blank"
                  );
                }}
                className="px-4 py-3 border rounded"
              >
                Confirmar por WhatsApp
              </button>
            </div>

            <button className="mt-4 text-sm underline" onClick={resetAndClose}>
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CotizarModal;
*/
}

import { useState } from "react";

export default function CotizarModal() {
  const [showModal, setShowModal] = useState(false); // controla si se ve el modal
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/sendLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          email,
          whatsapp,
          tipoProyecto,
        }),
      });

      if (response.ok) {
        alert("¡Gracias! Tu cotización fue enviada.");
        setNombre("");
        setEmail("");
        setMensaje("");
        setShowModal(false); // cerrar modal al enviar
      } else {
        alert("Ocurrió un error, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Botón para abrir modal */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Cotizar
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500"
            >
              ✖
            </button>
            <h2 className="text-xl mb-4">Cotización</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="border px-2 py-1 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border px-2 py-1 rounded"
              />
              <textarea
                placeholder="Mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="border px-2 py-1 rounded"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-purple-600 text-white px-4 py-2 rounded mt-2"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
