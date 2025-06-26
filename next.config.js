/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false,
  
  images: {
    domains: ['images.unsplash.com', 'user-images.githubusercontent.com', 'www.facebook.com'],
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
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion', 'react-icons'],
    webpackBuildWorker: true,
    gzipSize: true,
    turbotrace: {
      logLevel: 'error',
      contextDirectory: __dirname,
    },
    serverComponentsExternalPackages: ['sharp'],
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
    // Optimize CSS
    config.optimization.minimize = true;
    config.optimization.minimizer = config.optimization.minimizer || [];
    
    // Handle TypeScript files
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    });

    // Configure chunk filenames
    config.output.chunkFilename = isServer
      ? 'static/chunks/[name].[chunkhash].js'
      : 'static/chunks/[name].[chunkhash].js';

    // Configure module IDs
    config.optimization.moduleIds = 'deterministic';

    // Add resolve fallbacks for dynamic imports
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      path: false,
      os: false,
    };

    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 200000, // Reduced from 244000
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          // Framework chunks
          framework: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            name: 'framework',
            chunks: 'all',
            priority: 40,
            enforce: true,
          },
          // Common vendors
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)?.[1];
              return `npm.${packageName?.replace('@', '')}`;
            },
            chunks: 'all',
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          // Common chunks
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
            chunks: 'initial',
            reuseExistingChunk: true,
          },
          // Default
          default: {
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };
      
      // Tree shaking optimization
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    // Add external dependencies for smaller bundles
    if (!isServer) {
      config.externals = {
        'react-floating-whatsapp': 'ReactFloatingWhatsapp',
        'react-whatsapp-widget': 'ReactWhatsappWidget'
      };
    }

    return config;
  },
  
  typescript: {
    ignoreBuildErrors: true
  },
};

module.exports = nextConfig;
