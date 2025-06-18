// components/Header.tsx
import React, { useState, useEffect, useMemo } from 'react';
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
      setMounted(false);
    };
  }, []);

  // Memoize the header class to prevent unnecessary recalculations
  const headerClass = useMemo(() => 
    `${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`,
    [isScrolled]
  );

  const showBuyNowButton = router.pathname === '/applicants';

  if (!mounted) {
    return null; // Return null on server-side and initial client render
  }

  return (
    <header className={headerClass}>
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
                  <strong>Hasta 12 meses sin interés</strong>
                  <span className={styles.promoSeparator}>|</span>
                  <span className={styles.promoHighlight}>
                    🔥 en pagos de $125 🔥
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className={styles.actionsContainer}>
          <Link href="https://blatam.org/en/login" target="_blank" rel="noopener noreferrer">
            <span className={styles.loginButton}>
              Acceder
            </span>
          </Link>
          {showBuyNowButton && (
            <Link href="https://astrixial.gumroad.com/l/ia">
              <span className={styles.buyNowButton}>
                <FireIcon />
                Comprar ahora
                <ArrowIcon />
              </span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;