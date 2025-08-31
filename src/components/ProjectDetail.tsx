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
    <div className="max-w-4xl mx-auto py-16 px-4 bg-white dark:bg-slate-900 rounded-3xl shadow-xl">
      <h1 className="text-4xl font-bold mb-6 text-slate-800 dark:text-white">{project.title}</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
      {project.functionalities && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-slate-800 dark:text-white">Features</h2>
          <p className="text-slate-600 dark:text-slate-300">{project.functionalities}</p>
        </div>
      )}
      <div className="flex flex-wrap gap-3 mb-8">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full font-medium border border-blue-200/50 dark:border-blue-900/50">
            {tech}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {project.images.map((img, idx) => (
          <img key={idx} src={img} alt={project.title} className="w-full h-64 object-cover rounded-xl shadow-md bg-slate-100 dark:bg-slate-800" />
        ))}
      </div>
      {project.video && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Demo Video</h2>
          <video controls className="w-full rounded-xl shadow-md">
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
