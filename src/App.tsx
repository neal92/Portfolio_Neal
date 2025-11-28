import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navigation from './pages/Navigation';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import HowIWork from './pages/HowIWork';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import projectsData, { Project } from './components/projectsData.ts';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import LanguageSwitcher from './components/LanguageSwitcher';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function ProjectDetailWrapper() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p: Project) => p.id === id);
  if (!project) {
    return <div>Project not found</div>;
  }
  return <ProjectDetail project={project} />;
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ajoute ou retire la classe 'dark' sur le body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'how-i-work', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    const handleNavigate = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail) {
        setActiveSection(customEvent.detail);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('navigate', handleNavigate);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('navigate', handleNavigate);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Ajustement pour la navigation fixe
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      // Mettre à jour immédiatement la section active
      setActiveSection(sectionId);
      // Mettre à jour l'URL hash sans provoquer de scroll
      history.replaceState(null, '', `#${sectionId}`);
      // Nettoyer le message de contact si on navigue ailleurs
      if (sectionId !== 'contact') {
        sessionStorage.removeItem('contactMessage');
      }
    }
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Loader />
        <ScrollProgress />
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}> 
        {/* Boutons toggle mode sombre/clair et langue en position fixe en haut à droite (desktop uniquement) */}
        {!isMenuOpen && (
          <div className="fixed top-2 right-6 z-[10000] flex items-center gap-3">
            {/* Language Switcher desktop */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full bg-transparent dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-transparent dark:border-slate-700"
              aria-label={darkMode ? "Mode clair" : "Mode sombre"}
            >
              {darkMode ? (
                <span className="text-yellow-400 text-xl">☀️</span>
              ) : (
                <span className="text-purple-600 text-xl">🌙</span>
              )}
            </button>
          </div>
        )}
        <Navigation 
          activeSection={activeSection} 
          onNavigate={scrollToSection}
          darkMode={darkMode}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <Hero onNavigate={scrollToSection} />
                  </section>
                  <section id="about">
                    <About />
                  </section>
                  <section id="skills">
                    <Skills />
                  </section>
                  <section id="projects">
                    <Projects />
                  </section>
                  <section id="how-i-work">
                    <HowIWork />
                  </section>
                  <section id="blog">
                    <Blog />
                  </section>
                  <section id="contact">
                    <Contact />
                  </section>
                </>
              }
            />
            <Route
              path="/project/:id"
              element={<ProjectDetailWrapper />}
            />
          </Routes>
        </main>
        <footer className="w-full py-6 bg-white dark:bg-slate-800 text-center text-slate-600 dark:text-white text-sm border-t border-slate-200 dark:border-slate-700">
          © {new Date().getFullYear()} Neal Birstol Portfolio. Toute reproduction ou plagiat est interdite.
        </footer>
      </div>
    </Router>
    </I18nextProvider>
  );
}

export default App;