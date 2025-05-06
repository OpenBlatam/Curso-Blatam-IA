// components/HeaderPromo.tsx
import { FaClock } from 'react-icons/fa'; // Icono de reloj
import React from 'react';

const HeaderPromo: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white text-center py-6 px-8 w-full fixed top-0 left-0 z-50 shadow-xl rounded-b-3xl">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
        {/* Texto de la oferta */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <p className="text-lg sm:text-xl font-semibold leading-relaxed sm:text-left">
            <span className="block">Aprovecha hasta <span className="font-extrabold text-yellow-400">70% OFF</span> y hasta 12 meses sin intereses en</span>
            <span className="block font-extrabold text-yellow-300">CURSOS y CARRERAS</span>
          </p>
        </div>

        {/* Fecha de expiración con ícono */}
        <div className="flex items-center gap-3 text-lg font-medium">
          <FaClock className="text-yellow-400 animate-pulse" size={24} />
          <span>| Hasta el 7/05 ⏰</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderPromo;
