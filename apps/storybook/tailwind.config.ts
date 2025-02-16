import path from "node:path";
import preset from "@repo/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Config = {
  presets: [preset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    path.join(path.dirname(require.resolve("@repo/ui")), "src/**/*.{js,ts,jsx,tsx,mdx}"),
  ],
};
export default config;
