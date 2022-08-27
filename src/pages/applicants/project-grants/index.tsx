import { Accordion, Box, Flex, Link, ListItem, Stack } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import type { NextPage } from 'next';

import {
  ApplicantsSidebar,
  ApplicationAttentionMsg,
  FAQItem,
  List,
  PageMetadata,
  PageSection,
  PageSubheading,
  PageText,
  ProcessStep,
  ReadyToApply
} from '../../../components/UI';

import {
  ETHEREUM_COMMUNITY_URL,
  ETHEREUM_GRANTS_URL,
  ETHRESEARCH_URL, METAVERSE_COMMUNITY_URL, NFT_COMMUNITY_URL,
  PROJECT_GRANTS_APPLY_URL,
  SIDEBAR_PROJECT_GRANTS_LINKS
} from '../../../constants';
import * as https from "https";

const ProjectGrants: NextPage = () => {
  // `threshold` option allows us to control the % of visibility required before triggering the Intersection Observer
  // https://react-intersection-observer.vercel.app/?path=/story/introduction--page#options
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5, initialInView: false });
  const [ref3, inView3] = useInView({ threshold: 0.5, initialInView: false });
  const [ref4, inView4] = useInView({ threshold: 0.5, initialInView: false });
  const [ref5, inView5] = useInView({ threshold: 0.5, initialInView: false });
  const [ref6, inView6] = useInView({ threshold: 0.5, initialInView: false });
  const [ref7, inView7] = useInView({ threshold: 0.5, initialInView: false });
  const [ref8, inView8] = useInView({ threshold: 0, initialInView: false });

  return (
    <>
      <PageMetadata
        title='Project Grants'
        description='Learn more about applying for Project Grants from the Ecosystem Support Program: criteria, how to apply and tips for submitting a great application.'
      />

      <Box bg='white' position='relative' py={{ md: 12 }}>
        <Flex>
          <ApplicantsSidebar
            sidebarLinks={SIDEBAR_PROJECT_GRANTS_LINKS}
            sectionsInView={[inView, inView2, inView3, inView4, inView5, inView6, inView7, inView8]}
          />

          <Box w={{ lg: '70%' }} px={{ md: 20 }} pr={{ lg: 12 }}>
            <Stack mb={2}>
              <section id='description' ref={ref}>
                <PageSubheading mb={8}>Nfts y Metaversos</PageSubheading>

                <PageText mb={6}>
                  El mercado de tokens no fungibles <strong> (NFT) </strong> se está multiplicando en
                  años recientes. El concepto de NFT proviene originalmente de un token estándar de Ethereum, con el objetivo de distinguir cada token con distinguibles
                  señales. Este tipo de token se puede vincular con propiedades virtuales/digitales
                  como sus identificaciones únicas.
                  <strong>Metaverso</strong> como paradigma en evolución de la próxima generación de Internet, tiene como objetivo construir un espacio virtual compartido totalmente inmersivo, hiperespaciotemporal y autosuficiente para que los humanos
                  jugar, trabajar y socializar. Impulsado por los avances recientes en los mercados emergentes
                  tecnologías como la realidad extendida, la inteligencia artificial y
                  blockchain, el metaverso está pasando de la ciencia ficción a una realidad próxima.
                <strong> Características:</strong>
                </PageText>

                <Stack>
                  <List>

                    <ListItem>
                      1) Inmersión: La inmersión significa que el
                      espacio virtual generado por computadora es suficientemente realista para permitir
                      los usuarios se sientan psicológica y emocionalmente inmersos
                    </ListItem>
                    <ListItem>2) Hiperespaciotemporalidad: El mundo real está restringido por la
                      finitud del espacio e irreversibilidad del tiempo.</ListItem>
                    <ListItem>
                      3) Sostenibilidad: La sostenibilidad indica que el metaverso mantiene un ciclo económico cerrado y un valor constante
                      sistema con un alto nivel de independencia.
                    </ListItem>
                  </List>
                </Stack>
              </section>
            </Stack>

            <Stack mb={20}>
              <section id='attention'>
              </section>
            </Stack>

            <Stack spacing={10}>
              <section id='process' ref={ref2}>

                <Stack spacing={3}>

                </Stack>
              </section>

              <section id='requirements' ref={ref3}>

              </section>

              <section id='eligibility' ref={ref4}>

              </section>

              <section id='tips-application' ref={ref6}>

              </section>

              <section id='faq' ref={ref7}>
                <PageSection mb={6}>Preguntas frecuentes </PageSection>

                <Accordion allowToggle>
                  <FAQItem question='¿Por que los NFTs tienen valor?'>
                    <PageText>
                      Pues es sencillo, porque creen que su valor va aumentar con el tiempo, y luego podrán venderlo por más dinero.
                    </PageText>
                  </FAQItem>

                  <FAQItem question='¿Cuál es el NFT mas caro que se ha vendido?'>
                    <PageText>
                      El NFT más caro jamás vendido del artista
                      <Link
                          fontWeight={700}
                          color='brand.orange.100'
                          href={NFT_COMMUNITY_URL}
                          isExternal
                      >
                           Beeple,
                      </Link>{' '}
                    que se convertía a su vez en la tercera obra más cara jamás vendida en una subasta por un artista vivo. La obra es un collage compuesto por 5000 piezas de trabajo que el artista ha ido haciendo cada día desde 2007.
                      Se vendio en  $69.3 millones de dólares.
                    </PageText>
                  </FAQItem>
                  <FAQItem question='¿Cuál es el futuro de metaverso?'>
                    <PageText mb={6}>

                      Tras la pandemia, el metaverso es una nueva revolución digital que está adquiriendo cada vez mayor relevancia a la hora de conectar a las personas en un nuevo mundo virtual en el que confluyen distintas tecnologías, como la Realidad Aumentada y la Virtual, para potenciar su valor.
                      <Link
                          fontWeight={700}
                          color='brand.orange.100'
                          href={METAVERSE_COMMUNITY_URL}
                          isExternal
                      >
                        Meta
                        (Facebook)
                      </Link>{' '}
                    pretender ser el lider en esta industria.
                    </PageText>

                    <PageText>

                    </PageText>
                  </FAQItem>





                </Accordion>
              </section>

              <section id='apply' ref={ref8}>
                <Stack mt={6}>
                </Stack>
              </section>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ProjectGrants;
