/* =======================================
 * 西川塗装 TOPスライド
 * URL: src/components/TopSlide.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-09
 * Last updated: 2025-07-09
 * ======================================= */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/PageTop.module.scss';

const images = [
  '/images/slide/slide01.webp',
  '/images/slide/slide02.webp',
  '/images/slide/slide03.webp',
];

const TopSlide = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4秒ごとに切り替え
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.containerSlide}>
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`スライド${index + 1}`}
          fill
          className={`${styles.slideImage} ${index === current ? styles.active : ''}`}
          sizes="100vw"
          priority={index === 0}
        />
      ))}
    </section>
  );
};

export default TopSlide;
