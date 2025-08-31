// Example projects data for your portfolio
// You can customize this array with your real projects

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  technologies: string[];
  github?: string;
  demo?: string;
}

const projectsData: Project[] = [
  {
    id: 'servicebooking',
    title: 'Service Booking App',
    description: 'A web application for booking services online.',
    image: '/images/servicebooking.png',
    images: ['/images/servicebooking.png'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/servicebooking',
    demo: 'https://servicebooking-demo.netlify.app',
  },
  // Add more projects here
];

export default projectsData;
