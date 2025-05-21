// components/Banner.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Banner.module.css';

interface BannerProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImageUrl?: string;
  backgroundColor?: string; // e.g., '#f0f0f0' or 'var(--primary-color)'
  textColor?: string; // e.g., '#ffffff' or '#333333'
  textAlign?: 'left' | 'center' | 'right';
  height?: string; // e.g., '400px', '50vh'
  children?: React.ReactNode; // For custom content inside the banner
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImageUrl,
  backgroundColor = '#e9ecef', // Default light grey background
  textColor = '#212529',      // Default dark text color
  textAlign = 'center',
  height = 'auto',           // Default auto height, can be set
  children,
}) => {
  const bannerStyle: React.CSSProperties = {
    backgroundColor: backgroundImageUrl ? undefined : backgroundColor,
    backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined,
    color: textColor,
    textAlign: textAlign,
    minHeight: height !== 'auto' ? height : undefined,
    padding: height !== 'auto' ? '40px 20px' : '60px 20px', // Adjust padding based on if height is fixed
  };

  return (
    <section className={styles.bannerContainer} style={bannerStyle}>
      <div className={styles.bannerContent}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children && <div className={styles.customContent}>{children}</div>}
        {ctaText && ctaLink && (
          <Link href={ctaLink} legacyBehavior>
            <a className={styles.ctaButton}>{ctaText}</a>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Banner;