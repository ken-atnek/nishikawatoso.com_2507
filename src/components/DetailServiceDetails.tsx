/* =======================================
 * 西川塗装 施工内容
 * URL: src/components/DetailServiceDetails.tsx
 * Referenced in: src/app/service/page.tsx
 * Created: 2025-07-10
 * Last updated: 2025-07-10
 * ======================================= */
'use client';
import styles from '@/styles/components/Details.module.scss';
import Image from 'next/image';
import DetailImage01 from '@/assets/images/service/detail01.webp';
import DetailImage02 from '@/assets/images/service/detail02.webp';
import DetailImage03 from '@/assets/images/service/detail03.webp';
import DetailImage04 from '@/assets/images/service/detail04.webp';
import DetailImage05 from '@/assets/images/service/detail05.webp';
import DetailImage06 from '@/assets/images/service/detail06.webp';
import DetailImage07 from '@/assets/images/service/detail07.webp';
import DetailImage08 from '@/assets/images/service/detail08.webp';
import DetailImage09 from '@/assets/images/service/detail09.webp';
import DetailImage10 from '@/assets/images/service/detail10.webp';
import DetailImage11 from '@/assets/images/service/detail11.webp';
import DetailImage12 from '@/assets/images/service/detail12.webp';

import { useMemo } from 'react';

const DetailServiceDetails = () => {
  const ListData = useMemo(
    () => [
      {
        image: DetailImage01,
        title: '外壁塗装',
      },
      {
        image: DetailImage02,
        title: '屋根塗装',
      },
      {
        image: DetailImage03,
        title: '鉄骨塗装',
      },
      {
        image: DetailImage04,
        title: 'コーキング施工',
      },
      {
        image: DetailImage05,
        title: '防水工事',
      },
      {
        image: DetailImage06,
        title: '内装',
      },
      {
        image: DetailImage07,
        title: '外構エクステリア',
      },
      {
        image: DetailImage08,
        title: '水回り・キッチン',
      },
      {
        image: DetailImage09,
        title: '建築・修繕関係',
      },
      {
        image: DetailImage10,
        title: '内装バリアフリー',
      },
      {
        image: DetailImage11,
        title: '外構バリアフリー',
      },
      {
        image: DetailImage12,
        title: 'トイレバリアフリー',
      },
    ],
    []
  );
  return (
    <div className={styles.wrapDetails}>
      <h3>施工内容</h3>
      <div className={`${styles.itemDetail} ${styles.detailServiceDetails}`}>
        <ul>
          {ListData.map((item, index) => (
            <li key={index}>
              <figure>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={480}
                  height={300}
                />
                <figcaption>{item.title}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailServiceDetails;
