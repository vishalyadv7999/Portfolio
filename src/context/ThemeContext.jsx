import { useEffect, useState } from 'react';
import { ThemeContext } from './theme';

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('vy_theme');
      if (saved) return saved === 'dark';
    } catch { /* Browser storage may be disabled. */ }
    return document.documentElement.classList.contains('dark');
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#090d16' : '#ffffff');
    try { localStorage.setItem('vy_theme', isDark ? 'dark' : 'light'); } catch { /* Theme works without persistence. */ }
  }, [isDark]);
  return <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(value => !value) }}>{children}</ThemeContext.Provider>;
}
