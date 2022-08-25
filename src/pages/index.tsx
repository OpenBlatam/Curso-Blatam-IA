import { Box, Flex, Grid, GridItem, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';

import { HomeAboutCard, PageMetadata, PageSection, PageText } from '../components/UI';
import  bbva  from '../../public/images/bbva.svg';
import ethglobal from '../../public/images/ethglobal-logo-vector.png';
import smallSucculentSVG from '../../public/images/small-succulent.svg';
import mediumSucculentSVG from '../../public/images/medium-succulent.svg';
import bigSucculentSVG from '../../public/images/big-succulent.svg';
import whatWeSupportTree from '../../public/images/what-we-support-tree.png';
import whoWeSupportRoots from '../../public/images/who-we-support-roots.png';
import howWeSupportRoots from '../../public/images/how-we-support-roots.png';

import { ABOUT_URL, HOW_WE_SUPPORT_URL, WHO_WE_SUPPORT_URL } from '../constants';

const Home: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Home'
        description='The Ecosystem Support Program provides grants and other support to the builders of the Ethereum ecosystem.'
      />

      <Box mx={{ md: 12 }} bg='white' position='relative'>
        <Stack spacing={10} mb={8} px={{ base: 5, md: 9 }} py={{ base: 3, md: 12 }}>
          <Flex direction={{ base: 'column', md: 'row' }}>
            <Stack mb={{ base: 10, md: 0 }} w={{ md: '100%' }} mr={{ base: 0, md: 12 }}>
              <section id='mission'>
                <PageSection mb={6}>La Mision de Blatam </PageSection>

                <PageText fontSize='stats' fontWeight={100} lineHeight='32px'>
                  Cursos y certificaciones desde cero y avanzados, para que te conviertas en <strong> todo un profesional de la tecnología más demandada del momento.</strong>
                </PageText>
              </section>
            </Stack>

            <Stack w={{ md: '90%' }} mb={{ md: 8 }}>
              <section id='esp-role'>
                <PageSection mb={6}>Únete a miles de personas que confían en Blatam</PageSection>

                <PageText mb={1}>
                  es un hub educativo dedicado a la formación y posicionamiento de profesionales en el  <strong> ecosistema de tecnología y Blockchain.</strong>
                </PageText>
              </section>
            </Stack>
          </Flex>

          <section id='stats'>
            <Box
              justifyContent='center'
              alignItems='center'
              direction='column'
              bgGradient='linear(to-br, brand.stats.bgGradient.start 2.29%, brand.stats.bgGradient.end 101.37%)'
              borderTop='5px solid'
              borderTopColor='brand.heading'
              borderBottom='5px solid'
              borderBottomColor='brand.heading'
              px={{ base: 2, lg: 20, xl: 10 }}
              pt={7}
            >
              <Grid
                templateColumns={{
                  base: 'repeat(2, auto)',
                  lg: 'repeat(6, auto)',
                  xl: 'repeat(6, 1fr)'
                }}
                rowGap={10}
                justifyContent='space-evenly'
              >
                <GridItem alignSelf='center' justifySelf='center' mr={{ lg: 6, xl: 0, xl2: -20 }}>
                  <Box>
                    <Image
                      src={bbva}
                      alt='small succulent plant representing allocation in 2019'
                      layout='fixed'
                    />
                  </Box>
                </GridItem>
                <GridItem alignSelf='center' mr={{ lg: 20, xl: 12 }}>
                  <Stack>




                  </Stack>
                </GridItem>
                <GridItem alignSelf='center' justifySelf='center' mr={{ lg: 6, xl: 0, xl2: -16 }}>

                </GridItem>
                <GridItem alignSelf='center' mr={{ lg: 20, xl: 12 }}>
                  <Stack>
             >


                  </Stack>
                </GridItem>

                <GridItem alignSelf='center' mb={{ base: 8, lg: 0 }}>
                  <Stack>

                    <Box>

                    </Box>


                  </Stack>
                </GridItem>
              </Grid>

              <Stack mt={{ lg: 7 }}>
                <PageText fontSize='input' textAlign='center' p={4}>
                    Únete a miles de personas que confían en Blatam
                </PageText>
              </Stack>
            </Box>
          </section>

          <section id='what-we-support'>
            <HomeAboutCard
              bgGradient='linear(to-br, brand.ready.bgGradient.start 10%, brand.ready.bgGradient.end 100%)'
              img={{
                src: whatWeSupportTree,
                alt: 'supported categories tree',
                width: 540,
                height: 311.098
              }}
              title='¿Por qué elegir Blatam?'
              link={ABOUT_URL}
            >
              <PageText mb={6}>
                Clases en vivo y mentorías

                Nuestras clases son online y en vivo. Y son impartidas por instructores expertos en el ecosistema, quienes podrán resolver todas tus dudas durante tu aprendizaje.
              </PageText>
            </HomeAboutCard>
          </section>

          <section id='who-we-support'>
            <HomeAboutCard
              bgGradient='linear(to-br, brand.whoWeSupport.bgGradient.start 0%, brand.whoWeSupport.bgGradient.end 100%)'
              img={{
                src: whoWeSupportRoots,
                alt: 'supported categories tree',
                width: 540,
                height: 298.968
              }}
              title='Nuestra oferta académica'
              link={WHO_WE_SUPPORT_URL}
            >
              <PageText mb={6}>

                Mejora tus oportunidades profesionales e incremente tus ingresos
              </PageText>
            </HomeAboutCard>
          </section>

          <section id='how-we-support'>
            <HomeAboutCard
              bgGradient='linear(to-br, brand.howWeSupport.bgGradient.start 2.29%, brand.howWeSupport.bgGradient.end 101.37%)'
              img={{
                src: howWeSupportRoots,
                alt: 'people making research about supported categories',
                width: 540,
                height: 280.666
              }}
              title='Conoce a tus blatam experts'
              link={HOW_WE_SUPPORT_URL}
            >
              <PageText mb={6}>
                El mundo necesita profesionales en blockchain, conviértete en el siguiente
              </PageText>

              <PageText>

              </PageText>
            </HomeAboutCard>
          </section>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
