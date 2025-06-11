import React, { FC, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Loading fallback components
const TweetLoadingFallback = () => (
  <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    Loading tweet...
  </div>
);

const WhatsAppLoadingFallback = () => null;

// Dynamically import client-side only components
const TweetEmbed = dynamic(
  () => import('react-tweet-embed').then(mod => mod.default),
  { 
    ssr: false,
    loading: TweetLoadingFallback
  }
);

const FloatingWhatsApp = dynamic(
  () => import('react-floating-whatsapp'),
  { 
    ssr: false,
    loading: WhatsAppLoadingFallback
  }
);

// Individual tweet component with Suspense
const Tweet: FC<{ tweetId: string }> = ({ tweetId }) => (
  <Suspense fallback={<TweetLoadingFallback />}>
    <div style={{ minHeight: '300px' }}>
      <TweetEmbed tweetId={tweetId} />
    </div>
  </Suspense>
);

// Client-side only wrapper with Suspense
export const ClientOnly: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Use a stable key to prevent unnecessary remounts
  return mounted ? (
    <Suspense fallback={null} key="client-only">
      {children}
    </Suspense>
  ) : null;
};

// Tweets section
export const TweetsSection: FC = () => (
  <ClientOnly>
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '2rem',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '1rem'
    }}>
      <Tweet tweetId="1259204395767681030" />
    </div>
  </ClientOnly>
);

// WhatsApp button
export const WhatsAppButton: FC = () => (
  <ClientOnly>
    <Suspense fallback={<WhatsAppLoadingFallback />}>

    </Suspense>
  </ClientOnly>
); 