"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MenuIcon, CloseIcon } from "./icons";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMenuOpen) {
      setIsMenuVisible(true);
    } else {
      timeoutId = setTimeout(() => {
        setIsMenuVisible(false);
      }, 300);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
          className="block md:hidden p-2 text-gray-600 bg-transparent border-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] focus-visible:ring-offset-2 rounded-md transition-transform duration-200 ease-in-out hover:scale-110"
        >
          <div className="relative w-6 h-6 transition-all duration-300">
            <div className={`absolute inset-0 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
              <MenuIcon width={24} height={24} />
            </div>
            <div className={`absolute inset-0 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
              <CloseIcon width={24} height={24} />
            </div>
          </div>
        </button>

        <div className="absolute md:static top-full left-0 right-0 bg-white md:bg-transparent transition-all duration-300 ease-in-out md:block">
          <nav
            id="main-navigation"
            className={`flex-col md:flex md:flex-row p-4 md:p-0 shadow-md md:shadow-none md:gap-8 md:items-center transition-all duration-300 ease-in-out origin-top ${
              isMenuVisible ? "block" : "hidden md:flex"
            } ${
              isMenuOpen
                ? "opacity-100 transform-none"
                : "opacity-0 md:opacity-100 -translate-y-2 md:translate-y-0"
            }`}
            aria-label="Navegación principal"
          >
            <Link
              href="/"
              className="no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] rounded w-full group"
              onClick={closeMenu}
            >
              <span className="py-3 md:py-0 text-gray-600 font-medium block hover:text-[#0056b3] transition-colors duration-200 cursor-pointer group-hover:translate-x-1 transform transition-transform">
                Inicio
              </span>
              <div className="h-px bg-gray-200 w-full my-1 md:hidden transition-all duration-300 ease-in-out group-hover:bg-blue-300 group-hover:h-[2px]"></div>
            </Link>
            <Link
              href="/#productos"
              className="no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] rounded w-full group"
              onClick={closeMenu}
            >
              <span className="py-3 md:py-0 text-gray-600 font-medium block hover:text-[#0056b3] transition-colors duration-200 cursor-pointer group-hover:translate-x-1 transform transition-transform">
                Productos
              </span>
              <div className="h-px bg-gray-200 w-full my-1 md:hidden transition-all duration-300 ease-in-out group-hover:bg-blue-300 group-hover:h-[2px]"></div>
            </Link>
            <Link
              href="/#nosotros"
              className="no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] rounded w-full group"
              onClick={closeMenu}
            >
              <span className="py-3 md:py-0 text-gray-600 font-medium block hover:text-[#0056b3] transition-colors duration-200 cursor-pointer group-hover:translate-x-1 transform transition-transform">
                Nosotros
              </span>
              <div className="h-px bg-gray-200 w-full my-1 md:hidden transition-all duration-300 ease-in-out group-hover:bg-blue-300 group-hover:h-[2px]"></div>
            </Link>
            <Link
              href="/#contacto"
              className="no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] rounded w-full group"
              onClick={closeMenu}
            >
              <span className="py-3 md:py-0 text-gray-600 font-medium block hover:text-[#0056b3] transition-colors duration-200 cursor-pointer group-hover:translate-x-1 transform transition-transform">
                Contacto
              </span>
              <div className="h-px bg-gray-200 w-full my-1 md:hidden transition-all duration-300 ease-in-out group-hover:bg-blue-300 group-hover:h-[2px]"></div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
