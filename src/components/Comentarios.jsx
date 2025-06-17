import React, { useEffect, useState } from "react";
import { auth, provider, db } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
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
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
    obtenerComentarios();
  }, []);

  const login = async () => {
    await signInWithPopup(auth, provider);
  };

  const logout = () => {
    signOut(auth);
  };

  const enviarComentario = async () => {
    if (comentario.trim()) {
      await addDoc(collection(db, "comentarios"), {
        texto: comentario,
        autor: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL, // Guardamos la foto del usuario
        timestamp: serverTimestamp(),
      });
      setComentario("");
      obtenerComentarios();
    }
  };

  const obtenerComentarios = async () => {
    const q = query(
      collection(db, "comentarios"),
      orderBy("timestamp", "desc")
    );
    const data = await getDocs(q);
    setComentarios(data.docs.map((doc) => doc.data()));
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
                alt={user.displayName}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <p>
              Hola, {user.displayName}
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
            className="mt-2 bg-fuchsia-600 px-4 py-2 rounded"
          >
            Enviar
          </button>
        </>
      )}

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-left">
        {comentarios.map((c, i) => (
          <div
            key={i}
            className="border border-fuchsia-600 rounded-xl p-4 flex items-start gap-4 bg-slate-800 w-full max-w-3xl mx-auto shadow-lg"
          >
            {c.photoURL && (
              <img
                src={c.photoURL}
                alt={c.autor}
                className="w-14 h-14 rounded-full object-cover"
              />
            )}
            <div className="flex flex-col overflow-hidden w-full">
              <p className="font-semibold text-fuchsia-400 mb-1">{c.autor}</p>
              <div className="text-white text-sm max-h-24 overflow-y-auto pr-2 break-words custom-scroll">
                {c.texto}
                {c.texto}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comentarios;
