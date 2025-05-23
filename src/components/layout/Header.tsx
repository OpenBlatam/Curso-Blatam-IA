// components/Header.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import styles from './Header.module.css';

// Icons for the "Comprar ahora" button - ensure these return a single element like <span>
const FireIcon = () => <span className={styles.ctaIcon}>🔥</span>;
const ArrowIcon = () => <span className={styles.ctaIcon}>→</span>;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 21.9);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showBuyNowButton = router.pathname === '/applicants';

  if (!mounted) {
    return null; // Return null on server-side and initial client render
  }

  return (
    <header className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Link href="/applicants">
            <span className={styles.logo}>Blatam</span>
          </Link>
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/applicants">
                <span className={styles.promoLink}>
                  <span>Aprovecha hasta <strong>70% OFF</strong> y hasta <strong>12 meses sin intereses</strong> en CURSOS</span>
                  <span className={styles.promoSeparator}>|</span>
                  <span className={styles.promoHighlight}>
                    <span className={styles.fireEmoji}>🔥</span>
                    Hasta el 21 de Agosto
                    <span className={styles.fireEmoji}>🔥</span>
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        
        {showBuyNowButton && (
          <div className={styles.actionsContainer}>
            <Link href="https://astrixial.gumroad.com/l/ia">
              <span className={styles.buyNowButton}>
                <FireIcon />
                Comprar ahora
                <ArrowIcon />
              </span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;