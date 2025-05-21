// components/FeaturesSection/FeaturesSection.tsx
import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import FeatureCard from '../FeatureCard/FeatureCard';
import styles from './FeaturesSection.module.css';
import featureStyles from './FeatureSpecificMockups.module.css';

// Placeholder for icons - consider using an icon library like react-icons
const MicIcon = () => <span className={featureStyles.icon}>🎤</span>;
const CameraIcon = () => <span className={featureStyles.icon}>📷</span>;
const ScreenShareIcon = () => <span className={featureStyles.icon}>💻</span>;
const LeaveIcon = () => <span className={featureStyles.icon}>📞</span>;
const ParticipantsIcon = () => <span className={featureStyles.icon}>👥</span>;
const GiftIcon = () => <span className={featureStyles.icon}>🎁</span>;


const OnlineClassesMockup = () => {
  const participants = [
    // CORRECTED PATHS: Relative to the 'public' directory root
    { id: 1, name: 'User 1', imgSrc: '/images/1.jpg' },
    { id: 2, name: 'User 2', imgSrc: '/images/2.jpg' },
    { id: 3, name: 'User 3', imgSrc: '/images/3.jpg' },
    { id: 4, name: 'User 4', imgSrc: '/images/4.png' },
    { id: 5, name: 'User 5', imgSrc: '/images/5.png' },
    { id: 6, name: 'S', isInitial: true },
  ];

  return (
    <div className={featureStyles.videoCallContainer}>
      <div className={featureStyles.participantsGrid}>
        {participants.map((p) => (
          <div key={p.id} className={featureStyles.participantTile}>
            {p.isInitial ? (
              <span className={featureStyles.initials}>{p.name}</span>
            ) : (
              // Use Next.js Image component
              <Image
                src={p.imgSrc}
                alt={p.name}
                width={80} // Define appropriate width for participant tiles
                height={80} // Define appropriate height
                className={featureStyles.participantImage} // For object-fit if needed
                // layout="responsive" or "fill" can also be used if parent has defined dimensions
                // For layout="fill", parent must have position: relative
                // For layout="responsive", parent influences aspect ratio.
                // Given the class .participantImage likely has object-fit, fixed width/height is fine.
              />
            )}
            {!p.isInitial && <span className={featureStyles.micMuted}>🔇</span>}
          </div>
        ))}
      </div>
      <div className={featureStyles.callControls}>
        <MicIcon />
        <CameraIcon />
        <ScreenShareIcon />
        <span className={featureStyles.spacer}></span>
        <LeaveIcon />
        <ParticipantsIcon />
      </div>
    </div>
  );
};

const GamificationMockup = () => {
  // CORRECTED PATH (assuming it's also in public/images/)
  const videoUserImage = '/images/Gamification.png';

  return (
    <div className={featureStyles.videoPlayerContainer}>
      {/* Use Next.js Image component here as well */}
      <Image
        src={videoUserImage}
        alt="Student learning"
        layout="fill" // Fill the parent container
        objectFit="cover" // Cover the area, may crop
        className={featureStyles.videoBgImage} // Use if you have specific styles beyond layout
        priority // Optional: If this image is above the fold and critical for LCP
      />
      {/* The rest of the overlays remain the same */}
      <div className={featureStyles.videoOverlayTop}>
        <span>Top 10%</span>
      </div>
      <div className={featureStyles.videoOverlayNotification}>
        <GiftIcon />
        <div>
          <strong>¡Felicitaciones!</strong>
          <p>sumaste 80 puntos</p>
        </div>
        <span className={featureStyles.pointsBadge}>+80 pts</span>
      </div>
      <div className={featureStyles.videoProgressBarContainer}>
        <div className={featureStyles.videoProgressBar}></div>
      </div>
      <div className={featureStyles.videoPlayerControls}>
        <span>▶</span>
        <span className={featureStyles.volumeIcon}>🔊</span>
      </div>
    </div>
  );
};


const FeaturesSection = () => {
  return (
    <section className={styles.featuresSectionContainer}>
      <FeatureCard
        category="ONLINE Y EN VIVO"
        title="Clases online y en vivo"
        description="También contarás con clases online y en vivo en donde podrás resolver tus dudas y aprender junto a grandes expertos."
        imageBackgroundColor="#2D2D2D"
      >
        <OnlineClassesMockup />
      </FeatureCard>

      <FeatureCard
        category="GAMIFICACIÓN"
        title="Aprende, compite y lidera el Ranking"
        description="Aprende de forma atractiva, con retroalimentación constante, compitiendo y jugando con tus compañeros para ganar grandes beneficios."
        imageBackgroundColor="#22223B"
      >
        <GamificationMockup />
      </FeatureCard>
    </section>
  );
};

export default FeaturesSection;