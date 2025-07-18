// components/Testimonials.tsx
import React, { useState } from 'react';
import Image from 'next/image'; // For author images
import ReactCountryFlag from 'react-country-flag';
import styles from './Testimonials.module.css';

// Flag components using react-country-flag library for different Latin American countries
const FlagMX = () => <ReactCountryFlag countryCode="MX" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagAR = () => <ReactCountryFlag countryCode="AR" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagCO = () => <ReactCountryFlag countryCode="CO" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagBO = () => <ReactCountryFlag countryCode="BO" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagUS = () => <ReactCountryFlag countryCode="US" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagCL = () => <ReactCountryFlag countryCode="CL" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagPE = () => <ReactCountryFlag countryCode="PE" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagEC = () => <ReactCountryFlag countryCode="EC" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagUY = () => <ReactCountryFlag countryCode="UY" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagPY = () => <ReactCountryFlag countryCode="PY" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagVE = () => <ReactCountryFlag countryCode="VE" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagGT = () => <ReactCountryFlag countryCode="GT" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagHN = () => <ReactCountryFlag countryCode="HN" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagSV = () => <ReactCountryFlag countryCode="SV" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagNI = () => <ReactCountryFlag countryCode="NI" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagCR = () => <ReactCountryFlag countryCode="CR" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagPA = () => <ReactCountryFlag countryCode="PA" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagDO = () => <ReactCountryFlag countryCode="DO" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagCU = () => <ReactCountryFlag countryCode="CU" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagJM = () => <ReactCountryFlag countryCode="JM" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagTT = () => <ReactCountryFlag countryCode="TT" svg style={{ width: '1.2rem', height: '1.2rem' }} />;
const FlagBR = () => <ReactCountryFlag countryCode="BR" svg style={{ width: '1.2rem', height: '1.2rem' }} />;

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

interface TestimonialsProps {
  windowSize: {
    width: number;
    height: number;
  };
}

