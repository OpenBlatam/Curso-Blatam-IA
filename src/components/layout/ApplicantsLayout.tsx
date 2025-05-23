// components/ApplicantsLayout/ApplicantsLayout.tsx (Assuming this is the path)
import { Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC, useState, useRef, useEffect } from 'react'; // Added useRef and useEffect
import {Button} from "@chakra-ui/react";
import { Description, NavigationTabs } from '../UI'; // Assuming '../UI' is correct path
import AddToCalendar from "../domain/index/add-to-calendar"; // Assuming correct path

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

const useParallax = (elementRef: React.RefObject<HTMLElement>) => { // Typed elementRef
  const [parallaxMultiplier, setParallaxMultiplier] = useState(0); // Explicitly typed useState

  useEffect(() => { // Changed React.useEffect to useEffect
    const element = elementRef.current;

    if (!element) return;

    let options = {
      threshold: Array.from({ length: 101 }, (_, i) => i * 0.01),
    };

    const callback = (entries: IntersectionObserverEntry[]) => { // Typed entries
      const { intersectionRatio } = entries[0];
      setParallaxMultiplier(1 - intersectionRatio);
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef]);

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

export const ApplicantsLayout: FC<ApplicantsLayoutProps> = ({ children, windowSize }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxMultiplier = useParallax(parallaxRef);

  useEffect(() => {
    setMounted(true);
    setTabIndex(APPLICANTS_TABS_MAP[router.pathname] || 0);
  }, [router.pathname]);

  const handleChange = (index: number) => {
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
  };

  const isGranteeFinance = router.pathname === GRANTEE_FINANCE_URL;

  // Note: applicantsHero from public should be a string like "/images/applicants-hero.png"
  // If applicantsHero2 is an imported image (StaticImageData), it's used correctly by Next/Image in Description
  // For simplicity, assuming Description component handles 'img.src' as string or StaticImageData

  if (!mounted) {
    return null; // Return null on server-side and initial client render
  }

  return (
    <Stack spacing={10}>
      <Stack mb={5} px={{ base: 5, md: 12 }} py={3}>
        <section id='hero' ref={parallaxRef}>
          <BlatamBanner />
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <Button>✅ <strong>Certificación</strong></Button>
            <Button>🔴 En vivo</Button>
          </div>

          <Description
            title='Curso de Inteligencia Artificial aplicada al Marketing Digital'
            img={{ src: applicantsHero2, alt: 'Kid watching plants grow', width: 450, height: 248 }}
            windowSize={windowSize}
          >
            Aprende desde cero todos los conceptos fundamentales de IA y descubre cómo integrar inteligencia artificial en tus estrategias de marketing.
            <strong> Duración 4 semanas</strong>
          </Description>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <Button>🌟 5/5 estrellas</Button>
          </div>

          {mounted && (
            <Stack align="center" spacing={4}>
              <PromoBanner
                discount="65% OFF"
                originalPrice="$4,290 MXN"
                newPrice="$1,502 MXN"
                additionalInfo="Hasta 12 meses sin interés de $125 MXN"
                duration=""
                paymentLinkText="Ver medios de pago"
              />
              <CourseBuyButton
                itemType="curso"
                gumroadLink="https://astrixial.gumroad.com/l/ia"
                tooltipText="Si en las primeras 2 clases del primer curso no alcanzamos tus expectativas, te devolvemos la totalidad del dinero invertido. Solo aplica para tu primer curso en Blatam."
              />
            </Stack>
          )}

          <CourseInfoBar />
          <CourseModality />
          <LearningPathPromo />
        </section>
      </Stack>

      <NavigationTabs tabIndex={tabIndex} handleChange={handleChange} tabsList={APPLICANTS_TABS} />
      <Stack px={{ base: !isGranteeFinance ? 5 : 0, md: !isGranteeFinance ? 12 : 0 }} py={!isGranteeFinance ? 0 : 8}> {/* Adjusted padding for grantee finance page */}
        <Stack mb={8}>{children}</Stack>
        <GraduatePlacement windowSize={windowSize} />
        <Testimonials windowSize={windowSize} />
        <PricingSection windowSize={windowSize} />
      </Stack>
    </Stack>
  );
};