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

              <section id='mission-and-scope' ref={ref}>
                <PageSection mb={6}>Misión y Objetivo </PageSection>

                <PageText mb={6}>
                  En esta certificación blockchain te enseñamos conceptos fundamentales, te explicamos cómo las industrias se están abriendo caminos prometedores en esta tecnología, qué herramientas existen y cómo usarlas. Te mostramos cómo funcionan las criptomonedas para que tengas mayor criterio a la hora de tomar decisiones para tus negocios. Además, exploramos el futuro de blockchain y las oportunidades que genera.
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
                          <PageText fontWeight={600}>Comenzar tu carrera en web3 / blockchain</PageText>
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
                  No te quedes fuera de la próxima certificación
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
                    <ApplicationTypeCard2 title='Dinero' link={OFFICE_HOURS_URL}>
                      Las historias generales del dinero tienden a considerar metales preciosos, formas específicas de moneda o
                      amplios sistemas monetarios, pero rara vez se enfocan en cómo la gente común usa y crea...
                      <Button> Módulo  1</Button>
                    </ApplicationTypeCard2>
                    <ApplicationTypeCard title='Bitcoin' link={OFFICE_HOURS_URL}>
                      … El papel de los mineros es asegurar la red y procesar cada transacción de Bitcoin. Los
                      mineros logran esto resolviendo un problema computacional que les permite encadenar …
                      <Button> Módulo  2</Button>
                    </ApplicationTypeCard>
                    <ApplicationTypeCard2 title='Blockchain' link={OFFICE_HOURS_URL}>
                      La tecnología Blockchain no solo está en la base de todas las criptomonedas, sino que ha encontrado
                      amplia aplicación en la industria financiera más tradicional. También abrió la puerta a nuevos...
                      <Button> Módulo  3</Button>
                    </ApplicationTypeCard2>
                    <ApplicationTypeCard2 title='Criptografía' link={OFFICE_HOURS_URL}>
                      … Este capítulo trata sobre la teoría de la criptografía. La criptografía se trata de la comunicación.
                      en presencia de adversarios. La criptología proporciona métodos que permiten una comunicación...
                      <Button> Módulo  4</Button>
                    </ApplicationTypeCard2>
                    <ApplicationTypeCard2 title='Consenso' link={OFFICE_HOURS_URL}>
                      … Bitcoin establece un consenso sobre la cadena de bloques de forma descentralizada y seudónima
                      Todos los participantes de Bitcoin siguen el mismo consenso de validez de bloque prescrito (BVC), es decir, un...
                      <Button> Módulo  5</Button>
                    </ApplicationTypeCard2>
                    <ApplicationTypeCard2 title='Redes Distribuidas' link={OFFICE_HOURS_URL}>
                      … En las redes heterárquicas o distribuidas, ningún componentenodo-… las redes distribuidas
                      naturales las mismas relaciones jearárquicas a las que estamos acostumbrados en las redes
                      <Button> Módulo  6</Button>
                    </ApplicationTypeCard2>
                    <ApplicationTypeCard2 title='Bloques' link={OFFICE_HOURS_URL}>
                      … Cada bloque está vinculado al bloque anterior y al siguiente, y la cadena completa se actualiza cada
                      … para editar o eliminar bloques de datos cuando los bloques se registran en el libro mayor de blockchain. Por lo tanto, es ……
                      <Button> Módulo  7</Button>
                    </ApplicationTypeCard2>
                    <ApplicationTypeCard title='Ethereum' link={SMALL_GRANTS_URL}>
                      … Ethereum es una importante plataforma basada en blockchain para contratos inteligentes … La propuesta de valor central
                      de Ethereum es un completo ... Proporcionamos una descripción técnica de Ethereum, esquema abierto ...
                      <Button> Modulo 8</Button>
                    </ApplicationTypeCard>
                    <ApplicationTypeCard2 title='Tokens' link={OFFICE_HOURS_URL}>
                      … de tokens y análisis comparativo de tokens … del estándar de tokens ERC20 que describe las reglas
                      y los estándares para los tokens de criptomonedas, todas las DApps y las nuevas empresas están utilizando el token ERC20...
                      <Button> Módulo  9</Button>
                    </ApplicationTypeCard2>
                    <ApplicationTypeCard title='NFTs y Metaversos' link={OFFICE_HOURS_URL}>
                      … (NFT) en plataformas de metaverso, como Decentraland. Ya estamos asistiendo a la formación
                      del metaverso... los jugadores en el ecosistema del metaverso incluyen puertas de enlace del metaverso que...
                      <Button>Módulo  10</Button>
                    </ApplicationTypeCard>
                    <ApplicationTypeCard2 title='DeFi y Daos' link={PROJECT_GRANTS_URL}>
                      … una plataforma DeFi era MakerDAO (el término DAO significa “Autónomo Descentralizado”).
                      Organization”), que también produjo y hoy mantiene la moneda estable DAI. La DAO y…<Button> Modulo 11</Button>
                    </ApplicationTypeCard2>
                    <ApplicationTypeCard2 title='Blockchain Canvas' link={OFFICE_HOURS_URL}>
                      … de la tecnología blockchain tiene sentido y dónde podría ser mejor una solución diferente En este
                      papel un Blockchain Canvas... Por lo tanto, este lienzo se centra en la identificación de específicos...
                      <Button> Módulo  12</Button>
                    </ApplicationTypeCard2>

                    <ApplicationTypeCard2 title='Avanzado' link={SMALL_GRANTS_URL}>
                      llamamos la columna vertebral de Bitcoin, ... construida sobre el protocolo de la columna vertebral, centrándose específicamente en...
                      <Button> Módulo  13</Button>
                    </ApplicationTypeCard2>

                    <ApplicationTypeCard2 title='Research' link={PROJECT_GRANTS_URL}>
                      … de Bitcoin desde entonces ha ayudado a avanzar en el campo y el estado del arte … el campo de la falla bizantina
                      tolerancia y delinear ventajas... Por lo tanto, destacamos que la tolerancia a fallas bizantinas debería...
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
