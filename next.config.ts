import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    formats: ["image/webp"],
    qualities: [75, 92],
    minimumCacheTTL: 31_536_000,
  },
};

export default nextConfig;
