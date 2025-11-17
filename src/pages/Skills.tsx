import React from 'react';
// Animation fade-in au scroll
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity transition-transform duration-2000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
    >
      {children}
    </div>
  );
};


import githubLogo from '/public/images/tools/github.svg';
import vscodeLogo from '/public/images/tools/vscode.svg';
import figmaLogo from '/public/images/tools/figma.svg';
import postmanLogo from '/public/images/tools/postman.svg';
import dockerLogo from '/public/images/tools/docker.svg';
import wordpressLogo from '/public/images/tools/wordpress.svg';
import expressLogo from '/public/images/tools/expressjs.svg';
import htmlLogo from '/public/images/tools/html.svg';
import jsLogo from '/public/images/tools/javascript.svg';
import reactLogo from '/public/images/tools/logo-react.svg';
import tailwindLogo from '/public/images/tools/tailwind.svg';
import restApiLogo from '/public/images/tools/restapi.png';
import php from '/public/images/tools/php.svg';
import postgresqlLogo from '/public/images/tools/postgresql.svg';
import vite from '/public/images/tools/vite.svg';




const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'React', level: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript/TypeScript', level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'Tailwind CSS', level: 85, color: 'from-cyan-500 to-blue-500' },
    { name: 'Vite', level: 70, color: 'from-green-500 to-emerald-500' },

  ];

  const backendSkills = [
    { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-700' },
    { name: 'PHP', level: 70, color: 'from-green-700 to-green-800' },
    { name: 'PostgreSQL', level: 65, color: 'from-blue-700 to-indigo-700' },
    { name: 'REST APIs', level: 85, color: 'from-purple-600 to-purple-700' },
  ];

  const tools = [
    { name: 'GitHub', logo: githubLogo },
    { name: 'VS Code', logo: vscodeLogo }, 
    { name: 'Figma', logo: figmaLogo },
    { name: 'Postman', logo: postmanLogo },
    { name: 'Docker', logo: dockerLogo },
    { name: 'WordPress', logo: wordpressLogo },

  ];

  const SkillCard = ({ skill, icon, borderColor }: { skill: typeof frontendSkills[0], icon: string, borderColor: string }) => (
    <div className={`group bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-3 sm:p-4 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/30 border-2 ${borderColor}`}>
      <img src={icon} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 object-contain" />
      <span className="font-bold text-sm sm:text-base text-slate-800 dark:text-white mb-1 sm:mb-2 text-center break-words max-w-[120px]">{skill.name}</span>
    </div>
  );

  return (
    <FadeInSection>
      <div>
        <div className="mt-12 sm:mt-16 lg:mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-200 to-orange-200 dark:from-pink-900 dark:to-orange-900 rounded-full blur-3xl opacity-20"></div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-900 dark:to-pink-900 rounded-full mb-4 sm:mb-6">
                <div className="bg-white dark:bg-slate-900 px-4 py-1 sm:px-5 sm:py-1.5 rounded-full">
                  <span className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    My expertise
                  </span>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 leading-tight">
                Skills & Technologies
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
                A comprehensive toolkit spanning the full development spectrum
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4 sm:mb-6 flex items-center">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 sm:mr-3"></div>
                    Front-End Development
                  </h3>
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {frontendSkills.map((skill, index) => (
                      <SkillCard
                        key={index}
                        skill={skill}
                        icon={
                          index === 0 ? reactLogo
                          : index === 1 ? jsLogo
                          : index === 2 ? htmlLogo
                          : index === 3 ? tailwindLogo
                          : index === 4 ? vite
                          : ''
                        }
                        borderColor="border-blue-600 dark:border-blue-400"
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-8 flex items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-4"></div>
                    Backend Development
                  </h3>
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {backendSkills.map((skill, index) => (
                      <SkillCard
                        key={index}
                        skill={skill}
                        icon={
                          skill.name === 'Express.js' ? expressLogo
                          : skill.name === 'PHP' ? php
                          : skill.name === 'PostgreSQL' ? postgresqlLogo
                          : skill.name === 'REST APIs' ? restApiLogo
                          : ''
                        }
                        borderColor="border-green-600 dark:border-green-400"
                      />
                    ))}
                  </div>
                </div>
              </>
            </div>
            <div className="backdrop-blur-xl p-10 rounded-3xl border border-white/20 dark:border-slate-700 shadow-xl mt-10">
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-10 text-center">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {tools.map((tool, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1">
                    <img src={tool.logo} alt={tool.name} className="w-14 h-14 mb-2 object-contain" />
                    <span className="text-lg font-medium text-slate-700 dark:text-white">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Skills;