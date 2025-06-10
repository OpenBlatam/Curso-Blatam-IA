import {Box, Button, Center, Flex, Stack, IconButton, Link as ChakraLink} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import {
  ApplicantsSidebar,
  ApplicationTypeCard,
  ApplicationTypeCard2, FAQItem,
  PageMetadata,
  PageSection,
  PageSubheading,
  PageText
} from '../../components/UI';

import softwareDevelopersSVG from '../../../public/images/software-developers-vector.svg';
import researchersSVG from '../../../public/images/researchers-vector.svg';
import academicsSVG from '../../../public/images/academics-vector.svg';
import communityOrganizersSVG from '../../../public/images/community-organizers-vector.svg';
import designersSVG from '../../../public/images/designers-vector.svg';
import otherGrantsProgramsSVG from '../../../public/images/other-grant-programs-vector.svg';
import { Sparkles } from 'lucide-react';

import {
  OFFICE_HOURS_URL,
  PROJECT_GRANTS_URL,
  SIDEBAR_APPLICANTS_LINKS,
  SMALL_GRANTS_URL
} from '../../constants';

const WHATSAPP_NUMBER = '525530326229'; // Cambia este número por el real
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const Applicants: NextPage = () => {
  // `threshold` option allows us to control the % of visibility required before triggering the Intersection Observer
  // https://react-intersection-observer.vercel.app/?path=/story/introduction--page#options
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.5, initialInView: false });
  const [ref3, inView3] = useInView({ threshold: 0, initialInView: false });
  const items = [
    '1 clase en vivo semanal de 2 horas',
    'Más de 10 horas de contenidos audiovisuales on-demand, disponibles en nuestra plataforma para acceder en cualquier momento (videos, infografías, actividades gamificadas y desafíos)',
  ];
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    let blinkCount = 0;
    let blinkInterval: NodeJS.Timeout;
    const startNotification = () => {
      setNotify(true);
      blinkInterval = setInterval(() => {
        setNotify((prev) => !prev);
        blinkCount++;
        if (blinkCount >= 6) { // 3 parpadeos (on/off)
          clearInterval(blinkInterval);
          setNotify(false);
        }
      }, 300); // cada 300ms
    };
    const mainInterval = setInterval(startNotification, 15000); // cada 15 segundos
    // Lanza la notificación al cargar
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

      <Box bg='white' position='relative' py={{ md: 12 }}>
        <Flex>
          <ApplicantsSidebar
            sidebarLinks={SIDEBAR_APPLICANTS_LINKS}
            sectionsInView={[inView, inView2, inView3]}
          />

          <Box w={{ lg: '70%' }} px={{ md: 20 }} pr={{ lg: 12 }}>
            <Stack mb={8}>
              <PageSubheading mb={6}>¿Qué lograrás con esta certificación?</PageSubheading>
                  <button
      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium text-black
        bg-white transition hover:shadow-sm"
      style={{
        borderImage: 'linear-gradient(to right, #c084fc, #d1d5db, #86efac) 1',
        borderStyle: 'solid',
        borderWidth: '1.8px',
      }}
    >
      <Sparkles className="w-4 h-4 text-black" />
      Aprende con IA
    </button>
        <button
      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium text-black
        bg-white transition hover:shadow-sm"
      style={{
        borderImage: 'linear-gradient(to right, #c084fc, #d1d5db, #86efac) 1',
        borderStyle: 'solid',
        borderWidth: '1.8px',
      }}
    >
      <Sparkles className="w-4 h-4 text-black" />
      En línea y en vivo
      </button>
              <section id='mission-and-scope' ref={ref}>
              <PageSection mb={6}>Misión y Objetivo </PageSection>

                <PageText mb={6}>
                La experiencia de aprender combinando encuentros prácticos y en vivo con material teórico y práctico offline, pensado para que puedas
adaptar el proceso de aprendizaje a tu vida.

