import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    images: string[];
    github?: string;
    demo?: string;
    video?: string;
    functionalities?: string;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900 dark:to-orange-900 rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-0 lg:grid-cols-2 items-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 dark:border-slate-800 shadow-xl">
          <div>
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-80 object-cover rounded-3xl"
            />
          </div>
          <div className="p-10">
            <h1 className="text-3xl font-bold mb-6 group-hover:text-blue-400 transition-colors duration-300 text-slate-800 dark:text-white">
              {project.title}
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-slate-800 dark:text-slate-200">
              {project.description}
            </p>
            {project.functionalities && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-300">Fonctionnalités</h2>
                <ul className="list-disc pl-6 text-slate-900 dark:text-slate-200">
                  {project.functionalities.split('\n').map((item, idx) => (
                    <li key={idx}>{item.replace('• ', '')}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full font-medium border bg-gradient-to-r from-blue-100 to-purple-100 dark:bg-slate-800 dark:text-blue-200 text-blue-800 border-blue-300 dark:border-blue-700 shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-8 mt-8 z-20 relative">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center px-8 py-4 text-xl border-2 border-blue-500 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-400"
                  style={{ boxShadow: '0 0 24px 4px #3b82f6, 0 0 8px 2px #a78bfa' }}
                >
                  <Github size={28} className="mr-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center px-8 py-4 text-xl bg-gradient-to-r from-purple-600 to-blue-600 border-2 border-purple-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-purple-400"
                  style={{ boxShadow: '0 0 24px 4px #a78bfa, 0 0 8px 2px #3b82f6' }}
                >
                  <ExternalLink size={28} className="mr-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Demo
                </a>
              )}
            </div>
            {project.video && (
              <div className="mb-8 mt-8">
                <h2 className="text-2xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Demo Vidéo</h2>
                <video controls className="w-full rounded-xl shadow-lg border border-purple-300 dark:border-purple-900 bg-slate-100 dark:bg-slate-800">
                  <source src={project.video} type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
  <h1 className="text-4xl font-bold mb-6 text-slate-800 dark:text-white bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-600 bg-clip-text text-transparent">
        {project.title}
      </h1>
  <p className="text-lg text-slate-800 mb-4">
        {project.description}
      </p>
      {project.functionalities && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-300">Fonctionnalités</h2>
          <ul className="list-disc pl-6 text-slate-900 dark:text-slate-200">
            {project.functionalities.split('\n').map((item, idx) => (
              <li key={idx}>{item.replace('• ', '')}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex flex-wrap gap-3 mb-8">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:bg-slate-800 dark:text-blue-200 text-blue-800 rounded-full font-medium border border-blue-300 dark:border-blue-700 shadow-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {project.images.map((img, idx) => (
          <img key={idx} src={img} alt={project.title} className="w-full h-64 object-cover rounded-xl shadow-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-900" />
        ))}
      </div>
      {project.video && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Demo Vidéo</h2>
          <video controls className="w-full rounded-xl shadow-lg border border-purple-300 dark:border-purple-900 bg-slate-100 dark:bg-slate-800">
            <source src={project.video} type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
