import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/rail-calculator',
    },
    prerender: {
      handleHttpError: ({ path }) => {
        if (path === '/') return; // Ignore errors for the root path
        throw new Error(`Prerendering failed for ${path}`);
      }
    }
  },
  preprocess: vitePreprocess()
};

export default config;
