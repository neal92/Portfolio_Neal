import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

export const projects = [
  {
    id: 'service-booking',
    title: 'Saas Service Booking',
    description: 'A comprehensive service booking platform with real-time availability, user management, and advanced reporting capabilities.',
    technologies: ['React', 'Node.js', 'Express'],
    images: ['/images/servicebooking.png'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  // Add more projects here following the same model
];

const Projects: React.FC = () => {
  return (
    <div className="py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
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
        <div className="relative z-10 grid gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? 'lg:grid-cols-2' : ''
              }`}
            >
              <div className={`grid gap-0 ${project.featured ? 'lg:grid-cols-2' : 'md:grid-cols-3'} items-center`}>
                <div className={`${project.featured ? '' : 'md:col-span-1'}`}>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className={`p-10 ${project.featured ? '' : 'md:col-span-2'}`}>
                  <h3 className="text-3xl font-bold text-slate-800 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full font-medium border border-blue-200/50 hover:shadow-md transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-semibold"
                    >
                      <Github size={20} className="mr-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Code
                    </a>
                    <Link
                      to={`/project/${project.id}`}
                      className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <ExternalLink size={20} className="mr-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;