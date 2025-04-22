"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center p-4 md:p-4 md:px-8 max-w-7xl mx-auto">
        <Link
          href="/"
          className="no-underline"
          aria-label="BProSys - Ir a la página principal"
        >
          <div className="text-2xl font-bold text-[#0056b3] flex items-center gap-2">
            <div
              className="bg-[#0056b3] text-white w-8 h-8 rounded flex items-center justify-center font-extrabold"
              aria-hidden="true"
            >
              B
            </div>
            <span>BProSys</span>
          </div>
        </Link>

        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-controls="main-navigation"
          className="block md:hidden p-2 text-gray-600 bg-transparent border-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] focus-visible:ring-offset-2 rounded-md"
        >
          {isMenuOpen ? (
            <CloseIcon width={24} height={24} />
          ) : (
            <MenuIcon width={24} height={24} />
          )}
        </button>

        <nav
          id="main-navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none md:gap-8 md:items-center`}
          aria-label="Navegación principal"
        >
          <Link
            href="/"
            className="no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] rounded"
          >
            <span className="py-3 md:py-0 text-gray-600 font-medium border-b md:border-b-0 border-gray-200 block hover:text-[#0056b3] cursor-pointer">
              Inicio
            </span>
          </Link>
          <Link
            href="/#productos"
            className="no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] rounded"
          >
            <span className="py-3 md:py-0 text-gray-600 font-medium border-b md:border-b-0 border-gray-200 block hover:text-[#0056b3] cursor-pointer">
              Productos
            </span>
          </Link>
          <Link
            href="/#nosotros"
            className="no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] rounded"
          >
            <span className="py-3 md:py-0 text-gray-600 font-medium border-b md:border-b-0 border-gray-200 block hover:text-[#0056b3] cursor-pointer">
              Nosotros
            </span>
          </Link>
          <Link
            href="/#contacto"
            className="no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] rounded"
          >
            <span className="py-3 md:py-0 text-gray-600 font-medium border-b md:border-b-0 border-gray-200 block hover:text-[#0056b3] cursor-pointer">
              Contacto
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
