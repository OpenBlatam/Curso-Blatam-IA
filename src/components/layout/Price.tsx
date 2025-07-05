import React from 'react';

const PricingBanner: React.FC = () => {
  return (
    <div className="w-full p-4 bg-white rounded-b-xl shadow-md relative">
      {/* Botón de compra */}
      <a
        href="https://blatam.gumroad.com/l/ia"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center text-lg font-medium">
          🔥
          Comprar carrera
        </button>
      </a>

      {/* Texto sin tooltip */}
      <div className="mt-4 flex justify-center items-center text-sm font-semibold text-black">
        🔥
        ¡PRUEBA 2 CLASES GRATIS!
      </div>
    </div>
  );
};

export default PricingBanner;
