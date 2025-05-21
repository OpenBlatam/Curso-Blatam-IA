// components/FeatureCard/FeatureCard.tsx
import React from 'react';
import Image from 'next/image'; // If you have actual images
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  category: string;
  title: string;
  description: string;
  children: React.ReactNode; // For the image mock-up content
  imageBackgroundColor?: string; // To set background for the image area
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  category,
  title,
  description,
  children,
  imageBackgroundColor = '#333', // Default dark background for image area
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.textContainer}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageMockupContainer} style={{ backgroundColor: imageBackgroundColor }}>
        {children}
      </div>
    </div>
  );
};

export default FeatureCard;