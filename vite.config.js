// ...existing code...
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'


// ...existing code...
export default defineConfig({
  base: '/remote-homepage/',
  plugins: [
    react(),
    federation({
      name: 'remote-homepage',
      filename: 'remoteEntry.js',
      exposes: {
        './Homepage': './src/pages/Homepage.jsx',
      },
      shared: [
        'react',
        'react-dom',
      ],
    }),
    {
      name: 'vite-plugin-notify-host-on-rebuild',
      apply(config, { command }) {
        return Boolean(command === 'build' && config?.build?.watch)
      },
      async buildEnd(error) {
        if (!error) {
          {
            try {
              await fetch('http://localhost:5000/__fullReload')
            } catch (err) {
              console.warn('Could not notify host to reload:', err)
            }
          }
        }
      }
    },
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: true,
    cssCodeSplit: true,
    outDir: 'dist',
  },
  preview: {
    port: 5002,
    strictPort: true,
  },
})
// ...existing code...