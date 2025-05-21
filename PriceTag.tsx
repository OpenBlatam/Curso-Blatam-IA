import React from 'react';

const PriceTag = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-md flex flex-col md:flex-row justify-between items-start md:items-center border">
      <div>
        <div className="flex items-center gap-2">
          <span className="bg-red-600 text-white text-sm font-bold px-2 py-0.5 rounded-full">65% OFF</span>
          <span className="text-gray-500 line-through text-sm">$4,290 MXN</span>
        </div>
        <h2 className="text-2xl font-bold mt-1">$1,502 MXN</h2>
        <p className="text-sm text-gray-600 mt-1">
          Hasta 12 meses sin interés de <span className="font-semibold">$125 MXN</span>
        </p>
      </div>
      <div className="mt-4 md:mt-0 flex flex-col items-end">
        <img
          src="/hot-sale.png"
          alt="Hot Sale"
          className="w-20 h-auto"
        />
        <a href="#" className="text-sm underline mt-2 text-gray-700 hover:text-black">Ver medios de pago</a>
      </div>
    </div>
  );
};

export default PriceTag;

