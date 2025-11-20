import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
      <style>{`
        .scroll-progress-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 99999;
          backdrop-filter: blur(10px);
        }
        
        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          transition: width 0.1s ease-out;
          box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ScrollProgress;
