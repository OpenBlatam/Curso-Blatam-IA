import React, { useState } from 'react';
import { Info } from 'lucide-react';

const PricingBanner: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="w-full p-4 bg-white rounded-b-xl shadow-md relative">
      {/* Botón de compra */}
      <a
        href="https://astrixial.gumroad.com/l/ia"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center text-lg font-medium">
          <span className="mr-2">🔥</span>
          Comprar carrera
        </button>
      </a>

      {/* Texto con tooltip */}
      <div className="mt-4 flex justify-center items-center text-sm font-semibold text-black relative">
        <span className="mr-2">🔥</span>
        ¡PRUEBA 2 CLASES GRATIS!
        <div
          className="ml-2 relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <Info className="w-4 h-4 cursor-pointer" />
          {showTooltip && (
            <div className="absolute z-10 top-full left-1/2 -translate-x-1/2 mt-2 w-72 p-3 text-sm text-black bg-white rounded-xl shadow-lg">
              Si en las primeras 2 clases del primer curso no alcanzamos tus expectativas, te devolvemos la totalidad del dinero invertido. Solo aplica para tu primer curso en Blatam.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingBanner;
