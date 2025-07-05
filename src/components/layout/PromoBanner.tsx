import React, { useState } from 'react';
import styles from './PromoBanner.module.css';
import PaymentModal from './PaymentModal';
import { useCountryPricing } from '../../hooks/useCountryPricing';

interface PromoBannerProps {
  discount?: string;
  originalPrice?: string;
  newPrice?: string;
  additionalInfo?: string;
  duration?: string;
  paymentLinkText?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  discount = "65% OFF",
  originalPrice,
  newPrice,
  additionalInfo,
  duration = "",
  paymentLinkText = "Ver medios de pago",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pricing, loading, formatPrice, getMonthlyPaymentTextWithFlag } = useCountryPricing();

  const handlePaymentClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Use dynamic pricing if not provided as props
  const displayOriginalPrice = originalPrice || formatPrice(pricing.originalPrice, pricing.currency, pricing.currencySymbol);
  const displayNewPrice = newPrice || formatPrice(pricing.newPrice, pricing.currency, pricing.currencySymbol);
  const displayAdditionalInfo = additionalInfo || getMonthlyPaymentTextWithFlag();

  if (loading) {
    return (
      <div className={styles.promoBanner}>
        <div className={styles.leftSection}>
          <div className={styles.discountContainer}>
            <span className={styles.discount}>{discount}</span>
            <span className={styles.originalPrice}>Cargando...</span>
          </div>
          <div className={styles.newPrice}>Cargando...</div>
          <div className={styles.additionalInfo}>Cargando...</div>
        </div>
        <div className={styles.rightSection}>
          <a href="#" className={styles.paymentLink} onClick={handlePaymentClick}>
            {paymentLinkText}
          </a>
          <div className={styles.hotDealBadge}>HOT🔥DEAL</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.promoBanner}>
      <div className={styles.leftSection}>
        <div className={styles.discountContainer}>
          <span className={styles.discount}>{discount}</span>
          <span className={styles.originalPrice}>{displayOriginalPrice}</span>
        </div>
        <div className={styles.newPrice}>{displayNewPrice}</div>
        <div className={styles.additionalInfo}>{displayAdditionalInfo}</div>
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