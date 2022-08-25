import { Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import {Button} from "@chakra-ui/react";
import { Description, NavigationTabs } from '../UI';
import AddToCalendar from "../domain/index/add-to-calendar";
import applicantsHero from '../../../public/images/applicants-hero.png';
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

const useParallax = (elementRef: any) => {
  const [parallaxMultiplier, setParallaxMultiplier] = React.useState(0)

  React.useEffect(() => {
    const element = elementRef.current

    if (!element) return

    let options = {
      threshold: new Array(101).fill(0).map((v, i) => i * 0.01),
    }

    const callback = (entries: any) => {
      const { intersectionRatio } = entries[0]

      setParallaxMultiplier(1 - intersectionRatio)
    }

    const observer = new IntersectionObserver(callback, options)

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [elementRef])

  return parallaxMultiplier
}

const parallax = (parallaxMultiplier: any, initial = -15, range = 15) => {
  const translateY = initial - parallaxMultiplier * range

  return {
    transform: `translateY(${translateY}%)`,
  }
}

export const ApplicantsLayout: FC = ({ children }) => {
  const router = useRouter();
  const heroEl = React.useRef(null);
  const parallaxMultiplier = useParallax(heroEl);
  const isScrolled = parallaxMultiplier > 0.15

  const [tabIndex, setTabIndex] = useState(APPLICANTS_TABS_MAP[router.pathname]);

  const handleChange = (index: number) => {
    setTabIndex(index);

    switch (index) {
      case 0:
        router.push(
          {
            pathname: APPLICANTS_URL
          },
          undefined,
          { scroll: false }
        );
        break;

      case 1:
        router.push(
          {
            pathname: OFFICE_HOURS_URL
          },
          undefined,
          { scroll: false }
        );
        break;

      case 2:
        router.push(
          {
            pathname: SMALL_GRANTS_URL
          },
          undefined,
          { scroll: false }
        );
        break;

      case 3:
        router.push(
          {
            pathname: PROJECT_GRANTS_URL
          },
          undefined,
          { scroll: false }
        );
        break;

      default:
        break;
    }
  };

  const isGranteeFinance = router.pathname === GRANTEE_FINANCE_URL;

  return (
    <>
      <Stack mb={5} px={{ base: 5, md: 12 }} py={3} display={!isGranteeFinance ? 'block' : 'none'}>
        <section id='hero'>
          <Button>  ✅<strong> Certificación </strong>  </Button>
          <Button> 🔴 En vivo </Button>

          <Description
            title='Blockchain Consultant'
            img={{ src: applicantsHero2, alt: 'Kid watching plants grow', width: 450, height: 248 }}
          >
            Aprende desde cero todos los conceptos fundamentales de blockchain.
            <strong> Duración 4 semanas</strong>
          </Description>
          <Button> 🌟5 / 5 estrellas </Button>
        </section>
      </Stack>

      <NavigationTabs tabIndex={tabIndex} handleChange={handleChange} tabsList={APPLICANTS_TABS} />

      <Stack px={{ base: !isGranteeFinance ? 5 : 0, md: 12 }}>
        <Stack mb={8}>{children}</Stack>
      </Stack>
    </>
  );
};
