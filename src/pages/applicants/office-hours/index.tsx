import { Accordion, Box, Flex, Link, ListItem, Stack } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import type { NextPage } from 'next';

import {
  ApplicantsSidebar,
  FAQItem,
  List,
  PageSection,
  PageSubheading,
  PageText,
  ProcessStep,
  PageMetadata,
  ReadyToApply
} from '../../../components/UI';

import {
  EF_JOBS_URL,
  EF_PHILOSOPHY_URL,
  ETHEREUM_COMMUNITY_URL,
  ETHEREUM_BROAD_ECOSYSTEM_URL,
  ETHEREUM_JOBS_URL,
  ETHEREUM_ORG_URL,
  ABOUT_URL,
  SIDEBAR_OFFICE_HOURS_LINKS,
  OFFICE_HOURS_APPLY_URL
} from '../../../constants';

const OfficeHours: NextPage = () => {
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
        title='Bitcoin'
        description='Connect with a member of the Ecosystem Support team for support other than funding, including help with a grant application.'
      />

      <Box bg='white' position='relative' py={{ md: 12 }}>
        <Flex>
          <ApplicantsSidebar
            sidebarLinks={SIDEBAR_OFFICE_HOURS_LINKS}
            sectionsInView={[inView, inView2, inView3, inView4, inView5, inView6, inView7, inView8]}
          />

          <Box w={{ lg: '70%' }} px={{ md: 20 }} pr={{ lg: 12 }}>
            <Stack mb={8}>
              <section id='description' ref={ref}>
                <PageSubheading mb={8}>Recopilación y análisis de datos</PageSubheading>

                <PageText mb={6}>
                <section className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📊 Recopilación y Análisis de Datos</h2>
      <p className="mb-4">
        En esta unidad aprenderás a aprovechar el poder de la inteligencia artificial para transformar datos en decisiones de marketing efectivas. Exploraremos técnicas modernas para gestionar información, identificar patrones y personalizar mensajes según el comportamiento del usuario.
      </p>

      <ul className="list-none space-y-2">
        <li>✔ Segmentación de audiencia y personalización de mensajes</li>
        <li>✔ Recopilación, organización y gestión eficiente de datos</li>
        <li>✔ Técnicas de análisis de datos aplicadas al marketing digital</li>
        <li>
          ✔ Herramientas de IA para análisis y automatización:
          <ul className="ml-6 list-disc mt-2 space-y-1 text-sm">
            <li><strong>GPT-3 Demo</strong> – generación de contenido inteligente</li>
            <li><strong>Platforms</strong> – plataformas de IA aplicadas al análisis de datos</li>
            <li><strong>Crayon</strong> – análisis competitivo automatizado</li>
          </ul>
        </li>
      </ul>
    </section>
                </PageText>

                <PageText>Las comoponentes principales de Bitcoin son:</PageText>

                <Stack mb={6}>
                  <List>
                    <ListItem>
                    <strong> Descentralizado </strong>
                    </ListItem>
                    <ListItem>
                      Sin censura
                    </ListItem>
                    <ListItem>
                     Libertad de tu dinero.
                    </ListItem>
                  </List>
                </Stack>

                <PageText>

                </PageText>
              </section>
            </Stack>

            <Stack spacing={10}>
              <section id='process' ref={ref2}>
                <PageSection mb={6}>Proceso</PageSection>

                <Stack spacing={3}>
                  <ProcessStep title='Teoría'>
                    Aprende los principios basicos de Bitcoin sin importar si eres un experto o novato en la informatica.
                  </ProcessStep>

                  <ProcessStep title='Practica'>
                   Aprende a distinguir la principales tecnologías que componen a bitcoin y saber distinguir un buen proyecto de uno malo.
                  </ProcessStep>

                  <ProcessStep title='Preparacíon'>
                    Avanza en el conocimiento de blockchain.
                  </ProcessStep>

                  <ProcessStep title='Conoce' isLastStep>
                    Conocerás todos los principios de Bitcoin.
                  </ProcessStep>
                </Stack>
              </section>

              <section id='eligibility' ref={ref3}>

                <Accordion allowToggle>
                  <PageSection mb={6}>Preguntas frecuentes</PageSection>
                  <FAQItem question='¿Hay facilidades de pago??'>
                    <PageText>
                      Aceptamos 4 formas de pago: Tarjeta de crédito, transferencia bancaria, criptomonedas y Paypal. Con este último puedes tener hasta 6 MSI. En nuestro sitio web los pagos se realizan con Stripe.
                    </PageText>
                  </FAQItem>

                  <FAQItem question='¿Qué pasa si se me complica el horario establecido del curso?'>
                    <PageText>¡No te preocupes! Las clases se graban, así que puedes ver la clase grabada en tu plataforma cuando quieras. Además, puedes asistir a cualquier otra generación presencial y recuperar tu clase..</PageText>
                  </FAQItem>

                  <FAQItem question='¿La certificación tiene algún respaldo?'>
                    <PageText>
                      Ser la unica academia de blockchain afilidad a ETH Global, así como las empresas que colaboran con nosotros nos respaldan.
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

export default OfficeHours;
