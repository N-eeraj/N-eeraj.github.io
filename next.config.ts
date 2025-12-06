import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: [
    "next-mdx-remote",
  ],
  images: {
    qualities: [25, 50, 75, 100],
  },
}

export default nextConfig
