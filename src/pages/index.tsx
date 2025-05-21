import {Accordion, Box, Flex, Grid, GridItem, Stack} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';

import {
    FAQItem,
    HomeAboutCard,
    HomeAboutCard2,
    HomeAboutCard3,
    PageMetadata,
    PageSection,
    PageText
} from '../components/UI';
import  bbva  from '../../public/images/bbva.svg';
import ethglobal from '../../public/images/ethglobal-logo-vector.png';
import smallSucculentSVG from '../../public/images/small-succulent.svg';
import mediumSucculentSVG from '../../public/images/medium-succulent.svg';
import bigSucculentSVG from '../../public/images/big-succulent.svg';
import whatWeSupportTree from '../../public/images/what-we-support-tree.png';
import whoWeSupportRoots from '../../public/images/who-we-support-roots.png';
import howWeSupportRoots from '../../public/images/how-we-support-roots.png';
import Instructor from '../../public/images/adan2.jpg';

import {ABOUT_URL, APPLICANTS_URL, HOW_WE_SUPPORT_URL, LINKELIND_URL, WHO_WE_SUPPORT_URL} from '../constants';
import {ButtonLink} from "../components";
import HeaderPromo from '../components/UI/headings/Header-Promo';
import PromoBanner from '../components/layout/PromoBanner';
import BlatamBanner from '../components/layout/BlatamBanner';
import BlatamBannerMain from '../components/layout/BlatamBannerMain';
import ProfessionalGoalsSection from '../components/UI/main/ProfessionalGoalsSection';
import FeaturesSection from '../components/UI/main/FeatureCard/FeaturesSection';
import AdditionalFeaturesSection from '../components/UI/main/FeatureCard/AdditionalFeaturesSection';
import TestimonialsSection from '../components/UI/main/TestimonialCard/TestimonialsSection';

const Home: NextPage = () => {
  return (
    <>
    <BlatamBannerMain />
              <PromoBanner
        discount="65% OFF"
        originalPrice="$4,290 MXN"
        newPrice="$1,502 MXN"
        additionalInfo="Hasta 12 meses sin interés de $125 MXN"
        duration=""
        paymentLinkText="Ver medios de pago"
      />

      <PageMetadata
        title='Incio'
        description='Hacemos que la IA  sea fácil para todos.'
      />

      <Box mx={{ md: 12 }} bg='white' position='relative'>
        <Stack spacing={10} mb={8} px={{ base: 5, md: 9 }} py={{ base: 3, md: 12 }}>
          <Flex direction={{ base: 'column', md: 'row' }}>
            <Stack mb={{ base: 10, md: 0 }} w={{ md: '100%' }} mr={{ base: 0, md: 12 }}>
              <section id='mission'>
                <PageSection mb={6}>La misión de Blatam</PageSection>

                <PageText fontSize='stats' fontWeight={100} lineHeight='32px'>
                  Cursos y certificaciones desde cero y avanzados, para que te conviertas en <strong> todo un profesional de la tecnología más demandada del momento.</strong>
                </PageText>
              </section>
            </Stack>

            <Stack w={{ md: '90%' }} mb={{ md: 8 }}>
              <section id='esp-role'>
                <PageSection mb={6}>Únete a miles de personas que confían en Blatam</PageSection>

                <PageText mb={1}>
                  es un hub educativo dedicado a la formación y posicionamiento de profesionales en el  <strong> ecosistema de tecnología e Inteligencia Artificial.</strong>
                </PageText>
              </section>
            </Stack>
          </Flex>
          <ProfessionalGoalsSection />
          <FeaturesSection />
          <AdditionalFeaturesSection />
          <TestimonialsSection />
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
                    Únete a miles de personas que confían en Blatam y en tecnologías como IA y blockchain.
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

                Nuestras clases son online y en vivo. Y son impartidas por instructores con expertise en el ecosistema, quienes podrán resolver todas tus <strong>dudas durante tu aprendizaje. </strong>.
              </PageText>
            </HomeAboutCard>
          </section>

          <section id='who-we-support'>
            <HomeAboutCard3
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
                  <Accordion allowToggle>
                      <PageSection mb={6}>Preguntas frecuentes</PageSection>
                      <FAQItem question='¿Hay facilidades de pago?'>
                          <PageText>
                              Aceptamos 4 formas de pago: Tarjeta de crédito, transferencia bancaria, criptomonedas y Paypal. Con este último puedes tener hasta <strong>12 MSI </strong>. En nuestro sitio web los pagos se realizan con <strong> Stripe .</strong>
                          </PageText>
                      </FAQItem>

                      <FAQItem question='¿Qué pasa si se me complica el horario establecido del curso?'>
                          <PageText>¡No te preocupes! Las clases se graban, así que puedes ver la clase grabada en tu plataforma cuando quieras. Además, puedes asistir a cualquier otra generación presencial y recuperar tu clase..</PageText>
                      </FAQItem>

                      <FAQItem question='¿La certificación tiene algún respaldo?'>
                          <PageText>
                              Ser la unica academia de blockchain afilidad a <strong> ETH Global </strong> , así como las empresas que colaboran con nosotros nos respaldan.
                          </PageText>
                      </FAQItem>
                  </Accordion>
               <strong>
                   Mejora tus oportunidades profesionales e incremente tus ingresos
               </strong>
              </PageText>
            </HomeAboutCard3>
          </section>
          <section id='who-we-support'>
            <HomeAboutCard2
                bgGradient='linear(to-br, brand.whoWeSupport.bgGradient.start 0%, brand.whoWeSupport.bgGradient.end 100%)'
                img={{
                  src: Instructor,
                  alt: 'supported categories tree',
                  width: 540,
                  height: 298.968
                }}
                title='Apasionados por el ecosistema en Inteligencia Artifical  que hoy son referentes en LATAM'
                link={LINKELIND_URL}
            >
              <PageText mb={6}>

               <strong>Adan Muñoz Pablo </strong>
                Founder & CEO de Blatam



              </PageText>
            </HomeAboutCard2>

        </section>


          <section id='how-we-support'>
            <HomeAboutCard3
              bgGradient='linear(to-br, brand.howWeSupport.bgGradient.start 2.29%, brand.howWeSupport.bgGradient.end 101.37%)'
              img={{
                src: howWeSupportRoots,
                alt: 'people making research about supported categories',
                width: 540,
                height: 280.666
              }}
              title='Conoce a tus profesores de Blatam'
              link={HOW_WE_SUPPORT_URL}
            >
              <PageText mb={6}>
                El mundo necesita profesionales en inteligencia artificial, <strong> conviértete en el siguiente</strong>
                  <ButtonLink label='Aprende más' link={APPLICANTS_URL} width='177px' />
              </PageText>

              <PageText>

              </PageText>
            </HomeAboutCard3>
          </section>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
