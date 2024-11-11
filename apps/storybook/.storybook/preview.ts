import "./globals.css";
// import "@repo/ui/styles.css";
// import "@repo/tailwind-config/globals.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // 👇 Default values
        // { name: "Dark", value: "#333" },
        // { name: "Light", value: "#F7F9F2" },
        // { name: "Maroon", value: "#400" },
        // { name: "Background", value: "#E5E5E5" },
      ],
      // 👇 Specify which background is shown by default
      // default: 'Background',
    },
  },
};

export default preview;
