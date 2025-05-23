import {useEffect, useState} from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { init } from '@socialgouv/matomo-next';

import { Layout } from '../components/layout';
import { Banners } from '../components';

import { getBg, getBgGradient, getLayoutHeight } from '../utils';

import theme from '../theme';

import '../global.css';
import 'focus-visible/dist/focus-visible';
import '@fontsource/libre-franklin/200.css';
import '@fontsource/libre-franklin/300.css';
import '@fontsource/libre-franklin/400.css';
import '@fontsource/libre-franklin/700.css';

import favicon from '../../public/images/favicon.ico';
import favicon16 from '../../public/images/favicon-16x16.png';
import favicon32 from '../../public/images/favicon-32x32.png';
import Header from '../components/layout/Header';
import { WhatsAppButton } from '../components/client/ClientComponents';

interface WindowSize {
  width: number;
  height: number;
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const headerHeight = '80px'; // Match the initial height of your Header

  // Add windowSize state and effect
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    init({
      url: process.env.NEXT_PUBLIC_MATOMO_URL!,
      //url: process.env.NEXT_PUBLIC_MATOMO_URL!,
      siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID!
    });
    setMounted(true);

    // Window resize effect
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <WhatsAppButton/>
      <Head>
        <title>Blatam</title>
        <meta name="description" content="Blatam website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='icon' type='image/x-icon' href={favicon.src} />
        <link rel='icon' type='image/png' sizes='32x32' href={favicon32.src} />
        <link rel='icon' type='image/png' sizes='16x16' href={favicon16.src} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Header />

      {mounted ? (
        <Layout
          position='relative'
          bg={{
            base: router.pathname === '/applicants' ? 'brand.homepageHero' : undefined,
            lg: router.pathname === '/applicants' ? 'brand.homepageHero' : undefined,
          }}
          bgGradient={
            router.pathname === '/applicants'
              ? 'linear(to-b, #F6E6FC 0%, #E7BDF7 83.85%, rgba(231, 189, 247, 0) 100%)'
              : undefined
          }
          h={{ base: '600px', lg: getLayoutHeight(router.pathname) }}
          windowSize={windowSize}
        >
          <Banners />
          <Component {...pageProps} />
        </Layout>
      ) : null}
    </ChakraProvider>
  );
}

export default MyApp;
