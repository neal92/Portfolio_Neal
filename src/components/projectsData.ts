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

const projectsData: Project[] = [
  {
    id: 'service-booking',
    title: 'Saas Service Booking',
    description: 'A comprehensive service booking platform with real-time availability, user management, and advanced reporting capabilities.',
    longDescription: 'Saas Service Booking is a modern web application that allows users to book services in real time, manage their accounts, and access advanced reporting. The platform is built with React and Node.js, featuring a clean UI, secure authentication, and scalable architecture. It is ideal for businesses looking to streamline their booking process and improve customer experience.',
    image: '/images/servicebooking.png',
    images: ['/images/servicebooking.png'],
    technologies: ['React', 'Node.js', 'Express'],
    github: 'https://github.com/neal92/ServiceBooking',
    demo: '',
    video: 'https://drive.google.com/uc?export=download&id=1kx8I8XQybFs1NhpkKaotzU3IeaimVizq',
    functionalities: '• Real-time booking\n• User management\n• Advanced reporting\n• Secure authentication\n• Scalable architecture',
  },
  {
    id: 'new-project',
    title: 'Audittab Cloud',
    description: 'Audittab allows you to create, manage, and track your field audits with ease. A modern solution for high-performing teams.',
    longDescription: 'This is a detailed description of your new project. Explain what problem it solves, the technologies used, and what makes it unique. Add details about the architecture, features, and any challenges you overcame during development.',
    image: '/images/audittab.png',
    images: ['/images/audittab.png'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/neal92/new-project',
    demo: '',
    video: '',
    functionalities: '• Feature 1\n• Feature 2\n• Feature 3\n• Feature 4\n• Feature 5',
  },
  {
    id: 'salon-coiffure',
    title: 'Hair Salon Website',
    description: 'A modern hair salon website with online booking system and style gallery.',
    longDescription: 'This website is designed for a hair salon, allowing customers to book appointments online, browse a style gallery, and discover available services. The site is built with Next.js for optimal performance and smooth user experience.',
    image: '/images/salon.png',
    images: ['/images/salon.png'],
    technologies: ['Next.js', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/neal92/salon-coiffure',
    video: '',
    functionalities: '• Secure payment processing\n• Inventory management\n• Customer analytics\n• Order tracking\n• Admin dashboard\n• Mobile responsive design',
  },
];

export default projectsData;
