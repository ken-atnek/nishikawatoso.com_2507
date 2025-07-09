/* =======================================
 * ページHEAD
 * URL: src/components/common/PageHead.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-05
 * ======================================= */
import React from 'react';
import styles from '@/styles/components/common/PageHead.module.scss';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

type PageHeadProps = {
  title: string;
  subTitle: string;
  description: React.ReactNode;
  image: StaticImageData | string;
};
const PageHead = ({ title, subTitle, description, image }: PageHeadProps) => {
  return (
    <>
      <section className={styles.containerPageHead}>
        <h1>{title}</h1>
        <article>
          <div className={styles.itemImage}>
            <Image src={image} alt={title} fill sizes="100vw" />
          </div>
          <div className={styles.subTitle}>
            {subTitle.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          <p>
            {typeof description === 'string'
              ? description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))
              : description}
          </p>
        </article>
      </section>
    </>
  );
};
export default PageHead;
