import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';

// Désactiver les dev tools en production pour la sécurité
if (import.meta.env.PROD) {
  // Désactiver le clic droit
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  // Désactiver F12 et autres raccourcis dev
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.shiftKey && e.key === 'J') ||
      (e.ctrlKey && e.shiftKey && e.key === 'C') ||
      (e.ctrlKey && e.key === 'u')
    ) {
      e.preventDefault();
      return false;
    }
  });

  // Supprimer les références aux sources
  if (window.console) {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
    console.info = () => {};
    console.debug = () => {};
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
