/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['media.graphassets.com'],
  },
};

const isProd = process.env.NODE_ENV === 'production';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
});

withPWA;
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd,
    sw: 'service-worker.js',
  },
});

module.exports = nextConfig;
