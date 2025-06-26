import { useEffect, useState } from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { init } from '@socialgouv/matomo-next';

import { Layout } from '../components/layout';
import { Banners } from '../components';
import { TikTokPixel } from '../components/analytics/TikTokPixel';
import Header from '../components/layout/Header';
import TopPromoBanner from '../components/layout/TopPromoBanner';
import { useWindowSize } from '../hooks/useWindowSize';
import { getLayoutHeight } from '../utils';
import theme from '../theme';

import '../global.css';
import 'focus-visible/dist/focus-visible';

// Font imports
import '@fontsource/libre-franklin/200.css';
import '@fontsource/libre-franklin/300.css';
import '@fontsource/libre-franklin/400.css';
import '@fontsource/libre-franklin/700.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const windowSize = useWindowSize();
  const isApplicantsPage = router.pathname === '/applicants';

  useEffect(() => {
    // Initialize analytics only if needed and after initial render
    const initializeAnalytics = () => {
      if (process.env.NEXT_PUBLIC_MATOMO_URL && process.env.NEXT_PUBLIC_MATOMO_SITE_ID) {
        init({
          url: process.env.NEXT_PUBLIC_MATOMO_URL,
          siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID
        });
      }
    };
    
    // Delay analytics initialization
    const timer = setTimeout(() => {
      initializeAnalytics();
    }, 2000);
    
    setMounted(true);
    
    return () => clearTimeout(timer);
  }, []);

  const layoutProps = {
    position: 'relative' as const,
    bg: isApplicantsPage ? {
      base: 'brand.homepageHero',
      lg: 'brand.homepageHero'
    } : undefined,
    bgGradient: isApplicantsPage
      ? 'linear(to-b, #F6E6FC 0%, #E7BDF7 83.85%, rgba(231, 189, 247, 0) 100%)'
      : undefined,
    h: { base: '600px', lg: getLayoutHeight(router.pathname) },
    windowSize
  };

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Head>
        <title>Blatam</title>
        <meta name="description" content="Blatam website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/MaisonNeueMono-Bold.woff2" as="font" type="font/woff2" crossOrigin="" />
      </Head>

      <TikTokPixel />
      <TopPromoBanner />
      <Header />

      {router.isReady ? (
        <Layout {...layoutProps}>
          <Banners />
          <Component {...pageProps} />
        </Layout>
      ) : null}
    </ChakraProvider>
  );
}

export default MyApp;
