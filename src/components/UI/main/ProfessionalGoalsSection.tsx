// components/ProfessionalGoalsSection/ProfessionalGoalsSection.tsx
import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy'; // Using lazy load is good!
import styles from './ProfessionalGoalsSection.module.css';

// ACTION: Ensure these video files are in your `public/videos/` directory
const personVideoPath = "/videos/IA.mp4";         // First video
const coderAiVideoPath = "/videos/tutor_ia.mp4";  // Second video

const ProfessionalGoalsSection = () => {
  const [isPersonVideoPlaying, setIsPersonVideoPlaying] = useState(false); // State for the first video
  const [isCoderAiVideoPlaying, setIsCoderAiVideoPlaying] = useState(false); // State for the second video

  // Handlers for the first video
  const handlePersonVideoHoverPlay = () => {
    setIsPersonVideoPlaying(true);
  };
  const handlePersonVideoHoverPause = () => {
    setIsPersonVideoPlaying(false);
  };

  // Handlers for the second video
  const handleCoderAiVideoHoverPlay = () => {
    setIsCoderAiVideoPlaying(true);
  };
  const handleCoderAiVideoHoverPause = () => {
    setIsCoderAiVideoPlaying(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Alcanza tus metas profesionales con nuestra metodología
        </h1>
        <p className={styles.subtitle}>
          Combinamos lo mejor del contenido pregrabado con la interacción en
          tiempo real de las clases en vivo para que aprendas junto a expertos
          con una metodología flexible y 100% práctica.
        </p>
      </div>

      <div className={styles.contentWrapper}>
        {/* Column 1 - Now a Video Player */}
        <div className={styles.column}>
          <div
            className={styles.imageContainer} // This container will trigger hover for the first video
            onMouseEnter={handlePersonVideoHoverPlay}
            onMouseLeave={handlePersonVideoHoverPause}
          >
            <div className={styles.videoWrapper}> {/* Use a consistent class or ensure .imagePlaceholder is styled for video */}
              <ReactPlayer
                className={styles.reactPlayer}
                url={personVideoPath}
                playing={isPersonVideoPlaying}
                loop
                muted
                playsinline
                width="100%"
                height="100%"
                controls={false}
              />
            </div>
            <span className={`${styles.imageLabel} ${styles.modalidadesLabel}`}>
              MODALIDADES
            </span>
          </div>
        </div>

        {/* Column 2 - Coder AI Video Player */}
        <div className={styles.column}>
          <div
            className={styles.imageContainer} // This container will trigger hover for the second video
            onMouseEnter={handleCoderAiVideoHoverPlay}
            onMouseLeave={handleCoderAiVideoHoverPause}
          >
            <div className={styles.videoWrapper}>
              <ReactPlayer
                className={styles.reactPlayer}
                url={coderAiVideoPath}
                playing={isCoderAiVideoPlaying}
                loop
                muted
                playsinline
                width="100%"
                height="100%"
                controls={false}
              />
            </div>
            <span className={`${styles.imageLabel} ${styles.coderAiLabel}`}>
              CODER AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalGoalsSection;