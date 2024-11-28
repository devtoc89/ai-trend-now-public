import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // webpack: (config, { dev }) => {
  //   if (dev) {
  //     config.devtool = "source-map";
  //   }
  //   return config;
  // },
  // reactStrictMode: false,
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
