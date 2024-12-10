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
  // serverRuntimeConfig: {},
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['next-mdx-remote'],
};




export default nextConfig
