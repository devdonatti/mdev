import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import CotizarModal from "../components/CotizarModal";

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  const handleShowPdf = () => {
    setShowPdf(true);
  };

  const handleClosePdf = () => {
    setShowPdf(false);
  };
  const [open, setOpen] = useState(false);

  return (
    <div
      className="overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/banner4.png')" }}
    >
      <div className="px-4 lg:px-20 py-20 flex flex-col lg:flex-row justify-between items-center min-h-screen mt-32 md:mt-0">
        <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-fuchsia-600 gap-8">
          <div data-aos="fade-right" className="text-center lg:text-left">
            <h1 className="text-5xl font-raleway text-white">
              MDev | Desarrollo web
            </h1>
            <h2 className="text-3xl font-raleway text-white">
              Creamos el sitio web para tu negocio
            </h2>
          </div>

          <div className="flex mt-8 gap-4 justify-center lg:justify-start ">
            <CotizarModal isOpen={open} onClose={() => setOpen(false)} />

            {/*<a
              target="_blank"
              href="https://github.com/devdonatti"
              className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
            >
              <AiFillGithub className="text-3xl lg:text-7xl" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/micaela-donatti-36ab22307/"
              className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
            >
              <FaLinkedin className="text-3xl lg:text-7xl" />
            </a>
            <button
              onClick={handleShowPdf}
              title="Ver CV"
              className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
            >
              <FaDownload className="text-3xl lg:text-7xl" />
            </button>

            <a
              href="https://www.instagram.com/desarrollo.mdev"
              className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
            >
              <FaInstagram className="text-3xl lg:text-7xl" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/1164609581?text=Hola,%20me%20interesa%20tu%20portfolio."
              className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
            >
              <FaWhatsapp className="text-3xl lg:text-7xl" />
            </a>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
