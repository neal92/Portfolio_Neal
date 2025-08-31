import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  darkMode: boolean;
}

export default function Navigation({ activeSection, onNavigate, darkMode }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 left-0 z-[9999] transition-all duration-300 ${scrolled ? (darkMode ? 'bg-slate-900 shadow-lg' : 'bg-white shadow-lg') : 'bg-transparent'} backdrop-blur-lg`} style={{ minHeight: '80px' }}>
  <div className="max-w-5xl mx-auto px-4 py-4 flex items-center">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full bg-white dark:bg-slate-800 shadow"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={`text-2xl font-bold cursor-pointer transition-colors duration-300 ${
            scrolled
              ? darkMode ? 'text-white' : 'text-slate-800'
              : darkMode ? 'text-white' : 'text-white'
          }`}
          onClick={() => onNavigate('home')}
        >
        Neal Bristol
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center ml-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? scrolled
                    ? darkMode ? 'text-blue-400 bg-slate-800' : 'text-blue-600 bg-blue-50'
                    : darkMode ? 'text-blue-400 bg-slate-800' : 'text-blue-300 bg-white/20'
                  : scrolled
                    ? darkMode ? 'text-slate-200 hover:text-blue-400 hover:bg-slate-800' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                    : darkMode ? 'text-slate-200 hover:text-blue-400 hover:bg-slate-800' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/50 bg-white dark:bg-slate-900 shadow-xl z-[9999] flex flex-col items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800'
                    : 'text-slate-800 hover:text-blue-600 hover:bg-slate-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}