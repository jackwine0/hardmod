import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(), // Enable React support
  ],
  resolve: {
    alias: {
      '@': '/src', // Example alias for src directory, adjust as per your project structure
    },
  },
  optimizeDeps: {
    include: [
      '@cloudinary/react', // Ensure Cloudinary React SDK is included in optimizations
      'cloudinary-core', // Ensure Cloudinary core library is included
    ],
  },
});
