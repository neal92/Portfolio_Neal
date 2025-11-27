# Portfolio Neal Bristol

Portfolio personnel moderne développé avec React, TypeScript et Vite.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Démarrage en mode développement
npm run dev

# Build pour la production
npm run build

# Prévisualisation du build
npm run preview
```

## 🔒 Sécurité

### Mesures de sécurité implémentées

- **Minification et obfuscation** : Le code est minifié et obfusqué en production
- **Source maps désactivés** : Les source maps ne sont pas générés en production
- **CSP (Content Security Policy)** : Politique de sécurité du contenu implémentée
- **Headers de sécurité** : X-Frame-Options, X-Content-Type-Options, etc.
- **Dev tools désactivés** : F12, clic droit, etc. désactivés en production
- **Console logs supprimés** : Tous les console.log sont supprimés en production

### ⚠️ Important : Testez en mode production

Les sources sont visibles en mode développement (`npm run dev`) pour faciliter le développement. Pour voir les mesures de sécurité actives :

```bash
# Build de production
npm run build

# Servir le build de production
npm run preview
```

En mode production, vous ne pourrez plus :
- Ouvrir les dev tools avec F12
- Faire un clic droit
- Voir les sources originales
- Voir les console logs

### Vérification de sécurité

```bash
# Vérifier les vulnérabilités
npm audit

# Vérification complète de sécurité
npm run security-check
```

### Variables d'environnement

Copiez `.env.example` vers `.env.local` et configurez vos variables :

```bash
cp .env.example .env.local
```

**⚠️ Important :** Ne commitez jamais de vraies clés API ou informations sensibles !

### Fichiers sensibles

Les fichiers suivants ne doivent jamais être committés :
- `.env*`
- `*.key`, `*.pem`
- `secrets.json`
- Fichiers PDF sensibles

## 🛠️ Technologies utilisées

- React 18
- TypeScript
- Vite
- Tailwind CSS
- i18next (internationalisation)
- Lucide React (icônes)

## 📝 Scripts disponibles

- `npm run dev` : Démarrage du serveur de développement
- `npm run build` : Build de production
- `npm run lint` : Vérification du code
- `npm run preview` : Prévisualisation du build
- `npm run security-check` : Vérifications de sécurité

## 📄 Licence

Tous droits réservés - Neal Bristol