/* =======================================
 * 西川塗装 ページHEAD
 * URL: src/components/common/PageHead.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-05
 * ======================================= */
import React from 'react';
import styles from '@/styles/components/common/PageHead.module.scss';
import type { StaticImageData } from 'next/image';

type PageHeadProps = {
  titleEn: string;
  title: string;
  backgroundImage?: StaticImageData;
};
const PageHead = ({ title, titleEn, backgroundImage }: PageHeadProps) => {
  return (
    <section
      className={styles.containerPageHead}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage.src})`
          : undefined,
      }}
    >
      <span className={styles.h2Sidebar}>{titleEn}</span>
      <h2>{title}</h2>
    </section>
  );
};
export default PageHead;
