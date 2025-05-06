import {Box, Button, Center, Flex, Stack} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import type { NextPage } from 'next';
import Image from 'next/image';

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
    </>
  );
};

export default Applicants;
