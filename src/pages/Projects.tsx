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
import projectsData from '../components/projectsData';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

// Utilise projectsData importé

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<number>(0);
  
  React.useEffect(() => {
    console.log('Selected project changed to:', selectedProject, projectsData[selectedProject]?.title);
  }, [selectedProject]);

  const currentProject = projectsData[selectedProject];
  
  return (
    <FadeInSection>
      <div className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-pink-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900 dark:to-orange-900 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block p-1 bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-900 dark:to-blue-900 rounded-full mb-4 sm:mb-6">
              <div className="bg-white dark:bg-slate-900 px-4 py-1 sm:px-5 sm:py-1.5 rounded-full">
                <span className="text-xs font-semibold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                  My work
                </span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 leading-tight">
               Projects
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Innovative solutions that demonstrate technical excellence and creative problem-solving
            </p>
          </div>

          {/* Mobile Project Navigation Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto md:hidden pb-2">
            {projectsData.map((project, index) => (
              <button
                key={index}
                onClick={() => {
                  console.log('Clicking project:', index, project.title);
                  setSelectedProject(index);
                }}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all duration-300 whitespace-nowrap ${
                  selectedProject === index
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Mobile: Show only selected project */}
          <div className="md:hidden">
            <div className="group h-full bg-white text-black border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-800 backdrop-blur-xl rounded-3xl overflow-hidden border shadow-xl">
              <div className="w-full p-4 sm:p-5 flex flex-col justify-between h-full">
                <div>
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-2xl mb-3 sm:mb-4 shadow-md"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 text-black dark:text-white">
                    {currentProject.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-sm text-slate-600 dark:text-slate-300">
                    {currentProject.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {currentProject.technologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 rounded-full font-medium border text-xs hover:shadow-md transition-all duration-300 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200/50 dark:from-blue-900 dark:to-purple-900 dark:text-blue-200 dark:border-blue-900/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-3 z-20 relative">
                  {currentProject.video && (
                    <a
                      href={currentProject.video}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center px-4 py-2 text-xs bg-gradient-to-r from-purple-600 to-blue-600 border-2 border-purple-500 text-white rounded-xl font-bold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                      style={{ boxShadow: '0 0 12px 2px #a78bfa, 0 0 4px 1px #3b82f6' }}
                    >
                      <ExternalLink size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Download the demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Show all projects in grid */}
          <div className="hidden md:grid relative z-10 gap-6 sm:gap-12 grid-cols-1 md:grid-cols-2">
            {projectsData.map((project, index) => (
              <FadeInSection key={index}>
                <div
                  className="group h-full bg-white text-black border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-800 backdrop-blur-xl rounded-3xl overflow-hidden border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col md:flex-row"
                >
                  <div className="w-full p-4 sm:p-5 lg:p-7 flex flex-col justify-between h-full">
                    <div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 sm:h-48 object-cover rounded-2xl mb-3 sm:mb-4 shadow-md"
                      />
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors duration-300 text-black dark:text-white">{project.title}</h3>
                      <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-slate-600 dark:text-slate-300">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                        {project.technologies.map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-medium border text-xs sm:text-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200/50 dark:from-blue-900 dark:to-purple-900 dark:text-blue-200 dark:border-blue-900/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4 z-20 relative">
                      <a
                        href={project.video}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm bg-gradient-to-r from-purple-600 to-blue-600 border-2 border-purple-500 text-white rounded-xl font-bold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full sm:w-auto"
                        style={{ boxShadow: '0 0 12px 2px #a78bfa, 0 0 4px 1px #3b82f6' }}
                      >
                        <ExternalLink size={18} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Contact me for a demo
                      </a>
                    </div>
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