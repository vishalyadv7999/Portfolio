import React, { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollWidth(Math.max(0, Math.min(100, currentScroll)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    const observer = new ResizeObserver(handleScroll);
    observer.observe(document.body);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-emerald-400 dark:bg-emerald-400 light:bg-emerald-500 z-[100] transition-all duration-75"
      style={{ width: `${scrollWidth}%` }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
