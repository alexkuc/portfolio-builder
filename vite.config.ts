import react from '@vitejs/plugin-react';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/#conditional-config
export default defineConfig(({ mode }) => {
  // https://stackoverflow.com/a/66389044
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const host = process.env.VITE_HOST ?? 'localhost';

  const port = process.env.VITE_PORT ? parseInt(process.env.VITE_PORT) : 5173;

  const https =
    process.env.VITE_HTTPS_KEY && process.env.VITE_HTTPS_CERT
      ? {
          key: readFileSync(
            resolve(__dirname, 'ssl', process.env.VITE_HTTPS_KEY)
          ),
          cert: readFileSync(
            resolve(__dirname, 'ssl', process.env.VITE_HTTPS_CERT)
          ),
        }
      : true;

  const srcPath = resolve(__dirname, './src');

  return {
    plugins: [react()],
    server: {
      host,
      port,
      https,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import 'reset'; @import 'common.scss';`,
          includePaths: [`${srcPath}/utilities`],
        },
      },
    },
  };
});
