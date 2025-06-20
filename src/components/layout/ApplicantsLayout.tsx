// components/ApplicantsLayout/ApplicantsLayout.tsx (Assuming this is the path)
import { Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC, useState, useRef, useEffect, useCallback } from 'react'; // Added useRef and useEffect
import {Button} from "@chakra-ui/react";
import { Description, NavigationTabs, MagicButton } from '../UI'; // Assuming '../UI' is correct path
import AddToCalendar from "../domain/index/add-to-calendar"; // Assuming correct path
import { Box, Center, Flex, IconButton, Link as ChakraLink, Text, keyframes } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import type { NextPage } from 'next';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';

// Corrected image import if applicantsHero is in public/images/
// For use in Next.js <Image/> component, you'd typically pass the string path "/images/applicants-hero.png"
// If you are importing it for a variable, ensure it's used correctly (e.g. as StaticImageData if it's an actual import)
// const applicantsHero = "/images/applicants-hero.png"; // If it's in public/images

// This import assumes background-circles.png is treated as a module (e.g. with file-loader or as StaticImageData)
import applicantsHero2 from '../../components/assets/images/background-circles.png';


import {
  APPLICANTS_TABS,
  APPLICANTS_TABS_MAP,
  APPLICANTS_URL,
  GRANTEE_FINANCE_URL,
  OFFICE_HOURS_URL,
  PROJECT_GRANTS_URL,
  SMALL_GRANTS_URL
} from '../../constants';
import PromoBanner from './PromoBanner';
import PricingBanner from './Price'; // Assuming Price.tsx exports PricingBanner or similar
import CourseBuyButton from './CourseBuyButton';
import CourseInfoBar from './CourseInfoBar';
import GraduatePlacement from './GraduatePlacement';
import Testimonials from './Testimonials';
import PricingSection from './PricingSection';
import CourseModality from './CourseModality';
import LearningPathPromo from './LearningPathPromo';
import BlatamBanner from './BlatamBanner';

const useParallax = (elementRef: React.RefObject<HTMLElement>) => {
  const [parallaxMultiplier, setParallaxMultiplier] = useState(0);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const { intersectionRatio } = entries[0];
    setParallaxMultiplier(1 - intersectionRatio);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const options = {
      threshold: Array.from({ length: 101 }, (_, i) => i * 0.01),
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, handleIntersection]);

  return parallaxMultiplier;
};

const parallax = (parallaxMultiplier: number, initial = -15, range = 15) => { // Typed parallaxMultiplier
  const translateY = initial - parallaxMultiplier * range;
  return {
    transform: `translateY(${translateY}%)`,
  };
};

interface ApplicantsLayoutProps {
  children: React.ReactNode;
  windowSize: {
    width: number;
    height: number;
  };
}

const rainbowAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const sparkleAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

