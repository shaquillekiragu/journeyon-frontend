// vite.config.ts
import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }: ConfigEnv) => {
  // load all env vars (including .env, .env.development, etc)
  const env = loadEnv(mode, process.cwd(), '');

  // fail fast if VITE_API_BASE_URL isn’t set
  if (!env.VITE_API_BASE_URL || env.VITE_API_BASE_URL.trim() === '') {
    throw new Error('Missing required .env variable: VITE_API_BASE_URL');
  }

  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    // inject the now‐guaranteed value back into your client code
    define: {
      'import.meta.env.VITE_API_BASE_URL': JSON.stringify(env.VITE_API_BASE_URL),
    },
  };
});

