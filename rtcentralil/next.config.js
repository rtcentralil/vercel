/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  // Additional config options go here
};

module.exports = nextConfig;
