// components/PricingSection.tsx
import React, { useState } from 'react';
import styles from './PricingSection.module.css';
import { useCountryPricing } from '../../hooks/useCountryPricing';
import PaymentModal from './PaymentModal';
import { Info } from 'lucide-react';

// Placeholder icons - replace with actual SVGs or an icon library
import { Check } from 'lucide-react';

const CheckIcon = () => <Check className={`${styles.icon} w-5 h-5 text-green-600`} />;
const InfoIcon = () => <Info className={`${styles.iconInfo} w-4 h-4 text-gray-500 hover:text-blue-600 transition-colors cursor-help`} />;

interface FeatureItem {
  text: string;
  hasInfoIcon?: boolean;
}

const featuresData: FeatureItem[] = [
  { text: '1 clase online en vivo de 2hs' },
  { text: 'Grabación de las clases' },
  { text: 'Contenido pre grabado' },
  { text: 'Desafíos prácticos y proyecto final' },
  { text: 'Feedback de tutores' },
  { text: 'Quizzes para fijar los conocimientos' },
  { text: 'Programa de empleabilidad', hasInfoIcon: true },
  { text: 'Certificado de aprobación' },
];

interface PricingSectionProps {
  windowSize: {
    width: number;
    height: number;
  };
}

const PricingSection: React.FC<PricingSectionProps> = ({ windowSize }) => {
  const { pricing, loading, formatPrice, getMonthlyPaymentTextWithFlag } = useCountryPricing();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePaymentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <section className={styles.pricingSectionContainer}>
        <p className={styles.preHeading}>PRECIO</p>
        <h2 className={styles.mainHeading}>Precios claros y accesibles</h2>
        <div className={styles.contentCard}>
          <p>Cargando precios...</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.pricingSectionContainer}>
      <p className={styles.preHeading}>PRECIO</p>
      <h2 className={styles.mainHeading}>Precios claros y accesibles</h2>

      <div className={styles.contentCard}>
        <div className={styles.featuresList}>
          <ul>
            {featuresData.map((feature, index) => (
              <li key={index}>
                <CheckIcon />
                <span>{feature.text}</span>
                {feature.hasInfoIcon && <InfoIcon />}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.pricingDetails}>
          <div className={styles.hotSaleBadge}>
            {/* You might want to use an SVG or a styled div for a more accurate badge */}
            HOT SALE
          </div>
          <div className={styles.priceOffer}>
            <span className={styles.discountBadge}>65% OFF</span>
            <span className={styles.originalPrice}>
              {formatPrice(pricing.originalPrice, pricing.currency, pricing.currencySymbol)} {pricing.currency}
            </span>
          </div>
          <p className={styles.currentPrice}>
            {formatPrice(pricing.newPrice, pricing.currency, pricing.currencySymbol)} {pricing.currency}
          </p>
          <p className={styles.financingInfo}>
            {getMonthlyPaymentTextWithFlag()}
          </p>
          <a href="#" className={styles.paymentMethodsLink} onClick={handlePaymentClick}>
            Ver medios de pago
          </a>
        </div>
      </div>

      {isModalOpen && <PaymentModal onClose={handleCloseModal} />}
    </section>
  );
};

export default PricingSection;