/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['images.unsplash.com', 'user-images.githubusercontent.com', 'www.facebook.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@mui/material', '@mui/icons-material']
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize CSS
    config.optimization.minimize = true;
    config.optimization.minimizer = config.optimization.minimizer || [];

    // Basic optimization settings
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const match = module.context?.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              return match ? `npm.${match[1].replace('@', '')}` : 'npm.unknown';
            },
            priority: 30
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20
          },
          shared: {
            name(module, chunks) {
              return `shared.${chunks.map(c => c.name).join('~')}`;
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true
          }
        }
      }
    };

    // Handle TypeScript files
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          },
        },
      ],
    });

    // Configure chunk filenames
    if (!isServer) {
      config.output.chunkFilename = dev
        ? 'static/chunks/[name].[contenthash].js'
        : 'static/chunks/[name].[contenthash].js';
    }

    // Add resolve fallbacks for dynamic imports
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
      net: false,
      tls: false,
    };

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
