import React, { useState } from "react";
import logo from "../../assets/img/logotipo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full h-16 fixed top-0 left-0 bg-backgroundNavbar z-10 ">
      <nav className="w-full h-full flex justify-between items-center gap-4 px-2">
        <div id="logo" className="w-16 h-full cursor-pointer">
          <img src={logo} width="100%" height="100%" alt="logo" />
        </div>
        <div className=" h-full w-full max-w-2xl px-2  flex justify-around items-center max-w-max ">
          <ul className="h-full flex justify-center items-center">
            <li className=" h-full px-4 flex justify-center items-center ease-in duration-300 hover:bg-navbarHover ">
              <Link to="/dashboard" className="text-color_2 text-lg">
                Inicio
              </Link>
            </li>
            <li className=" h-full px-4 flex justify-center items-center ease-in duration-300 hover:bg-navbarHover ">
              <Link to="/dashboard/contato" className="text-color_2 text-lg">
                Contato
              </Link>
            </li>
          </ul>
          <button
            type="button"
            id="btn-search"
            className="w-10 h-10 bg-navbarHover rounded-md overflow-hidden cursor-pointer"
          >
            <i className="fas fa-search text-color_2 text-sm"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
