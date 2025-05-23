import { Box, Center, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

import { PageSubheading } from '../UI';

import homepageHero from '../../../public/images/homepage-hero.png';
import homepageHeroMobile from '../../../public/images/homepage-hero-mobile.png';

interface Props {
  windowSize: {
    width: number;
    height: number;
  };
}

export const AboutHero: FC<Props> = ({ windowSize }) => {
  return (
    <Stack mb={{ base: -2, md: -60, xl: -72 }}>
      <Center h={{ md: '445px' }} alignItems={{ md: 'center' }}>
        <Stack
          px={{ base: 10, md: 9 }}
          py={{ base: 3, md: 12 }}
          mb={{ base: 7, md: 0 }}
          bg={{ md: 'brand.homepageWhiteBox' }}
          maxW={{ md: '702px' }}
          zIndex={1}
        >
          <PageSubheading
            as='h1'
            fontSize={{ base: 'homepage', md: 'h1' }}
            fontWeight={100}
            lineHeight={{ base: '36px', md: '48px' }}
            textAlign='center'
            mb={3}
          >
            Sobre Blatam
          </PageSubheading>
        </Stack>
      </Center>

      <Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <Image
            src={homepageHeroMobile}
            alt='About Blatam'
            width={450}
            height={276}
            style={{ objectFit: 'cover' }}
            placeholder='blur'
          />
        </Box>

        <Box display={{ base: 'none', md: 'block' }}>
          <Box position="relative" width="100%" height="500px">
            <Image
              src={homepageHero}
              alt='About Blatam'
              fill
              style={{ objectFit: 'cover' }}
              placeholder='blur'
            />
          </Box>

          <Box
            mt={{ lg: 40 }}
            h={52}
            bgGradient='linear(to-b, #ebd1fb 0%, brand.academicGrantsRgba 100%)'
          />
        </Box>
      </Box>
    </Stack>
  );
}; 