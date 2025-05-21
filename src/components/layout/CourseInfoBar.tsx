// components/CourseInfoBar.tsx
import React from 'react';
import styles from './CourseInfoBar.module.css';
// You would typically import actual icons, e.g., from 'react-icons/fi'
// import { FiCalendar, FiClock, FiPlayCircle, FiBarChart2, FiList } from 'react-icons/fi';

interface InfoItemProps {
  icon: React.ReactNode; // For simplicity, using ReactNode. Could be string for icon name.
  label: string;
  value: string | React.ReactNode;
  hasInfoIcon?: boolean;
  isLink?: boolean;
}

const infoItemsData: InfoItemProps[] = [
  {
    icon: '🗓️', // Placeholder for Calendar Icon (e.g., <FiCalendar />)
    label: 'Duración',
    value: '4 semanas',
  },
  {
    icon: '🎯', // Placeholder for Dedication Icon (e.g., <FiClock />)
    label: 'Dedicación',
    value: '4 a 6 hs semanales',
    hasInfoIcon: true,
  },
  {
    icon: '▶️', // Placeholder for Play Icon (e.g., <FiPlayCircle />)
    label: 'Clases en vivo',
    value: '1 clase semanal de 2 hs',
  },
  {
    icon: '📊', // Placeholder for Bar Chart Icon (e.g., <FiBarChart2 />)
    label: 'Dificultad',
    value: 'Avanzado',
  },
  {
    icon: '📋', // Placeholder for List Icon (e.g., <FiList />)
    label: 'Requisitos previos',
    value: <a href="#" className={styles.link}>Ver más</a>,
    isLink: true,
  },
];

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value, hasInfoIcon }) => (
  <div className={styles.infoItem}>
    <div className={styles.iconWrapper}>{icon}</div>
    <div className={styles.label}>
      {label}
      {hasInfoIcon && <span className={styles.infoIcon}>ⓘ</span> /* Placeholder for Info Icon */}
    </div>
    <div className={styles.value}>{value}</div>
  </div>
);

const CourseInfoBar: React.FC = () => {
  return (
    <div className={styles.infoBarContainer}>
      {infoItemsData.map((item) => (
        <InfoItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          value={item.value}
          hasInfoIcon={item.hasInfoIcon}
        />
      ))}
    </div>
  );
};

export default CourseInfoBar;