import React, { useState } from 'react';
import styles from './PromoBanner.module.css';
import PaymentModal from './PaymentModal';

interface PromoBannerProps {
  discount: string;
  originalPrice: string;
  newPrice: string;
  additionalInfo: string;
  duration: string;
  paymentLinkText: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  discount,
  originalPrice,
  newPrice,
  additionalInfo,
  duration,
  paymentLinkText,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePaymentClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.promoBanner}>
      <div className={styles.leftSection}>
        <div className={styles.discountContainer}>
          <span className={styles.discount}>{discount}</span>
          <span className={styles.originalPrice}>{originalPrice}</span>
        </div>
        <div className={styles.newPrice}>{newPrice}</div>
        <div className={styles.additionalInfo}>{additionalInfo}</div>
      </div>
      <div className={styles.rightSection}>
        <a href="#" className={styles.paymentLink} onClick={handlePaymentClick}>
          {paymentLinkText}
        </a>
        <div className={styles.hotDealBadge}>HOT🔥DEAL</div>
      </div>
      {isModalOpen && <PaymentModal onClose={handleCloseModal} />}
    </div>
  
  );
};

export default PromoBanner;