const testimonialsData: Testimonial[] = [
  // MUJERES - Testimonio1.png (Andrea Palacio Cerón)
  {
    id: 1,
    flag: <FlagUS />,
    authorImage: '/images/Testimonio1.png',
    authorName: 'Andrea Palacio Cerón',
    authorRole: 'Curso de desarrollo web',
    quote:
      'Mis conocimientos eran muy básicos en programación, gracias al curso y mi constancia, logré desarrollar un proyecto completamente en código que en otra época jamás pensé poder crear.',
  },
  // HOMBRES - Testimonio2.png (Eduardo Migu)
  {
    id: 2,
    flag: <FlagMX />,
    authorImage: '/images/Testimonio2.png',
    authorName: 'Eduardo Migu',
    authorRole: 'Curso de Diseño',
    quote:
      'Quiero agradecer a los profesores por brindarme conocimientos que me permitieron realizar proyectos prácticos.',
  },
  // HOMBRES - Testimonio4.png (Jesús Miguel)
  {
    id: 3,
    flag: <FlagBO />,
    authorImage: '/images/Testimonio4.png',
    authorName: 'Jesús Miguel Fuentes Wissmann',
    authorRole: 'Curso de SEO',
    quote:
      'Todos los conocimientos adquiridos en este gran curso de Blatam ahora serán aplicados en todos los nuevos proyectos que se presenten.',
  },
  // MUJERES - Testimonio3.png (Rocío)
  {
    id: 4,
    flag: <FlagCO />,
    authorImage: '/images/Testimonio3.png',
    authorName: 'Rocío Valenzuela Alarcón',
    authorRole: 'Curso de Community Manager y Publicidad',
    quote:
      'Este sin duda fue un gran logro, ya que tuve que dividir mi tiempo entre la universidad y Blatam, pero valió la pena. Busco con ansias seguir profesionalizando mis conocimientos.',
  },
  // MUJERES - Testimonio5.png (Angelica)
  {
    id: 5,
    flag: <FlagEC />,
    authorImage: '/images/Testimonio5.png',
    authorName: 'Angelica Benitez',
    authorRole: 'UX Writer - DIAN',
    quote:
      'Gracias Blatam por brindarme esta oportunidad de crecimiento y desarrollo profesional. Ha sido un viaje de aprendizaje increíble, lleno de desafíos y recompensas que me han fortalecido como profesional.',
  },
  // MUJERES - Testimonio6.png (Maria Sol)
  {
    id: 6,
    flag: <FlagAR />,
    authorImage: '/images/Testimonio6.png',
    authorName: 'Maria Sol Poncelas',
    authorRole: 'Carrera de Data',
    quote:
      'El curso representó superarme a mi misma. Estoy muy feliz de haber podido finalizarlo y de haber aprendido tanto. Gracias Blatam!',
  },
  // MUJERES - Testimonio7.png (Josefina)
  {
    id: 7,
    flag: <FlagUY />,
    authorImage: '/images/Testimonio7.png',
    authorName: 'Josefina Brando',
    authorRole: 'Carrera de Diseño UX/UI',
    quote:
      'Hace un tiempo decidí que quería darle un giro a mi carrera profesional. Siempre me interesó el área IT, y me animé a especializarme en Diseño UX/UI de la mano de Blatam. Hoy, tras años de estudio y dedicación soy Diseñadora UX/UI.',
  },
  // HOMBRES - Testimonio9.png (Carlos)
  {
    id: 8,
    flag: <FlagPY />,
    authorImage: '/images/Testimonio9.png',
    authorName: 'Carlos Ruiz',
    authorRole: 'Carrera de Desarrollo Web',
    quote:
      'Aprendí muchísimo y las clases en vivo fueron clave para resolver dudas al instante. ¡Totalmente recomendado!',
  },
  // MUJERES - Testimonio8.png (Lucía)
  {
    id: 9,
    flag: <FlagBR />,
    authorImage: '/images/Testimonio8.png',
    authorName: 'Lucía Pérez',
    authorRole: 'Product Manager',
    quote:
      'Con mi 7mo curso con Blatam, estoy fortaleciendo mi posición como Product Manager. Los conocimientos son de aplicación inmediata.',
  },
  // MUJERES - Testimonio10.png (Ariadna)
  {
    id: 10,
    flag: <FlagGT />,
    authorImage: '/images/Testimonio10.png',
    authorName: 'Ariadna Menedin',
    authorRole: 'Carrera de Diseño UX UI',
    quote:
      'Con el acompañamiento de Blatam pude hacer aportes estratégicos y co-crear soluciones digitales que ya se encuentran implementadas en los canales de Banco Galicia.',
  },


  // MUJERES - Testimonio1.png (Sofía)
  {
    id: 13,
    flag: <FlagNI />,
    authorImage: '/images/Testimonio1.png',
    authorName: 'Sofía Martínez',
    authorRole: 'Carrera de Data Science',
    quote:
      'La metodología práctica de Blatam me permitió aplicar inmediatamente lo aprendido en mi trabajo. Los mentores son excelentes y la comunidad es muy colaborativa.',
  },
  // HOMBRES - Testimonio3.png (Diego)
  {
    id: 14,
    flag: <FlagCR />,
    authorImage: '/images/Testimonio3.png',
    authorName: 'Diego Ramírez',
    authorRole: 'Curso de Desarrollo Full Stack',
    quote:
      'Gracias a Blatam pude cambiar de carrera y ahora trabajo como desarrollador. El curso fue intensivo pero muy completo, con proyectos reales que me dieron confianza.',
  },
  // MUJERES - Testimonio4.png (Valentina)
  {
    id: 15,
    flag: <FlagPA />,
    authorImage: '/images/Testimonio4.png',
    authorName: 'Valentina Torres',
    authorRole: 'UX/UI Designer',
    quote:
      'Blatam me abrió las puertas al mundo del diseño digital. La combinación de teoría y práctica fue perfecta para mi aprendizaje. Ahora trabajo en una startup innovadora.',
  },
  // HOMBRES - Testimonio8.png (Roberto)
  {
    id: 16,
    flag: <FlagDO />,
    authorImage: '/images/Testimonio8.png',
    authorName: 'Roberto Silva',
    authorRole: 'Curso de Python Avanzado',
    quote:
      'El curso de Python me permitió automatizar procesos en mi empresa y ahorrar horas de trabajo manual. Blatam me dio las herramientas para ser más eficiente.',
  },
  // MUJERES - Testimonio5.png (Camila)
  {
    id: 17,
    flag: <FlagCU />,
    authorImage: '/images/Testimonio5.png',
    authorName: 'Camila Fernández',
    authorRole: 'Carrera de Marketing Digital',
    quote:
      'Gracias a Blatam pude especializarme en marketing digital y ahora manejo las campañas de una empresa internacional. El networking fue invaluable.',
  },
  // HOMBRES - Testimonio2.png (Alejandro)
  {
    id: 18,
    flag: <FlagJM />,
    authorImage: '/images/Testimonio2.png',
    authorName: 'Alejandro Morales',
    authorRole: 'Curso de React y Node.js',
    quote:
      'Aprendí a desarrollar aplicaciones web completas desde cero. Los proyectos prácticos me dieron la confianza para crear mi propio emprendimiento.',
  },
  // MUJERES - Testimonio6.png (Isabella)
  {
    id: 19,
    flag: <FlagTT />,
    authorImage: '/images/Testimonio6.png',
    authorName: 'Isabella Castro',
    authorRole: 'UX Research Specialist',
    quote:
      'Blatam me enseñó a pensar como investigadora UX. Ahora trabajo en una consultora internacional y he participado en proyectos para grandes marcas.',
  },
  // HOMBRES - Testimonio3.png (Gabriel)
  {
    id: 20,
    flag: <FlagBR />,
    authorImage: '/images/Testimonio3.png',
    authorName: 'Gabriel Ortiz',
    authorRole: 'Data Analyst',
    quote:
      'La carrera de Data me cambió la vida. Ahora puedo analizar datos complejos y tomar decisiones basadas en evidencia. Blatam me dio una nueva perspectiva.',
  },
  // MUJERES - Testimonio7.png (Daniela)
  {
    id: 21,
    flag: <FlagMX />,
    authorImage: '/images/Testimonio7.png',
    authorName: 'Daniela Rojas',
    authorRole: 'Frontend Developer',
    quote:
      'De no saber programar a ser desarrolladora frontend en 6 meses. Blatam me dio la estructura y el apoyo necesario para lograr este cambio.',
  },
  // HOMBRES - Testimonio8.png (Miguel Ángel)
  {
    id: 22,
    flag: <FlagCO />,
    authorImage: '/images/Testimonio8.png',
    authorName: 'Miguel Ángel Vega',
    authorRole: 'Product Owner',
    quote:
      'El curso de Product Management me ayudó a entender mejor el ciclo de vida de los productos. Ahora lidero equipos de desarrollo con confianza.',
  },
  // MUJERES - Testimonio9.png (Ana Sofía)
  {
    id: 23,
    flag: <FlagAR />,
    authorImage: '/images/Testimonio9.png',
    authorName: 'Ana Sofía Mendoza',
    authorRole: 'UI Designer',
    quote:
      'Blatam me enseñó que el diseño no es solo estética, sino funcionalidad. Ahora creo interfaces que realmente mejoran la experiencia del usuario.',
  },
  // HOMBRES - Testimonio2.png (Carlos Eduardo)
  {
    id: 24,
    flag: <FlagBO />,
    authorImage: '/images/Testimonio2.png',
    authorName: 'Carlos Eduardo Luna',
    authorRole: 'Full Stack Developer',
    quote:
      'Completé la carrera de desarrollo y ahora trabajo en una fintech. Los proyectos reales me prepararon para los desafíos del mundo laboral.',
  },
  // MUJERES - Testimonio10.png (Mariana)
  {
    id: 25,
    flag: <FlagCL />,
    authorImage: '/images/Testimonio10.png',
    authorName: 'Mariana González',
    authorRole: 'Digital Marketing Manager',
    quote:
      'El curso de marketing digital me permitió escalar mi negocio online. Ahora manejo campañas que generan resultados medibles y rentables.',
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

const Testimonials: React.FC<TestimonialsProps> = ({ windowSize }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2.5; // Show 2 full cards + partial third card

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


    </section>
  );
};

export default Testimonials;