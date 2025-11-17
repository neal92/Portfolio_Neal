import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900 dark:to-orange-900 rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-900 dark:to-purple-900 rounded-full mb-6">
            <div className="bg-white dark:bg-slate-900 px-5 py-1.5 rounded-full">
              <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Get to know me
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
            <span className="text-slate-800 dark:text-white">About Me</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-6">
              I am a passionate web developer based in Paris, specialized in building modern, high-quality digital solutions. 
              My expertise covers a wide range of website and application types: from elegant portfolios and professional showcase sites to 
              dynamic e-commerce platforms and powerful web applications. I offer you work that is not only well-structured and efficient, 
              but also creative, user-friendly, and tailored to your specific needs. With me, you get a reliable partner who transforms 
              your ideas into impactful digital experiences.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8 mb-8 sm:mb-12">
            {/* 1. Sites vitrines */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-3 sm:p-4 lg:p-6 flex flex-col items-center">
              <img src="/images/vitrine.png" alt="Sites vitrines" className="w-20 h-16 sm:w-28 sm:h-24 lg:w-35 lg:h-30 mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white text-center">Showcase Websites</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center">Presenting businesses, associations, or freelancers with simple, elegant pages.</p>
            </div>
            {/* 2. Portfolios */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-3 sm:p-4 lg:p-6 flex flex-col items-center">
              <img src="/images/portfolio.png" alt="Portfolio" className="w-20 h-16 sm:w-28 sm:h-24 lg:w-35 lg:h-30 mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white text-center">Portfolios</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center">Highlighting personal or professional achievements, skills, and projects.</p>
            </div>
            {/* 3. Blogs / Magazines */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-3 sm:p-4 lg:p-6 flex flex-col items-center">
              <img src="/images/blog.png" alt="Blog" className="w-20 h-16 sm:w-28 sm:h-24 lg:w-35 lg:h-30 mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white text-center">Blogs & Magazines</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center">Sharing articles, news, and tutorials with categorized content and subscriptions.</p>
            </div>
            {/* 4. E-commerce */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-3 sm:p-4 lg:p-6 flex flex-col items-center">
              <img src="/images/ecommerce.jpg" alt="E-commerce" className="w-20 h-16 sm:w-28 sm:h-24 lg:w-35 lg:h-30 mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white text-center">E-commerce</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center">Online stores with product catalogs, shopping carts, and secure payments.</p>
            </div>
            {/* 5. Web Apps */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-3 sm:p-4 lg:p-6 flex flex-col items-center">
              <img src="/images/webapp.jpg" alt="Web App" className="w-20 h-16 sm:w-28 sm:h-24 lg:w-35 lg:h-30 mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white text-center">Web Applications</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center">Interactive online services with dynamic features and user spaces.</p>
            </div>
            {/* 9. Landing Pages */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-3 sm:p-4 lg:p-6 flex flex-col items-center">
              <img src="/images/landing.jpg" alt="Landing Page" className="w-20 h-16 sm:w-28 sm:h-24 lg:w-35 lg:h-30 mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white text-center">Landing Pages</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center">Single-page campaigns for products, apps, or newsletters.</p>
            </div>
          </div>
          <br></br>


<section className="w-full mb-12 sm:mb-16">
  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white mb-8 sm:mb-12 tracking-tight text-center">Education & Qualifications</h3>
  <div className="relative max-w-2xl mx-auto">
    {/* Ligne centrale */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>
    <div className="flex flex-col gap-16">

      {/* Master 2  */}
      <div className="flex items-center relative">
        <div className="z-10 flex-shrink-0 w-24 h-24 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border-4 border-blue-400 dark:border-blue-500 mx-4">
          <img src="/images/ecole-iris.png" alt="Licence professionnel CDW" className="w-16 h-16 object-contain" />
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 ml-8">
          <div className="text-lg font-bold text-blue-700 dark:text-blue-300">2023-2024</div>
          <div className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Mastère 2  Expert IT, développement et base de données</div>
          <div className="text-base text-slate-600 dark:text-slate-300">Education at IRIS School in Paris - IT School.</div>
        </div>
        
      </div>

      {/* Master 1*/}
      <div className="flex items-center relative">
        <div className="z-10 flex-shrink-0 w-24 h-24 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border-4 border-blue-400 dark:border-blue-500 mx-4">
          <img src="/images/ecole-iris.png" alt="Licence professionnel CDW" className="w-16 h-16 object-contain" />
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 ml-8">
          <div className="text-lg font-bold text-blue-700 dark:text-blue-300">2023-2024</div>
          <div className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Mastère 1  Expert IT, développement et base de données</div>
          <div className="text-base text-slate-600 dark:text-slate-300">Education at IRIS School in Paris - IT School.</div>
        </div>
        
      </div>
      {/* Licence professionnel CDW */}
      <div className="flex items-center relative">
        <div className="z-10 flex-shrink-0 w-24 h-24 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border-4 border-blue-400 dark:border-blue-500 mx-4">
          <img src="/images/ecole-iris.png" alt="Licence professionnel CDW" className="w-16 h-16 object-contain" />
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 ml-8">
          <div className="text-lg font-bold text-blue-700 dark:text-blue-300">2022-2023</div>
          <div className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Licence Bachelors Informatique</div>
          <div className="text-base text-slate-600 dark:text-slate-300">Education at IRIS School in Paris - IT School.</div>
        </div>

      </div>
      {/* BTS Services Informatiques aux Organisations */}
      <div className="flex items-center relative">
        <div className="z-10 flex-shrink-0 w-24 h-24 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border-4 border-blue-400 dark:border-blue-500 mx-4">
          <img src="/images/ecole-iris.png" alt="BTS SIO" className="w-16 h-16 object-contain" />
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 ml-8">
          <div className="text-lg font-bold text-blue-700 dark:text-blue-300">2021-2022</div>
          <div className="text-xl font-bold mb-2 text-slate-800 dark:text-white">BTS Services Informatiques aux Organisations option : SLAM </div>
          <div className="text-base text-slate-600 dark:text-slate-300">Education at IRIS School in Paris - IT School.</div>
        </div>
      </div>
      {/* BAC STMG */}
      <div className="flex items-center relative">
        <div className="z-10 flex-shrink-0 w-24 h-24 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border-4 border-blue-400 dark:border-blue-500 mx-4">
          <img src="/images/ecole-agora.jpg" alt="BAC STI2D" className="w-16 h-16 object-contain" />
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 ml-8">
          <div className="text-lg font-bold text-blue-700 dark:text-blue-300">2020-2021</div>
          <div className="text-xl font-bold mb-2 text-slate-800 dark:text-white">BAC STI2D</div>
          <div className="text-base text-slate-600 dark:text-slate-300">Option SIN (système informatique et numérique).</div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
      </div>
    </div>
  );
};

export default About;