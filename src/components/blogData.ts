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
        id: 'moi',
        title: 'Why work with me?',
        category: 'FAQ',
        question: 'Why should you hire me for your web development project?',
        answer: `Working with me means choosing a passionate developer dedicated to your project's success. 
        Here are some reasons why I'm the right choice:
        
            1. Technical expertise - I master modern technologies like React, Node.js, and many others, 
                ensuring clean and performant code.

            2. Clear communication - I believe in transparent communication throughout the project,
                ensuring your needs are always understood and taken into account.

            3. Meeting deadlines - I commit to delivering projects within agreed timelines without compromising quality.

            4. Custom solutions - Each project is unique, and I strive to provide solutions tailored to your specific objectives.

            5. Ongoing support - My commitment doesn't stop at delivery; I'm here to help with maintenance and updates.
        In summary, I'm passionate about web development and determined to make your project a success!`,
        tags: ['React', 'Performance', 'Optimization'],
        date: '2024-11-15',
        readTime: '5 min'

  },


  {
    id: 'react-performance',
    title: 'How to optimize React performance?',
    category: 'Best Practices',
    question: 'What are the best practices to optimize React application performance?',
    answer: `React performance can be optimized in several ways:

    1. Use React.memo() to avoid unnecessary re-renders of functional components.

    2. Optimize hooks:
    - useCallback to memoize functions
    - useMemo to memoize expensive calculations
    - useRef for values that don't trigger re-renders

    3. Code-splitting with React.lazy() and Suspense to load code on demand.`,
    tags: ['React', 'Performance', 'Optimization'],
    date: '2024-11-15',
    readTime: '5 min'

  },

  
  {
        id: 'typescript-benefits',
        title: 'Why use TypeScript?',
        category: 'FAQ',
        question: 'What are the advantages of TypeScript over JavaScript?',
        answer: `TypeScript brings many advantages to JavaScript development:

        1. Static typing - Detects errors at compile time rather than runtime.

        2. Better autocomplete - IDEs can provide more accurate suggestions.

        3. Safe refactoring - Renaming or modifying code becomes less risky.

        4. Living documentation - Types serve as auto-generated documentation.

        In summary, TypeScript improves maintainability and reduces bugs in large applications.`,
        tags: ['TypeScript', 'JavaScript', 'Development'],
        date: '2024-11-10',
        readTime: '4 min'
  },

  {
        id: 'rest-api-design',
        title: 'How to design a REST API?',
        category: 'Technical',
        question: 'What are the principles for creating a well-structured REST API?',
        answer: `A good REST API follows these fundamental principles:

        1. Use HTTP methods correctly:
        - GET to retrieve data
        - POST to create
        - PUT/PATCH to update
        - DELETE to remove

        2. Resource naming:
        - Use plural nouns (/users, /posts)
        - Avoid verbs in URLs
        - Clear hierarchical structure (/users/123/posts)

        3. Appropriate HTTP status codes:
        - 200 OK, 201 Created, 204 No Content
        - 400 Bad Request, 401 Unauthorized, 404 Not Found
        - 500 Internal Server Error

        4. API versioning (v1, v2) to maintain compatibility.

        5. Complete documentation with Swagger/OpenAPI.`,

        tags: ['API', 'REST', 'Backend', 'Node.js'],
        date: '2024-11-05',
        readTime: '6 min'
  },

  {
        id: 'responsive-design',
        title: 'How to create responsive design?',
        category: 'Tutorial',
        question: 'What techniques to use to make a website responsive?',
        answer: `Responsive design relies on several techniques:

        1. Mobile-First Approach - Start with mobile design then adapt for desktop.

        2. CSS Grid and Flexbox - Flexible layouts that adapt automatically.

        3. Relative units - Use rem, em, %, vh/vw instead of fixed px.

        4. Responsive images:
        - srcset for different resolutions
        - object-fit for image adaptation
        - lazy loading for performance`,

        tags: ['CSS', 'Responsive', 'Design', 'Tailwind'],
        date: '2024-10-28',
        readTime: '7 min'
  },

  {
        id: 'git-workflow',
        title: 'Which Git workflow to use?',
        category: 'Best Practices',
        question: 'How to organize branches and commits in a Git project?',
        answer: `A good Git workflow improves collaboration:

        1. Git Flow - Classic workflow with multiple branches:
        - main/master: production code
        - develop: ongoing development
        - feature/*: new features
        - hotfix/*: urgent fixes

        2. Atomic commits - One commit = one logical change.

        3. Pull Requests with code review before merging.`,
    
        tags: ['Git', 'Version Control', 'Workflow'],
        date: '2024-10-20',
        readTime: '5 min'
  },

  {
        id: 'security-web',
        title: 'How to secure a web application?',
        category: 'Technical',
        question: 'What security measures to implement in a web application?',
        answer: `Web security requires a multi-layered approach:

        1. Authentication & Authorization:
        - JWT with expiration
        - Secure sessions
        - OAuth 2.0 for external integration

        2. Protection against common attacks:
        - XSS: escape user data
        - CSRF: anti-CSRF tokens
        - SQL Injection: prepared statements
        - Clickjacking: X-Frame-Options

        3. Mandatory HTTPS with valid SSL/TLS certificates.

        4. Security headers:
        - Content-Security-Policy
        - Strict-Transport-Security
        - X-Content-Type-Options

        5. Data validation on both client AND server side.`,

        tags: ['Security', 'Web', 'Backend', 'Best Practices'],
        date: '2024-10-15',
        readTime: '8 min'
    }

];

export default blogData;
