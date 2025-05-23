import {Box, Container, ContainerProps, Text, useColorModeValue, Link} from '@chakra-ui/react';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';

import { Footer, FooterBackgroundImage, HomepageHero } from '../UI';
import { Forms, NewsletterSignup } from '../forms';
import { ImportantText } from '../UI/headings';
import BlatamLogoText from '../UI/BlatamLogoText';

import {
  AboutLayout,
  AcademicGrantsApplyLayout,
  AcademicGrantsLayout,
  ApplicantsLayout
} from '../layout';
import { Nav } from '../../components';

import {
  ABOUT_URL,
  ACADEMIC_GRANTS_APPLY_URL,
  ACADEMIC_GRANTS_THANK_YOU_PAGE_URL,
  ACADEMIC_GRANTS_URL,
  APPLICANTS_URL,
  DEVCON_GRANTS_APPLY_URL,
  DEVCON_GRANTS_THANK_YOU_PAGE_URL,
  DEVCON_GRANTS_URL,
  HOME_URL,
  ETHEREUM_ORG_URL
} from '../../constants';
import { DevconGrantsLayout } from './DevconGrantsLayout';
import Testimonials from "../Testimonials";
import TweetEmbed from 'react-tweet-embed'
import {left, right} from "@popperjs/core";
import BlatamBannerMain from './BlatamBannerMain';
import { ClientOnly, TweetsSection } from '../client/ClientComponents';

// Import FloatingWhatsApp dynamically with ssr: false
const FloatingWhatsApp = dynamic(
  () => import('react-floating-whatsapp').then(mod => mod.default),
  { ssr: false }
);

interface WindowSize {
  width: number;
  height: number;
}

interface LayoutProps extends ContainerProps {
  children: ReactNode;
  windowSize: WindowSize;
}

// Client-side only home page content
const HomePageContent: FC<{ children: ReactNode; windowSize: WindowSize }> = ({ children, windowSize }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !router.isReady) {
    return <Box minH="400px" />;
  }

  return (
    <Box as="main" minH="100vh">
      <ClientOnly>
        <BlatamBannerMain windowSize={windowSize} />
      </ClientOnly>
      <HomepageHero windowSize={windowSize} />
      {children}
      <TweetsSection />
      <Footer/>
    </Box>
  );
};

export const Layout: FC<LayoutProps> = ({ children, windowSize, ...props }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const bgColor = useColorModeValue('background.primary.light', 'background.primary.dark');
  const componentBgColor = useColorModeValue('background.secondary.light', 'background.secondary.dark');
  const textColor = useColorModeValue('gray.800', 'white');
  const shadow = useColorModeValue('md', 'dark.luxury');
  const borderColor = useColorModeValue('transparent', 'rgba(255, 255, 255, 0.05)');

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderContent = (): ReactNode => {
    if (!mounted || !router.isReady) {
      return <Box minH="400px" />;
    }

    if (router.pathname === HOME_URL) {
      return <HomePageContent windowSize={windowSize}>{children}</HomePageContent>;
    }

    if (router.pathname.startsWith(APPLICANTS_URL)) {
      return (
        <Box as="main" minH="100vh">
          <ApplicantsLayout windowSize={windowSize}>{children}</ApplicantsLayout>
        </Box>
      );
    }

    if (router.pathname.startsWith(ABOUT_URL)) {
      return (
        <Box as="main" minH="100vh">
          <AboutLayout windowSize={windowSize}>{children}</AboutLayout>
        </Box>
      );
    }

    if (router.pathname === DEVCON_GRANTS_URL) {
      return (
        <Box as="main" minH="100vh">
          <DevconGrantsLayout windowSize={windowSize}>{children}</DevconGrantsLayout>
        </Box>
      );
    }

    if (router.pathname === ACADEMIC_GRANTS_URL) {
      return (
        <Box as="main" minH="100vh">
          <AcademicGrantsLayout windowSize={windowSize}>{children}</AcademicGrantsLayout>
        </Box>
      );
    }

    if (
      router.pathname === ACADEMIC_GRANTS_APPLY_URL ||
      router.pathname === ACADEMIC_GRANTS_THANK_YOU_PAGE_URL ||
      router.pathname === DEVCON_GRANTS_APPLY_URL ||
      router.pathname === DEVCON_GRANTS_THANK_YOU_PAGE_URL
    ) {
      return (
        <Box as="main" minH="100vh">
          <AcademicGrantsApplyLayout windowSize={windowSize}>{children}</AcademicGrantsApplyLayout>
        </Box>
      );
    }

    return children;
  };

  return (
    <Box 
      minH="100vh" 
      bg={bgColor}
      color={textColor}
      display="flex" 
      flexDirection="column"
      transition="all 0.3s ease-in-out"
      backgroundImage={useColorModeValue('none', 'linear-gradient(to bottom, #0A0A0A, #121212)')}
    >
      <Nav windowSize={windowSize} />
      
      <Box flex="1" display="flex" flexDirection="column" gap={16}>
        <Container 
          maxW='1900px' 
          px={{ base: 4, md: 8, lg: 12 }} 
          mx="auto"
          bg={bgColor}
          py={12}
          {...props}
        >
          {renderContent()}
        </Container>
        
        {/* Newsletter Signup */}
        {mounted && router.isReady && (
          <ClientOnly>
            <Box 
              maxW='1900px'
              mx="auto"
              bg={componentBgColor}
              boxShadow={shadow}
              borderRadius="lg"
              border="1px solid"
              borderColor={borderColor}
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: { base: 'lg', _dark: 'dark.xl' },
                borderColor: { base: 'transparent', _dark: 'rgba(255, 255, 255, 0.1)' },
              }}
            >
              <NewsletterSignup />
            </Box>
          </ClientOnly>
        )}

        {/* Social Media Section */}
        <Box 
          maxW='1900px' 
          mx="auto" 
          w="100%" 
          display="flex" 
          justifyContent="center"
          py={12}
          px={{ base: 4, md: 8, lg: 12 }}
        >
          <Box w="100%" maxW="1600px">
          </Box>
        </Box>
      </Box>

      {/* Footer section */}
      <Box 
        bg={componentBgColor}
        boxShadow={shadow}
        borderRadius="lg"
        borderTop="1px solid"
        borderColor={borderColor}
        transition="all 0.3s ease-in-out"
        pt={16}
        mt="auto"
        _hover={{
          transform: 'translateY(-1px)',
          boxShadow: { base: 'md', _dark: 'dark.lg' },
          borderColor: { base: 'transparent', _dark: 'rgba(255, 255, 255, 0.15)' },
        }}
      >
  
      </Box>

      {/* Blatam.org link at the very bottom */}
      <Box 
        bg={componentBgColor}
        py={4}
        borderTop="1px solid"
        borderColor={borderColor}
      >
        <Box maxW='1900px' mx="auto">
          <Link
            as={NextLink}
            href={ETHEREUM_ORG_URL}
            isExternal
            _hover={{ textDecoration: 'none' }}
            display="block"
          >
            <ImportantText color='gray.200' textAlign='center'>
              <BlatamLogoText as="span" display="inline" color='gray.200'>Blatam</BlatamLogoText>.org
            </ImportantText>
          </Link>
        </Box>
      </Box>

      {/* Floating WhatsApp Button - fixed position */}
      
        <FloatingWhatsApp
          phoneNumber="+15557666703"
          accountName="Soporte (Maria)"
          statusMessage="¡Hola! ¿En qué puedo ayudarte?"
          chatMessage="¡Hola! ¿En qué puedo ayudarte?"
          placeholder="Escribe tu mensaje..."
        />
  
    </Box>
  );
};