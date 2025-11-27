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

const baseBlogData = [
  {
    id: 'moi',
    category: 'FAQ' as const,
    tags: ['React', 'Performance', 'Optimization'],
    date: '2024-11-15',
    readTime: '5 min'
  },
  {
    id: 'react-performance',
    category: 'Best Practices' as const,
    tags: ['React', 'Performance', 'Optimization'],
    date: '2024-11-15',
    readTime: '5 min'
  },
  {
    id: 'typescript-benefits',
    category: 'FAQ' as const,
    tags: ['TypeScript', 'JavaScript', 'Development'],
    date: '2024-11-10',
    readTime: '4 min'
  },
  {
    id: 'rest-api-design',
    category: 'Technical' as const,
    tags: ['API', 'REST', 'Backend', 'Node.js'],
    date: '2024-11-05',
    readTime: '6 min'
  },
  {
    id: 'responsive-design',
    category: 'Tutorial' as const,
    tags: ['CSS', 'Responsive', 'Design', 'Tailwind'],
    date: '2024-10-28',
    readTime: '7 min'
  },
  {
    id: 'git-workflow',
    category: 'Best Practices' as const,
    tags: ['Git', 'Version Control', 'Workflow'],
    date: '2024-10-20',
    readTime: '5 min'
  },
  {
    id: 'security-web',
    category: 'Technical' as const,
    tags: ['Security', 'Web', 'Backend', 'Best Practices'],
    date: '2024-10-15',
    readTime: '8 min'
  }
];

export const getBlogData = (t: (key: string) => string): BlogPost[] => {
  return baseBlogData.map(post => ({
    ...post,
    title: t(`blogData.${post.id}.title`),
    question: t(`blogData.${post.id}.question`),
    answer: t(`blogData.${post.id}.answer`),
  }));
};

// Pour la compatibilité, on exporte aussi une version par défaut (non traduite)
const blogData: BlogPost[] = baseBlogData.map(post => ({
  ...post,
  title: post.id, // Placeholder
  question: post.id, // Placeholder
  answer: post.id, // Placeholder
}));

export default blogData;
