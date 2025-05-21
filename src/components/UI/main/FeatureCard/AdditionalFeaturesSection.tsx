// components/FeaturesSection/AdditionalFeaturesSection.tsx
import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard'; // Assuming FeatureCard is in this path
import styles from './FeaturesSection.module.css'; // Reusing parent section styles for consistency
import featureStyles from './FeatureSpecificMockups.module.css'; // Reusing/extending this for new mockups

// Placeholder for Coder Camp Logo
const CoderCampLogo = () => (
  <div className={featureStyles.coderCampLogo}>
    CODER<br />CAMP.
  </div>
);

// Placeholder for Coderhouse Logo (simple text version)
const CoderhouseLogoSmall = () => (
  <div className={featureStyles.coderhouseLogoSmall}>BLATAM</div>
);

const EmployabilityProgramMockup = () => {
  const exercises = [
    { id: 1, name: 'EJERCICIO 1', progress: 100 },
    { id: 2, name: 'EJERCICIO 2', progress: 80 },
    { id: 3, name: 'EJERCICIO 3', progress: 50 },
    { id: 4, name: 'EJERCICIO 4', progress: 0 },
  ];
  // Placeholder for user avatar and video thumbnail
  const userAvatar = '/placeholder-avatar.png';
  const videoThumbnail = '/placeholder-woman-presenting.jpg';

  return (
    <div className={featureStyles.employabilityMockupContainer}>
      <div className={featureStyles.mockupHeader}>
        <img src={userAvatar} alt="User Avatar" className={featureStyles.userAvatar} />
        <span className={featureStyles.mockupMenuDots}>•••</span>
      </div>
      <div className={featureStyles.mockupBody}>
        <div className={featureStyles.progressList}>
          <h4 className={featureStyles.progressTitle}>Progreso en tu entrevista</h4>
          {exercises.map(ex => (
            <div key={ex.id} className={featureStyles.exerciseItem}>
              <span className={featureStyles.exerciseName}>{ex.name}</span>
              <div className={featureStyles.progressBarContainer}>
                <div
                  className={featureStyles.progressBar}
                  style={{ width: `${ex.progress}%` }}
                ></div>
              </div>
              <span className={featureStyles.exerciseProgressText}>{ex.progress}%</span>
            </div>
          ))}
        </div>
        <div className={featureStyles.videoThumbnail}>
          <img src={videoThumbnail} alt="Video Thumbnail" />
          <span className={featureStyles.playIcon}>▶</span>
        </div>
      </div>
      <CoderCampLogo />
    </div>
  );
};

const CertificateMockup = () => {
  // Placeholder for signatures - using simple lines
  const SignaturePlaceholder = () => <div className={featureStyles.signatureLine}></div>;

  return (
    <div className={featureStyles.certificateMockupContainer}>
      <div className={featureStyles.certificateHeader}>
        <CoderhouseLogoSmall />
        <span className={featureStyles.badge10}>10</span>
        <span className={featureStyles.certificateLabel}>Certificado</span>
      </div>
      <div className={featureStyles.certificateBody}>
        <h2>Carrera de Product Marketing</h2>
        <h1>Luz García</h1>
        <p className={featureStyles.certificateDescription}>
          Ha realizado y completado con éxito su curso en
          Blatam  donde ha logrado desarrollar, comprender
          todos los requisites educativos exigidos.
        </p>
        <p className={featureStyles.certificateDate}>10 de febrero 2024</p>
      </div>
      <div className={featureStyles.certificateFooter}>
        <SignaturePlaceholder />
        <SignaturePlaceholder /> {/* Assuming two signatures */}
      </div>
    </div>
  );
};


const AdditionalFeaturesSection = () => {
  return (
    <section className={styles.featuresSectionContainer}> {/* Reusing existing section styles */}
      <FeatureCard
        category="#BLATAMCAMP"
        title="Programa de empleabilidad gratuito"
        description="Se trata de un bootcamp intensivo de 4 semanas, con clases online y en vivo, mentorías y talleres prácticos diseñados para potenciar tu búsqueda de empleo."
        imageBackgroundColor="#F0F2F5" // Light grey background for the mockup area
      >
        <EmployabilityProgramMockup />
      </FeatureCard>

      <FeatureCard
        category="CERTIFICADO"
        title="Certifica tus conocimientos"
        description="Al completar y aprobar tu cursada, recibirás un certificado que validará todo lo que aprendiste y que podrás sumar a tu CV y a tu perfil de LinkedIn."
        imageBackgroundColor="#1E1E2F" // Dark background for the certificate
      >
        <CertificateMockup />
      </FeatureCard>
    </section>
  );
};

export default AdditionalFeaturesSection;