import { Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { Description, NavigationTabs } from '../UI';

import {
  ABOUT_URL,
  ABOUT_TABS,
  ABOUT_TABS_MAP,
  HOW_WE_SUPPORT_URL,
  WHO_WE_SUPPORT_URL
} from '../../constants';

import aboutHero from '../../../public/images/about-hero.png';

export const AboutLayout: FC = ({ children }) => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(ABOUT_TABS_MAP[router.pathname]);

  const handleChange = (index: number) => {
    setTabIndex(index);

    switch (index) {
      case 0:
        router.push(
          {
            pathname: ABOUT_URL
          },
          undefined,
          { scroll: false }
        );
        break;

      case 1:
        router.push(
          {
            pathname: WHO_WE_SUPPORT_URL
          },
          undefined,
          { scroll: false }
        );
        break;

      case 2:
        router.push(
          {
            pathname: HOW_WE_SUPPORT_URL
          },
          undefined,
          { scroll: false }
        );
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Stack mb={5} px={{ base: 5, md: 12 }} py={3}>
        <section id='hero'>
          <Description
            title='¿Por qué elegir Blatam?'
            img={{ src: aboutHero, alt: 'People reading about the ESP', width: 498, height: 296 }}
          >
            1.Clases en vivo y actualizadas
            Impartidas por instructores referentes en el ecosistema blockchain.
            2.Eventos
            exclusivos
            Podrás unirte a webinars, entrevistas y eventos exclusivos.
            3.Acceso a nuestra
            comunidad
            Formarás parte de la comunidad más activa del ecosistema.
          </Description>
        </section>
      </Stack>

      <NavigationTabs tabIndex={tabIndex} handleChange={handleChange} tabsList={ABOUT_TABS} />

      <Stack px={{ base: 5, md: 12 }}>
        <Stack mb={8}>{children}</Stack>
      </Stack>
    </>
  );
};
