import {Accordion, Box, Flex, Grid, GridItem, Stack, SimpleGrid} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Text, Button } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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
import accenture from '../../public/logos/Accenture.svg'; 
import mercadolibre from '../../public/logos/mercadolibre.svg'; 
import gloabant from '../../public/logos/Globant_Logo.svg'; 
import galicia from '../../public/logos/Logo_Banco_Galicia.svg';
import naranjax from '../../public/logos/naranja-x-1.svg';

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
import TweetCard from '@/components/UI/main/TweetCard/TweetCard';

const tweets = [
  {
    name: "ETH GLOBAL",
    handle: "@ethglobal",
    date: "Agost 17, 2022",
    image: "https://pbs.twimg.com/profile_images/1333830155287097349/rGY9wviF_400x400.jpg",
    content: "Attention ETHMexico hackers: \nSwag Bag Sneak Peek 😉🇲🇽🥂",
    url: "https://twitter.com/ETHGlobal/status/1559988448517292033",
    isVerified: true
  },
  {
    name: "Vitalik.eth",
    handle: "@VitalikButerin",
    date: "Mayo 9, 2020",
    image: "https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg",
    content: `@AdanPablo2\n\n@kevinsekniqi y 4 más. FLP impossibility is overrated in practice imo. Partial synchrony is fine dawg`,
    url: "https://twitter.com/vitalikbuterin/status/1259204395767681030?lang=cs",
    isVerified: true
  }
];

interface AnimatedCounterProps {
  target: number;
  duration?: number;
}

