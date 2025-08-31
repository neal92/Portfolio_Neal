import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
  language: 'fr' | 'en';
}

const Hero: React.FC<HeroProps> = ({ onNavigate, language }) => {
  const t = {
    en: {
      available: 'Available for opportunities',
      hello: "Hello, I'm",
      role: 'Full-Stack Developer',
      description: 'Crafting exceptional digital experiences with modern technologies, clean architecture, and pixel-perfect design.',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch',
    },
    fr: {
      available: 'Disponible pour des opportunités',
      hello: 'Bonjour, je suis',
      role: 'Développeur Full-Stack',
      description: 'Je crée des expériences numériques exceptionnelles avec des technologies modernes, une architecture propre et un design pixel-perfect.',
      viewWork: 'Voir mes projets',
      getInTouch: 'Me contacter',
    }
  };
  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-white flex items-center justify-center relative overflow-hidden pt-32 sm:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up space-y-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            {t[language].hello}{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Neal
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-200 dark:text-slate-300 mb-2 font-light">
            {t[language].role}
          </p>
          <div className="inline-block p-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-6">
            <div className="bg-slate-900 dark:bg-slate-800 px-6 py-2 rounded-full">
              <span className="text-sm font-medium text-blue-300 dark:text-blue-200">{t[language].available}</span>
            </div>
          </div>
          <p className="text-xl sm:text-2xl text-slate-300 dark:text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            {t[language].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => onNavigate('projects')}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white dark:text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <span className="relative">
                {t[language].viewWork}
              </span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="group relative border-2 border-white/30 text-white dark:text-white hover:bg-white hover:text-slate-900 dark:hover:bg-slate-700 dark:hover:text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 backdrop-blur-sm"
            >
              <span className="relative">
                {t[language].getInTouch}
              </span>
            </button>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl text-slate-300 dark:text-slate-200 hover:text-white hover:bg-white/20 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => onNavigate('about')}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 animate-bounce"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
};

export default Hero;