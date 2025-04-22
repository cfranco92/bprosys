'use client';

import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center p-4 md:p-4 md:px-8 max-w-7xl mx-auto">
        <Link href="/" className="no-underline">
          <div className="text-2xl font-bold text-[#0056b3] flex items-center gap-2">
            <div className="bg-[#0056b3] text-white w-8 h-8 rounded flex items-center justify-center font-extrabold">
              B
            </div>
            BProSys
          </div>
        </Link>
        
        <button 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="block md:hidden p-2 text-gray-600 bg-transparent border-none cursor-pointer"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                d="M6 18L18 6M6 6L18 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            ) : (
              <path 
                d="M4 6H20M4 12H20M4 18H20" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
        
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none md:gap-8 md:items-center`}>
          <Link href="/" className="no-underline">
            <span className="py-3 md:py-0 text-gray-600 font-medium border-b md:border-b-0 border-gray-200 block hover:text-[#0056b3] cursor-pointer">
              Inicio
            </span>
          </Link>
          <Link href="/#productos" className="no-underline">
            <span className="py-3 md:py-0 text-gray-600 font-medium border-b md:border-b-0 border-gray-200 block hover:text-[#0056b3] cursor-pointer">
              Productos
            </span>
          </Link>
          <Link href="/#nosotros" className="no-underline">
            <span className="py-3 md:py-0 text-gray-600 font-medium border-b md:border-b-0 border-gray-200 block hover:text-[#0056b3] cursor-pointer">
              Nosotros
            </span>
          </Link>
          <Link href="/#contacto" className="no-underline">
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