import { Box, Center, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaXTwitter, FaYoutube, FaInstagram, FaTiktok, FaDiscord, FaTwitch, FaFacebook, FaTelegram } from 'react-icons/fa6';
import {
  ESP_FACE_URL,
  ESP_INSTAGRAM_URL,
  ESP_TWITTER_URL,
  ETHEREUM_GITHUB_URL,
  DISCORD_GITHUB_URL,
  YOUTUBE_GITHUB_URL,
  TELEGRAM_GITHUB_URL
} from '../../constants';

export const FooterBlock: FC = () => {
  const currentYear = new Date().getFullYear();

  const iconProps = { size: 22, style: { margin: '0 8px' }, color: '#222' };
  const icons = [
    { href: ESP_FACE_URL, label: 'Facebook', icon: <FaFacebook {...iconProps} /> },
    { href: ESP_INSTAGRAM_URL, label: 'Instagram', icon: <FaInstagram {...iconProps} /> },
    { href: ESP_TWITTER_URL, label: 'X', icon: <FaXTwitter {...iconProps} /> },
    { href: ETHEREUM_GITHUB_URL, label: 'GitHub', icon: <FaGithub {...iconProps} /> },
    { href: DISCORD_GITHUB_URL, label: 'Discord', icon: <FaDiscord {...iconProps} /> },
    { href: YOUTUBE_GITHUB_URL, label: 'YouTube', icon: <FaYoutube {...iconProps} /> },
    { href: TELEGRAM_GITHUB_URL, label: 'Telegram', icon: <FaTelegram {...iconProps} /> },
  ];

  return (
    <Box position="relative" bg="white" color="#222" pt={12} pb={40} px={4} borderTop="1px solid #eee" overflow="hidden">
      {/* Fondo de texto gigante BLATAM */}
      <Box
        position="absolute"
        top="60%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={0}
        w="100%"
        textAlign="center"
        pointerEvents="none"
        userSelect="none"
      >
        <Text
          fontSize="clamp(60px, 18vw, 320px)"
          fontWeight={800}
          textTransform="uppercase"
          letterSpacing="0.05em"
          color="#eaeaea"
          opacity={0.5}
          lineHeight={1}
          style={{
            background: 'linear-gradient(to bottom, #eaeaea 80%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          BLATAM
        </Text>
        {/* Overlay degradado blanco en la parte inferior */}
        <Box
          position="absolute"
          left={0}
          bottom={0}
          w="100%"
          h="60%"
          zIndex={1}
          pointerEvents="none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 60%, #fff 100%)',
          }}
        />
      </Box>
      {/* Contenido del footer */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" position="relative" zIndex={1} mb={4}>
        <Box w={{ base: '100%', md: '50%' }} textAlign="center" mb={{ base: 2, md: 0 }}>
          <Text fontSize="md">
            © {currentYear} Blatam. Todos los derechos reservados.
          </Text>
        </Box>
        <Box w={{ base: '100%', md: '50%' }} textAlign={{ base: 'center', md: 'right' }}>
          <Flex justifyContent={{ base: 'center', md: 'flex-end' }} alignItems="center">
            {icons.map((icon, i) => (
              <Link key={i} href={icon.href} isExternal aria-label={icon.label} mx={1} _hover={{ opacity: 0.7 }}>
                {icon.icon}
              </Link>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}; 