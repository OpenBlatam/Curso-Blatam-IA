import {ListItem, Stack} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, ReactNode, useState } from 'react';
import { StaticImageData } from 'next/image';

import {Description, List, NavigationTabs, AboutHero} from '../UI';

import {
  ABOUT_URL,
  ABOUT_TABS,
  ABOUT_TABS_MAP,
  HOW_WE_SUPPORT_URL,
  WHO_WE_SUPPORT_URL
} from '../../constants';

import aboutHero from '../../../public/images/about-hero.png';

interface AboutLayoutProps {
  children: ReactNode;
  windowSize: {
    width: number;
    height: number;
  };
}

export const AboutLayout: FC<AboutLayoutProps> = ({ children, windowSize }) => {
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
    <Stack>
      <AboutHero windowSize={windowSize} />
      <Stack>
        <Stack mb={5} px={{ base: 5, md: 12 }} py={3}>
          <section id='hero'>
            <Description
              title='¿Por qué elegir Blatam?'
              img={{ src: aboutHero, alt: 'People reading about the ESP', width: 498, height: 296 }}
              windowSize={windowSize}
            >
              <List>
                <ListItem>
                  <strong>  1.Clases en vivo y actualizadas</strong>. Impartidas por instructores referentes en el ecosistema blockchain.
                </ListItem>
                <ListItem>
                 <strong> 2.Eventos
                   exclusivos. </strong>
                  Podrás unirte a webinars, entrevistas y eventos exclusivos.
                </ListItem>
                <ListItem>
                 <strong> 3.Acceso a nuestra
                   comunidad: </strong> Formarás parte de la comunidad más activa del ecosistema.
                </ListItem>
              </List>

            </Description>
          </section>
        </Stack>

        <NavigationTabs tabIndex={tabIndex} handleChange={handleChange} tabsList={ABOUT_TABS} />

        <Stack px={{ base: 5, md: 12 }}>
          <Stack mb={8}>{children}</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
