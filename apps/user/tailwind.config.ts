import uiConfig from "@repo/ui/tailwind.config";
import path from "node:path";
import type { Config } from "tailwindcss";

const userConfig: Config = {
  ...uiConfig,
  presets: [uiConfig],
  content: [
    "./src/layer/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    path.join(path.dirname(require.resolve("@repo/ui")), "**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  plugins: [require("tailwindcss-textshadow")],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "sans-serif"],
      },
      textShadow: {
        ssm: "1px 1px 1px rgba(88, 88, 88, 0.25)",
      },
    },
  },
};
export default userConfig;
