// components/LearningPathPromo.tsx
import React from 'react';
import styles from './LearningPathPromo.module.css';

// Placeholder icons - replace with actual SVGs or an icon library
const AiSparkleIcon = () => <span className={styles.icon}>✨</span>; // Placeholder
const DownloadIcon = () => <span className={styles.icon}>⬇️</span>; // Placeholder

const LearningPathPromo: React.FC = () => {
  return (
    <section className={styles.promoSection}>
      <p className={styles.preHeading}>PROGRAMA</p>
      <h2 className={styles.mainHeading}>Explora el learning path completo</h2>
      <hr className={styles.divider} />

      <div className={styles.actionsContainer}>
        <button className={styles.aiTagButton}>
          <AiSparkleIcon />
          Aprende con IA
        </button>

        <button className={styles.downloadButton}>
          <DownloadIcon />
          Descargar programa
        </button>
      </div>
    </section>
  );
};

export default LearningPathPromo;