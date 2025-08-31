import React, { useState, useEffect } from 'react';

import Navigation from './components/Navigation';
import TestDarkMode from './components/TestDarkMode';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { projects as projectsData } from './components/Projects';

function ProjectDetailWrapper({ language }: { language: 'fr' | 'en' }) {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail project={project} language={language} />;
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState<'fr' | 'en'>('en');
  const [darkMode, setDarkMode] = useState(false);

  // Ajoute ou retire la classe 'dark' sur le body
  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}> 
  <div className="fixed top-6 right-6 z-[9999] flex gap-2">
          <button
            onClick={() => setDarkMode(false)}
            className={`p-1 rounded-full bg-white dark:bg-slate-800 shadow hover:bg-yellow-100 dark:hover:bg-slate-700 transition ${!darkMode ? 'ring-2 ring-yellow-400' : ''}`}
            aria-label="Mode clair"
          >
            <span className="text-yellow-400 text-lg">☀️</span>
          </button>
          <button
            onClick={() => setDarkMode(true)}
            className={`p-1 rounded-full bg-white dark:bg-slate-800 shadow hover:bg-purple-100 dark:hover:bg-slate-700 transition ${darkMode ? 'ring-2 ring-purple-600' : ''}`}
            aria-label="Mode sombre"
          >
            <span className="text-purple-600 text-lg">🌙</span>
          </button>
        </div>
        <Navigation 
          activeSection={activeSection} 
          onNavigate={scrollToSection}
          language={language}
          setLanguage={setLanguage}
          darkMode={darkMode}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <Hero onNavigate={scrollToSection} language={language} />
                  </section>
                  <section id="about">
                    <About language={language} />
                  </section>
                  <section id="skills">
                    <Skills language={language} />
                  </section>
                  <section id="projects">
                    <Projects language={language} />
                  </section>
                  <section id="contact">
                    <Contact language={language} />
                  </section>
                </>
              }
            />
            <Route
              path="/project/:id"
              element={<ProjectDetailWrapper language={language} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;