// components/CourseInfoBar.tsx
import React from 'react';
import styles from './CourseInfoBar.module.css';
import { Info, Users, CalendarDays, Clock, Video, Star, BookOpen } from 'lucide-react';

interface InfoItemProps {
  icon: React.ReactNode; // For simplicity, using ReactNode. Could be string for icon name.
  label: string;
  value: string | React.ReactNode;
  hasInfoIcon?: boolean;
  isLink?: boolean;
}

const infoItemsData: InfoItemProps[] = [
  {
    icon: <CalendarDays size={28} strokeWidth={1.7} />,
    label: 'Duración',
    value: '4 semanas',
  },
  {
    icon: <Clock size={28} strokeWidth={1.7} />,
    label: 'Dedicación',
    value: '4 a 6 hs semanales',
  },
  {
    icon: <Video size={28} strokeWidth={1.7} />,
    label: 'Clases en vivo',
    value: '1 clase semanal de 2 hs',
  },
  {
    icon: <Star size={28} strokeWidth={1.7} />,
    label: 'Dificultad',
    value: 'Avanzado',
  },
  {
    icon: <BookOpen size={28} strokeWidth={1.7} />,
    label: 'Requisitos previos',
    value: <a href="#" className={styles.link}>Ver más</a>,
    isLink: true,
  },
];

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <div className={styles.infoItem}>
    <div className={styles.iconWrapper}>{icon}</div>
    <div className={styles.label}>{label}</div>
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
        />
      ))}
    </div>
  );
};

export default CourseInfoBar;