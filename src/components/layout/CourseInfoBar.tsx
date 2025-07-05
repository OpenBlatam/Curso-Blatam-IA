// components/CourseInfoBar.tsx
import React from 'react';
import styles from './CourseInfoBar.module.css';
import { Info, Users } from 'lucide-react';

interface InfoItemProps {
  icon: React.ReactNode; // For simplicity, using ReactNode. Could be string for icon name.
  label: string;
  value: string | React.ReactNode;
  hasInfoIcon?: boolean;
  isLink?: boolean;
}

const infoItemsData: InfoItemProps[] = [
  {
    icon: <span className="w-6 h-6 text-blue-600 bg-blue-50 p-1 rounded-lg flex items-center justify-center text-sm font-bold">4</span>,
    label: 'Duración',
    value: '4 semanas',
  },
  {
    icon: <span className="w-6 h-6 text-green-600 bg-green-50 p-1 rounded-lg flex items-center justify-center text-sm font-bold">⏰</span>,
    label: 'Dedicación',
    value: '4 a 6 hs semanales',
    hasInfoIcon: true,
  },
  {
    icon: <Users className="w-6 h-6 text-red-600 bg-red-50 p-1 rounded-lg" />,
    label: 'Clases en vivo',
    value: '1 clase semanal de 2 hs',
  },
  {
    icon: <span className="w-6 h-6 text-purple-600 bg-purple-50 p-1 rounded-lg flex items-center justify-center text-sm font-bold">★</span>,
    label: 'Dificultad',
    value: 'Avanzado',
  },
  {
    icon: <span className="w-6 h-6 text-orange-600 bg-orange-50 p-1 rounded-lg flex items-center justify-center text-sm font-bold">📚</span>,
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
      {hasInfoIcon && <Info className={`${styles.infoIcon} w-4 h-4 text-gray-500 hover:text-blue-600 transition-colors cursor-help`} />}
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