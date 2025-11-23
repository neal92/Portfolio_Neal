import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Désactiver les source maps en production pour la sécurité
    sourcemap: false,
    // Minifier le code
    minify: 'terser',
    terserOptions: {
      compress: {
        // Supprimer les console.log en production
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Optimiser la taille des chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
        // Exclure les fichiers sensibles du build
        assetFileNames: (assetInfo) => {
          // Ne pas inclure les PDFs dans le build
          if (assetInfo.name && assetInfo.name.endsWith('.pdf')) {
            return 'excluded/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
