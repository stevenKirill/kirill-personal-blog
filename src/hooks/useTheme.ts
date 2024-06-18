'use client';

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export function useThemeSwitch(): [string, Dispatch<SetStateAction<string>>] {
  const preferDarkQuery = '(prefers-color-schema:dark)';
  const storageKey = 'theme';

  const toggleTheme = (theme: string) => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const getUserPreference = () => {
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) {
      return userPref;
    }
    return window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light';
  };

  const [mode, setMode] = useState(window.localStorage.getItem(storageKey) || 'light');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme(newMode);
    };

    handleChange();

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    toggleTheme(mode);
  }, [mode]);

  return [mode, setMode];
}
