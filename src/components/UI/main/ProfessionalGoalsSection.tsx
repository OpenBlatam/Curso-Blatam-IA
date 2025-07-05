// components/ProfessionalGoalsSection/ProfessionalGoalsSection.tsx
import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './ProfessionalGoalsSection.module.css';
import { Play } from 'lucide-react';

// Lazy load ReactPlayer only when absolutely needed
const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false,
  loading: () => <div>Loading video...</div>
});

// Video thumbnails instead of autoloading videos
const VIDEO_THUMBNAILS = {
  person: "/images/video-thumbnail-ia.jpg", // Create lightweight thumbnails
  coderAi: "/images/video-thumbnail-tutor.jpg"
};

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
  const [shouldLoadVideos, setShouldLoadVideos] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Simple intersection observer to load videos when section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldLoadVideos) {
          // Delay video loading for better performance
          setTimeout(() => setShouldLoadVideos(true), 1500);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoadVideos]);

  const handlePersonVideoTogglePlay = () => {
    if (!shouldLoadVideos) setShouldLoadVideos(true);
    setIsPersonVideoPlaying(prev => !prev);
  };

  const handleCoderAiVideoTogglePlay = () => {
    if (!shouldLoadVideos) setShouldLoadVideos(true);
    setIsCoderAiVideoPlaying(prev => !prev);
  };

  return (
    <section className={styles.container} ref={sectionRef}>
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
            className={styles.imageContainer}
            onClick={handlePersonVideoTogglePlay}
          >
            <div className={styles.videoWrapper}>
              {shouldLoadVideos ? (
                <ReactPlayer
                  className={styles.reactPlayer}
                  url="/videos/IA.mp4"
                  playing={isPersonVideoPlaying}
                  loop
                  muted
                  playsinline
                  width="100%"
                  height="100%"
                  controls={false}
                  preload="none"
                />
              ) : (
                <div className={styles.videoPlaceholder}>
                  <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    color: 'white',
                    fontSize: '48px',
                    cursor: 'pointer'
                  }}>
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              )}
              {!isPersonVideoPlaying && shouldLoadVideos && (
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
            className={styles.imageContainer}
            onClick={handleCoderAiVideoTogglePlay}
          >
            <div className={styles.videoWrapper}>
              {shouldLoadVideos ? (
                <ReactPlayer
                  className={styles.reactPlayer}
                  url="/videos/tutor_ia.mp4"
                  playing={isCoderAiVideoPlaying}
                  loop
                  muted
                  playsinline
                  width="100%"
                  height="100%"
                  controls={false}
                  preload="none"
                />
              ) : (
                <div className={styles.videoPlaceholder}>
                  <div style={{
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    color: 'white',
                    fontSize: '48px',
                    cursor: 'pointer'
                  }}>
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              )}
              {!isCoderAiVideoPlaying && shouldLoadVideos && (
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