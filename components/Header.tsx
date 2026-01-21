
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-coral">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="font-poppins font-extrabold text-2xl tracking-tight">Lugar <span className="text-coral">Incrível</span></span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-semibold">
          <Link to="/" className="hover:text-coral transition-colors">Início</Link>
          <Link to="/admin" className="hover:text-coral transition-colors">Admin</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-coral text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md">
            Explorar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
