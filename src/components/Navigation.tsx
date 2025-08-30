import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
}

export default function Navigation({ activeSection, onNavigate, language, setLanguage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [langChanged, setLangChanged] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLabels = {
    en: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      lang: 'Language',
      fr: 'Français',
      en: 'English',
    },
    fr: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
      lang: 'Langue',
      fr: 'Français',
      en: 'Anglais',
    }
  };
  const navItems = [
    { id: 'home', label: navLabels[language].home },
    { id: 'about', label: navLabels[language].about },
    { id: 'skills', label: navLabels[language].skills },
    { id: 'projects', label: navLabels[language].projects },
    { id: 'contact', label: navLabels[language].contact },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'fr' | 'en');
    setLangChanged(true);
    setTimeout(() => setLangChanged(false), 500);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className={`text-2xl font-bold cursor-pointer transition-colors duration-300 ${
              scrolled ? 'text-slate-800' : 'text-white'
            }`}
            onClick={() => onNavigate('home')}
          >
            Neal.dev
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? scrolled 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-blue-300 bg-white/20'
                    : scrolled
                      ? 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Language Switcher */}
            <select
              value={language}
              onChange={handleLanguageChange}
              className={`px-3 py-2 rounded-full text-sm font-medium border transition-all duration-300 bg-white/80 text-slate-800 border-slate-300 ${langChanged ? 'ring-2 ring-blue-400 scale-105' : ''}`}
              aria-label={navLabels[language].lang}
            >
              <option value="fr">{navLabels[language].fr}</option>
              <option value="en">{navLabels[language].en}</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              scrolled 
                ? 'text-slate-600 hover:text-blue-600 hover:bg-slate-50' 
                : 'text-white hover:text-blue-300 hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/50 bg-white/95 backdrop-blur-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Language Switcher Mobile */}
            <div className="mt-4 px-4">
              <select
                value={language}
                onChange={e => setLanguage(e.target.value as 'fr' | 'en')}
                className="w-full px-3 py-2 rounded-full text-sm font-medium border bg-white text-slate-800 border-slate-300"
                aria-label={navLabels[language].lang}
              >
                <option value="fr">{navLabels[language].fr}</option>
                <option value="en">{navLabels[language].en}</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}