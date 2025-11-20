import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement (vous pouvez ajuster le délai)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-logo">
          <div className="loader-circle"></div>
          <div className="loader-circle delay-1"></div>
          <div className="loader-circle delay-2"></div>
        </div>
        <h1 className="loader-text">Neal Bristol</h1>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
      
      <style>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999999;
          animation: fadeOut 0.5s ease-out 1.5s forwards;
        }
        
        .loader-content {
          text-align: center;
        }
        
        .loader-logo {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 auto 30px;
        }
        
        .loader-circle {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid transparent;
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        
        .loader-circle.delay-1 {
          width: 70%;
          height: 70%;
          top: 15%;
          left: 15%;
          border-top-color: rgba(255, 255, 255, 0.7);
          animation-delay: 0.2s;
        }
        
        .loader-circle.delay-2 {
          width: 40%;
          height: 40%;
          top: 30%;
          left: 30%;
          border-top-color: rgba(255, 255, 255, 0.4);
          animation-delay: 0.4s;
        }
        
        .loader-text {
          font-size: 2rem;
          font-weight: bold;
          color: white;
          margin-bottom: 30px;
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        .loader-bar {
          width: 200px;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
          margin: 0 auto;
        }
        
        .loader-progress {
          width: 0%;
          height: 100%;
          background: white;
          border-radius: 2px;
          animation: progress 1.8s ease-out forwards;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
