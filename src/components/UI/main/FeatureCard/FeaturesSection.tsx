// components/FeaturesSection/FeaturesSection.tsx
import React from 'react';
import Image from 'next/image';
import FeatureCard from '../FeatureCard/FeatureCard';
import styles from './FeaturesSection.module.css';
import featureStyles from './FeatureSpecificMockups.module.css';
import { Video, Monitor, Phone, Users, Gift, Play, Volume2, MessageCircle, Mic } from 'lucide-react';

// Professional icons using Lucide React
const MicIcon = <MessageCircle className={`${featureStyles.icon} w-5 h-5 text-white bg-gray-700 p-1 rounded-lg`} />;
const CameraIcon = <Video className={`${featureStyles.icon} w-5 h-5 text-white bg-gray-700 p-1 rounded-lg`} />;
const ScreenShareIcon = <Monitor className={`${featureStyles.icon} w-5 h-5 text-white bg-gray-700 p-1 rounded-lg`} />;
const LeaveIcon = <Phone className={`${featureStyles.icon} w-5 h-5 text-white bg-red-600 p-1 rounded-lg`} />;
const ParticipantsIcon = <Users className={`${featureStyles.icon} w-5 h-5 text-white bg-gray-700 p-1 rounded-lg`} />;
const GiftIcon = <Gift className={`${featureStyles.icon} w-5 h-5 text-yellow-500 bg-yellow-100 p-1 rounded-lg`} />;

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
            {!p.isInitial && <Mic className={`${featureStyles.micMuted} w-4 h-4 text-red-500 bg-red-100 p-0.5 rounded-full`} />}
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
        <Play className="w-6 h-6 text-white bg-black bg-opacity-50 p-1 rounded-lg" />
        <Volume2 className={`${featureStyles.volumeIcon} w-5 h-5 text-white bg-black bg-opacity-50 p-1 rounded-lg`} />
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