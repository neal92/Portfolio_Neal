import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import projectsData, { Project } from './components/projectsData.ts';

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
  const [darkMode, setDarkMode] = useState(false);
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
        {/* Boutons mode sombre/clair en position fixe en haut à droite */}
        {!isMenuOpen && (
          <div className="fixed top-2 right-6 z-[10000] flex gap-2">
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
      <footer className="w-full py-6 bg-slate-100 dark:bg-slate-900 text-center text-slate-600 dark:text-white text-sm mt-10 border-t border-slate-200 dark:border-slate-700">
        © {new Date().getFullYear()} Neal Birstol Portfolio. Toute reproduction ou plagiat est interdite.
      </footer>
    </div>
  </Router>
  );
}

export default App;