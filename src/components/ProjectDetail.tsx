import React from 'react';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    images: string[];
    video?: string;
    functionalities?: string;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
  <div className="max-w-6xl mx-auto mt-24 py-32 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-3xl shadow-2xl border border-white/20 dark:border-slate-800">
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
