import { useEffect, useState } from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { init } from '@socialgouv/matomo-next';

import { useWindowSize } from '../hooks/useWindowSize';
import { getLayoutHeight } from '../utils';
import theme from '../theme';

import '../global.css';
import 'focus-visible/dist/focus-visible';

// Dynamic imports for better code splitting
const Layout = dynamic(() => import('../components/layout').then(mod => mod.Layout), {
  ssr: true
});

const Banners = dynamic(() => import('../components').then(mod => mod.Banners), {
  ssr: false,
  loading: () => null
});

const TikTokPixel = dynamic(() => import('../components/analytics/TikTokPixel').then(mod => mod.TikTokPixel), {
  ssr: false,
  loading: () => null
});

const Header = dynamic(() => import('../components/layout/Header'), {
  ssr: true
});

const TopPromoBanner = dynamic(() => import('../components/layout/TopPromoBanner'), {
  ssr: false,
  loading: () => null
});

// Lazy load fonts
if (typeof window !== 'undefined') {
  // Dynamic font loading function
  const loadFonts = () => {
    const fontUrls = [
      'https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@200;300;400;700&display=swap'
    ];
    
    fontUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.media = 'print';
      link.onload = () => { link.media = 'all'; };
      document.head.appendChild(link);
    });
  };
  
  // Load fonts after page load
  window.addEventListener('load', loadFonts);
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const windowSize = useWindowSize();
  const isApplicantsPage = router.pathname === '/applicants';

  useEffect(() => {
    // Initialize analytics only if needed
    if (process.env.NEXT_PUBLIC_MATOMO_URL && process.env.NEXT_PUBLIC_MATOMO_SITE_ID) {
      const initAnalytics = async () => {
        await init({
          url: process.env.NEXT_PUBLIC_MATOMO_URL,
          siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID
        });
      };
      initAnalytics();
    }
    setMounted(true);
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

  // Show minimal loading state
  if (!mounted) {
    return (
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Head>
          <title>Blatam</title>
          <meta name="description" content="Blatam website" />
          <link rel="icon" href="/favicon.ico" />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {/* Critical CSS for above-the-fold content */}
          <style dangerouslySetInnerHTML={{
            __html: `
              body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
              .loading { display: flex; justify-content: center; align-items: center; height: 100vh; }
            `
          }} />
        </Head>
        <div className="loading">Loading...</div>
      </ChakraProvider>
    );
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
        <link rel="preload" href="/images/homepage-hero.png" as="image" />
        <link rel="preload" href="/fonts/MaisonNeueMono-Bold.woff2" as="font" type="font/woff2" crossOrigin="" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://analytics.tiktok.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </Head>

      <TikTokPixel />
      <TopPromoBanner />
      <Header />

      {router.isReady ? (
        <Layout {...layoutProps}>
          <Banners />
          <Component {...pageProps} />
        </Layout>
      ) : (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Loading...
        </div>
      )}
    </ChakraProvider>
  );
}

export default MyApp;
