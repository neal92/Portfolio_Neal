import React from 'react';

interface ProjectDetailProps {
  project: {
    title: { en: string; fr: string };
    description: { en: string; fr: string };
    technologies: string[];
    images: string[];
    video?: string;
    functionalities?: { en: string; fr: string };
  };
  language: 'fr' | 'en';
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, language }) => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-slate-800">{project.title[language]}</h1>
      <p className="text-lg text-slate-600 mb-4">{project.description[language]}</p>
      {project.functionalities && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{language === 'fr' ? 'Fonctionnalités' : 'Features'}</h2>
          <p>{project.functionalities[language]}</p>
        </div>
      )}
      <div className="flex flex-wrap gap-3 mb-8">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full font-medium border border-blue-200/50">
            {tech}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {project.images.map((img, idx) => (
          <img key={idx} src={img} alt={project.title[language]} className="w-full h-64 object-cover rounded-xl shadow-md" />
        ))}
      </div>
      {project.video && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{language === 'fr' ? 'Vidéo démo' : 'Demo Video'}</h2>
          <video controls className="w-full rounded-xl shadow-md">
            <source src={project.video} type="video/mp4" />
            {language === 'fr' ? 'Votre navigateur ne supporte pas la vidéo.' : 'Your browser does not support the video tag.'}
          </video>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
