import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-i18next', 'i18next'],
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
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
        },
      },
    },
    // Sécurité supplémentaire
    reportCompressedSize: false, // Ne pas afficher la taille des fichiers
  },
  // Variables d'environnement sécurisées
  server: {
    headers: {
      // Headers de cache pour les fichiers médias
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
    fs: {
      // Permettre l'accès aux fichiers du répertoire public
      allow: ['.'],
    },
    // Configuration spécifique pour les vidéos
    cors: true,
    hmr: {
      overlay: false,
    },
  },
});
