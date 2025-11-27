export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  video?: string;
  functionalities?: string;
}

const baseProjectsData = [
  {
    id: 'service-booking',
    image: '/images/servicebooking.png',
    images: ['/images/servicebooking.png'],
    technologies: ['React', 'Node.js', 'Express'],
    github: 'https://github.com/neal92/ServiceBooking',
    demo: '',
    video: 'https://drive.google.com/uc?export=download&id=1kx8I8XQybFs1NhpkKaotzU3IeaimVizq',
  },
  {
    id: 'audittab-cloud',
    image: '/images/audittab.png',
    images: ['/images/audittab.png'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/neal92/new-project',
    demo: '',
    video: '',
  },
  {
    id: 'salon-coiffure',
    image: '/images/salon.png',
    images: ['/images/salon.png'],
    technologies: ['Next.js', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/neal92/salon-coiffure',
    video: '',
  },
];

export const getProjectsData = (t: (key: string) => string): Project[] => {
  return baseProjectsData.map(project => ({
    ...project,
    title: t(`projectsData.${project.id}.title`),
    description: t(`projectsData.${project.id}.description`),
    longDescription: t(`projectsData.${project.id}.longDescription`),
    functionalities: t(`projectsData.${project.id}.functionalities`),
  }));
};

// Pour la compatibilité, on exporte aussi une version par défaut (non traduite)
const projectsData: Project[] = baseProjectsData.map(project => ({
  ...project,
  title: project.id, // Placeholder
  description: project.id, // Placeholder
}));

export default projectsData;
