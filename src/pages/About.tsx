import React from 'react';
import { useTranslation } from 'react-i18next';

// Composant VideoPlayer optimisé pour éviter les problèmes de cache
const VideoPlayer: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Charger et jouer la vidéo seulement quand elle est visible
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              // Gérer les erreurs de lecture silencieusement
            });
          }
        } else {
          setIsVisible(false);
          // Mettre en pause quand elle n'est plus visible
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 } // La vidéo doit être visible à 50% pour jouer
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="metadata" // Précharger seulement les métadonnées, pas la vidéo entière
      className="w-full h-full object-cover"
      onError={(e) => {
        console.warn('Erreur de chargement vidéo:', e);
      }}
    />
  );
};

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

const About: React.FC = () => {
  const { t } = useTranslation();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Images et vidéos du carousel
  const media = [
    { type: 'image', src: '/images/image2.jpg', alt: 'Project 1' },
    { type: 'image', src: '/images/image1.JPG', alt: 'Project 2' },
    { type: 'image', src: '/images/image3.jpg', alt: 'Project 3' },
    { type: 'video', src: '/images/video1.mp4', alt: 'Project 4' },
    { type: 'image', src: '/images/image4.jpg', alt: 'Project 5' },
    { type: 'image', src: '/images/image5.jpg', alt: 'Project 6' },
  ];

  // Dupliquer les médias plusieurs fois pour un défilement infini fluide
  const duplicatedMedia = [...media, ...media, ...media, ...media];

  // Défilement automatique continu
  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels par frame

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset quand on atteint le quart (car on a quadruplé)
      if (scrollPosition >= container.scrollWidth / 4) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);
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
                {t('about.badge')}
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
            <span className="text-slate-800 dark:text-white">{t('about.title')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-6">
              {t('about.description')}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8 mb-8 sm:mb-12">
            {/* 1. Sites vitrines */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-3 sm:p-4 lg:p-6 flex flex-col items-center">
              <img src="/images/vitrine.png" alt="Sites vitrines" className="w-20 h-16 sm:w-28 sm:h-24 lg:w-35 lg:h-30 mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white text-center">{t('about.services.showcase.title')}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center">{t('about.services.showcase.description')}</p>
            </div>
            {/* 2. Portfolios */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-3 sm:p-4 lg:p-6 flex flex-col items-center">
              <img src="/images/portfolio.png" alt="Portfolio" className="w-20 h-16 sm:w-28 sm:h-24 lg:w-35 lg:h-30 mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white text-center">{t('about.services.portfolios.title')}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center">{t('about.services.portfolios.description')}</p>
            </div>
            {/* 3. Blogs / Magazines */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-3 sm:p-4 lg:p-6 flex flex-col items-center">
              <img src="/images/blog.png" alt="Blog" className="w-20 h-16 sm:w-28 sm:h-24 lg:w-35 lg:h-30 mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white text-center">{t('about.services.blogs.title')}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center">{t('about.services.blogs.description')}</p>
            </div>
            {/* 4. E-commerce */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-3 sm:p-4 lg:p-6 flex flex-col items-center">
              <img src="/images/ecommerce.jpg" alt="E-commerce" className="w-20 h-16 sm:w-28 sm:h-24 lg:w-35 lg:h-30 mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white text-center">{t('about.services.ecommerce.title')}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center">{t('about.services.ecommerce.description')}</p>
            </div>
            {/* 5. Web Apps */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-3 sm:p-4 lg:p-6 flex flex-col items-center">
              <img src="/images/webapp.jpg" alt="Web App" className="w-20 h-16 sm:w-28 sm:h-24 lg:w-35 lg:h-30 mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white text-center">{t('about.services.webapps.title')}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center">{t('about.services.webapps.description')}</p>
            </div>
            {/* 9. Landing Pages */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-3 sm:p-4 lg:p-6 flex flex-col items-center">
              <img src="/images/landing.jpg" alt="Landing Page" className="w-20 h-16 sm:w-28 sm:h-24 lg:w-35 lg:h-30 mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white text-center">{t('about.services.landing.title')}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center">{t('about.services.landing.description')}</p>
            </div>
          </div>
          <br></br>

          {/* Gallery Section */}
          <div className="w-full mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-900 dark:to-purple-900 rounded-full mb-4 sm:mb-6">
                <div className="bg-white dark:bg-slate-900 px-4 py-1 sm:px-5 sm:py-1.5 rounded-full">
                  <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {t('about.gallery.badge')}
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white mb-6 sm:mb-12 tracking-tight">
                {t('about.gallery.title')}
              </h3>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
                {t('about.gallery.description')}
              </p>
            </div>

            {/* Carousel - Défilement horizontal continu */}
            <div className="relative overflow-hidden">
              {/* Conteneur de défilement horizontal */}
              <div ref={scrollContainerRef} className="flex gap-4 overflow-x-hidden pb-4">
                {duplicatedMedia.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <div className="relative aspect-video bg-slate-900">
                      {item.type === 'image' ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <VideoPlayer src={item.src} alt={item.alt} />
                      )}
                      
                      {/* Indicateur type de média */}
                      <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-black/50 text-white text-xs font-medium">
                        {item.type === 'video' ? '▶ Video' : '📷 Image'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

<section className="w-full mb-12 sm:mb-16">
  <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white mb-6 sm:mb-12 tracking-tight text-center">{t('about.education')}</h3>
  <div className="relative max-w-2xl mx-auto">
    {/* Ligne centrale */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>
    <div className="flex flex-col gap-8 sm:gap-16">

      {/* Master 2  */}
      <div className="flex items-center relative">
        <div className="z-10 flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border-2 sm:border-4 border-blue-400 dark:border-blue-500 mx-2 sm:mx-4">
          <img src="/images/ecole-iris.png" alt="Licence professionnel CDW" className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-3 sm:p-6 ml-2 sm:ml-8">
          <div className="text-sm sm:text-lg font-bold text-blue-700 dark:text-blue-300">2023-2024</div>
          <div className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white">Mastère 2  Expert IT, développement et base de données</div>
          <div className="text-xs sm:text-base text-slate-600 dark:text-slate-300">Education at IRIS School in Paris - IT School.</div>
        </div>
        
      </div>

      {/* Master 1*/}
      <div className="flex items-center relative">
        <div className="z-10 flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border-2 sm:border-4 border-blue-400 dark:border-blue-500 mx-2 sm:mx-4">
          <img src="/images/ecole-iris.png" alt="Licence professionnel CDW" className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-3 sm:p-6 ml-2 sm:ml-8">
          <div className="text-sm sm:text-lg font-bold text-blue-700 dark:text-blue-300">2023-2024</div>
          <div className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white">Mastère 1  Expert IT, développement et base de données</div>
          <div className="text-xs sm:text-base text-slate-600 dark:text-slate-300">Education at IRIS School in Paris - IT School.</div>
        </div>
        
      </div>
      {/* Licence professionnel CDW */}
      <div className="flex items-center relative">
        <div className="z-10 flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border-2 sm:border-4 border-blue-400 dark:border-blue-500 mx-2 sm:mx-4">
          <img src="/images/ecole-iris.png" alt="Licence professionnel CDW" className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-3 sm:p-6 ml-2 sm:ml-8">
          <div className="text-sm sm:text-lg font-bold text-blue-700 dark:text-blue-300">2022-2023</div>
          <div className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white">Licence Bachelors Informatique</div>
          <div className="text-xs sm:text-base text-slate-600 dark:text-slate-300">Education at IRIS School in Paris - IT School.</div>
        </div>

      </div>
      {/* BTS Services Informatiques aux Organisations */}
      <div className="flex items-center relative">
        <div className="z-10 flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border-2 sm:border-4 border-blue-400 dark:border-blue-500 mx-2 sm:mx-4">
          <img src="/images/ecole-iris.png" alt="BTS SIO" className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-3 sm:p-6 ml-2 sm:ml-8">
          <div className="text-sm sm:text-lg font-bold text-blue-700 dark:text-blue-300">2021-2022</div>
          <div className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white">BTS Services Informatiques aux Organisations option : SLAM </div>
          <div className="text-xs sm:text-base text-slate-600 dark:text-slate-300">Education at IRIS School in Paris - IT School.</div>
        </div>
      </div>
      {/* BAC STMG */}
      <div className="flex items-center relative">
        <div className="z-10 flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border-2 sm:border-4 border-blue-400 dark:border-blue-500 mx-2 sm:mx-4">
          <img src="/images/ecole-agora.jpg" alt="BAC STI2D" className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-3 sm:p-6 ml-2 sm:ml-8">
          <div className="text-sm sm:text-lg font-bold text-blue-700 dark:text-blue-300">2020-2021</div>
          <div className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-slate-800 dark:text-white">BAC STI2D</div>
          <div className="text-xs sm:text-base text-slate-600 dark:text-slate-300">Option SIN (système informatique et numérique).</div>
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