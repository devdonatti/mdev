// Navbar.js
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition ">
      <ul className="text-center text-xl p-4 font-raleway">
        <ScrollLink spy={true} smooth={true} to="Nosotros">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Nosotros
          </li>
        </ScrollLink>
        <ScrollLink spy={true} smooth={true} to="Proyectos">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Proyectos
          </li>
        </ScrollLink>

        <ScrollLink spy={true} smooth={true} to="Contacto">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Contacto
          </li>
        </ScrollLink>
      </ul>
    </div>
  );

  return (
    <nav className="bg-slate-900 bg-opacity-70 fixed top-0 left-0 w-full">
      <div className="h-16 flex items-center justify-between z-50 text-white lg:py-5 px-6 border-b border-slate-800 font-raleway">
        <RouterLink to="/" className="flex items-center">
          <img
            src="/logo021.png"
            alt="Logo"
            className="h-12 lg:h-12 object-contain rounded-full" // Ajusta la altura según el diseño
          />
        </RouterLink>

        <div className="lg:flex hidden items-center">
          <ul className="flex gap-8 text-[18px]">
            <ScrollLink spy={true} smooth={true} to="Nosotros">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Nosotros
              </li>
            </ScrollLink>
            <ScrollLink spy={true} smooth={true} to="Proyectos">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Proyectos
              </li>
            </ScrollLink>

            <ScrollLink spy={true} smooth={true} to="Contacto">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                Contacto
              </li>
            </ScrollLink>
          </ul>

          <a
            href="https://www.instagram.com/desarrollo.mdev"
            className="text-fuchsia-600 hover:text-fuchsia-500  rounded-full glow p-2"
          >
            <FaInstagram className=" m-3 text-3xl lg:text-2xl " />
          </a>
        </div>
        <button className="block lg:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
        {click && content}
      </div>
    </nav>
  );
};

export default Navbar;
