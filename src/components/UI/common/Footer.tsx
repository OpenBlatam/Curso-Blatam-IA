import { Box, Center, Divider, Flex, Link, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

import { ImportantText } from '../headings';
import { PageText } from '../text';

import IconArrowUpward from '../../assets/icons/arrow_upward.svg';
import efLogoSVG from '../../../../public/images/blatam.jpeg';
import githubLogoSVG from '../../../../public/images/github-logo.svg';
import twitterLogoSVG from '../../../../public/images/twitter-logo.svg';
import IconTwitter from '../../../components/assets/icons/twitter.svg';
import IconGithub from '../../../components/assets/icons/github.svg';
import IconFace from '../../../components/assets/icons/facebook.svg';
import IconInstagram from '../../../components/assets/icons/instagram.svg';
import IconYoutube from '../../../components/assets/icons/youtube.svg';
import IconTelegram from '../../../components/assets/icons/telegram.svg';
import IconDiscord from '../../../components/assets/icons/discord.svg';
// pages/index.tsx
import WhatsappButton from '../../../components/UI/icons/whats-app';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

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
  return (
    <Box
      id='footer'
      bgGradient='linear(to-br, brand.footer.bgGradient.start 10%, brand.footer.bgGradient.end 100%)'
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={{ lg: 'space-around' }}
        alignItems={{ lg: 'flex-start' }}
      >
        <Center px={5} py={8}>
          <Image src={efLogoSVG} alt='Ethereum Foundation logo' height={94} width={100} />
        </Center>

        <Center px={{ base: 5, lg: 12 }} display={{ base: 'block', lg: 'none' }}>
          <Divider borderColor='brand.divider.100' opacity={1} />
        </Center>

        <Flex
          px={5}
          py={6}
          direction={{ base: 'column', lg: 'row' }}
          alignItems='center'
          mt={{ lg: 5 }}
        >
          <Stack mb={{ base: 2, lg: 0 }} mr={{ lg: 32 }}>
            <Link href={HOME_URL} _hover={{ textDecoration: 'none' }}>
              <ImportantText color='white' textAlign={{ base: 'center', lg: 'left' }}>
                Inicio
              </ImportantText>
            </Link>
            <Link href={APPLICANTS_URL} _hover={{ textDecoration: 'none' }}>
              <ImportantText color='white' textAlign={{ base: 'center', lg: 'left' }}>
                Cursos
              </ImportantText>
            </Link>
            <Link href={ABOUT_URL} _hover={{ textDecoration: 'none' }}>
              <ImportantText color='white' textAlign={{ base: 'center', lg: 'left' }}>
                Becas
              </ImportantText>
            </Link>
           
          </Stack>

          <Stack>
            <Link href={ETHEREUM_PRIVACY_POLICY_URL} isExternal _hover={{ textDecoration: 'none' }}>
              <ImportantText color='white' textAlign={{ base: 'center', lg: 'left' }}>
                Privacy Policy
              </ImportantText>
            </Link>
            <Link href={ETHEREUM_TERMS_OF_USE_URL} isExternal _hover={{ textDecoration: 'none' }}>
              <ImportantText color='white' textAlign={{ base: 'center', lg: 'left' }}>
                Terminos de Uso
              </ImportantText>
            </Link>
            <Link href={ETHEREUM_COOKIE_POLICY_URL} isExternal _hover={{ textDecoration: 'none' }}>
              <ImportantText color='white' textAlign={{ base: 'center', lg: 'left' }}>
                Cookie Policy
              </ImportantText>
            </Link>
            <Link href={ETHEREUM_ORG_URL} isExternal _hover={{ textDecoration: 'none' }}>
              <ImportantText color='white' textAlign={{ base: 'center', lg: 'left' }}>
                Blatam.org
              </ImportantText>
            </Link>
          </Stack>
        </Flex>

        <Flex justifyContent='center' alignItems='center' pt={3} pb={6} mt={{ lg: 7 }}>
          <Box mr={2.5}>
            <Link href={ESP_FACE_URL} isExternal>
              <Image src={IconFace} alt='Twitter logo' height={51} width={50} />
            </Link>
          </Box>
          <Box mr={2.5}>
            <Link href={ESP_INSTAGRAM_URL} isExternal>
              <Image src={IconInstagram} alt='Twitter logo' height={51} width={50} />
            </Link>
          </Box>
          <Box mr={2.5}>
            <Link href={ESP_TWITTER_URL} isExternal>
              <Image src={IconTwitter} alt='Twitter logo' height={51} width={50} />
            </Link>
          </Box>

          <Box mr={2.5}>
            <Link href={ETHEREUM_GITHUB_URL} isExternal>
              <Image src={IconGithub} alt='GitHub logo' height={51} width={50} />
            </Link>
          </Box>
          <Box mr={2.5}>
            <Link href={DISCORD_GITHUB_URL} isExternal>
              <Image src={IconDiscord} alt='GitHub logo' height={51} width={50} />
            </Link>
          </Box>
          <Box mr={2.5}>
            <Link href={YOUTUBE_GITHUB_URL} isExternal>
              <Image src={IconYoutube} alt='GitHub logo' height={51} width={50} />
            </Link>
          </Box>
          <Box>
            <Link href={TELEGRAM_GITHUB_URL} isExternal>
              <Image src={IconTelegram} alt='GitHub logo' height={51} width={50} />
            </Link>
          </Box>
        </Flex>
      </Flex>
      <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Bienvenido</h1>
      <WhatsappButton phoneNumber="15557666703" message="Hola, me interesa tu servicio" />
    </main>
    <FloatingWhatsApp
    phoneNumber="+15557666703"
    accountName="Soporte (Maria)"
    statusMessage="¡Hola! ¿En qué puedo ayudarte?"
    chatMessage="¡Hola! ¿En qué puedo ayudarte?"
    placeholder="Escribe tu mensaje..."
  />
      <Stack>
        <Center px={{ base: 5, lg: 12 }} mt={{ lg: 13 }}>

          <Divider borderColor='brand.divider.100' opacity={1} />
        </Center>
        <Stack px={5} pt={{ base: 3, lg: 6 }} pb={{ base: 5, lg: 10 }}>
          <PageText color='white' textAlign='center'>
            {`© ${new Date().getFullYear()} Blatam All rights reserved.`}
          </PageText>
        </Stack>
      </Stack>
    </Box>
  );
};
