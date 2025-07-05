// components/CourseModality.tsx
import React from 'react';
import Image from 'next/image';
import styles from './CourseModality.module.css';
import { Shield, Users, Play, CheckCircle } from 'lucide-react';

// Professional icons using Lucide React
const LiveClassIcon = () => <Users className={`${styles.featureIcon} w-6 h-6 text-red-600 bg-red-50 p-1 rounded-lg`} />;
const OnDemandIcon = () => <Play className={`${styles.featureIcon} w-6 h-6 text-blue-600 bg-blue-50 p-1 rounded-lg`} />;
const CertificateIcon = () => <Shield className={`${styles.icon} w-6 h-6 text-blue-600 bg-blue-50 p-1 rounded-lg`} />;

const CourseModality: React.FC = () => {
  return (
    <section className={styles.modalitySection}>
      <div className={styles.headerText}>
        <p className={styles.preHeading}>MODALIDAD</p>
        <h2 className={styles.mainHeading}>
          Aprende Inteligencia Artificial aplicada al Marketing Digital en 7
          semanas
        </h2>
        <p className={styles.subHeading}>
          Aprenderás a potenciar campañas de marketing con técnicas avanzadas
          de IA.
        </p>
        <a href="#" className={styles.viewMoreLink}>
          Ver más
        </a>
      </div>

      <div className={styles.featuresGrid}>
        {/* Left Column: Clases online en vivo */}
        <div className={styles.featureCard}>
          <div className={styles.featureHeader}>
            <LiveClassIcon />
            <h3 className={styles.featureTitle}>Clases online en vivo</h3>
          </div>
          <p className={styles.featureDescription}>
            Clases en vivo cada semana con profesores expertos, donde podrás
            resolver todas tus dudas de forma práctica.
          </p>
          <div className={styles.featureImageWrapper}>
            <Image
              src="/images/Live.png" // Replace with your actual image path
              alt="Simulación de clase online en vivo"
              width={400} // Adjust to your image's aspect ratio
              height={250} // Adjust to your image's aspect ratio
              className={styles.featureImage}
            />
          </div>
        </div>

        {/* Right Column: Contenido on demand */}
        <div className={styles.featureCard}>
          <div className={styles.featureHeader}>
            <OnDemandIcon />
            <h3 className={styles.featureTitle}>Contenido on demand</h3>
          </div>
          <p className={styles.featureDescription}>
            Accede a videos, podcasts, quizzes y más recursos, diseñados para
            que aprendas y pongas en práctica todo lo que sabes.
          </p>
          <div className={styles.featureImageWrapper}>
            <Image
              src="/images/Ondemand.png" // Replace with your actual image path
              alt="Persona estudiando contenido on demand"
              width={400} // Adjust to your image's aspect ratio
              height={250} // Adjust to your image's aspect ratio
              className={styles.featureImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.certificationSection}>
        <CertificateIcon />
        <p className={styles.certificationText}>Certificación Oficial</p>
      </div>
    </section>
  );
};

export default CourseModality;