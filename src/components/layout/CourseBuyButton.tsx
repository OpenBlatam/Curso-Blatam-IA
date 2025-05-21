import React, { useState } from 'react';
import { Info } from 'lucide-react';
import styles from './CourseBuyButton.module.css';

interface CourseBuyButtonProps {
  itemType: string; // e.g., "curso" or "carrera"
  gumroadLink: string; // URL for Gumroad link
  offerText?: string;
  tooltipText?: string;
}

const CourseBuyButton: React.FC<CourseBuyButtonProps> = ({
  itemType,
  gumroadLink,
  offerText = '¡PRUEBA 2 CLASES GRATIS!',
  tooltipText = 'Si en las primeras 2 clases del primer curso no alcanzamos tus expectativas, te devolvemos la totalidad del dinero invertido. Solo aplica para tu primer curso en Blatam.',
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={styles.container}>
      <a
        href={gumroadLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.buyButtonLink}
      >
        <button className={styles.buyButton}>
          <span role="img" aria-label="fire">🔥</span> Comprar {itemType} <span>→</span>
        </button>
      </a>
      <div className={styles.offer}>
        <span role="img" aria-label="fire">🔥</span> {offerText}
        <div
          className={styles.tooltipTrigger}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <Info className={styles.infoIcon} />
          {showTooltip && (
            <div className={styles.tooltip}>
              {tooltipText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseBuyButton;