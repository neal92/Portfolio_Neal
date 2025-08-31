// Animation fade-in au scroll
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity transition-transform duration-2000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
    >
      {children}
    </div>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

export const projects = [
  {
    id: 'service-booking',
    title: 'Saas Service Booking',
    description: 'A comprehensive service booking platform with real-time availability, user management, and advanced reporting capabilities.',
    longDescription: 'Saas Service Booking is a modern web application that allows users to book services in real time, manage their accounts, and access advanced reporting. The platform is built with React and Node.js, featuring a clean UI, secure authentication, and scalable architecture. It is ideal for businesses looking to streamline their booking process and improve customer experience.',
    technologies: ['React', 'Node.js', 'Express'],
    images: ['/images/servicebooking.png'],
    video: '', // Ajoute ici le lien vers la vidéo mp4 si disponible
    github: 'https://github.com/neal92/ServiceBooking',
    demo: '', // Peut être utilisé pour un lien externe si besoin
    featured: true,
    functionalities: '• Real-time booking\n• User management\n• Advanced reporting', // Example functionalities
  },
];

const Projects: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<number | null>(null);
  return (
    <FadeInSection>
      <div className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900 dark:to-orange-900 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block p-1 bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-900 dark:to-blue-900 rounded-full mb-8">
              <div className="bg-white dark:bg-slate-900 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                  My work
                </span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-8 leading-tight">
              Featured Projects
            </h2>
            <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Innovative solutions that demonstrate technical excellence and creative problem-solving
            </p>
          </div>
          <div className="relative z-10 grid gap-12 grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <FadeInSection key={index}>
                <div
                  className={`group
                    ${project.id === 'service-booking'
                      ? 'bg-white text-black border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-800'
                      : 'bg-white/80 dark:bg-slate-800/80 text-black dark:text-white border-slate-200 dark:border-slate-700'}
                    backdrop-blur-xl rounded-3xl overflow-hidden border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col md:flex-row`}
                >
                  <div className="w-full p-6 sm:p-10 flex flex-col justify-center h-full">
                    <div>
                      <h3 className={`text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300 ${project.id === 'service-booking' ? 'text-black dark:text-white' : 'text-black dark:text-white'}`}>{project.title}</h3>
                      <p className={`mb-6 leading-relaxed text-base sm:text-lg ${project.id === 'service-booking' ? 'text-black dark:text-slate-300' : 'text-black dark:text-slate-600'}`}>{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 rounded-full font-medium border text-sm sm:text-base hover:shadow-md transition-all duration-300 ${project.id === 'service-booking' ? 'bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200 border-blue-900/50' : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200/50'}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 z-20 relative">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center justify-center px-6 py-3 text-base sm:text-xl border-2 border-blue-500 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-400"
                        style={{ boxShadow: '0 0 24px 4px #3b82f6, 0 0 8px 2px #a78bfa' }}
                      >
                        <Github size={24} className="mr-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Code
                      </a>
                      <button
                        onClick={() => setOpenModal(index)}
                        className="group/btn inline-flex items-center justify-center px-6 py-3 text-lg sm:text-xl bg-gradient-to-r from-purple-600 to-blue-600 border-2 border-purple-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-purple-400 w-full sm:w-auto"
                        style={{ boxShadow: '0 0 24px 4px #a78bfa, 0 0 8px 2px #3b82f6' }}
                      >
                        <ExternalLink size={24} className="mr-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Demo
                      </button>
                    </div>
                    {/* Modale projet */}
                    {typeof openModal === 'number' && (
                      <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm">
                        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full p-8 relative flex flex-col items-center">
                          <button onClick={() => setOpenModal(null)} className="absolute top-4 right-4 text-slate-500 dark:text-slate-300 hover:text-red-500 text-2xl font-bold">×</button>
                          {projects[openModal].video ? (
                            <video controls autoPlay className="w-full rounded-xl shadow-md">
                              <source src={projects[openModal].video} type="video/mp4" />
                              Votre navigateur ne supporte pas la vidéo.
                            </video>
                          ) : (
                            <div className="flex flex-col items-center justify-center w-full h-64">
                              <span className="text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-4">No video available for this project.</span>
                              <span className="text-base text-slate-500 dark:text-slate-400">Contact me for a personalized demo!</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Projects;