Contenido pre-grabado
Este material, compuesto por videos, podcast, desafíos
y actividades interactivas, se encuentra disponible de
manera asincrónica (puedes acceder a cualquier hora y
las veces que quieras). Te sugerimos visualizarlo y
realizar las actividades cada semana antes de la clase
en vivo.

Proyecto final
Durante tu recorrido aprenderás a partir de la elaboración
progresiva de un proyecto mediante entregas parciales y
una entrega final de carácter integrador.

    <main className="min-h-screen bg-gray-50 flex items-center justify-center">

    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">✅ ¿Qué incluye?</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    </main>
    </PageText>

                <PageText mb={8}>

                  Nuestros egresados están posicionados como referentes en empresas líderes
                </PageText>

                <Center mb={12}>
                  <Flex direction={{ base: 'column', md: 'row' }}>
                    <Stack mr={{ base: 0, md: 10 }} mb={{ base: 2, md: 0 }}>
                      <Flex>
                        <Box mr={4} flexShrink={0}>
                          <Image
                            src={softwareDevelopersSVG}
                            alt='Software and protocol developers vector'
                            height={37}
                            width={40}
                          />
                        </Box>
                        <Flex h='37px' alignItems='center'>
                          <PageText fontWeight={600}>Comenzar tu carrera en Inteligencia Artificial </PageText>
                        </Flex>
                      </Flex>

                      <Flex>
                        <Box mr={4} flexShrink={0}>
                          <Image
                            src={researchersSVG}
                            alt='Researchers vector'
                            height={40}
                            width={40}
                          />
                        </Box>
                        <Flex h='40px' alignItems='center'>
                          <PageText fontWeight={600}>Research</PageText>
                        </Flex>
                      </Flex>

                      <Flex>
                        <Box mr={4} flexShrink={0}>
                          <Image src={academicsSVG} alt='Academics vector' height={36} width={40} />
                        </Box>
                        <Flex h='36px' alignItems='center'>
                          <PageText fontWeight={600}>Academia</PageText>
                        </Flex>
                      </Flex>
                    </Stack>

                    <Stack>
                      <Flex>
                        <Box mr={4} flexShrink={0}>
                          <Image
                            src={communityOrganizersSVG}
                            alt='Community organizers vector'
                            height={36}
                            width={40}
                          />
                        </Box>
                        <Flex h='36px' alignItems='center'>
                          <PageText fontWeight={600}>Convertirte en creador de contenido de calidad</PageText>
                        </Flex>
                      </Flex>

                      <Flex>
                        <Box mr={4} flexShrink={0}>
                          <Image src={designersSVG} alt='Designers vector' height={38} width={40} />
                        </Box>
                        <Flex h='38px' alignItems='center'>
                          <PageText fontWeight={600}>Diseño</PageText>
                        </Flex>
                      </Flex>

                      <Flex>
                        <Box mr={4} flexShrink={0}>
                          <Image
                            src={otherGrantsProgramsSVG}
                            alt='Other grant programs and public goods funding platforms vector'
                            height={40}
                            width={40}
                          />
                        </Box>
                        <Flex h='40px' alignItems='center' maxW={{ base: '235px', md: '275px' }}>
                          <PageText fontWeight={600}>
                            Incrementar tus ingresos asesorando proyectos
                          </PageText>
                        </Flex>
                      </Flex>
                    </Stack>
                  </Flex>
                </Center>

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
        <ChakraLink href={WHATSAPP_LINK} isExternal>
          <IconButton
            aria-label="WhatsApp"
            icon={<FaWhatsapp size={32} />}
            colorScheme="whatsapp"
            borderRadius="full"
            boxShadow="lg"
            size="lg"
            _hover={{ bg: 'green.500' }}
            style={{
              opacity: notify ? 0.4 : 1,
              transition: 'opacity 0.5s',
            }}
          />
        </ChakraLink>
      </Box>
    </>
  );
};

export default Applicants;
