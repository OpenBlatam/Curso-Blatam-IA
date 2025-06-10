/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize Fast Refresh
    if (dev && !isServer) {
      config.optimization.moduleIds = 'named';
      // Add cache busting for development
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    return config;
  },
  // Add experimental features for better development experience
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    // Add optimizations for development
    optimizePackageImports: ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
  },
  redirects: async () => {
    return [
      {
        source: '/academic-grants',
        destination: '/applicants',
        permanent: true
      },
      {
        source: '/academic-grants/apply',
        destination: '/applicants',
        permanent: true
      },
      {
        source: '/academic-grants/thank-you',
        destination: '/applicants',
        permanent: true
      }
    ];
  }
};
