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

const Gallery: React.FC = () => {
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
    <FadeInSection>
      <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-900 dark:to-purple-900 rounded-full mb-4 sm:mb-6">
              <div className="bg-white dark:bg-slate-900 px-4 py-1 sm:px-5 sm:py-1.5 rounded-full">
                <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Gallery
                </span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 leading-tight">
              My Work & Journey
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              A visual showcase of my projects and experiences
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
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
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
      </div>
    </FadeInSection>
  );
};

export default Gallery;
