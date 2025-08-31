import React, { useState, useEffect } from 'react';

const TestDarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900 transition-colors duration-500">
      <h1 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">Test Mode Sombre</h1>
      <div className="flex gap-4">
        <button
          onClick={() => setDarkMode(false)}
          className={`px-6 py-3 rounded-full border border-slate-300 bg-white shadow hover:bg-slate-100 transition flex items-center gap-2 ${!darkMode ? 'ring-2 ring-yellow-400' : ''}`}
        >
          <span className="text-yellow-400 text-xl">☀️</span>
          <span className="font-medium">Clair</span>
        </button>
        <button
          onClick={() => setDarkMode(true)}
          className={`px-6 py-3 rounded-full border border-slate-300 bg-white shadow hover:bg-slate-100 transition flex items-center gap-2 ${darkMode ? 'ring-2 ring-purple-600' : ''}`}
        >
          <span className="text-purple-600 text-xl">🌙</span>
          <span className="font-medium">Sombre</span>
        </button>
      </div>
      <p className="mt-8 text-slate-700 dark:text-slate-300">Clique sur un bouton pour tester le mode sombre !</p>
    </div>
  );
};

export default TestDarkMode;
