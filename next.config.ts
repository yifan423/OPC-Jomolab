import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 92],
    minimumCacheTTL: 31_536_000,
  },
};

export default nextConfig;
