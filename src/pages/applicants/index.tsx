import {Box, Button, Center, Flex, Stack, IconButton, Link as ChakraLink, Text, keyframes, Heading, Input} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons'

import {
  ApplicantsSidebar,
  ApplicationTypeCard,
  ApplicationTypeCard2,
  FAQItem,
  PageMetadata,
  PageSection,
  PageSubheading,
  PageText,
  MagicButton
} from '../../components/UI';

import softwareDevelopersSVG from '../../../public/images/software-developers-vector.svg';
import researchersSVG from '../../../public/images/researchers-vector.svg';
import academicsSVG from '../../../public/images/academics-vector.svg';
import communityOrganizersSVG from '../../../public/images/community-organizers-vector.svg';
import designersSVG from '../../../public/images/designers-vector.svg';
import otherGrantsProgramsSVG from '../../../public/images/other-grant-programs-vector.svg';
import { Sparkles } from 'lucide-react';
import { NewsletterSignup } from '../../components/forms/NewsletterSignup';
import {
  OFFICE_HOURS_URL,
  PROJECT_GRANTS_URL,
  SIDEBAR_APPLICANTS_LINKS,
  SMALL_GRANTS_URL
} from '../../constants';

const WHATSAPP_NUMBER = '525530326229';
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

const Sparkle = ({ size, color, style }) => (
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

const Applicants: NextPage = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.5, initialInView: false });
  const [ref3, inView3] = useInView({ threshold: 0, initialInView: false });
  const [notify, setNotify] = useState(false);

  const items = [
    '1 clase en vivo semanal de 2 horas',
    'Más de 10 horas de contenidos audiovisuales on-demand, disponibles en nuestra plataforma para acceder en cualquier momento (videos, infografías, actividades gamificadas y desafíos)',
  ];

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
                    width={200}
                    height={200}
                    priority
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
                    width={150}
                    height={150}
                    priority
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
                <MagicButton
                  width={{ base: '100%', sm: 'auto' }}
                  size={{ base: 'md', md: 'lg' }}
                >
                  Aprende con IA
                </MagicButton>
                <Button
                  leftIcon={<Sparkles />}
                  variant="outline"
                  borderWidth="2px"
                  borderColor="purple.300"
                  _hover={{ shadow: 'sm' }}
                  width={{ base: '100%', sm: 'auto' }}
                  size={{ base: 'md', md: 'lg' }}
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

                <PageText 
                  mb={8} 
                  fontSize={{ base: 'lg', md: 'xl' }}
                  fontWeight="semibold"
                  color="purple.600"
                >
                  Nuestros egresados están posicionados como referentes en empresas líderes
                </PageText>

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
                          src={softwareDevelopersSVG}
                          alt='Software and protocol developers vector'
                          height={37}
                          width={40}
                          priority
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
                          src={researchersSVG}
                          alt='Researchers vector'
                          height={40}
                          width={40}
                          priority
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
                          src={academicsSVG} 
                          alt='Academics vector' 
                          height={36} 
                          width={40} 
                          priority
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
                          src={communityOrganizersSVG}
                          alt='Community organizers vector'
                          height={36}
                          width={40}
                          priority
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
                          src={designersSVG} 
                          alt='Designers vector' 
                          height={38} 
                          width={40} 
                          priority
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
                          src={otherGrantsProgramsSVG}
                          alt='Other grant programs vector'
                          height={36}
                          width={40}
                          priority
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

      {/* Floating buy button and free trial message for mobile only */}
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
          href="https://astrixial.gumroad.com/l/ia"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: '92%', display: 'flex', justifyContent: 'center', textDecoration: 'none' }}
        >
          <Button
            colorScheme="orange"
            size="md"
            width="100%"
            borderRadius="full"
            fontWeight="bold"
            fontSize="md"
            leftIcon={<span style={{ fontSize: '1.1em' }}>🔥</span>}
            rightIcon={<span style={{ fontSize: '1.1em' }}>&rarr;</span>}
            px={4}
            py={2}
            boxShadow="0 2px 8px rgba(255, 140, 0, 0.10)"
            _hover={{ bgGradient: "linear(to-r, orange.400, orange.500)" }}
            transition="all 0.2s"
          >
            <!-- Event snippet for Inicio de confirmación de compra conversion page -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-17051100560/JFaJCJb0xcEaEJDLzMI_'});
</script>

            Comprar curso
          </Button>
        </a>
        <Box
          as="span"
          mt={1}
          px={3}
          py={1}
          borderRadius="full"
          bg="orange.50"
          color="orange.500"
          fontWeight="bold"
          fontSize="0.85em"
          boxShadow="sm"
          textAlign="center"
          display="inline-block"
        >
          <span role="img" aria-label="fuego">🔥</span> ¡PRUEBA 2 CLASES GRATIS!
        </Box>
        <Box
          mt={2}
          px={3}
          py={2}
          bg="gray.50"
          borderRadius="md"
          fontSize="xs"
          color="gray.700"
          textAlign="center"
          maxW="95%"
        >
          Si en las primeras 2 clases del primer curso no alcanzamos tus expectativas, te devolvemos la totalidad del dinero invertido. Solo aplica para tu primer curso en Blatam.
        </Box>
      </Box>
      <Box position="fixed" bottom={6} right={6} zIndex={1000}>

      </Box>
    </>
  );
};

export default Applicants;
