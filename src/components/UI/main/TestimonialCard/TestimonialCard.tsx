// components/TestimonialCard/TestimonialCard.tsx
import React from 'react';
import Image from 'next/image'; // For avatars and flags
import styles from './TestimonialCard.module.css';

// Placeholder for LinkedIn Icon - consider react-icons
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

// Basic Flag Component (extend this or use a library for more flags)
const FlagIcon = ({ countryCode }: { countryCode?: string }) => {
  if (!countryCode) return null;
  // In a real app, you'd map countryCode to an actual image src
  // For now, just a placeholder with text
  let flagEmoji = '';
  switch (countryCode.toLowerCase()) {
    case 'cl': flagEmoji = '🇨🇱'; break;
    case 'co': flagEmoji = '🇨🇴'; break;
    case 'pe': flagEmoji = '🇵🇪'; break;
    // Add more cases
    default: return <span className={styles.flagPlaceholder}>{countryCode.toUpperCase()}</span>;
  }
  return <span className={styles.flagIcon}>{flagEmoji}</span>;
};


export interface TestimonialCardProps {
  avatarSrc: string;
  name: string;
  role: string;
  countryCode?: string; // e.g., 'CL', 'CO'
  quote: string;
  linkedinUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatarSrc,
  name,
  role,
  countryCode,
  quote,
  linkedinUrl,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatarContainer}>
          <Image src={avatarSrc} alt={name} width={48} height={48} className={styles.avatar} />
        </div>
        <div className={styles.userInfo}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.role}>
            {role} {countryCode && <FlagIcon countryCode={countryCode} />}
          </p>
        </div>
      </div>
      <div className={styles.quoteBody}>
        <span className={styles.quoteMark}>“</span>
        <p className={styles.quoteText}>{quote}</p>
      </div>
      {linkedinUrl && (
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.linkedinButton}>
          <LinkedInIcon /> Ver en LinkedIn
        </a>
      )}
    </div>
  );
};

export default TestimonialCard;