import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react()],
  experimental: {
    env: {
      schema: {
        API_URL: envField.string({
          description: 'F1 API URL',
          context: 'server',
          access: 'secret',
          default: 'https://f1-api.sergio-rg.workers.dev',
        }),
      },
    },
  },
});
