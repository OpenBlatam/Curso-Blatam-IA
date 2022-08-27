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
  ETHRESEARCH_URL,
  SIDEBAR_SMALL_GRANTS_LINKS,
  SMALL_GRANTS_APPLY_URL
} from '../../../constants';

const SmallGrants: NextPage = () => {
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
        title='Small Grants'
        description='Learn more about applying for Small Grants from the Ecosystem Support Program: criteria, how to apply and tips for submitting a great application.'
      />

      <Box bg='white' position='relative' py={{ md: 12 }}>
        <Flex>
          <ApplicantsSidebar
            sidebarLinks={SIDEBAR_SMALL_GRANTS_LINKS}
            sectionsInView={[inView, inView2, inView3, inView4, inView5, inView6, inView7, inView8]}
          />

          <Box w={{ lg: '70%' }} px={{ md: 20 }} pr={{ lg: 12 }}>
            <Stack mb={-4}>
              <section id='description' ref={ref}>
                <PageSubheading mb={8}>Ethereum</PageSubheading>

                <PageText mb={6}>
                  Ethereum es la tecnología administrada por la comunidad que impulsa el éter de criptomonedas (ETH) y miles de aplicaciones descentralizadas.
                </PageText>

                <PageText>
                   <strong>Características:</strong>

                </PageText>

                <Stack mb={6}>
                  <List>
                    <ListItem>
                      La minería ha sido desde el principio muy descentralizada. Además, los protocolos de consenso (basados en el algoritmo Ethash) son muy exigentes y se dirigen hacia la minería por medio de tarjetas gráficas (GPU).
                    </ListItem>
                    <ListItem>
                      La emisión anual es limitada. El máximo establecido son 18 millones de criptomonedas. Sin embargo, la emisión total de Ethers es ilimitada.

                    </ListItem>
                    <ListItem>                      La creación novedosa de una forma de medir el trabajo realizado, GAS, es uno de sus alicientes. Además, este indicador permite saber el coste de las operaciones realizadas. También sirve para calcular el tamaño de sus bloques, que se miden por una cantidad concreta de GAS.
                    </ListItem>
                    <ListItem>
                      La gestión de pagos es más rápida que en Bitcoins. Las razones son dos. La primera, la producción de bloques en cortos períodos de tiempo. La segunda es la escalabilidad de Ethereum.

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


              <section id='faq' ref={ref7}>
                <PageSection mb={6}>Preguntas frecuentes</PageSection>

                <Accordion allowToggle>
                  <FAQItem question='¿En que es diferente a Bitcoin?'>
                    <PageText>
                      Mientras que Bitcoin se acepta más ampliamente y se considera una moneda digital internacional, Ether sólo se acepta para las transacciones de aplicaciones digitales (Dapps) que se ejecutan en la red Ethereum.
                    </PageText>
                  </FAQItem>

                  <FAQItem question='¿Quién lo creo?'>
                    <PageText>
                      La plataforma Ethereum fue creada en 2015 por el programador Vitalik Buterin, con la perspectiva de crear un instrumento para aplicaciones descentralizadas y colaborativas.
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

export default SmallGrants;
