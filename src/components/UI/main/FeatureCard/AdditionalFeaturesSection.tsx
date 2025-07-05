// components/FeaturesSection/AdditionalFeaturesSection.tsx
import React from 'react';
import Image from 'next/image';
import FeatureCard from '../FeatureCard/FeatureCard'; // Assuming FeatureCard is in this path
import styles from './FeaturesSection.module.css'; // Reusing parent section styles for consistency
import featureStyles from './FeatureSpecificMockups.module.css'; // Reusing/extending this for new mockups
import BlatamLogoText from '../../BlatamLogoText'; // Corrected Import path
import { CheckCircle, Star, Trophy, BadgeCheck, Linkedin, FileText, Shield } from 'lucide-react';

// Placeholder for Blatam Camp Logo
const CoderCampLogo = () => (
  <div className={featureStyles.coderCampLogo}>
    BLATAM<br />CAMP
  </div>
);

// Placeholder for Coderhouse Logo (simple text version)
const CoderhouseLogoSmall = () => (
  <BlatamLogoText className={featureStyles.coderhouseLogoSmall} />
);

const EmployabilityProgramMockup = () => {
  const exercises = [
    { id: 1, name: 'EJERCICIO 1', progress: 100, status: 'Completado' },
    { id: 2, name: 'EJERCICIO 2', progress: 80, status: 'En Progreso' },
    { id: 3, name: 'EJERCICIO 3', progress: 50, status: 'Parcial' },
    { id: 4, name: 'EJERCICIO 4', progress: 0, status: 'Pendiente' },
  ];
  
  const userAvatar = '/images/Testimonio6.png';

  // Enhanced achievement component
  const AchievementBadge = () => (
    <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-lg border border-blue-200">
      <div className="flex items-center gap-3 mb-2">
        <Trophy className="w-6 h-6 text-yellow-600" />
        <div>
          <p className="text-sm font-semibold text-gray-700">¡Excelente Progreso!</p>
          <p className="text-xs text-gray-500">Completaste 2 de 4 ejercicios</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <span className="text-gray-600">Top 15%</span>
        <span className="text-gray-600">+50 puntos</span>
      </div>
    </div>
  );

  // Progress overview component
  const ProgressOverview = () => (
    <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Resumen de Progreso</span>
        <span className="text-xs text-gray-500">50% completado</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{ width: '50%' }}></div>
      </div>
    </div>
  );

  return (
    <div className={featureStyles.employabilityMockupContainer}>
      <div className={featureStyles.mockupHeader}>
        <div className="flex items-center gap-2">
          <Image
            src={userAvatar}
            alt="User Avatar"
            width={32}
            height={32}
            className={featureStyles.userAvatar}
          />
          <div className="flex items-center gap-1">
            <BadgeCheck className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">Perfil Verificado</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Meta: Empleo</span>
          <span className={featureStyles.mockupMenuDots}>•••</span>
        </div>
      </div>
      
      <div className={featureStyles.mockupBody}>
        <div className={featureStyles.progressList}>
          <h4 className={featureStyles.progressTitle}>Progreso en tu entrevista</h4>
          
          {/* Progress Overview */}
          <ProgressOverview />
          
          {exercises.map(ex => (
            <div key={ex.id} className={featureStyles.exerciseItem}>
              <div className="flex items-center justify-between mb-1">
                <span className={featureStyles.exerciseName}>{ex.name}</span>
                <span className="text-xs text-gray-500">{ex.status}</span>
              </div>
              <div className={featureStyles.progressBarContainer}>
                <div
                  className={featureStyles.progressBar}
                  style={{ width: `${ex.progress}%` }}
                ></div>
              </div>
              <span className={featureStyles.exerciseProgressText}>{ex.progress}%</span>
            </div>
          ))}
          
          {/* Enhanced Achievement Badge */}
          <AchievementBadge />
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <CoderCampLogo />
        </div>
        <span className="text-xs text-gray-500">Actualizado hace 2h</span>
      </div>
    </div>
  );
};

const CertificateMockup = () => {
  // Professional signature icons with enhanced design
  const SignatureIcon = () => (
    <div className={featureStyles.signatureIcon}>
      <CheckCircle className="w-6 h-6 text-green-500" />
    </div>
  );

  // Certificate stats component
  const CertificateStats = () => (
    <div className="grid grid-cols-2 gap-3 mb-4">
      <div className="p-2 bg-blue-50 rounded-lg">
        <p className="text-xs text-gray-500">Duración</p>
        <p className="text-sm font-semibold text-gray-700">4 semanas</p>
      </div>
      <div className="p-2 bg-green-50 rounded-lg">
        <p className="text-xs text-gray-500">Proyectos</p>
        <p className="text-sm font-semibold text-gray-700">5 completados</p>
      </div>
    </div>
  );

  // Skills acquired component
  const SkillsAcquired = () => (
    <div className="mb-4">
      <span className="text-sm font-medium text-gray-700">Habilidades Adquiridas</span>
      <div className="flex flex-wrap gap-1 mt-2">
        {['Product Marketing', 'Análisis de Datos', 'Estrategia', 'Growth Hacking'].map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className={featureStyles.certificateMockupContainer}>
      {/* Enhanced Certificate Header */}
      <div className={featureStyles.certificateHeader}>
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          <CoderhouseLogoSmall />
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            10
          </span>
          <span className={featureStyles.certificateLabel}>Certificado</span>
        </div>
      </div>

      {/* Enhanced Certificate Body */}
      <div className={featureStyles.certificateBody}>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Carrera de Product Marketing</h2>
        
        <div className="flex items-center gap-2 mb-3">
          <BadgeCheck className="w-6 h-6 text-green-600" />
          <h1 className="text-2xl font-bold text-gray-900">Luz García</h1>
        </div>
        
        <div className="flex items-start gap-2 mb-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
          <p className={featureStyles.certificateDescription}>
            Ha realizado y completado con éxito su curso en
            <strong> Blatam</strong> donde ha logrado desarrollar, comprender
            todos los requisites educativos exigidos.
          </p>
        </div>

        {/* Certificate Stats */}
        <CertificateStats />
        
        {/* Skills Acquired */}
        <SkillsAcquired />
        
        <p className={featureStyles.certificateDate}>10 de febrero 2024</p>

        {/* Enhanced Social Media Integration */}
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <Linkedin className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-700">Compartir en LinkedIn</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <FileText className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-700">Descargar PDF</span>
          </div>
        </div>
      </div>

      {/* Enhanced Certificate Footer */}
      <div className={featureStyles.certificateFooter}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-600" />
              <span className="text-sm text-gray-600">Certificado Verificado</span>
            </div>
            <span className="text-sm text-gray-600">+85% empleabilidad</span>
          </div>
          <div className="flex items-center gap-2">
            <SignatureIcon />
            <SignatureIcon />
          </div>
        </div>
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