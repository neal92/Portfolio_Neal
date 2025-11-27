import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-200"
      >
        <span>{currentLanguage.name}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${
                i18n.language === lang.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : ''
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