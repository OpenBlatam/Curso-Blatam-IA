import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import type { DocumentContext } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to required origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://user-images.githubusercontent.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://analytics.tiktok.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/MaisonNeueMono-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/css/826c377d86ba0517.css"
          as="style"
        />
        
        {/* DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//analytics.tiktok.com" />
        <link rel="dns-prefetch" href="//platform.twitter.com" />
        
        {/* Critical CSS inline for immediate render */}
        <style dangerouslySetInnerHTML={{
          __html: `
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { 
              margin: 0; 
              padding: 0; 
              overflow-x: hidden; 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              line-height: 1.5;
              font-display: swap;
            }
            .chakra-portal { z-index: 9999; }
            
            /* Prevent CLS for common elements */
            .chakra-stack { min-height: fit-content; }
            .css-ahthbn { min-height: 200px; }
            .chakra-button { min-height: 40px; min-width: 80px; }
            h1, h2, h3, h4, h5, h6 { min-height: 1.2em; }
            
            /* Loading skeleton */
            .loading-skeleton { 
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); 
              background-size: 200% 100%; 
              animation: loading 1.5s infinite; 
            }
            @keyframes loading { 
              0% { background-position: 200% 0; } 
              100% { background-position: -200% 0; } 
            }
            
            /* Image optimization */
            img { 
              max-width: 100%; 
              height: auto; 
              display: block;
            }
            
            /* Performance optimizations */
            .animated-element {
              will-change: transform;
              transform: translateZ(0);
              backface-visibility: hidden;
            }
            
            /* Video containers */
            .video-container {
              position: relative;
              width: 100%;
              aspect-ratio: 16/9;
              background-color: #f0f0f0;
            }
            
            /* Fixed dimensions to prevent CLS */
            .testimonial-container { min-height: 400px; }
            .feature-card { min-height: 300px; }
            .logo-container { min-height: 60px; min-width: 120px; }
            
            /* Mobile optimizations */
            @media (max-width: 768px) {
              .css-ahthbn { min-height: 150px; }
              .banner-container { min-height: 50px; }
              .testimonial-container { min-height: 300px; }
            }
          `
        }} />

        {/* Optimized Google Analytics - load only after full page load */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BSNQ053V7B"
          strategy="lazyOnload"
          defer
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            // Only initialize after significant user interaction and page is loaded
            let gaInitialized = false;
            let pageFullyLoaded = false;
            
            function initGA() {
              if (gaInitialized || !pageFullyLoaded) return;
              gaInitialized = true;
              
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BSNQ053V7B', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: false,
                debug_mode: false,
                minimal: true
              });
              
              // Send page view after initialization with delay
              setTimeout(() => gtag('event', 'page_view'), 500);
            }
            
            // Mark page as fully loaded
            window.addEventListener('load', () => {
              setTimeout(() => {
                pageFullyLoaded = true;
              }, 2000); // Wait 2 seconds after page load
            });
            
            // Initialize GA only after page is fully loaded AND user interacts
            const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
            events.forEach(event => {
              window.addEventListener(event, () => {
                if (pageFullyLoaded) {
                  initGA();
                  // Remove listeners after first initialization
                  events.forEach(e => window.removeEventListener(e, initGA));
                }
              }, { once: true, passive: true });
            });
          `}
        </Script>

        {/* TikTok Pixel - Load after user interaction */}
        <Script
          id="tiktok-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              function initTikTokPixel() {
                !function (w, d, t) {
                  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))} };for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
                  ttq.load('D0TMT6RC77UC6ES2KRFG');
                  ttq.page();
                }(window, document, 'ttq');
              }
              
              // Load TikTok pixel on first user interaction
              ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'].forEach(function(event) {
                window.addEventListener(event, function() {
                  initTikTokPixel();
                }, { once: true, passive: true });
              });
            `,
          }}
        />

        {/* Meta Pixel - Load after user interaction */}
        <Script
          id="meta-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              function initMetaPixel() {
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '755811443466019');
                fbq('track', 'PageView');
              }
              
              // Load Meta pixel on first user interaction
              ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'].forEach(function(event) {
                window.addEventListener(event, function() {
                  initMetaPixel();
                }, { once: true, passive: true });
              });
            `,
          }}
        />
      </Head>
      <body>
        {/* Meta Pixel NoScript - only loaded when needed */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display:'none'}} 
            src="https://www.facebook.com/tr?id=755811443466019&ev=PageView&noscript=1" 
            alt="Meta Pixel"
            loading="lazy"
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  return { ...initialProps };
};
