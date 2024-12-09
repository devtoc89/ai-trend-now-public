import path from "node:path";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/layer/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    path.join(path.dirname(require.resolve("@repo/ui")), "**/*.{js,ts,jsx,tsx,mdx}"),
  ],
};
export default config;
