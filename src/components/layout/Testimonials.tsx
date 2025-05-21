// components/Testimonials.tsx
import React, { useState } from 'react';
import Image from 'next/image'; // For author images
import styles from './Testimonials.module.css';

// Placeholder icons - replace with actual SVGs or an icon library
const FlagMX = () => <span className={styles.flagIcon}>🇲🇽</span>; // Placeholder
const FlagAR = () => <span className={styles.flagIcon}>🇦🇷</span>; // Placeholder
const LeftArrow = () => <span>&#x276E;</span>; // Placeholder
const RightArrow = () => <span>&#x276F;</span>; // Placeholder

interface Testimonial {
  id: number;
  flag: React.ReactNode;
  authorImage: string; // Path to author's image
  authorName: string;
  authorRole: string;
  quote: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    flag: <FlagMX />,
    authorImage: '/images/Testimonio1.png', // Replace with actual path
    authorName: 'Lucía Pérez', // Example name for the leftmost card
    authorRole: 'en Manifiesto Learn', // Example role
    quote:
      'Con mi 7mo curso con Blatam, estoy fortaleciendo mi posición a Product Manager.',
  },
  {
    id: 2,
    flag: <FlagMX />, // Assuming this is also MX from image context
    authorImage: '/images/Testimonio2.png', // Replace with actual path
    authorName: 'Ariadna Menedin',
    authorRole: 'Carrera de Diseño UX UI',
    quote:
      '"Con el acompañamiento de Blatam pude hacer aportes estratégicos y co-crear soluciones digitales que ya se encuentran implementadas en los canales de Banco Galicia".',
  },
  {
    id: 3,
    flag: <FlagAR />,
    authorImage: '/images/Testimonio3.png', // Replace with actual path
    authorName: 'María Sol Poncelas',
    authorRole: 'Carrera de Data',
    quote:
      '"El curso representó superar una barrera autoimpuesta, a mis miedos, a ir por nuevos caminos distintos a los que transitaba todos los días. Estoy segura que mi paso por Blatam cosas cambió completamente."',
  },
  {
    id: 4, // Adding another one for carousel effect
    flag: <FlagMX />,
    authorImage: '/images/Testimonio4.png', // Replace with actual path
    authorName: 'Carlos Ruiz',
    authorRole: 'Carrera de Desarrollo Web',
    quote:
      'Aprendí muchísimo y las clases en vivo fueron clave para resolver dudas al instante. ¡Totalmente recomendado!',
  },
  {
    id: 5, // Adding another one for carousel effect
    flag: <FlagMX />,
    authorImage: '/images/Testimonio5.png', // Replace with actual path
    authorName: 'Ariadna Menedin',
    authorRole: 'Carrera de Diseño UX UI',
    quote:
      '"Con el acompañamiento de Blatam pude hacer aportes estratégicos y co-crear soluciones digitales que ya se encuentran implementadas en los canales de Banco Galicia".',
  },
  {
    id: 6, // Adding another one for carousel effect
    flag: <FlagMX />,
    authorImage: '/images/Testimonio6.png', // Replace with actual path
    authorName: 'María Sol Poncelas',
    authorRole: 'Carrera de Data',
    quote:
      '"El curso representó superarme a mi misma, a mis miedos, a ir por otros caminos distintos a los que transito todos los días. Estoy segura que mi mirada de las cosas cambió completamente".',
  },
  {
    id: 7, // Adding another one for carousel effect
    flag: <FlagMX />,
    authorImage: '/images/Testimonio7.png', // Replace with actual path
    authorName: 'Maria Paula Spinelli',
    authorRole: 'Curso de Diseño UX UI',
    quote:
      '"Este curso me permitió aprender sobre diseño de soluciones digitales centradas en el cliente, desde la investigación hasta la evaluación final, creando experiencias excepcionales. Fue una experiencia increíble con compañeros y docentes excelentes."',
  },
  {
    id: 8, // Adding another one for carousel effect
    flag: <FlagMX />,
    authorImage: '/images/Testimonio8.png', // Replace with actual path
    authorName: 'Josefina Brarda',
    authorRole: 'Carrera de Diseño UX/UI',
    quote:
      '"Hace un tiempo decidí darle una vuelta a mi carrera profesional, explorar el mundo IT, y me animé a especializarme en Diseño UX/UI de la mano de Blatam.Ahora, tras años de esfuerzo, trabajo como Diseñadora UX/UI en Accenture".',
  },
];

const TestimonialCard: React.FC<Testimonial> = ({
  flag,
  authorImage,
  authorName,
  authorRole,
  quote,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {flag}
        <div className={styles.authorImageWrapper}>
          <Image
            src={authorImage}
            alt={authorName}
            width={80}
            height={80}
            className={styles.authorImage}
          />
        </div>
      </div>
      <h3 className={styles.authorName}>{authorName}</h3>
      <p className={styles.authorRole}>{authorRole}</p>
      <p className={styles.quoteSymbol}>"</p>
      <p className={styles.quoteText}>{quote.startsWith('"') ? quote.substring(1, quote.length-1) : quote}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Or adjust based on how many you want visible / partially visible

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonialsData.length - itemsPerPage > 0 ? testimonialsData.length - itemsPerPage : 0
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonialsData.length - itemsPerPage ? prevIndex + 1 : 0
    );
  };

  // Calculate the number of "pages" or sets of items
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < testimonialsData.length - itemsPerPage && testimonialsData.length > itemsPerPage;


  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.mainHeading}>
        +35.000 graduados. Únete a la comunidad online y en vivo más grande
        de Latinoamérica.
      </h2>

      <div className={styles.carouselContainer}>
        <button
          onClick={handlePrev}
          className={`${styles.navButton} ${styles.prevButton}`}
          disabled={!canPrev}
          aria-label="Anterior testimonio"
        >
          <LeftArrow />
        </button>
        <div className={styles.carouselTrackWrapper}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className={styles.carouselItem}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className={`${styles.navButton} ${styles.nextButton}`}
          disabled={!canNext}
          aria-label="Siguiente testimonio"
        >
          <RightArrow />
        </button>
      </div>

      <div className={styles.viewMoreContainer}>
        <button className={styles.viewMoreButton}>Ver más opiniones</button>
      </div>
    </section>
  );
};

export default Testimonials;