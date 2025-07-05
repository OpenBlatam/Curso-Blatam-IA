// components/BlatamBanner.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // If the CTA button is a link
import styles from './BlatamBannerMain.module.css';
import Image from 'next/image';

// Placeholder icons - replace with actual SVGs or an icon library
import { Flame } from 'lucide-react';

const FireIcon = () => <span className={`${styles.icon} text-orange-500 text-xl`}>🔥</span>;
const ArrowIcon = () => <span className={styles.icon}>→</span>;

interface BlatamBannerMainProps {
  windowSize: {
    width: number;
    height: number;
  };
}

const SprayText = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    color: '#fff',
    textShadow: '0 0 12px #fff, 0 0 32px #fff, 0 0 48px #fff',
    filter: 'blur(0.5px)',
    fontFamily: 'inherit',
    fontWeight: 700,
    letterSpacing: '0.1em',
    fontSize: '2.8rem',
    marginLeft: '0.2em',
  }}>{children}</span>
);

const BlatamBannerMain: React.FC<BlatamBannerMainProps> = ({ windowSize }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featureTags = [
    'Clases en vivo',
    'Certificado oficial',
    'Mentorías',
    'Salida laboral',
  ];

  if (!mounted) {
    return null; // Don't render anything during SSR
  }

  return (
    <div className={styles.bannerContainer} style={{position: 'relative', minHeight: '18vh', padding: '8px 0'}}>
      {/* Fondo desenfocado */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        filter: 'none',
        overflow: 'hidden',
      }}>
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Fondo desenfocado"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
        {/* Grain overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          background: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png") repeat',
          opacity: 0.25,
          zIndex: 2,
        }} />
      </div>

      <div className={styles.mainContentWrapper} style={{position: 'relative', zIndex: 3}}>
        <div className={styles.content}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.2rem'}}>
            <span style={{
              fontSize: '1.4rem',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              color: '#fff',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
            }}>BLA</span>
            <span style={{fontSize: '1.1rem', margin: '0 0.1em'}}><FireIcon /></span>
            <SprayText>TAM</SprayText>
          </div>
          <span className={styles.saleText} style={{fontSize: '0.7rem', color: '#fff', marginBottom: '0.2rem'}}>hasta</span>
          <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '0.2rem'}}>
            <span className={styles.discountNumber} style={{fontSize: '2.8rem', fontWeight: 'bold', lineHeight: 1}}>70</span>
            <span className={styles.discountPercent} style={{fontSize: '1.1rem', fontWeight: 'bold', marginLeft: '0.2rem', lineHeight: 1.2}}>%</span>
            <span className={styles.discountOff} style={{fontSize: '1.1rem', fontWeight: 'bold', marginLeft: '0.2rem', lineHeight: 1.2}}>off</span>
          </div>
          <p className={styles.installment} style={{fontSize: '0.7rem', color: '#fff', marginTop: '0.3rem', marginBottom: '0.7rem'}}>+12 meses sin interés</p>

          <Link href="/applicants">
            <span className={styles.ctaButton} style={{marginTop: '0.5rem', background: '#fff', color: '#111', fontWeight: 'bold', fontSize: '0.8rem', borderRadius: '8px', padding: '7px 18px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '120px'}}>
              <FireIcon />
              <span style={{margin: '0 0.3em'}}>Inscribirme ahora</span>
              <ArrowIcon />
            </span>
          </Link>
        </div>

        {/* Feature Tags - aligned to the sides */}
        <div className={styles.featureTagsContainer} style={{width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '0.7rem'}}>
          <div style={{display: 'flex', gap: '0.5rem'}}>
            <span className={styles.featureTag} style={{fontSize: '0.6rem', padding: '2px 6px'}}>🔴 Clases en vivo</span>
            <span className={styles.featureTag} style={{fontSize: '0.6rem', padding: '2px 6px'}}>Certificado oficial</span>
          </div>
          <div style={{display: 'flex', gap: '0.5rem'}}>
            <span className={styles.featureTag} style={{fontSize: '0.6rem', padding: '2px 6px'}}>Mentorías</span>
            <span className={styles.featureTag} style={{fontSize: '0.6rem', padding: '2px 6px'}}>Salida laboral</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlatamBannerMain;