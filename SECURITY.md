# Sécurité du Portfolio

## 🔒 Fichiers Sensibles

### Fichiers EXCLUS du repository et du build :
- ✅ Fichiers `.env` (variables d'environnement)
- ✅ Fichiers `.pdf` dans `/public/images/`
- ✅ Vidéos de démo dans `/public/vidéo/`

### Pourquoi les images sont visibles ?

Les images du dossier `/public/images/` sont des **ressources publiques** nécessaires pour afficher le site web. C'est **normal et voulu** que ces images soient accessibles :

- Logo (`logo.dev.png`)
- Photos de projets (`image1.JPG`, `image2.jpg`, etc.)
- Icônes et images de présentation

**Important** : Ne jamais mettre de documents sensibles (PDFs, contrats, données personnelles) dans le dossier `public/`.

## 🛡️ Protection en Production

Quand vous déployez le site en production (après `npm run build`) :

### ✅ Ce qui est protégé :
- Code source minifié et illisible
- Pas de source maps
- Console.log supprimés
- Fichiers PDF exclus du build

### ⚠️ Ce qui reste accessible :
- Images publiques (nécessaires pour le site)
- Assets CSS et JS minifiés
- Fichiers dans `/public/` (sauf ceux exclus)

## 📋 Bonnes Pratiques

### NE JAMAIS mettre dans `/public/` :
- ❌ Documents confidentiels (PDFs, contrats)
- ❌ Données personnelles sensibles
- ❌ Clés API ou mots de passe
- ❌ Fichiers internes de l'entreprise

### À mettre dans `/public/` :
- ✅ Images de présentation publiques
- ✅ Logos et icônes
- ✅ Favicon
- ✅ Ressources publiques du site

## 🔐 Variables Sensibles

Utilisez toujours des variables d'environnement pour les données sensibles :

```bash
# Créer un fichier .env (déjà dans .gitignore)
VITE_API_KEY=your_secret_key_here
```

Dans le code :
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

## 🚀 Déploiement Sécurisé

1. **Vérifier .gitignore** avant chaque commit
2. **Builder avec** : `npm run build`
3. **Tester localement** : `npm run preview`
4. **Déployer uniquement** le dossier `/dist/`

## 📞 Contact

Pour toute question de sécurité, contactez l'administrateur.
