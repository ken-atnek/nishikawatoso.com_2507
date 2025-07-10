/* =======================================
 * 西川塗装 サービス
 * URL: src/components/DetailWorks.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-10
 * Last updated: 2025-07-10
 * ======================================= */
'use client';
import { usePathname } from 'next/navigation';
import styles from '@/styles/components/Details.module.scss';
import Image from 'next/image';
import WoksImage01a from '@/assets/images/works/list01a.webp';
import WoksImage01b from '@/assets/images/works/list01b.webp';
import WoksImage02a from '@/assets/images/works/list02a.webp';
import WoksImage02b from '@/assets/images/works/list02b.webp';
import WoksImage03a from '@/assets/images/works/list03a.webp';
import WoksImage03b from '@/assets/images/works/list03b.webp';

import { useMemo } from 'react';
import Link from 'next/link';

const DetailWorks = () => {
  const pathname = usePathname();
  const ListData = useMemo(
    () => [
      {
        title: '事業所外壁塗装（大牟田市）',
        image01: WoksImage01a,
        image02: WoksImage01b,
      },
      {
        title: '一般家屋外壁塗装、コーキング施工（大牟田市）',
        image01: WoksImage02a,
        image02: WoksImage02b,
      },
      {
        title: '寺社関連施設ベランダ防水加工',
        image01: WoksImage03a,
        image02: WoksImage03b,
      },
    ],
    []
  );
  return (
    <div className={styles.wrapDetails}>
      <h3>施工実績</h3>
      <div className={`${styles.itemDetail} ${styles.detailWorks}`}>
        <ul>
          {ListData.map((item, index) => (
            <li key={index}>
              <h4>{item.title}</h4>
              <div className={styles.itemImage}>
                <Image src={item.image01} alt={item.title} />
              </div>
              <div className={styles.itemImage}>
                <Image src={item.image02} alt={item.title} />
              </div>
            </li>
          ))}
        </ul>
        {pathname === '/' && (
          <Link href="/service/" className={styles.itemLinkMore}>
            <span>more</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DetailWorks;
