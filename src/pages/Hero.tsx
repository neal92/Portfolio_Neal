import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-white flex items-center justify-center relative overflow-hidden pt-32 sm:pt-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up space-y-4 sm:space-y-6">
          {/* Photo de profil */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <img 
                src="/images/profile.jpg" 
                alt="Neal" 
                className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Neal
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 dark:text-slate-300 mb-2 font-light">
            Locking for a developer ? I'm your guy !  
          </p>
          <div className="inline-block p-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-6">
            <div className="bg-slate-900 dark:bg-slate-800 px-6 py-2 rounded-full">
              <span className="text-sm font-medium text-blue-300 dark:text-blue-200">Available for opportunities</span>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 dark:text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Crafting exceptional digital experiences with modern technologies, clean architecture, and pixel-perfect design.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
            <button
              onClick={() => onNavigate('projects')}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white dark:text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              View My Work
            </button>
            <a
              href="#contact"
              onClick={() => onNavigate('contact')}
              className="group relative bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white dark:text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              Get In Touch
            </a>
            {/* Icônes en dessous sur mobile */}
            <div className="flex gap-4 mt-6 sm:mt-0 sm:ml-6 sm:flex-row flex-row sm:items-center items-center sm:static justify-center w-full sm:w-auto">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
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
                href="mailto:nealbristol2002@gmail.com"
                className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <button
            onClick={() => onNavigate('about')}
            className="mx-auto block p-3 bg-white/10 backdrop-blur-sm rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 animate-bounce"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;