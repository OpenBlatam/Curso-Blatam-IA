import { Box, Center, Divider, Flex, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

import { ImportantText } from '../headings';
import { PageText } from '../text';

// Inline SVG components for social media icons (Turbopack compatibility)
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

import blatamLogoSVG from '../../../../public/images/blatam.png';

import {
  ABOUT_URL,
  APPLICANTS_URL,
  ESP_BLOG_URL,
  ESP_TWITTER_URL,
  ETHEREUM_COOKIE_POLICY_URL,
  ETHEREUM_GITHUB_URL,
  DISCORD_GITHUB_URL,
  YOUTUBE_GITHUB_URL,
  TELEGRAM_GITHUB_URL,
  ETHEREUM_ORG_URL,
  ETHEREUM_PRIVACY_POLICY_URL,
  ETHEREUM_TERMS_OF_USE_URL,
  HOME_URL, ESP_FACE_URL, ESP_INSTAGRAM_URL
} from '../../../constants';

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      id='footer'
      bgGradient='linear(to-br, brand.footer.bgGradient.start 10%, brand.footer.bgGradient.end 100%)'
      color="white"
      py={{ base: 10, md: 12 }}
      px={{ base: 4, md: 8, lg: 12 }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        maxW="container.xl"
        mx="auto"
        mb={10}
      >
        <Box mb={{ base: 8, md: 0 }}>
          <Image src={blatamLogoSVG} alt='Blatam logo' height={94} width={100} />
        </Box>

        <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 6, md: 20 }}>
          <Stack spacing={3} mb={{ base: 6, md: 0 }} mr={{ md: 20 }}>
            <Link href={HOME_URL} _hover={{ textDecoration: 'underline' }} textAlign={{ base: 'center', md: 'left' }}>
              <Text>Inicio</Text>
            </Link>
            <Link href={APPLICANTS_URL} _hover={{ textDecoration: 'underline' }} textAlign={{ base: 'center', md: 'left' }}>
              <Text>Cursos</Text>
            </Link>
            <Link href={ABOUT_URL} _hover={{ textDecoration: 'underline' }} textAlign={{ base: 'center', md: 'left' }}>
              <Text>Becas</Text>
            </Link>
          </Stack>

          <Stack spacing={3} mb={{ base: 6, md: 0 }}>
            <Link href={ETHEREUM_PRIVACY_POLICY_URL} isExternal _hover={{ textDecoration: 'underline' }} textAlign={{ base: 'center', md: 'left' }}>
              <Text>Privacy Policy</Text>
            </Link>
            <Link href={ETHEREUM_TERMS_OF_USE_URL} isExternal _hover={{ textDecoration: 'underline' }} textAlign={{ base: 'center', md: 'left' }}>
              <Text>Terminos de Uso</Text>
            </Link>
            <Link href={ETHEREUM_COOKIE_POLICY_URL} isExternal _hover={{ textDecoration: 'underline' }} textAlign={{ base: 'center', md: 'left' }}>
              <Text>Cookie Policy</Text>
            </Link>
            <Link href={ETHEREUM_ORG_URL} isExternal _hover={{ textDecoration: 'underline' }} textAlign={{ base: 'center', md: 'left' }}>
              <Text>Blatam.org</Text>
            </Link>
          </Stack>
        </Flex>

        <Flex justifyContent='center' alignItems='center' pt={{ base: 4, md: 0 }}>
          <Link href={ESP_FACE_URL} isExternal mx={2}>
            <Box color="white" _hover={{ color: 'gray.300' }}>
              <FacebookIcon />
            </Box>
          </Link>
          <Link href={ESP_INSTAGRAM_URL} isExternal mx={2}>
            <Box color="white" _hover={{ color: 'gray.300' }}>
              <InstagramIcon />
            </Box>
          </Link>
          <Link href={ESP_TWITTER_URL} isExternal mx={2}>
            <Box color="white" _hover={{ color: 'gray.300' }}>
              <TwitterIcon />
            </Box>
          </Link>
          <Link href={ETHEREUM_GITHUB_URL} isExternal mx={2}>
            <Box color="white" _hover={{ color: 'gray.300' }}>
              <GitHubIcon />
            </Box>
          </Link>
          <Link href={DISCORD_GITHUB_URL} isExternal mx={2}>
            <Box color="white" _hover={{ color: 'gray.300' }}>
              <DiscordIcon />
            </Box>
          </Link>
          <Link href={YOUTUBE_GITHUB_URL} isExternal mx={2}>
            <Box color="white" _hover={{ color: 'gray.300' }}>
              <YouTubeIcon />
            </Box>
          </Link>
          <Link href={TELEGRAM_GITHUB_URL} isExternal mx={2}>
            <Box color="white" _hover={{ color: 'gray.300' }}>
              <TelegramIcon />
            </Box>
          </Link>
        </Flex>
      </Flex>

      <Divider borderColor='brand.divider.100' opacity={0.5} my={6} maxW="container.xl" mx="auto" />

      <Center>
        <PageText color='white' textAlign='center' fontSize="sm">
          {`© ${currentYear} Blatam All rights reserved.`}
        </PageText>
      </Center>


    </Box>
  );
};
