import React from 'react';
import githubLogo from '/public/images/tools/github.svg';
import vscodeLogo from '/public/images/tools/vscode.svg';
import figmaLogo from '/public/images/tools/figma.svg';
import postmanLogo from '/public/images/tools/postman.svg';
import dockerLogo from '/public/images/tools/docker.svg';
import viteLogo from '/public/images/tools/vite.svg';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'React', level: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript/TypeScript', level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'Tailwind CSS', level: 85, color: 'from-cyan-500 to-blue-500' },
    { name: 'Vue.js', level: 70, color: 'from-green-500 to-emerald-500' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 75, color: 'from-green-600 to-green-700' },
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
    { name: 'Vite', logo: viteLogo }
  ];

  const SkillBar = ({ skill }: { skill: typeof frontendSkills[0] }) => (
    <div className="mb-6 group">
      <div className="flex justify-between mb-3">
        <span className="font-semibold text-slate-700 text-lg">{skill.name}</span>
        <span className="text-slate-500 font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-lg`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900 dark:to-orange-900 rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-900 dark:to-pink-900 rounded-full mb-8">
            <div className="bg-white dark:bg-slate-900 px-6 py-2 rounded-full">
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                My expertise
              </span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-8 leading-tight">
            Skills & Technologies
          </h2>
          <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            A comprehensive toolkit spanning the full development spectrum
          </p>
        </div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 mb-20">
          <div className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl p-10 rounded-3xl border border-white/20 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl p-10 rounded-3xl border border-white/20 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-4"></div>
              Backend Development
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl p-10 rounded-3xl border border-white/20 dark:border-slate-700 shadow-xl">
          <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-10 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow hover:shadow-lg transition">
                <img src={tool.logo} alt={tool.name} className="w-12 h-12 mb-2 object-contain" />
                <span className="text-lg font-medium text-slate-700 dark:text-white">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;