export const ApplicantsLayout: FC<ApplicantsLayoutProps> = React.memo(({ children, windowSize }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxMultiplier = useParallax(parallaxRef);

  useEffect(() => {
    setMounted(true);
    setTabIndex(APPLICANTS_TABS_MAP[router.pathname] || 0);
    return () => setMounted(false);
  }, [router.pathname]);

  const handleChange = useCallback((index: number) => {
    setTabIndex(index);
    let pathToGo = APPLICANTS_URL;

    switch (index) {
      case APPLICANTS_TABS_MAP[APPLICANTS_URL]:
        pathToGo = APPLICANTS_URL;
        break;
      case APPLICANTS_TABS_MAP[OFFICE_HOURS_URL]:
        pathToGo = OFFICE_HOURS_URL;
        break;
      case APPLICANTS_TABS_MAP[SMALL_GRANTS_URL]:
        pathToGo = SMALL_GRANTS_URL;
        break;
      case APPLICANTS_TABS_MAP[PROJECT_GRANTS_URL]:
        pathToGo = PROJECT_GRANTS_URL;
        break;
      default:
        break;
    }
    router.push({ pathname: pathToGo }, undefined, { scroll: false });
  }, [router]);

  const isGranteeFinance = router.pathname === GRANTEE_FINANCE_URL;

  // Note: applicantsHero from public should be a string like "/images/applicants-hero.png"
  // If applicantsHero2 is an imported image (StaticImageData), it's used correctly by Next/Image in Description
  // For simplicity, assuming Description component handles 'img.src' as string or StaticImageData

  if (!mounted) {
    return null; // Return null on server-side and initial client render
  }

  return (
    <Stack 
      spacing={{ base: 4, md: 10 }}
      overflow="hidden"
      position="relative"
      width="100%"
      maxW="100vw"
    >
      <Stack 
        mb={{ base: 2, md: 5 }} 
        px={{ base: 4, md: 12 }} 
        py={{ base: 2, md: 3 }}
        position="relative"
        zIndex={1}
      >
        <section 
          id='hero' 
          ref={parallaxRef}
          style={{
            position: 'relative',
            overflow: 'hidden',
            willChange: 'transform'
          }}
        >
          <BlatamBanner />
          <Stack 
            direction={{ base: 'column', sm: 'row' }}
            spacing={3}
            mb={4}
            flexWrap="wrap"
            width="100%"
          >
            <MagicButton
              width={{ base: '100%', sm: 'auto' }}
              size={{ base: 'md', md: 'lg' }}
            >
              Aprende con IA
            </MagicButton>
            <Button
              leftIcon={<Sparkles />}
              variant="outline"
              borderWidth="2px"
              borderColor="purple.300"
              _hover={{ shadow: 'sm' }}
              width={{ base: '100%', sm: 'auto' }}
              size={{ base: 'md', md: 'lg' }}
            >
              En línea y en vivo
            </Button>
          </Stack>

          <Description
            title='Curso de Inteligencia Artificial aplicada al Marketing Digital'
            img={{ src: applicantsHero2, alt: 'Kid watching plants grow', width: 450, height: 248 }}
            windowSize={windowSize}
          >
            Aprende desde cero todos los conceptos fundamentales de IA y descubre cómo integrar inteligencia artificial en tus estrategias de marketing.
            <strong> Duración 4 semanas</strong>
          </Description>

          <Stack 
            direction={{ base: 'column', sm: 'row' }}
            spacing={3}
            mb={4}
            flexWrap="wrap"
            width="100%"
          >
            <Button
              width={{ base: '100%', sm: 'auto' }}
              size={{ base: 'md', md: 'lg' }}
            >
              🌟 5/5 estrellas
            </Button>
          </Stack>

          {mounted && (
            <Stack 
              align="center" 
              spacing={4}
              width="100%"
              maxW="100%"
              overflow="hidden"
              px={{ base: 2, md: 0 }}
            >
              <PromoBanner
                discount="65% OFF"
                paymentLinkText="Ver medios de pago"
              />
              <CourseBuyButton
                itemType="curso"
                gumroadLink="https://blatam.gumroad.com/l/ia"
                tooltipText="Si en las primeras 2 clases del primer curso no alcanzamos tus expectativas, te devolvemos la totalidad del dinero invertido. Solo aplica para tu primer curso en Blatam."
              />
            </Stack>
          )}

          <CourseInfoBar />
          <CourseModality />
          <LearningPathPromo />
        </section>
      </Stack>

      <NavigationTabs 
        tabIndex={tabIndex} 
        handleChange={handleChange} 
        tabsList={APPLICANTS_TABS}
        isSticky={true}
      />
      
      <Stack 
        px={{ base: !isGranteeFinance ? 4 : 0, md: !isGranteeFinance ? 12 : 0 }} 
        py={!isGranteeFinance ? 0 : 8}
        spacing={{ base: 6, md: 8 }}
        width="100%"
        maxW="100%"
        overflow="hidden"
      >
        <Stack mb={{ base: 4, md: 8 }}>{children}</Stack>
        <GraduatePlacement windowSize={windowSize} />
        <Testimonials windowSize={windowSize} />
        <PricingSection windowSize={windowSize} />
      </Stack>
    </Stack>
  );
});

ApplicantsLayout.displayName = 'ApplicantsLayout';