/** @type {import('next').NextConfig} */
const crypto = require('crypto');

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.facebook.com',
      },
    ],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60, // 1 minute default
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
  },
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  webpack: (config, { dev, isServer }) => {
    // Basic optimization for production only
    if (!dev && !isServer) {
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    return config;
  },
  
  typescript: {
    ignoreBuildErrors: true
  },
};

module.exports = nextConfig;
