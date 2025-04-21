/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable build caching for faster rebuilds
  experimental: {
    // Add valid Next.js experimental features here
  },
  // Ensure proper module resolution
  webpack: (config) => {
    return config;
  }
};

export default nextConfig;
