import analogjsangular from "@analogjs/astro-angular";
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    analogjsangular(),
    mdx(),
    tailwind({ applyBaseStyles: false }),
  ],
});
