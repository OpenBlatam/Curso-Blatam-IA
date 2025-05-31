import { Box, Center, Divider, Flex, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

import { ImportantText } from '../headings';
import { PageText } from '../text';
import { WhatsAppButton } from './WhatsAppButton';

import IconTwitter from '../../../components/assets/icons/twitter.svg';
import IconGithub from '../../../components/assets/icons/github.svg';
import IconFace from '../../../components/assets/icons/facebook.svg';
import IconInstagram from '../../../components/assets/icons/instagram.svg';
import IconYoutube from '../../../components/assets/icons/youtube.svg';
import IconTelegram from '../../../components/assets/icons/telegram.svg';
import IconDiscord from '../../../components/assets/icons/discord.svg';

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
            <Image src={IconFace} alt='Facebook logo' height={24} width={24} />
          </Link>
          <Link href={ESP_INSTAGRAM_URL} isExternal mx={2}>
            <Image src={IconInstagram} alt='Instagram logo' height={24} width={24} />
          </Link>
          <Link href={ESP_TWITTER_URL} isExternal mx={2}>
            <Image src={IconTwitter} alt='Twitter logo' height={24} width={24} />
          </Link>
          <Link href={ETHEREUM_GITHUB_URL} isExternal mx={2}>
            <Image src={IconGithub} alt='GitHub logo' height={24} width={24} />
          </Link>
          <Link href={DISCORD_GITHUB_URL} isExternal mx={2}>
            <Image src={IconDiscord} alt='Discord logo' height={24} width={24} />
          </Link>
          <Link href={YOUTUBE_GITHUB_URL} isExternal mx={2}>
            <Image src={IconYoutube} alt='YouTube logo' height={24} width={24} />
          </Link>
          <Link href={TELEGRAM_GITHUB_URL} isExternal mx={2}>
            <Image src={IconTelegram} alt='Telegram logo' height={24} width={24} />
          </Link>
        </Flex>
      </Flex>

      <Divider borderColor='brand.divider.100' opacity={0.5} my={6} maxW="container.xl" mx="auto" />

      <Center>
        <PageText color='white' textAlign='center' fontSize="sm">
          {`© ${currentYear} Blatam All rights reserved.`}
        </PageText>
      </Center>

      <WhatsAppButton 
        phoneNumber="15557666703" // Replace with your actual WhatsApp number
        message="¡Hola! Quiero mas información sobre los cursos de Blatam."
      />
    </Box>
  );
};
