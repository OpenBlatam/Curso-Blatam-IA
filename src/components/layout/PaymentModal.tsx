import React from 'react';
import styles from './PaymentModal.module.css';

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Paga con cualquiera de estos medios.</h2>
        <p>Es rápido y seguro, siempre.</p>
        <hr />
        <h3>Tarjeta de crédito y débito</h3>
        <div className={styles.cardLogos}>
          <span className={styles.cardLogo}>VISA</span>
          <span className={styles.cardLogo}>mastercard</span>
          <span className={styles.cardLogo}>AMERICAN EXPRESS</span>
        </div>
        <p className={styles.offerText}>
          Todos los días hasta 12 meses sin intereses en cursos y carreras con
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