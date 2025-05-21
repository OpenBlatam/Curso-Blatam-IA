import React, { useState } from 'react';
import { Info, CheckCircle } from 'lucide-react';

const IncludesSection: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">¿Qué incluye?</h2>

      <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-200 shadow-sm">
        {[
          "Online en vivo y acompañamiento personalizado",
          "Certificado de aprobación",
          "Programa de empleabilidad",
          "Feedback de tutores",
        ].map((text, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 text-sm text-black"
          >
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-black" />
              <span>{text}</span>
              {text.includes("empleabilidad") && (
                <div
                  className="relative ml-2"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <Info className="w-4 h-4 text-black cursor-pointer" />
                  {showTooltip && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-3 bg-white text-xs rounded-xl shadow-lg z-20">
                      Te ayudamos a prepararte para el mundo laboral con sesiones de empleabilidad, revisión de CV y simulacros de entrevistas.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncludesSection;
