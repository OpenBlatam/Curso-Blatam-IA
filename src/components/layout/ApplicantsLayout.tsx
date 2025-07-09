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
import { FooterBlock } from './FooterBlock';

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
    <>
      <Box minH="100vh" display="flex" flexDirection="column" flex={1}>
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
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'rgba(255,255,255,0.2)',
                    border: '2px solid',
                    borderColor: '#a259f7',
                    borderRadius: '20px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#5a0fc8',
                    padding: '8px 18px',
                    boxShadow: '0 2px 8px rgba(160,89,247,0.12)',
                    backdropFilter: 'blur(8px)',
                    transform: 'translateY(-2px)',
                    cursor: 'default',
                    pointerEvents: 'none',
                    minWidth: '120px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      marginRight: 8,
                      fontSize: '1.1em',
                      animation: 'magicSparkle 2s ease-in-out infinite',
                      zIndex: 2
                    }}
                  >
                    <Sparkles size={20} color="#a259f7" />
                  </span>
                  <span
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      fontWeight: 'bold',
                      textShadow: '0 0 10px rgba(160,89,247,0.15)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Aprende con IA
                  </span>
                  {/* Gradiente animado fondo arcoiris */}
                  <span
                    style={{
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
                      backgroundSize: '400% 400%',
                      opacity: 0.3,
                      zIndex: 0,
                      animation: 'magicRainbow 3s ease infinite',
                      pointerEvents: 'none',
                    }}
                  />
                  {/* Gradiente glassy overlay */}
                  <span
                    style={{
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                      backdropFilter: 'blur(8px)',
                      opacity: 0.8,
                      zIndex: 1,
                      animation: 'magicGlass 2s ease-in-out infinite',
                      pointerEvents: 'none',
                    }}
                  />
                  <style>{`
                    @keyframes magicRainbow {
                      0% { background-position: 0% 50%; }
                      50% { background-position: 100% 50%; }
                      100% { background-position: 0% 50%; }
                    }
                    @keyframes magicSparkle {
                      0% { transform: scale(1); opacity: 1; }
                      50% { transform: scale(1.2); opacity: 0.8; }
                      100% { transform: scale(1); opacity: 1; }
                    }
                    @keyframes magicGlass {
                      0% { backdrop-filter: blur(8px); }
                      50% { backdrop-filter: blur(12px); }
                      100% { backdrop-filter: blur(8px); }
                    }
                  `}</style>
                </span>
                <Button
                  leftIcon={<span style={{fontSize: '1.2em', marginRight: 2}}>🔴</span>}
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
                  {/* Banner de próximas fechas y botón */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(255,233,224,0.9) 0%, rgba(237,205,249,0.9) 100%)',
                    borderRadius: 24,
                    padding: '2rem 1.5rem',
                    marginBottom: 12,
                    boxShadow: '0 8px 32px rgba(228,69,80,0.12), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.2)',
                    textAlign: 'center',
                    maxWidth: 420,
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    transition: 'all 0.3s ease-in-out'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(228,69,80,0.18), 0 4px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(228,69,80,0.12), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.2)';
                  }}
                  >
                    {/* Overlay de luz sutil */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      borderRadius: 'inherit',
                      pointerEvents: 'none'
                    }} />
                    
                    <div style={{ 
                      fontWeight: 700, 
                      fontSize: '1.2rem', 
                      color: '#F50087', 
                      marginBottom: 6,
                      textShadow: '0 2px 4px rgba(245,0,135,0.1)',
                      position: 'relative',
                      zIndex: 1
                    }}>Próximas fechas</div>
                    <div style={{ 
                      fontWeight: 600, 
                      color: '#e44550', 
                      fontSize: '1.1rem', 
                      marginBottom: 12,
                      textShadow: '0 1px 2px rgba(228,69,80,0.1)',
                      position: 'relative',
                      zIndex: 1
                    }}>Cupo limitado</div>
                    <div style={{ 
                      color: '#232264', 
                      fontSize: '1rem', 
                      marginBottom: 20,
                      lineHeight: 1.5,
                      position: 'relative',
                      zIndex: 1
                    }}>
                      No te quedes fuera de la próxima certificación.<br />
                      <span style={{ fontWeight: 500 }}>Inicia a principios de cada mes.</span>
                    </div>
                    <a
                      href="https://blatam.gumroad.com/l/ia"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #e44550 0%, #d63a4a 100%)',
                        color: '#fff',
                        borderRadius: 16,
                        padding: '12px 32px',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        textDecoration: 'none',
                        boxShadow: '0 4px 16px rgba(228,69,80,0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
                        transition: 'all 0.3s ease-in-out',
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 1
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #F50087 0%, #e91e63 100%)';
                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(245,0,135,0.35), inset 0 1px 0 rgba(255,255,255,0.3)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #e44550 0%, #d63a4a 100%)';
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(228,69,80,0.25), inset 0 1px 0 rgba(255,255,255,0.2)';
                      }}
                    >
                      {/* Efecto de brillo en hover */}
                      <span style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transition: 'left 0.5s ease-in-out',
                        pointerEvents: 'none'
                      }} />
                      Comprar curso
                    </a>
                  </div>
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
            flex="1"
            px={{ base: !isGranteeFinance ? 4 : 0, md: !isGranteeFinance ? 12 : 0 }} 
            py={!isGranteeFinance ? 0 : 8}
            spacing={{ base: 6, md: 8 }}
            width="100%"
            maxW="100%"
            overflow="hidden"
            mb={0}
            pb={0}
          >
            <Stack mb={{ base: 4, md: 8 }}>{children}</Stack>
            <PricingSection windowSize={windowSize} />
          </Stack>
        </Stack>
      </Box>
      <FooterBlock />
    </>
  );
});

ApplicantsLayout.displayName = 'ApplicantsLayout';