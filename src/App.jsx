// App.js
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

import Servicios from "./components/Servicios";
import InfoProducto from "./components/InfoProducto";

//import Info from "./components/Info";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className=" min-h-screen overflow-x-hidden w-full">
        <Navbar />

        <Routes>
          <Route path="/info/:id" element={<InfoProducto />} />

          <Route
            path="/"
            element={
              <>
                {/* Banner con su propio fondo */}
                <Banner />

                {/* Fondo global para los demás componentes */}
                <div
                  className="min-h-screen bg-cover bg-center bg-no-repeat bg-slate-200"
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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
