// components/FeaturesSection/FeaturesSection.tsx
import React from 'react';
import Image from 'next/image';
import FeatureCard from '../FeatureCard/FeatureCard';
import styles from './FeaturesSection.module.css';
import featureStyles from './FeatureSpecificMockups.module.css';

// Simple JSX elements for icons
const MicIcon = <span className={featureStyles.icon}>🎤</span>;
const CameraIcon = <span className={featureStyles.icon}>📷</span>;
const ScreenShareIcon = <span className={featureStyles.icon}>💻</span>;
const LeaveIcon = <span className={featureStyles.icon}>📞</span>;
const ParticipantsIcon = <span className={featureStyles.icon}>👥</span>;
const GiftIcon = <span className={featureStyles.icon}>🎁</span>;

// Define precise types for participants
interface ImageParticipant {
  id: number;
  name: string;
  imgSrc: string; // Required for this type
  isInitial?: false; // Optional, but helps discriminate
}

interface InitialParticipant {
  id: number;
  name: string; // This will be the initial letter(s)
  imgSrc?: undefined; // Explicitly undefined or not present
  isInitial: true; // Required for this type
}

type Participant = ImageParticipant | InitialParticipant;

const OnlineClassesMockup = () => {
  const participants: Participant[] = [ // Use the Participant union type
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
              <div className={featureStyles.participantImageContainer}>
                <Image
                  src={p.imgSrc}
                  alt={p.name}
                  width={80}
                  height={80}
                  className={featureStyles.participantImage}
                  style={{ objectFit: 'cover' }}
                  priority={p.id <= 2}
                  quality={75}
                />
              </div>
            )}
            {!p.isInitial && <span className={featureStyles.micMuted}>🔇</span>}
          </div>
        ))}
      </div>
      <div className={featureStyles.callControls}>
        <div className={featureStyles.iconWrapper}>{MicIcon}</div>
        <div className={featureStyles.iconWrapper}>{CameraIcon}</div>
        <div className={featureStyles.iconWrapper}>{ScreenShareIcon}</div>
        <span className={featureStyles.spacer}></span>
        <div className={featureStyles.iconWrapper}>{LeaveIcon}</div>
        <div className={featureStyles.iconWrapper}>{ParticipantsIcon}</div>
      </div>
    </div>
  );
};

const GamificationMockup = () => {
  const videoUserImage = '/images/Gamification.png';

  return (
    <div className={featureStyles.videoPlayerContainer}>
      <Image
        src={videoUserImage}
        alt="Student learning"
        fill
        className={featureStyles.videoBgImage}
        priority
        quality={75}
        style={{ objectFit: 'cover' }}
      />
      <div className={featureStyles.videoOverlayTop}>
        <span>Top 10%</span>
      </div>
      <div className={featureStyles.videoOverlayNotification}>
        {GiftIcon}
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