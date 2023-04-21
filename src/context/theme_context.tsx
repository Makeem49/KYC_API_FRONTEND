import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeInterface {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  disable: () => void;
}

const ThemeContext = createContext<ThemeInterface>({} as ThemeInterface);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('light');
  const isStored = localStorage.getItem('theme');
  // const [isStored, setIsStored] = useState(localStorage.getItem('theme'));
  const [enabled, setEnabled] = useState(true);

  // const [themeMode, setThemeMode] = useState();
  const setTheme = (theme: 'dark' | 'light') => {
    setThemeMode(theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    enabled && localStorage.setItem('theme', theme);
  };
  useEffect(() => {
    if (!isStored) setEnabled(false);
  }, [isStored]);

  useEffect(() => {
    if (isStored && enabled) {
      setEnabled(true);
      setTheme(isStored as 'dark' | 'light');
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    } // eslint-disable-next-line
  }, [enabled]);

  const disable = () => {
    console.log('setting enabled', enabled);
    setEnabled(false);
    localStorage.removeItem('theme');
  };
  return (
    <ThemeContext.Provider value={{ theme: themeMode, setTheme, disable }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeCtx = () => useContext(ThemeContext);

export { ThemeProvider, useThemeCtx };
