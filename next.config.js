/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd && repoName ? `/${repoName}` : '',
  assetPrefix: isProd && repoName ? `/${repoName}` : undefined,
  images: {
    unoptimized: true
  },
};

module.exports = nextConfig;
