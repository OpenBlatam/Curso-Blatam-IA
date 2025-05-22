// components/PaymentModal.tsx
import React from 'react';
import styles from './PaymentModal.module.css'; // We will create this file next

interface PaymentModalProps {
  onClose: () => void;
}

interface CardLogoInfo {
  name: string;
  src: string;
  alt: string;
}

const cardLogosData: CardLogoInfo[] = [
  { name: 'Visa', src: '/logos/Visa.svg', alt: 'Visa' },
  { name: 'Mastercard', src: '/logos/MasterCard.svg', alt: 'Mastercard' },
  { name: 'American Express', src: '/logos/American.svg', alt: 'American Express' },
  // Add more logos here if needed, e.g., for local Mexican payment methods
  // { name: 'OXXO', src: '/logos/oxxo.svg', alt: 'OXXO Pay' },
  // { name: 'SPEI', src: '/logos/spei.svg', alt: 'SPEI Transferencia' },
];

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Paga con cualquiera de estos medios.</h2>
        <p className={styles.introText}>Es rápido y seguro, siempre.</p>
        <hr className={styles.divider} />
        <h3>Tarjeta de crédito y débito</h3>
        <div className={styles.cardLogos}>
          {cardLogosData.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.alt}
              className={styles.cardLogo}
              // You might set a height here or control it via CSS
              // height="30" // Example direct attribute
            />
          ))}
        </div>
        <p className={styles.offerText}>
          Todos los días hasta <strong>12 meses sin intereses</strong> en  cursos y carreras con
          tarjetas de crédito bancarizadas.
        </p>
        <button className={styles.closeButton} onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;