import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.0.40', '192.168.0.40:3000'],
  async rewrites() {
    return [
      {
        source: '/api/products',
        destination: 'https://dummyjson.com/products',
      },
      {
        source: '/api/products/search',
        destination: 'https://dummyjson.com/products/search',
      },
      {
        source: '/api/auth/login',
        destination: 'https://dummyjson.com/auth/login',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
