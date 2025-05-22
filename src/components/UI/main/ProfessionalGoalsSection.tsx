// components/ProfessionalGoalsSection/ProfessionalGoalsSection.tsx
import React, { useState, useRef } from 'react'; // Added useRef
import ReactPlayer from 'react-player/lazy';
import styles from './ProfessionalGoalsSection.module.css';

// ACTION: Ensure these video files are in your `public/videos/` directory
const personVideoPath = "/videos/IA.mp4";         // First video
const coderAiVideoPath = "/videos/tutor_ia.mp4";  // Second video

// Simple SVG Icons for Play/Pause (you can replace these with more styled versions or an icon library)
const PlayIcon = () => (
  <svg className={styles.playPauseIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg className={styles.playPauseIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const ProfessionalGoalsSection = () => {
  const [isPersonVideoPlaying, setIsPersonVideoPlaying] = useState(false);
  const [isCoderAiVideoPlaying, setIsCoderAiVideoPlaying] = useState(false);

  // Refs to control ReactPlayer instances if needed, though not strictly for play/pause via prop
  // const personPlayerRef = useRef<ReactPlayer>(null);
  // const coderAiPlayerRef = useRef<ReactPlayer>(null);

  // Click handler for the first video
  const handlePersonVideoTogglePlay = () => {
    setIsPersonVideoPlaying(prev => !prev);
  };

  // Click handler for the second video
  const handleCoderAiVideoTogglePlay = () => {
    setIsCoderAiVideoPlaying(prev => !prev);
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
        {/* Column 1 - Video Player */}
        <div className={styles.column}>
          <div
            className={styles.imageContainer} // Renamed to videoContainer for clarity later if you wish
            onClick={handlePersonVideoTogglePlay} // Changed to onClick
          >
            <div className={styles.videoWrapper}>
              <ReactPlayer
                // ref={personPlayerRef}
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
              {!isPersonVideoPlaying && ( // Show Play icon when paused
                <div className={styles.playPauseOverlay}>
                  <PlayIcon />
                </div>
              )}
            </div>
            <span className={`${styles.imageLabel} ${styles.modalidadesLabel}`}>
              MODALIDADES
            </span>
          </div>
        </div>

        {/* Column 2 - Coder AI Video Player */}
        <div className={styles.column}>
          <div
            className={styles.imageContainer} // Renamed to videoContainer for clarity later if you wish
            onClick={handleCoderAiVideoTogglePlay} // Changed to onClick
          >
            <div className={styles.videoWrapper}>
              <ReactPlayer
                // ref={coderAiPlayerRef}
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
              {!isCoderAiVideoPlaying && ( // Show Play icon when paused
                <div className={styles.playPauseOverlay}>
                  <PlayIcon />
                </div>
              )}
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