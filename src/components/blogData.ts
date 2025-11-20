export interface BlogPost {
  id: string;
  title: string;
  category: 'Technical' | 'Tutorial' | 'FAQ' | 'Best Practices';
  question: string;
  answer: string;
  tags: string[];
  date: string;
  readTime: string;
}

const blogData: BlogPost[] = [
  {
    id: 'react-performance',
    title: 'Comment optimiser les performances React ?',
    category: 'Best Practices',
    question: 'Quelles sont les meilleures pratiques pour optimiser les performances d\'une application React ?',
    answer: `Les performances React peuvent être optimisées de plusieurs façons :

**1. Utiliser React.memo()** pour éviter les re-renders inutiles des composants fonctionnels.

**2. Optimiser les hooks** :
- useCallback pour mémoriser les fonctions
- useMemo pour mémoriser les calculs coûteux
- useRef pour les valeurs qui ne déclenchent pas de re-render

**3. Code-splitting** avec React.lazy() et Suspense pour charger le code à la demande.

**4. Virtualisation des listes** avec react-window ou react-virtualized pour les grandes listes.

**5. Éviter les inline functions** dans les props qui créent de nouvelles références à chaque render.

**6. Profiler l'application** avec React DevTools Profiler pour identifier les goulots d'étranglement.`,
    tags: ['React', 'Performance', 'Optimization'],
    date: '2024-11-15',
    readTime: '5 min'
  },
  {
    id: 'typescript-benefits',
    title: 'Pourquoi utiliser TypeScript ?',
    category: 'FAQ',
    question: 'Quels sont les avantages de TypeScript par rapport à JavaScript ?',
    answer: `TypeScript apporte de nombreux avantages au développement JavaScript :

**1. Typage statique** - Détecte les erreurs à la compilation plutôt qu'à l'exécution.

**2. Meilleure autocomplétion** - Les IDE peuvent fournir des suggestions plus précises.

**3. Refactoring sécurisé** - Renommer ou modifier du code devient moins risqué.

**4. Documentation vivante** - Les types servent de documentation auto-générée.

**5. Écosystème mature** - Excellent support des bibliothèques populaires avec @types.

**6. Gradual adoption** - Peut être adopté progressivement dans un projet JavaScript existant.

En résumé, TypeScript améliore la maintenabilité et réduit les bugs dans les grandes applications.`,
    tags: ['TypeScript', 'JavaScript', 'Development'],
    date: '2024-11-10',
    readTime: '4 min'
  },
  {
    id: 'rest-api-design',
    title: 'Comment concevoir une API REST ?',
    category: 'Technical',
    question: 'Quels sont les principes pour créer une API REST bien structurée ?',
    answer: `Une bonne API REST suit ces principes fondamentaux :

**1. Utiliser les méthodes HTTP correctement** :
- GET pour récupérer des données
- POST pour créer
- PUT/PATCH pour mettre à jour
- DELETE pour supprimer

**2. Nommage des ressources** :
- Utiliser des noms au pluriel (/users, /posts)
- Éviter les verbes dans les URLs
- Structure hiérarchique claire (/users/123/posts)

**3. Codes de statut HTTP appropriés** :
- 200 OK, 201 Created, 204 No Content
- 400 Bad Request, 401 Unauthorized, 404 Not Found
- 500 Internal Server Error

**4. Versioning** de l'API (v1, v2) pour maintenir la compatibilité.

**5. Pagination** pour les grandes collections de données.

**6. Filtrage et tri** via query parameters (?sort=date&filter=active).

**7. Documentation** complète avec Swagger/OpenAPI.`,
    tags: ['API', 'REST', 'Backend', 'Node.js'],
    date: '2024-11-05',
    readTime: '6 min'
  },
  {
    id: 'responsive-design',
    title: 'Comment créer un design responsive ?',
    category: 'Tutorial',
    question: 'Quelles techniques utiliser pour rendre un site web responsive ?',
    answer: `Le design responsive repose sur plusieurs techniques :

**1. Mobile-First Approach** - Commencer par le design mobile puis adapter pour desktop.

**2. CSS Grid et Flexbox** - Layouts flexibles qui s'adaptent automatiquement.

**3. Media Queries** - Breakpoints pour différentes tailles d'écran :
\`\`\`css
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
\`\`\`

**4. Unités relatives** - Utiliser rem, em, %, vh/vw au lieu de px fixes.

**5. Images responsives** :
- srcset pour différentes résolutions
- object-fit pour l'adaptation des images
- lazy loading pour les performances

**6. Frameworks CSS** comme Tailwind CSS qui facilitent le responsive.

**7. Test sur vrais appareils** et outils de développement du navigateur.`,
    tags: ['CSS', 'Responsive', 'Design', 'Tailwind'],
    date: '2024-10-28',
    readTime: '7 min'
  },
  {
    id: 'git-workflow',
    title: 'Quel workflow Git utiliser ?',
    category: 'Best Practices',
    question: 'Comment organiser les branches et commits dans un projet Git ?',
    answer: `Un bon workflow Git améliore la collaboration :

**1. Git Flow** - Workflow classique avec plusieurs branches :
- main/master : code en production
- develop : développement en cours
- feature/* : nouvelles fonctionnalités
- hotfix/* : corrections urgentes

**2. Commits atomiques** - Un commit = une modification logique.

**3. Messages de commit clairs** :
\`\`\`
feat: ajoute la page blog
fix: corrige l'affichage mobile
docs: met à jour le README
\`\`\`

**4. Pull Requests** avec code review avant de merger.

**5. Protéger la branche main** - Pas de push direct, uniquement via PR.

**6. Rebase vs Merge** - Choisir selon le contexte pour garder un historique propre.

**7. Tags** pour marquer les versions (v1.0.0, v2.0.0).`,
    tags: ['Git', 'Version Control', 'Workflow'],
    date: '2024-10-20',
    readTime: '5 min'
  },
  {
    id: 'security-web',
    title: 'Comment sécuriser une application web ?',
    category: 'Technical',
    question: 'Quelles mesures de sécurité implémenter dans une application web ?',
    answer: `La sécurité web nécessite une approche multicouche :

**1. Authentification & Autorisation** :
- JWT avec expiration
- Sessions sécurisées
- OAuth 2.0 pour l'intégration externe

**2. Protection contre les attaques courantes** :
- XSS : échapper les données utilisateur
- CSRF : tokens anti-CSRF
- SQL Injection : requêtes préparées
- Clickjacking : X-Frame-Options

**3. HTTPS obligatoire** avec certificats SSL/TLS valides.

**4. Headers de sécurité** :
- Content-Security-Policy
- Strict-Transport-Security
- X-Content-Type-Options

**5. Validation des données** côté client ET serveur.

**6. Rate limiting** pour prévenir les attaques par force brute.

**7. Dépendances à jour** - Auditer régulièrement avec npm audit.

**8. Logging et monitoring** pour détecter les activités suspectes.`,
    tags: ['Security', 'Web', 'Backend', 'Best Practices'],
    date: '2024-10-15',
    readTime: '8 min'
  }
];

export default blogData;
