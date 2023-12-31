import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), icon(
    {
      include: {
        mdi: ["linkedin"],
        ic: ["baseline-mail", "baseline-discord"]
      },
    }
  )],
  output: "server",
  adapter: cloudflare()
});