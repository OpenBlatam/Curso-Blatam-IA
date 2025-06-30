// components/WhatsappButton.tsx
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';

interface WhatsappButtonProps {
  phoneNumber: "15557545181"; // Ejemplo: "5491123456789"
  message?: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ phoneNumber, message }) => {
  const encodedMessage = encodeURIComponent(message || '');
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodedMessage}` : ''}`;

  return (
    <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
    style={{ zIndex: 9999 }}
    >
      <FaWhatsapp size={30} />
      Contactar por WhatsApp
    </a>
  );
};

export default WhatsappButton;
