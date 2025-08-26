import React, { useEffect, useState } from "react";
import { auth, provider, db } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

const Comentarios = () => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [loadingComentarios, setLoadingComentarios] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setLoadingUser(false);

      // Si tus reglas permiten lectura pública (Opción A), podés leer siempre.
      // Si usás la Opción B (solo auth), entonces leé solo si u existe:
      await obtenerComentarios(/* onlyIfLoggedIn= */ false);
      // Si usás Opción B, cambialo por: await obtenerComentarios(true);
    });
    return () => unsub();
  }, []);

  const login = async () => {
    try {
      // Asegurate que provider sea un GoogleAuthProvider válido en ../firebase
      // o crealo acá:
      const googleProvider = provider || new GoogleAuthProvider();
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.error("Error login:", e);
      alert("No se pudo iniciar sesión.");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error("Error logout:", e);
    }
  };

  const enviarComentario = async () => {
    if (!user) return alert("Necesitás iniciar sesión para comentar.");
    const texto = comentario.trim();
    if (!texto) return;

    try {
      await addDoc(collection(db, "comentarios"), {
        texto,
        autor: user.displayName || "Usuario",
        uid: user.uid,
        photoURL: user.photoURL || null,
        timestamp: serverTimestamp(),
      });
      setComentario("");
      await obtenerComentarios(false); // refrescar lista
    } catch (e) {
      console.error("Error al enviar comentario:", e);
      alert("No se pudo enviar el comentario. Revisá las reglas de Firestore.");
    }
  };

  const obtenerComentarios = async (onlyIfLoggedIn = false) => {
    try {
      if (onlyIfLoggedIn && !user) return; // para reglas estrictas
      setLoadingComentarios(true);
      const q = query(
        collection(db, "comentarios"),
        orderBy("timestamp", "desc")
      );
      const snap = await getDocs(q);
      setComentarios(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (e) {
      console.error("Error al obtener comentarios:", e);
      // Si ves "Missing or insufficient permissions", es por las reglas
    } finally {
      setLoadingComentarios(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Reseñas</h2>

      {!user ? (
        <button onClick={login} className="bg-fuchsia-600 px-4 py-2 rounded">
          Iniciar sesión con Google
        </button>
      ) : (
        <>
          <div className="flex items-center gap-3 mb-2">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt={user.displayName || "Usuario"}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <p>
              Hola, {user.displayName || "Usuario"}
              <button onClick={logout} className="text-sm underline ml-2">
                Cerrar sesión
              </button>
            </p>
          </div>

          <textarea
            className="w-full p-2 text-black"
            rows="4"
            placeholder="Contanos sobre tu proyecto o experiencia..."
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
          <button
            onClick={enviarComentario}
            disabled={!comentario.trim()}
            className="mt-2 bg-fuchsia-600 px-4 py-2 rounded disabled:opacity-50"
          >
            Enviar
          </button>
        </>
      )}

      <div className="mt-8">
        {loadingComentarios ? (
          <p className="text-sm text-gray-300">Cargando comentarios...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-left">
            {comentarios.map((c, i) => (
              <div
                key={c.id || i}
                className="border border-fuchsia-600 rounded-xl p-4 flex items-start gap-4 bg-slate-800 w-full max-w-3xl mx-auto shadow-lg"
              >
                {c.photoURL && (
                  <img
                    src={c.photoURL}
                    alt={c.autor || "Autor"}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                )}
                <div className="flex flex-col overflow-hidden w-full">
                  <p className="font-semibold text-fuchsia-400 mb-1">
                    {c.autor || "Anónimo"}
                  </p>
                  <div className="text-white text-sm max-h-24 overflow-y-auto pr-2 break-words custom-scroll">
                    {c.texto}
                  </div>
                </div>
              </div>
            ))}
            {comentarios.length === 0 && (
              <p className="text-sm text-gray-300 col-span-full">
                Aún no hay reseñas.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comentarios;
