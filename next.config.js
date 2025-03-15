/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
    localeDetection: false
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    return config;
  },
  // Page configuration
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Image configuration
  images: {
    disableStaticImages: true,
    domains: ['ukmaqdzqwalaxpsqklcy.supabase.co'], // Supabase storage domain
  },
}

module.exports = nextConfig 