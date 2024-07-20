import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), solidJs(), react()]
});