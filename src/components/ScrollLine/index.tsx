'use client';

import React, { useEffect, useState, useCallback } from 'react';
import styles from './classes.module.css';

const ScrollLine: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const calculateScrollProgress = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (documentHeight > 0) {
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    }
  }, []);

  useEffect(() => {
    // Добавляем passive: true для улучшения производительности
    window.addEventListener('scroll', calculateScrollProgress, { passive: true });
    // Добавляем обработчик изменения размера окна
    window.addEventListener('resize', calculateScrollProgress, { passive: true });

    // Инициализация начального значения
    calculateScrollProgress();

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, [calculateScrollProgress]);

  return (
    <div
      className={styles.blogReadTimeBar}
      style={{
        position: 'fixed', top: '51px', left: 0, right: 0, zIndex: 1000,
      }}
    >
      <progress
        className={styles.blogReadTimeBarIndicator}
        style={{ width: '100%', height: '4px', border: 'none' }}
        max={100}
        value={scrollProgress}
      />
    </div>
  );
};

export default ScrollLine;
