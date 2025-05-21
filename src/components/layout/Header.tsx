// components/Header.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // For navigation links
import styles from './Header.module.css';

// Placeholder icons (optional, for a menu toggle on mobile)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);


const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Add shadow when scrolled a bit
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Link href="/" legacyBehavior>
            <a className={styles.logo}>Blatam</a>
          </Link>
        </div>

        <nav className={`${styles.navigation} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <ul>
            <li>
              {/* MODIFIED PROMOTIONAL LINK STRUCTURE HERE */}
              <Link href="/cursos" legacyBehavior>
                <a className={styles.promoLink}>
                  <span>Aprovecha hasta <strong>70% OFF</strong> y hasta 12 meses sin intereses en CURSOS</span>
                  <span className={styles.promoSeparator}>|</span>
                  <span className={styles.promoHighlight}>
                    <span className={styles.fireEmoji}>🔥</span> {/* Fire emoji wrapped in span */}
                    Hasta el 21 de Agosto
                    <span className={styles.fireEmoji}>🔥</span> {/* Fire emoji wrapped in span */}
                  </span>
                </a>
              </Link>
            </li>
            {/* You can add more standard navigation links here if needed:
            <li><Link href="/nosotros" legacyBehavior><a>Nosotros</a></Link></li>
            <li><Link href="/blog" legacyBehavior><a>Blog</a></Link></li>
            <li><Link href="/contacto" legacyBehavior><a>Contacto</a></Link></li>
            */}
          </ul>
        </nav>

        {/*
          If you want a desktop action button (e.g., "Iniciar Sesión"),
          you can uncomment and place this block here or after the <nav>.
          The CSS for .actionsContainer and .actionButton is in Header.module.css
        */}
        {/*
        <div className={styles.actionsContainer}>
          <button className={styles.actionButton}>Iniciar Sesión</button>
        </div>
        */}

      </div>
    </header>
  );
};

export default Header;