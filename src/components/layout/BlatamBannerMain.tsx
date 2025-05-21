// components/BlatamBanner.tsx
import React from 'react';
import Link from 'next/link'; // If the CTA button is a link
import styles from './BlatamBannerMain.module.css';

// Placeholder icons - replace with actual SVGs or an icon library
const FireIcon = () => <span className={styles.icon}>🔥</span>;
const ArrowIcon = () => <span className={styles.icon}>→</span>;

const BlatamBannerMain: React.FC = () => {
  const featureTags = [
    'Clases en vivo',
    'Certificado oficial',
    'Mentorías',
    'Salida laboral',
  ];

  return (
    <div className={styles.bannerContainer}>
      {/* Angled "EXTENDIMOS" labels are handled by ::before and ::after in CSS */}
      {/* <div className={styles.extendedLabelLeft}>- EXTENDIMOS -</div> */}
      {/* <div className={styles.extendedLabelRight}>- EXTENDIMOS -</div> */}

      <div className={styles.mainContentWrapper}>
        <div className={styles.content}>
          <div className={styles.discountInfo}>
            <span className={styles.hotLabel}>BLATAM</span>
            <span className={styles.saleText}>hasta</span>
            <div className={styles.discount}>
              <span className={styles.discountNumber}>70</span>
              <span className={styles.discountPercent}>%</span>
              <span className={styles.discountOff}>off</span>
            </div>
            <p className={styles.installment}>+12 meses sin interés</p>
          </div>

          <Link href="/inscripcion" legacyBehavior>
            <a className={styles.ctaButton}>
              <FireIcon />
              Inscribirme ahora
              <ArrowIcon />
            </a>
          </Link>
        </div>

        {/* Feature Tags - these will be positioned around the content */}
        <div className={styles.featureTagsContainer}>
          {featureTags.map((tag, index) => (
            <span key={index} className={`${styles.featureTag} ${styles[`featureTag${index + 1}`]}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlatamBannerMain;