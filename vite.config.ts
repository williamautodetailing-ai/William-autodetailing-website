import { defineConfig, build, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

// After the client build, render every page to static HTML (scripts/prerender.mjs),
// so Google and AI crawlers that don't run JavaScript still get each page's content.
// It runs inside `vite build` itself, so it works whatever build command the host uses.
function prerender(): Plugin {
  let isSsr = false;
  return {
    name: 'prerender',
    apply: 'build',
    configResolved(config) {
      isSsr = !!config.build.ssr;
    },
    async closeBundle() {
      if (isSsr) return;
      await build({
        logLevel: 'warn',
        build: { ssr: 'src/entry-server.tsx', outDir: '.ssr-tmp', emptyOutDir: true },
      });
      await import(pathToFileURL(resolve('scripts/prerender.mjs')).href);
    },
  };
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), prerender()],
  build: {
    rollupOptions: {
      output: isSsrBuild ? {} : {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'icons': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  ssr: {
    noExternal: ['lucide-react'],
  },
}));
