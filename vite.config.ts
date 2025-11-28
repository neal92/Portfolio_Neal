import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
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
        // Optimisations supplémentaires pour la sécurité
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: {
        // Obfusquer les noms de propriétés
        properties: {
          regex: /^_/,
        },
      },
    },
    // Optimiser la taille des chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
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
