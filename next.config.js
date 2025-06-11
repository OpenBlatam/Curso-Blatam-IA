/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
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
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };
    }

    // Add external dependencies
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
