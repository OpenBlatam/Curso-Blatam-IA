// components/LearningPathPromo.tsx
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import styles from './LearningPathPromo.module.css';
import { Modal } from '../common/modal';

// Placeholder icons - replace with actual SVGs or an icon library
const AiSparkleIcon = () => <span className={styles.icon}>✨</span>; // Placeholder
const DownloadIcon = () => <Download size={18} className={styles.icon} />;

const LearningPathPromo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const downloadLink = "https://drive.google.com/file/d/1eqA6DNqmJphgCWuN26iAD6uGUX11NRxW/view?usp=sharing";

  return (
    <section className={styles.promoSection}>
      <p className={styles.preHeading}>PROGRAMA</p>
      <h2 className={styles.mainHeading}>Explora el learning path completo</h2>
      <hr className={styles.divider} />

      <div className={styles.actionsContainer}>
        <span className={styles.aiTagButton} style={{cursor: 'default', pointerEvents: 'none', opacity: 1}}>
          <AiSparkleIcon />
          Aprende con IA
        </span>

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

      <Modal open={open} close={() => setOpen(false)}>
        <div style={{ padding: '2rem', textAlign: 'center', maxWidth: 400 }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>¿Qué es Aprende con IA?</h2>
          <p style={{ fontSize: '1.1rem', color: '#333' }}>
            Aprende con IA es una plataforma interactiva que utiliza inteligencia artificial para potenciar tu aprendizaje, personalizar tu experiencia y ayudarte a dominar nuevas habilidades de manera más eficiente y divertida.
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default LearningPathPromo;