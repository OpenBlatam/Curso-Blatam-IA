import {Box, Container, ContainerProps, Text, useColorModeValue, Link} from '@chakra-ui/react';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import NextLink from 'next/link';

import { Footer, FooterBackgroundImage, HomepageHero } from '../UI';
import { ImportantText } from '../UI/headings';
import BlatamLogoText from '../UI/BlatamLogoText';
import { NewsletterSignup } from '../forms/NewsletterSignup';

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
import { ClientOnly, TweetsSection } from '../client/ClientComponents';
import BlatamBannerMain from './BlatamBannerMain';
import { FooterBlock } from './FooterBlock';

// Dynamically import components
const Forms = dynamic(() => import('../forms/Forms'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

interface WindowSize {
  width: number;
  height: number;
}

type ContainerStyleProps = {
  maxW?: string;
  px?: Record<string, number>;
  mx?: string;
  bg?: string;
  py?: number;
};

interface LayoutProps extends Omit<ContainerProps, 'children'> {
  children: ReactNode;
  windowSize: WindowSize;
}

// HomePageContent component
const HomePageContent: FC<{ children: ReactNode; windowSize: WindowSize }> = ({ children, windowSize }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const componentBgColor = useColorModeValue('background.secondary.light', 'background.secondary.dark');
  const shadow = useColorModeValue('md', 'dark.luxury');
  const borderColor = useColorModeValue('transparent', 'rgba(255, 255, 255, 0.05)');

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
      <FooterBlock />
    </Box>
  );
};

// Layout component
export const Layout: FC<LayoutProps> = ({ children, windowSize, ...props }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const bgColor = useColorModeValue('background.primary.light', 'background.primary.dark');
  const componentBgColor = useColorModeValue('background.secondary.light', 'background.secondary.dark');
  const textColor = useColorModeValue('gray.800', 'white');
  const shadow = useColorModeValue('md', 'dark.luxury');
  const borderColor = useColorModeValue('transparent', 'rgba(255, 255, 255, 0.05)');
  const backgroundGradient = useColorModeValue('none', 'linear-gradient(to bottom, #0A0A0A, #121212)');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !router.isReady) {
    return <Box minH="400px" />;
  }

  const path = router.pathname;

  if (path === HOME_URL) {
    return <HomePageContent windowSize={windowSize}>{children}</HomePageContent>;
  }

  const layoutMap = {
    [APPLICANTS_URL]: ApplicantsLayout,
    [ABOUT_URL]: AboutLayout,
    [DEVCON_GRANTS_URL]: DevconGrantsLayout,
    [ACADEMIC_GRANTS_URL]: AcademicGrantsLayout,
  };

  const LayoutComponent = Object.entries(layoutMap).find(([key]) => path.startsWith(key))?.[1];

  const renderContent = () => {
    if (LayoutComponent) {
      return (
        <Box as="main" minH="100vh">
          <LayoutComponent windowSize={windowSize}>{children}</LayoutComponent>
        </Box>
      );
    }

    if ([
      ACADEMIC_GRANTS_APPLY_URL,
      ACADEMIC_GRANTS_THANK_YOU_PAGE_URL,
      DEVCON_GRANTS_APPLY_URL,
      DEVCON_GRANTS_THANK_YOU_PAGE_URL
    ].includes(path)) {
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
      backgroundImage={backgroundGradient}
    >
      <Nav windowSize={windowSize} />
      
      <Box flex="1" display="flex" flexDirection="column" gap={16}>
        <Container 
          maxW='1900px' 
          px={{ base: 4, md: 8, lg: 12 }} 
          mx="auto"
          bg={bgColor}
          py={12}
          mt={{ base: "70px", sm: "85px", md: "100px" }}
          {...(props as ContainerStyleProps)}
        >
          {renderContent()}
        </Container>
        
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
    </Box>
  );
};