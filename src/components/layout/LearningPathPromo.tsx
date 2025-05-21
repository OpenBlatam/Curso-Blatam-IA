// components/LearningPathPromo.tsx
import React from 'react';
import styles from './LearningPathPromo.module.css';

// Placeholder icons - replace with actual SVGs or an icon library
const AiSparkleIcon = () => <span className={styles.icon}>✨</span>; // Placeholder
const DownloadIcon = () => <span className={styles.icon}>⬇️</span>; // Placeholder

const LearningPathPromo: React.FC = () => {
  const downloadLink = "https://drive.google.com/file/d/1eqA6DNqmJphgCWuN26iAD6uGUX11NRxW/view?usp=sharing";

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

        {/* Changed to an <a> tag for the download link */}
        <a
          href={downloadLink}
          className={styles.downloadButton} // Use the same styling as before
          target="_blank" // Open the link in a new tab
          rel="noopener noreferrer" // Security best practice for external links
          // If you want to suggest a filename for the download (browser support varies):
          // download="nombre-del-programa.pdf" // Replace with actual filename and extension
        >
          <DownloadIcon />
          Descargar programa
        </a>
      </div>
    </section>
  );
};

export default LearningPathPromo;