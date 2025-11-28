import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: 'fr', name: 'FR' },
    { code: 'en', name: 'EN' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative z-[10001]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-full bg-transparent dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-transparent dark:border-slate-700 flex items-center gap-1 ${
          scrolled ? 'text-slate-800 dark:text-white' : 'text-white'
        }`}
      >
        <span className="text-sm font-medium">{currentLanguage.name}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="fixed top-[3.5rem] right-6 w-20 bg-transparent dark:bg-slate-800 border-2 border-transparent dark:border-slate-700 rounded-lg shadow-lg z-[10001] overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                i18n.language === lang.code 
                  ? 'text-blue-600 bg-blue-50 dark:text-blue-300 dark:bg-slate-800' 
                  : 'text-slate-800 hover:text-blue-600 hover:bg-blue-100 dark:text-white dark:hover:text-blue-400 dark:hover:bg-slate-800'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;