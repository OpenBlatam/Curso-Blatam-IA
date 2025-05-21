// components/BlatamBanner.tsx
import React from 'react';
import styles from './BlatamBanner.module.css';

const BlatamBanner: React.FC = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.extendedLabelLeft}>- EXTENDIMOS -</div>
      <div className={styles.content}>
        <span className={styles.hotLabel}>BLATAM</span> {/* Changed from HOT SALE */}
        <span className={styles.saleText}>hasta</span>
        <div className={styles.discount}>
          <span className={styles.discountNumber}>70</span>
          <span className={styles.discountPercent}>%</span>
          <span className={styles.discountOff}>off</span>
        </div>
        <p className={styles.installment}>+12 meses sin interés</p>
      </div>
      <div className={styles.extendedLabelRight}>- EXTENDIMOS -</div>
    </div>
  );
};

export default BlatamBanner;