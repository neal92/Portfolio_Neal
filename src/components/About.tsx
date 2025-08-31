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
        <div className="text-center mb-20">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-900 dark:to-purple-900 rounded-full mb-8">
            <div className="bg-white dark:bg-slate-900 px-6 py-2 rounded-full">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Get to know me
              </span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-8 leading-tight">
            About Me
          </h2>
          <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              I am a passionate web developer based in Paris, specialized in building modern, high-quality digital solutions. 
              My expertise covers a wide range of website and application types: from elegant portfolios and professional showcase sites to 
              dynamic e-commerce platforms and powerful web applications. I offer you work that is not only well-structured and efficient, 
              but also creative, user-friendly, and tailored to your specific needs. With me, you get a reliable partner who transforms 
              your ideas into impactful digital experiences that stand out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* 1. Sites vitrines */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/images/vitrine.png" alt="Sites vitrines" className="w-35 h-30 mb-4" />
              <h3 className="text-xl font-bold mb-2">Showcase Websites</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">Presenting businesses, associations, or freelancers with simple, elegant pages.</p>
            </div>
            {/* 2. Portfolios */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/images/portfolio.png" alt="Portfolio" className="w-35 h-30 mb-4" />
              <h3 className="text-xl font-bold mb-2">Portfolios</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">Highlighting personal or professional achievements, skills, and projects.</p>
            </div>
            {/* 3. Blogs / Magazines */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/images/blog.png" alt="Blog" className="w-35 h-30 mb-4" />
              <h3 className="text-xl font-bold mb-2">Blogs & Magazines</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">Sharing articles, news, and tutorials with categorized content and subscriptions.</p>
            </div>
            {/* 4. E-commerce */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/images/ecommerce.jpg" alt="E-commerce" className="w-35 h-30 mb-4" />
              <h3 className="text-xl font-bold mb-2">E-commerce</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">Online stores with product catalogs, shopping carts, and secure payments.</p>
            </div>
            {/* 5. Web Apps */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/images/webapp.jpg" alt="Web App" className="w-35 h-30 mb-4" />
              <h3 className="text-xl font-bold mb-2">Web Applications</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">Interactive online services with dynamic features and user spaces.</p>
            </div>
            {/* 9. Landing Pages */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/images/landing.jpg" alt="Landing Page" className="w-35 h-30 mb-4" />
              <h3 className="text-xl font-bold mb-2">Landing Pages</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">Single-page campaigns for products, apps, or newsletters.</p>
            </div>
          </div>
          <br></br>

<section className="w-full mb-16">
  <h3 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-8 tracking-tight text-left">Education & Qualifications</h3>
  <div className="flex flex-col md:flex-row items-center bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 md:p-16 gap-12 border border-slate-200 dark:border-slate-800">
    <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3">
      <img src="/images/ecole-iris.png" alt="Ecole IRIS Paris" className="w-[34rem] h-72 object-cover rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800" />
    </div>
    <div className="flex-1 flex flex-col justify-start">
      <span className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">IRIS School, Paris 17e</span>
      <span className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">Diplômes</span>
      <ul className="text-lg text-slate-600 dark:text-slate-300 mb-6 space-y-2 pl-4">
        <li className="list-disc">BTS SIO</li>
        <li className="list-disc">Licence Web & Mobile Development</li>
        <li className="list-disc">Currently preparing my Master’s degree (2025)</li>
      </ul>
      <p className="text-base text-slate-500 dark:text-slate-400 font-light mt-2">I am committed to delivering high-quality, reliable work for every project.</p>
    </div>
  </div>
</section>
        </div>
      </div>
    </div>
  );
};

export default About;