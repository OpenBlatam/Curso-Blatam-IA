import {Box, Button, Center, Flex, Stack, IconButton, Link as ChakraLink, Text, keyframes, Heading, Input, Grid, GridItem} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState, useRef, Suspense } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons'
import React from 'react';
import dynamic from 'next/dynamic';
import { Sparkles, Flame } from 'lucide-react';

import {
  ApplicantsSidebar,
  ApplicationTypeCard,
  ApplicationTypeCard2,
  FAQItem,
  PageMetadata,
  PageSection,
  PageSubheading,
  PageText,
  MagicButton,
  GuaranteeBox
} from '../../components/UI';

// SVG paths - using Next.js Image component for better Turbopack compatibility
const SVG_PATHS = {
  softwareDevelopers: '/images/software-developers-vector.svg',
  researchers: '/images/researchers-vector.svg',
  academics: '/images/academics-vector.svg',
  communityOrganizers: '/images/community-organizers-vector.svg',
  designers: '/images/designers-vector.svg',
  otherGrantsPrograms: '/images/other-grant-programs-vector.svg',
  logos: {
    accenture: '/logos/Accenture.svg',
    mercadolibre: '/logos/mercadolibre.svg',
    globant: '/logos/Globant_Logo.svg',
    galicia: '/logos/Logo_Banco_Galicia.svg',
    naranjax: '/logos/naranja-x-1.svg',
  }
};
import { NewsletterSignup } from '../../components/forms/NewsletterSignup';
import {
  OFFICE_HOURS_URL,
  PROJECT_GRANTS_URL,
  SIDEBAR_APPLICANTS_LINKS,
  SMALL_GRANTS_URL
} from '../../constants';

// Dynamic imports for heavy components
// Future optimization: Add dynamic imports for heavy components when needed

const WHATSAPP_NUMBER = '15557545181';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const rainbowAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const sparkleAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

interface SparkleProps {
  size: string;
  color: string;
  style: React.CSSProperties;
}

const Sparkle: React.FC<SparkleProps> = ({ size, color, style }) => (
  <Box
    position="absolute"
    animation={`${sparkleAnimation} 1.5s ease-in-out infinite`}
    style={style}
  >
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M80 0L88.2843 55.7157L144 64L88.2843 72.2843L80 128L71.7157 72.2843L16 64L71.7157 55.7157L80 0Z"
        fill={color}
      />
    </svg>
  </Box>
);

// Google Analytics gtag type declaration
declare global {
  interface Window {
    gtag: (command: string, action: string, params: any) => void;
  }
}

interface AnimatedCounterProps {
  target: number;
  duration?: number;
}

const AnimatedCounter = ({ target, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentCount = Math.floor(progress * target);
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, target, duration]);

  return (
    <Text ref={ref} fontSize="xl" fontWeight="bold">
      +{count} graduados
    </Text>
  );
};

