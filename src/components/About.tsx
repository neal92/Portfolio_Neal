import React from 'react';

interface AboutProps {
  language: 'fr' | 'en';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = {
    en: {
      getToKnow: 'Get to know me',
      aboutMe: 'About Me',
  description: "Web developer based in France, passionate about creating modern digital experiences. Curious, creative, and detail-oriented, I love tackling challenges and learning new technologies to build innovative solutions.",
    },
    fr: {
      getToKnow: 'Apprenez à me connaître',
      aboutMe: 'À propos de moi',
  description: "Développeur web basé en France, passionné par la création d’expériences numériques modernes. Curieux, créatif et rigoureux, j’aime relever des défis et apprendre de nouvelles technologies pour concevoir des solutions innovantes.",
    }
  };
  return (
  <div className="py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900 dark:to-orange-900 rounded-full blur-3xl opacity-20"></div>
      </div>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-900 dark:to-purple-900 rounded-full mb-8">
            <div className="bg-white dark:bg-slate-900 px-6 py-2 rounded-full">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {t[language].getToKnow}
              </span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-8 leading-tight">
            {t[language].aboutMe}
          </h2>
          <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            {t[language].description}
          </p>
        </div>
        {/* ... (remaining content unchanged) ... */}
      </div>
    </div>
  );
};

export default About;