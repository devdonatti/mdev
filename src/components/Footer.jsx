import React from "react";
import { FaInstagram, FaVoicemail, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white bg-gradient-to-r from-slate-900 to-purple-600 shadow-xl">
      <div className="container mx-auto lg:px-24 px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left place-items-center md:place-items-start">
        {/* Logo */}
        <div className="mb-4 md:mb-0 flex items-center justify-center">
          <img src="/logo021.png" className="h-24 w-auto" alt="Logo" />
        </div>

        {/* Servicios */}
        <div>
          <h2 className="text-lg font-semibold font-raleway text-fuchsia-600 py-2 uppercase">
            Servicios
          </h2>
          <ul className="space-y-2 font-raleway">
            <li>Desarrollo Web</li>
            <li>Diseño Web</li>
            <li>Creación de contenido</li>
            <li>SEO</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-lg font-semibold text-fuchsia-600 py-2 uppercase font-raleway">
            Contacto
          </h2>
          <p className="text-sm my-2 font-raleway">
            EMAIL:{" "}
            <a
              href="mailto:mdonattiprogramacion@gmail.com"
              className="hover:underline"
            >
              mdonattiprogramacion@gmail.com
            </a>
          </p>
          <p className="text-sm flex justify-center md:justify-start items-center my-2 font-raleway">
            <FaPhone className="m-1" />
            17061-8004
          </p>
        </div>

        {/* Redes Sociales */}
        <div>
          <h2 className="text-lg font-semibold text-fuchsia-600 py-2 uppercase">
            Seguinos
          </h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.instagram.com/desarrollo.mdev"
              className="text-white hover:text-fuchsia-500 transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://wa.me/1164609581"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white hover:text-fuchsia-500 transition-colors duration-300"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="mailto:mdonattiprogramacion@gmail.com"
              aria-label="Email"
              className="text-white hover:text-fuchsia-500 transition-colors duration-300"
            >
              <FaVoicemail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <section className="bg-fuchsia-800 text-white text-center py-4 bg-gradient-to-r from-slate-800">
        <h1 className="font-raleway">
          Desarrollado por <strong>MDev</strong>
        </h1>
      </section>
    </footer>
  );
};

export default Footer;
