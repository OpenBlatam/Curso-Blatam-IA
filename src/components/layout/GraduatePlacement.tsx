// components/GraduatePlacement.tsx
import React from 'react';
import Image from 'next/image'; // If you plan to use actual image files for logos
import styles from './GraduatePlacement.module.css';

// Interface for each company data
interface CompanyPlacement {
  name: string;
  logoUrl: string; // Path to your logo image or a placeholder
  graduates: string; // e.g., "+1.805 graduados"
  altText: string;
}

// Data for the companies
const companyPlacementsData: CompanyPlacement[] = [
  {
    name: 'Mercado Libre',
    logoUrl: '/logos/mercado-libre.png', // Replace with actual path or import SVG
    graduates: '+1.805 graduados',
    altText: 'Mercado Libre Logo',
  },
  {
    name: 'Accenture',
    logoUrl: '/logos/accenture.png', // Replace with actual path
    graduates: '+1.808 graduados',
    altText: 'Accenture Logo',
  },
  {
    name: 'Globant',
    logoUrl: '/logos/globant.png', // Replace with actual path
    graduates: '+688 graduados',
    altText: 'Globant Logo',
  },
  {
    name: 'Galicia',
    logoUrl: '/logos/galicia.png', // Replace with actual path
    graduates: '+883 graduados',
    altText: 'Galicia Logo',
  },
  {
    name: 'PedidosYa',
    logoUrl: '/logos/pedidos-ya.png', // Replace with actual path
    graduates: '+545 graduados',
    altText: 'PedidosYa Logo',
  },
  {
    name: 'NaranjaX',
    logoUrl: '/logos/naranja-x.png', // Replace with actual path
    graduates: '+584 graduados',
    altText: 'NaranjaX Logo',
  },
];

const GraduatePlacement: React.FC = () => {
  return (
    <section className={styles.placementSection}>
      <div className={styles.textContainer}>
        <p className={styles.preHeading}>SALIDA LABORAL</p>
        <h2 className={styles.mainHeading}>
          La plataforma con más graduados en empresas líderes
        </h2>
        <p className={styles.description}>
          En Blatam, nuestro principal objetivo es ayudarte a conseguir
          empleo o avanzar en tu carrera profesional. Por eso, nos enorgullece
          ser la plataforma educativa con la mayor cantidad de graduados en
          empresas de prestigio.
        </p>
      </div>

      <div className={styles.logosGrid}>
        {companyPlacementsData.map((company) => (
          <div key={company.name} className={styles.logoItem}>
            {/*
              For actual images, you'd use the Next.js Image component:
              <Image src={company.logoUrl} alt={company.altText} width={150} height={50} objectFit="contain" />
              Or an <img> tag:
              <img src={company.logoUrl} alt={company.altText} className={styles.companyLogoImage} />
              For SVGs, you might import them as components.
            */}
            <div className={styles.logoPlaceholder}>
              {/* This is a placeholder. Replace with Image component or SVG */}
              <img src={company.logoUrl} alt={company.altText} className={styles.companyLogoImage} />
            </div>
            <p className={styles.graduatesCount}>{company.graduates}</p>
          </div>
        ))}
      </div>

      <p className={styles.disclaimer}>
        Las cifras de graduados en empresas líderes se basan en información
        pública disponible en LinkedIn.
      </p>
    </section>
  );
};

export default GraduatePlacement;