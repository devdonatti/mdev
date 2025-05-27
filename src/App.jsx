// App.js
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Detalles from "./components/Detalles";
import Servicios from "./components/Servicios";

import Info from "./components/Info";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-slate-700 min-h-screen overflow-x-hidden w-full">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Banner con su propio fondo */}
                <Banner />

                {/* Fondo global para los demás componentes */}
                <div
                  className="min-h-screen bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/fondoo.png')" }}
                >
                  <SobreMi />
                  <Servicios />
                  <Proyectos />

                  <Contacto />
                </div>
              </>
            }
          />
          <Route
            path="/detalles/:id"
            element={
              <div
                className="min-h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/fondoo.png')" }}
              >
                <Detalles />
              </div>
            }
          />
          <Route
            path="/info"
            element={
              <div
                className="min-h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/fondoo.png')" }}
              >
                <Info />
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
