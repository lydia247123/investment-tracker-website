import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Set basePath for GitHub Pages subdirectory deployment
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
