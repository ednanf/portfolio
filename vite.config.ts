import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true, // allows external access
    port: 5173, // your local port
    strictPort: true,
    // allow your ngrok domain
    allowedHosts: ['.ngrok-free.app', '.ngrok.io'],
  },
});