const AnimatedCounter = ({ target, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
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
  }, [inView, target, duration]);

  return (
    <Text ref={ref} fontSize="xl" fontWeight="bold">
      +{count} graduados
    </Text>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Incio'
        description='Hacemos que la IA  sea fácil para todos.'
      />

      <Box mx={{ md: 12 }} bg='white' position='relative' mt={{ base: "70px", sm: "85px", md: "100px" }}>
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
                  es un hub platforma educativa dedicada a la formación y posicionamiento de profesionales en el  <strong> ecosistema de tecnología e Inteligencia Artificial.</strong>
                </PageText>
              </section>
            </Stack>
          </Flex>
          <ProfessionalGoalsSection />
          
          {/* Graduate Employment Statistics Section */}
          <section>
            <PageSection mb={6}>SALIDA LABORAL</PageSection>
            <PageText fontSize='stats' fontWeight={100} lineHeight='32px' mb={8}>
              La plataforma con más graduados en empresas líderes
            </PageText>
            <PageText mb={8}>
              En Blatam, nuestro principal objetivo es ayudarte a conseguir empleo o avanzar en tu carrera profesional. Por eso, nos enorgullece ser la plataforma educativa con la mayor cantidad de graduados en empresas de prestigio.
            </PageText>

            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
              }}
              gap={8}
              mb={8}
            >
              <GridItem>
                <Stack align="center" spacing={4}>
                  <Box>
                    <Image
                      src={mercadolibre}
                      alt="Mercado Libre logo"
                      width={150}
                      height={60}
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                  <AnimatedCounter target={8} />
                </Stack>
              </GridItem>

              <GridItem>
                <Stack align="center" spacing={4}>
                  <Box>
                    <Image
                      src={accenture}
                      alt="Accenture logo"
                      width={150}
                      height={60}
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                  <AnimatedCounter target={80} />
                </Stack>
              </GridItem>

              <GridItem>
                <Stack align="center" spacing={4}>
                  <Box>
                    <Image
                      src={gloabant}
                      alt="Globant logo"
                      width={150}
                      height={60}
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                  <AnimatedCounter target={688} />
                </Stack>
              </GridItem>

              <GridItem>
                <Stack align="center" spacing={4}>
                  <Box>
                    <Image
                      src={galicia}
                      alt="Galicia logo"
                      width={150}
                      height={60}
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                  <AnimatedCounter target={883} />
                </Stack>
              </GridItem>

              <GridItem>
                <Stack align="center" spacing={4}>
                  <Box>
                    <Image
                      src={naranjax}
                      alt="NaranjaX logo"
                      width={150}
                      height={60}
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                  <AnimatedCounter target={584} />
                </Stack>
              </GridItem>
            </Grid>

            <PageText fontSize="sm" color="gray.600" textAlign="center">
              Las cifras de graduados en empresas líderes se basan en información pública disponible en LinkedIn.
            </PageText>
          </section>

          <FeaturesSection />
          <AdditionalFeaturesSection />
          <TestimonialsSection />
          
          {/* Tweet Cards Section */}
          <section>
            <PageSection mb={6}>Lo que dicen sobre nosotros</PageSection>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={6}
              maxW="1200px"
              mx="auto"
            >
              {tweets.map((tweet, index) => (
                <TweetCard key={index} {...tweet} />
              ))}
            </SimpleGrid>
          </section>

          <section id='stats'>
            <Box
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
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
                      alt="BBVA logo"
                      width={100}
                      height={40}
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                </GridItem>
                <GridItem alignSelf='center' justifySelf='center' mr={{ lg: 6, xl: 0, xl2: -20 }}>
                  <Box>
                    <Image
                      src={accenture}
                      alt="Accenture logo"
                      width={100}
                      height={40}
                      style={{ objectFit: 'contain' }}
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
                  alt: 'Adan Muñoz Pablo - Founder & CEO de Blatam',
                  width: 540,
                  height: 298.968
                }}
                title='Apasionados por el ecosistema en Inteligencia Artificial que hoy son referentes en LATAM'
                link={LINKELIND_URL}
            >
              <PageText mb={6}>
                <Stack spacing={4}>
                  <Text fontSize="xl" fontWeight="bold">Adan Muñoz Pablo</Text>
                  <Text fontSize="lg" color="gray.600">Founder & CEO de Blatam</Text>
                  <Text mt={4}>
                    Líder en el ecosistema de Inteligencia Artificial y Blockchain en Latinoamérica, 
                    comprometido con la formación de profesionales en las tecnologías más demandadas del momento.
                  </Text>
                </Stack>
              </PageText>
            </HomeAboutCard2>
          </section>

          <section id='how-we-support'>
            <HomeAboutCard3
              bgGradient='linear(to-br, brand.howWeSupport.bgGradient.start 2.29%, brand.howWeSupport.bgGradient.end 101.37%)'
              img={{
                src: howWeSupportRoots,
                alt: 'Profesores de Blatam',
                width: 540,
                height: 280.666
              }}
              title='Conoce a tus profesores de Blatam'
              link={HOW_WE_SUPPORT_URL}
            >
              <Stack spacing={6}>
                <PageText>
                  El mundo necesita profesionales en inteligencia artificial, <strong>conviértete en el siguiente</strong>
                </PageText>
                <Box>
                  <ButtonLink 
                    label='Aprende más' 
                    link={APPLICANTS_URL} 
                    width='177px'
                  />
                </Box>
              </Stack>
            </HomeAboutCard3>
          </section>
        </Stack>
      </Box>

      {/* Mobile Promo Bar */}
      <Box
        display={{ base: 'flex', md: 'none' }}
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
        zIndex={200}
        bg="orange.500"
        color="white"
        py={2}
        px={3}
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        textAlign="center"
        boxShadow="0 -2px 16px rgba(0,0,0,0.12)"
      >
        <Text fontSize="sm" fontWeight="bold" mb={2} lineHeight="1.3">
          Aprovecha hasta <b>70% OFF</b> y hasta 12 meses sin intereses en <b>CURSOS</b> <span role="img" aria-label="fuego">🔥</span>
          <br />
          <span style={{ fontWeight: 400 }}>Hasta el 21 de Agosto</span> <span role="img" aria-label="fuego">🔥</span>
        </Text>
        <a
          href="/applicants"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: '100%', textDecoration: 'none' }}
        >
          <Button
            colorScheme="blackAlpha"
            bg="black"
            color="white"
            width="100%"
            borderRadius="full"
            fontWeight="bold"
            fontSize="md"
            leftIcon={<span style={{ fontSize: '1.15em' }}>🔥</span>}
            rightIcon={<span style={{ fontSize: '1.15em' }}>&rarr;</span>}
            py={6}
            minH="50px"
            _hover={{ bg: 'gray.800' }}
          >
            Comprar ahora
          </Button>
        </a>
      </Box>
    </>
  );
};

export default Home;
