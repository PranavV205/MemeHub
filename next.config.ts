import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://i.redd.it/**')]
  }
};

export default nextConfig;
