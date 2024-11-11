import preset from "@repo/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Config = {
  presets: [preset],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};
export default config;
