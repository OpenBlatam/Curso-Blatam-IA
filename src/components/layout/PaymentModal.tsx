// components/PaymentModal.tsx
import React from 'react';
import styles from './PaymentModal.module.css';
import Image from 'next/image';
import { CreditCard, Landmark, Sparkles, X } from 'lucide-react';

interface PaymentModalProps {
  onClose: () => void;
}

interface CardLogoInfo {
  name: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const creditCardLogos: CardLogoInfo[] = [
  { name: 'Visa', src: '/logos/Visa.svg', alt: 'Visa', width: 60, height: 35 },
  { name: 'Mastercard', src: '/logos/MasterCard.svg', alt: 'Mastercard', width: 60, height: 35 },
  { name: 'American Express', src: '/logos/American.svg', alt: 'American Express', width: 60, height: 35 },
];

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButtonTop} onClick={onClose}>
          <X size={16} />
        </button>
        
        <h2 className={styles.modalTitle}>
          <CreditCard size={24} className={styles.titleIcon} />
          Medios de pago disponibles
        </h2>
        <p className={styles.introText}>Paga de forma rápida y segura con cualquiera de estos métodos</p>
        
        <hr className={styles.divider} />
        
        <div className={styles.paymentSection}>
          <h3 className={styles.sectionTitle}>
            <Landmark size={20} className={styles.sectionIcon} />
            Tarjetas de crédito y débito
          </h3>
          <div className={styles.cardLogos}>
            {creditCardLogos.map((logo) => (
              <div key={logo.name} className={styles.logoContainer}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 60}
                  height={logo.height || 35}
                  className={styles.cardLogo}
                />
              </div>
            ))}
          </div>
          <p className={styles.offerText}>
            <strong>Hasta 12 meses sin intereses</strong> en cursos y carreras con tarjetas de crédito participantes
          </p>
        </div>

        <button className={styles.closeButton} onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;