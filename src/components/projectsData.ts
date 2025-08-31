// Example projects data for your portfolio
// You can customize this array with your real projects

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
    video: '', // Ajoute ici le lien vers la vidéo mp4 si disponible
    functionalities: '• Real-time booking\n• User management\n• Advanced reporting\n• Secure authentication\n• Scalable architecture',
  },
  // Add more projects here
];

export default projectsData;
