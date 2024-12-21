import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

function getNextConfig() {
  if (process.env.ANALYZE !== "true" || process.env.NODE_ENV === "production") {
    return nextConfig;
  }
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  });
  return withBundleAnalyzer(nextConfig);
}

export default getNextConfig();
