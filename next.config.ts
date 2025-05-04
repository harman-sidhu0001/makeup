import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["kamnamakeup.com"],
    unoptimized: true, // ✅ disables the server-based image optimization
  },
  output: "export", // ✅ enables static export
  trailingSlash: true, // ✅ recommended for SEO and sitemaps
};

export default nextConfig;
