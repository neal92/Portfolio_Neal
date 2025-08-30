import React, { useState, useEffect } from 'react';

import Navigation from './components/Navigation';
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
      <div className="min-h-screen bg-slate-50">
        <Navigation 
          activeSection={activeSection} 
          onNavigate={scrollToSection}
          language={language}
          setLanguage={setLanguage}
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