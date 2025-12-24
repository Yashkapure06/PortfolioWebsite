const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes for chatbot
  // If you need static export, you'll need to use a different approach for the chatbot
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Compiler options (SWC is enabled by default in Next.js 12+)
  compiler: {
    // Remove console logs in production (powered by SWC)
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'],
          }
        : false,
  },
  // Note: optimizePackageImports is deprecated in Next.js 16+
  // Package imports are automatically optimized by Next.js/Turbopack
};

module.exports = withNextIntl(nextConfig);
