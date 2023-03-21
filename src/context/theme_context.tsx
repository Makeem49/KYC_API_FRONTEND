import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeInterface {
  theme: 'dark' | null;
  setTheme: (theme: 'dark' | null) => void;
}

const ThemeContext = createContext<ThemeInterface>({} as ThemeInterface);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<'dark' | null>(() => {
    const inLocal = localStorage.getItem('theme');
    if (!inLocal) return null;

    if (window.matchMedia('(prefers-color-scheme: dark)')) {
      return 'dark';
    }
    return null;
  });

  const setTheme = (theme: 'dark' | null) => {
    setThemeMode(theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', theme);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)')) {
      setTheme(null);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: themeMode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeCtx = () => useContext(ThemeContext);

export { ThemeProvider, useThemeCtx };
