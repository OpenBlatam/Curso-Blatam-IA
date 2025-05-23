// components/PricingSection.tsx
import React from 'react';
import styles from './PricingSection.module.css';

// Placeholder icons - replace with actual SVGs or an icon library
const CheckIcon = () => <span className={styles.icon}>✓</span>;
const InfoIcon = () => <span className={styles.iconInfo}>ⓘ</span>;

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
            <span className={styles.originalPrice}>$4.290 MXN</span>
          </div>
          <p className={styles.currentPrice}>$1.502 MXN</p>
          <p className={styles.financingInfo}>
            Hasta 12 meses sin interés de $125 MXN
          </p>
          <a href="#" className={styles.paymentMethodsLink}>
            Ver medios de pago
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;