const Applicants: NextPage = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.1 });
  const [notify, setNotify] = useState(false);

  const items = [
    '14 módulos de MKT e IA',
    'Clases en vivo y grabadas',
    'Proyectos reales',
    'Certificado verificado',
    'Acceso a la comunidad',
    'Mentorías personalizadas'
  ];

  // Google Analytics conversion tracking
  const handlePurchaseClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17051100560/JFaJCJb0xcEaEJDLzMI_'
      });
    }
  };

  useEffect(() => {
    let blinkCount = 0;
    let blinkInterval: NodeJS.Timeout;
    let mainInterval: NodeJS.Timeout;

    const startNotification = () => {
      setNotify(true);
      blinkInterval = setInterval(() => {
        setNotify((prev) => !prev);
        blinkCount++;
        if (blinkCount >= 6) {
          clearInterval(blinkInterval);
          setNotify(false);
        }
      }, 300);
    };

    mainInterval = setInterval(startNotification, 15000);
    startNotification();

    return () => {
      clearInterval(mainInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <>
      <PageMetadata
        title='Applicants Overview'
        description="Information about the Ecosystem Support Program's mission, scope and types of support we offer for potential grant applicants."
      />

      <Box bg='white' position='relative' py={{ base: 4, md: 12 }}>
        <Sparkle
          size="20px"
          color="purple.300"
          style={{
            top: '10%',
            left: '5%',
            opacity: 0.6
          }}
        />
        <Sparkle
          size="15px"
          color="purple.400"
          style={{
            top: '20%',
            right: '10%',
            opacity: 0.4
          }}
        />
        <Sparkle
          size="25px"
          color="purple.200"
          style={{
            bottom: '15%',
            left: '15%',
            opacity: 0.5
          }}
        />
        <Sparkle
          size="18px"
          color="purple.300"
          style={{
            bottom: '25%',
            right: '5%',
            opacity: 0.7
          }}
        />
        
        <Flex direction={{ base: 'column', lg: 'row' }}>
          <ApplicantsSidebar
            sidebarLinks={SIDEBAR_APPLICANTS_LINKS}
            sectionsInView={[inView, inView2, inView3]}
          />

          <Box w={{ base: '100%', lg: '70%' }} px={{ base: 4, md: 20 }} pr={{ lg: 12 }}>
            <Stack mb={8} spacing={{ base: 6, md: 8 }}>
              {/* Newsletter Section */}
              <Box 
                bg="purple.50" 
                p={{ base: 4, md: 8 }} 
                borderRadius="xl" 
                mb={{ base: 4, md: 8 }}
                position="relative"
                overflow="hidden"
                boxShadow="md"
              >
                <Box 
                  position="absolute" 
                  top="-30%" 
                  right="-15%" 
                  opacity="0.05"
                  zIndex={0}
                >
                  <Image
                    src="/images/background-circles.png"
                    alt="Background circles"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </Box>
                <Box 
                  position="absolute" 
                  bottom="-20%" 
                  left="-10%" 
                  opacity="0.05"
                  zIndex={0}
                >
                  <Image
                    src="/images/background-circles.png"
                    alt="Background circles"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </Box>
                
                <Stack spacing={{ base: 3, md: 4 }} position="relative" zIndex={1}>
                  <NewsletterSignup />
                </Stack>
              </Box>

              <PageSubheading mb={{ base: 4, md: 6 }} fontSize={{ base: 'xl', md: '2xl' }}>
                ¿Qué lograrás con esta certificación?
              </PageSubheading>
              
              <Flex 
                gap={{ base: 3, md: 4 }} 
                mb={{ base: 4, md: 6 }}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Box
                  w="full"
                  sx={{
                    '@media (min-width: 30em)': {
                      w: 'auto'
                    }
                  }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  cursor="default"
                  userSelect="none"
                  position="relative"
                  overflow="hidden"
                  bg="rgba(255, 255, 255, 0.2)"
                  backdropFilter="blur(8px)"
                  transform="translateY(-2px)"
                  shadow="lg"
                  fontWeight="bold"
                  borderWidth="2px"
                  borderColor="purple.400"
                  px={6}
                  py={3}
                  fontSize="lg"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
                    backgroundSize: '400% 400%',
                    animation: `${rainbowAnimation} 3s ease infinite`,
                    opacity: 0.3,
                    zIndex: 0
                  }}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                    backdropFilter: 'blur(8px)',
                    opacity: 0.8,
                    zIndex: 1
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    position="relative"
                    zIndex={2}
                    fontWeight="bold"
                    textShadow="0 0 10px rgba(255,255,255,0.5)"
                    whiteSpace="nowrap"
                  >
                    <Box
                      animation={`${sparkleAnimation} 2s ease-in-out infinite`}
                      zIndex={2}
                    >
                      <Sparkles size="1.1em" />
                    </Box>
                    Aprende con IA
                  </Box>
                </Box>
                <Button
                  leftIcon={<Sparkles />}
                  variant="outline"
                  borderWidth="2px"
                  borderColor="purple.300"
                  _hover={{ shadow: 'sm' }}
                  w="full"
                  size="lg"
                  sx={{
                    '@media (min-width: 30em)': {
                      w: 'auto'
                    }
                  }}
                >
                  En línea y en vivo
                </Button>
              </Flex>

              <section id='mission-and-scope' ref={ref}>
                <PageSection mb={{ base: 4, md: 6 }}>Misión y Objetivo</PageSection>

                <PageText 
                  mb={{ base: 4, md: 6 }} 
                  fontSize={{ base: 'md', md: 'lg' }} 
                  lineHeight="tall"
                >
                  La experiencia de aprender combinando encuentros prácticos y en vivo con material teórico y práctico offline, pensado para que puedas
                  adaptar el proceso de aprendizaje a tu vida.
                </PageText>

                <Box 
                  bg="gray.50" 
                  p={{ base: 3, md: 6 }} 
                  borderRadius="md" 
                  mb={{ base: 4, md: 6 }}
                  boxShadow="sm"
                >
                  <Text 
                    fontSize={{ base: 'md', md: 'xl' }} 
                    fontWeight="semibold" 
                    mb={{ base: 3, md: 4 }}
                    color="purple.600"
                  >
                    ✅ ¿Qué incluye?
                  </Text>
                  <Stack spacing={{ base: 2, md: 3 }}>
                    {items.map((item, index) => (
                      <Flex 
                        key={index} 
                        alignItems="start"
                        bg="white"
                        p={{ base: 2, md: 3 }}
                        borderRadius="md"
                        boxShadow="xs"
                      >
                        <Text color="green.600" fontWeight="bold" mr={2}>✓</Text>
                        <Text fontSize={{ base: 'sm', md: 'md' }}>{item}</Text>
                      </Flex>
                    ))}
                  </Stack>
                </Box>

                <Stack 
                  spacing={{ base: 6, md: 8 }}
                  direction={{ base: 'column', md: 'row' }}
                  mb={12}
                >
                  <Stack spacing={4} flex={1}>
                    <Flex 
                      bg="white" 
                      p={4} 
                      borderRadius="lg" 
                      boxShadow="md"
                      alignItems="center"
                      transition="all 0.3s ease"
                      _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                    >
                      <Box mr={4} flexShrink={0}>
                        <Image
                          src={SVG_PATHS.softwareDevelopers}
                          alt='Software and protocol developers vector'
                          height={37}
                          width={40}
                          loading="lazy"
                        />
                      </Box>
                      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={600}>
                        Comenzar tu carrera en Inteligencia Artificial
                      </Text>
                    </Flex>

                    <Flex 
                      bg="white" 
                      p={4} 
                      borderRadius="lg" 
                      boxShadow="md"
                      alignItems="center"
                      transition="all 0.3s ease"
                      _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                    >
                      <Box mr={4} flexShrink={0}>
                        <Image
                          src={SVG_PATHS.researchers}
                          alt='Researchers vector'
                          height={40}
                          width={40}
                          loading="lazy"
                        />
                      </Box>
                      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={600}>
                        Research
                      </Text>
                    </Flex>

                    <Flex 
                      bg="white" 
                      p={4} 
                      borderRadius="lg" 
                      boxShadow="md"
                      alignItems="center"
                      transition="all 0.3s ease"
                      _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                    >
                      <Box mr={4} flexShrink={0}>
                        <Image 
                          src={SVG_PATHS.academics} 
                          alt='Academics vector' 
                          height={36} 
                          width={40} 
                          loading="lazy"
                        />
                      </Box>
                      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={600}>
                        Academia
                      </Text>
                    </Flex>
                  </Stack>

                  <Stack spacing={4} flex={1}>
                    <Flex 
                      bg="white" 
                      p={4} 
                      borderRadius="lg" 
                      boxShadow="md"
                      alignItems="center"
                      transition="all 0.3s ease"
                      _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                    >
                      <Box mr={4} flexShrink={0}>
                        <Image
                          src={SVG_PATHS.communityOrganizers}
                          alt='Community organizers vector'
                          height={36}
                          width={40}
                          loading="lazy"
                        />
                      </Box>
                      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={600}>
                        Convertirte en creador de contenido de calidad
                      </Text>
                    </Flex>

                    <Flex 
                      bg="white" 
                      p={4} 
                      borderRadius="lg" 
                      boxShadow="md"
                      alignItems="center"
                      transition="all 0.3s ease"
                      _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                    >
                      <Box mr={4} flexShrink={0}>
                        <Image 
                          src={SVG_PATHS.designers} 
                          alt='Designers vector' 
                          height={38} 
                          width={40} 
                          loading="lazy"
                        />
                      </Box>
                      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={600}>
                        Diseño
                      </Text>
                    </Flex>

                    <Flex 
                      bg="white" 
                      p={4} 
                      borderRadius="lg" 
                      boxShadow="md"
                      alignItems="center"
                      transition="all 0.3s ease"
                      _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                    >
                      <Box mr={4} flexShrink={0}>
                        <Image
                          src={SVG_PATHS.otherGrantsPrograms}
                          alt='Other grant programs vector'
                          height={36}
                          width={40}
                          loading="lazy"
                        />
                      </Box>
                      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={600}>
                        Incrementar tus ingresos asesorando proyectos
                      </Text>
                    </Flex>
                  </Stack>
                </Stack>

                <PageText mb={6}>

                </PageText>
              </section>
            </Stack>

            <Stack spacing={10}>
              <section id='how-we-support' ref={ref2}>
                <PageSection mb={6}>Próximas fechas</PageSection>

                <PageText mb={6}>


                 <strong>Cupo limitado</strong>
                </PageText>

                <PageText mb={6}>
                  No te quedes fuera de la próxima certificación.
                </PageText>
              </section>

              <section id='application-types' ref={ref3}>
                <PageSection mb={6}>Módulos que incluye la certificación
                 </PageSection>

                <PageText mb={6}>
                  <strong> Clases virtuales en vivo y contenido actualizado </strong>
                </PageText>

                <PageText mb={6}>

                </PageText>

                <Center>
                  <Stack spacing={4}>
                    <ApplicationTypeCard2 title='Conceptos básicos' link={OFFICE_HOURS_URL}>
                    Conceptos básicos de MKT
                    ✔ Conceptos básicos de IA
                    ✔ Casos de éxito IA y MKT
                    <Button> Módulo  1</Button>
                    </ApplicationTypeCard2>
                    <ApplicationTypeCard title='Recopilación y análisis de datos' link={OFFICE_HOURS_URL}>
                    ✔ Segmentación de audiencia y personalización de mensajes
                    ✔ Recopilar y gestionar datos
                    ✔ Técnicas de análisis de datos
                    ✔ Herramientas IA: GPT-3 Demo,Platforms, Crayon
                    <Button> Módulo  2</Button>
                    </ApplicationTypeCard>
                    <ApplicationTypeCard2 title='Herramientas de automatización' link={OFFICE_HOURS_URL}>
                    Herramientas de automatización
                    ✔ Automatización de tareas y procesos de MKT con IA
                    ✔ Herramientas IA:Artbreeder, Copy.ai,
                    ShortlyAI y Platagon
                    ✔ Sistemas de recomendación basados en IA
                    ✔ IA aplicado al analisis predicativo
                    <Button> Módulo  3</Button>
                    </ApplicationTypeCard2>
                    <ApplicationTypeCard2 title='Caso de exito y ética' link={OFFICE_HOURS_URL}>
                   ✔ Desafíos éticos y privacidad
                   ✔ Desarrollo de habilidades críticas
                   ✔ Herramientas IA: Wordsmith, GPT-3 Demo, Platforms y Wordsmith
                   ✔ Análisis de casos reales
                    <Button> Módulo  4</Button>
                    </ApplicationTypeCard2>

                    <ApplicationTypeCard2 title='Avanzado' link={SMALL_GRANTS_URL}>
                    El MKT en la era web 3 y AI y gamnificación en las industrias.
                    <Button> Módulo  13</Button>
                    </ApplicationTypeCard2>

                    <ApplicationTypeCard2 title='Research' link={PROJECT_GRANTS_URL}>
                    Frameworks en AI MKT (Google scholar Research)
                    <Button> Módulo 14</Button>
                    </ApplicationTypeCard2>
                  </Stack>
                </Center>
              </section>
            </Stack>
          </Box>
        </Flex>
      </Box>

      {/* Floating buttons for mobile only */}
      <Box
        display={{ base: 'flex', md: 'none' }}
        flexDirection="column"
        alignItems="center"
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
        zIndex={100}
        pb={2}
        bg="rgba(255,255,255,0.97)"
        boxShadow="0 -2px 16px rgba(0,0,0,0.08)"
      >


        <a
          href="https://blatam.gumroad.com/l/ia"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: '92%', display: 'flex', justifyContent: 'center', textDecoration: 'none' }}
          onClick={handlePurchaseClick}
        >
          <Button
            colorScheme="orange"
            size="md"
            width="100%"
            borderRadius="full"
            fontWeight="bold"
            fontSize="md"
            leftIcon={<Flame className="w-4 h-4" />}
            rightIcon={<span style={{ fontSize: '1.1em' }}>&rarr;</span>}
            px={4}
            py={2}
            boxShadow="0 2px 8px rgba(255, 140, 0, 0.10)"
            _hover={{ bgGradient: "linear(to-r, orange.400, orange.500)" }}
            transition="all 0.2s"
          >
            Comprar curso
          </Button>
        </a>
        <Text
          mt={1}
          color="orange.500"
          fontWeight="bold"
          fontSize="0.85em"
          textAlign="center"
        >
          ¡PRUEBA 2 CLASES GRATIS!
        </Text>
        <Box mt={3} mx={3} maxW="95%">
          <GuaranteeBox size="xs" />
        </Box>
      </Box>

      {/* WhatsApp button - responsive positioning */}
      <Box
        position="fixed"
        bottom={{ base: "140px", md: "30px" }}
        right={{ base: "20px", md: "30px" }}
        zIndex={999}
      >
        <IconButton
          as="a"
          href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent("¡Hola! Quiero más información sobre los cursos de IA y certificaciones de Blatam.")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          icon={<FaWhatsapp size="2.5em" />}
          bg="#006400"
          color="white"
          size="xl"
          isRound
          width="70px"
          height="70px"
          boxShadow="2xl"
          _hover={{
            transform: 'scale(1.05)',
            transition: 'transform 0.2s',
            bg: '#004d00'
          }}
        />
      </Box>
    </>
  );
};

export default Applicants;
