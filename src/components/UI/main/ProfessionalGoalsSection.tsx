// components/ProfessionalGoalsSection/ProfessionalGoalsSection.tsx
import Image from 'next/image';
import styles from './ProfessionalGoalsSection.module.css';

// Placeholder images - replace with your actual image paths or components
const personImage = "/placeholder-person.jpg"; // Example path
const coderAiImage = "/placeholder-coder-ai.png"; // Example path

const ProfessionalGoalsSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Alcanza tus metas profesionales con nuestra metodología
        </h1>
        <p className={styles.subtitle}>
          Combinamos lo mejor del contenido pregrabado con la interacción en
          tiempo real de las clases en vivo para que aprendas junto a expertos
          con una metodología flexible y 100% práctica.
        </p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.column}>
          <div className={styles.imageContainer}>
            {/* Using a simple div for the placeholder. 
              Replace with Next/Image if you have the images.
              Example with Next/Image (ensure you have width and height):
              <Image src={personImage} alt="Modalidades" layout="fill" objectFit="cover" className={styles.image} />
            */}
            <div className={styles.imagePlaceholder}>
              {/* If using actual images, you might prefer the Next/Image component */}
              <img src={personImage} alt="Persona sonriendo" className={styles.image} />
            </div>
            <span className={`${styles.imageLabel} ${styles.modalidadesLabel}`}>
              MODALIDADES
            </span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.imageContainer}>
            {/* Using a simple div for the placeholder. 
              Replace with Next/Image if you have the images.
            */}
            <div className={styles.imagePlaceholder}>
              {/* Placeholder for the Coder AI chat interface */}
              <div className={styles.coderAiChat}>
                <div className={styles.chatHeader}>
                  <span>🤖 Tutor-AI ✨</span>
                  <div>
                    <span>_</span> {/* Minimize */}
                    <span>▢</span> {/* Maximize/Restore */}
                    <span>X</span> {/* Close */}
                  </div>
                </div>
                <div className={styles.chatBody}>
                  <p className={styles.chatWelcome}>
                    <strong>Hola! Soy Tutor-AI ✨</strong>
                  </p>
                  <p className={styles.chatDescription}>
                    Seré tu tutor personal en esta cursada. Estoy preparado
                    para contestar preguntas relacionadas a cualquiera de los
                    cursos de...
                  </p>
                </div>
                <div className={styles.chatInputArea}>
                  <input type="text" placeholder="Escribe tu pregunta aquí..." className={styles.chatInput} />
                  {/* You can add a send button icon here */}
                </div>
              </div>
            </div>
            <span className={`${styles.imageLabel} ${styles.coderAiLabel}`}>
              CODER AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalGoalsSection;