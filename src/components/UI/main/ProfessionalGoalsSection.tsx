// components/ProfessionalGoalsSection/ProfessionalGoalsSection.tsx
import Image from 'next/image';
import React, { useState } from 'react'; // Import useState
import ReactPlayer from 'react-player/lazy';
import styles from './ProfessionalGoalsSection.module.css';

// ACTION: Verify these paths are correct relative to your 'public' folder
const personImage = "/placeholder-person.jpg"; // e.g., if in public/images/placeholder-person.jpg, use "/images/placeholder-person.jpg"
const coderAiVideoPath = "/tutor_ia.mp4";    // e.g., if in public/videos/tutor_ia.mp4, use "/videos/tutor_ia.mp4"

const ProfessionalGoalsSection = () => {
  const [isCoderAiVideoPlaying, setIsCoderAiVideoPlaying] = useState(false);

  const handleVideoHoverPlay = () => {
    setIsCoderAiVideoPlaying(true);
  };

  const handleVideoHoverPause = () => {
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
        <div className={styles.column}>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              {/* Ensure personImage path is correct */}
              <img src={personImage} alt="Persona sonriendo" className={styles.image} />
            </div>
            <span className={`${styles.imageLabel} ${styles.modalidadesLabel}`}>
              MODALIDADES
            </span>
          </div>
        </div>

        <div className={styles.column}>
          {/* Apply hover events to the direct parent of ReactPlayer or imageContainer */}
          <div
            className={styles.imageContainer} // Or styles.videoWrapper if you have that as direct parent
            onMouseEnter={handleVideoHoverPlay}
            onMouseLeave={handleVideoHoverPause}
          >
            <div className={styles.videoWrapper}> {/* Ensures ReactPlayer fills this */}
              <ReactPlayer
                className={styles.reactPlayer}
                url={coderAiVideoPath} // ACTION: Ensure this path is correct!
                playing={isCoderAiVideoPlaying} // Controlled by state
                loop
                muted // Important for autoplay-like behavior on hover
                playsinline
                width="100%"
                height="100%"
                controls={false} // Typically no controls for hover-to-play background video
                // Optional: Show a preview image when not playing (if video doesn't show first frame)
                // light="/path/to/your/video-thumbnail.jpg" 
                // If using 'light', playing prop might behave differently,
                // ReactPlayer typically plays on click when 'light' is true.
                // For hover, direct control of 'playing' is usually better.
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