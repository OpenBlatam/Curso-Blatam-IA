// components/TestimonialsSection/TestimonialsSection.tsx
import React from 'react';
import TestimonialCard, { TestimonialCardProps } from '../TestimonialCard/TestimonialCard'; // Assuming TestimonialCard component exists
import styles from './TestimonialsSection.module.css';

const testimonialsData: TestimonialCardProps[] = [
  {
    avatarSrc: '/images/Testimonio1.png', // Corrected path for public directory
    name: 'Jesús Miguel Fuentes Wissmann',
    role: 'Curso de SEO',
    countryCode: 'CL',
    quote: '“Todos los conocimientos adquiridos en este gran curso de Blatam ahora serán aplicados en todos los nuevos proyectos que se presenten.”',
    linkedinUrl: '#', // Placeholder LinkedIn URL
  },
  {
    avatarSrc: '/images/testimonials/placeholder-avatar-2.jpg', // Path for public directory
    name: 'Rocío Valenzuela Alarcón',
    role: 'Curso de Community Manager y Publicidad',
    countryCode: 'CL',
    quote: '“Este sin duda fue un gran logro, ya que tuve que dividir mi tiempo entre la universidad y Blatam, pero valió la pena. Busco con ansias seguir profesionalizando mis conocimientos”',
    linkedinUrl: '#', // Placeholder LinkedIn URL
  },
  {
    avatarSrc: '/images/testimonials/placeholder-avatar-3.jpg', // Path for public directory
    name: 'Angelica Benitez',
    role: 'UX Writer - DIAN',
    countryCode: 'CO',
    quote: '“Gracias Blatam por brindarme esta oportunidad de crecimiento y desarrollo profesional. Ha sido un viaje de aprendizaje increíble, lleno de desafíos y recompensas que me han fortalecido como profesional.”',
    linkedinUrl: '#', // Placeholder LinkedIn URL
  },
  {
    avatarSrc: '/images/testimonials/placeholder-avatar-4.jpg', // Path for public directory
    name: 'Maria Sol Poncelas',
    role: 'Carrera de Data',
    countryCode: 'AR', // Added example countryCode
    quote: '“El curso representó superarme a mi misma. Estoy muy feliz de haber podido finalizarlo y de haber aprendido tanto. Gracias Blatam!”',
    linkedinUrl: '#', // Added example linkedinUrl
  },
  {
    avatarSrc: '/images/testimonials/placeholder-avatar-5.jpg', // Path for public directory
    name: 'Josefina Brando',
    role: 'Carrera de Diseño UX/UI',
    countryCode: 'UY',
    quote: '“Hace un tiempo decidí que quería darle un giro a mi carrera profesional. Siempre me interesó el área IT, y me animé a especializarme en Diseño UX/UI de la mano de Blatam. Hoy, tras años de estudio y dedicación soy Diseñadora UX/UI.”',
    linkedinUrl: '#', // Placeholder LinkedIn URL
  },
  // Example of "same testimonial" if you meant duplicating one (e.g., the first one with a slight change)
  // {
  //   avatarSrc: '/images/testimonials/Testimonio1.png', // Using the same image path
  //   name: 'Jesús Miguel (Copia Ejemplo)', // Modified name for uniqueness if needed
  //   role: 'Curso de SEO Avanzado', // Modified role
  //   countryCode: 'CL',
  //   quote: '“Reafirmo mi excelente experiencia con Blatam, los conocimientos son de aplicación inmediata y muy valiosos.”', // Modified quote
  //   linkedinUrl: '#',
  // },
  // Add more testimonials as needed
];


const TestimonialsSection = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.headerContainer}>
        <div className={styles.titleGroup}>
          <p className={styles.category}>TESTIMONIOS</p>
          <h2 className={styles.mainTitle}>
            Únete a la comunidad online y en vivo más grande de Latinoamérica.
          </h2>
        </div>
        <div className={styles.statsGroup}>
          <p className={styles.statsCategory}>COMUNIDAD</p>
          <p className={styles.statsNumber}>+35.000</p>
          <p className={styles.statsLabel}>graduados</p>
        </div>
      </div>

      <div className={styles.testimonialsGrid}>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      <div className={styles.ctaContainer}>
        <button className={styles.viewMoreButton}>Ver más opiniones</button>
      </div>
    </section>
  );
};

export default TestimonialsSection;