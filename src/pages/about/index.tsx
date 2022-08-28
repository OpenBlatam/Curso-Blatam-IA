import { Box, Center, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';

import { PageSection, PageText, PageMetadata } from '../../components/UI';

import aboutSVG from '../../../public/images/about.png';

const About: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='What We Support'
        description="Aprende todo sobre blockchain. en vivo y con expertos"
      />

      <Box bg='white' position='relative' px={{ md: 20, lg: 60 }} py={{ md: 12 }}>
        <Stack mb={12}>
          <section id='our-scope'>
            <PageSection mb={6} textAlign='center'>
              Nuestro objetivo
            </PageSection>

            <PageText mb={6}>
             <strong> Hacer DeFi accesible para todos en LATAM. </strong>
            </PageText>

            <PageText>
            Hay muchas cosas, pero solo nos importa la educación y la inclusión de web 3 a la población.

            </PageText>

            <PageSection mb={6} textAlign='center'>
              Becas

            </PageSection>

            <PageText>
              ¿Quieres una beca? comunicate con nosotros en nuestras redes sociales.


            </PageText>
          </section>
        </Stack>

        <Center>
          <Image
            src={aboutSVG}
            alt='Watering the garden of grants categories'
            width={800}
            height={573}
            objectFit='cover'
            placeholder='blur'
          />
        </Center>
      </Box>
    </>
  );
};

export default About;
