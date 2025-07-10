/* =======================================
 * 西川塗装 施工内容
 * URL: src/components/DetailService.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-09
 * Last updated: 2025-07-09
 * ======================================= */
'use client';
import { usePathname } from 'next/navigation';
import styles from '@/styles/components/Details.module.scss';
import Image from 'next/image';
import ServiceImage01 from '@/assets/images/service/service01.webp';
import ServiceImage02 from '@/assets/images/service/service02.webp';
import ServiceImage03 from '@/assets/images/service/service03.webp';
import { useMemo } from 'react';
import Link from 'next/link';

const DetailService = () => {
  const pathname = usePathname();
  const ListData = useMemo(
    () => [
      {
        image: ServiceImage01,
        title: 'プチリフォーム',
        description: (
          <>
            プチリフォームは1日～数日でできる部分的なリフォームです。
            <br />
            住まいのちょっとしたお困りごと、気になっているけど長年放置してしまっている箇所などを短期間で解決できるおススメリフォームです。
            <br />
            ちょっとしたことでも日々の暮らしはとても快適になりますよ。
            <br />
            「こんなことできるかな」「これがあったらいいのに」等お気軽にご相談ください。
          </>
        ),
      },
      {
        image: ServiceImage02,
        title: 'カスタムリフォーム',
        description: (
          <>
            今のお住まいの機能を充実させ快適な暮らしに改善するバージョンアップ型リフォームです。
            <br />
            お客様の現状のお住いの良さを残しつつ、これからのライフスタイルに合わせた内外装、間取りをご提案します。
            <br />
            また、お風呂・トイレ・キッチンなどの水回りや気密性や断熱などの構造自体の性能を最適に改修することで快適な暮らしを実現する現代的な住まいに再生していきます。
          </>
        ),
      },
      {
        image: ServiceImage03,
        title: 'プチリフォーム',
        description: (
          <>
            プチリフォームは1日～数日でできる部分的なリフォームです。
            <br />
            住まいのちょっとしたお困りごと、気になっているけど長年放置してしまっている箇所などを短期間で解決できるおススメリフォームです。
            <br />
            ちょっとしたことでも日々の暮らしはとても快適になりますよ。
            <br />
            「こんなことできるかな」「これがあったらいいのに」等お気軽にご相談ください。
          </>
        ),
      },
    ],
    []
  );
  return (
    <div className={styles.wrapDetails}>
      <h3>サービス</h3>
      <div className={`${styles.itemDetail} ${styles.detailService}`}>
        <ul>
          {ListData.map((item, index) => (
            <li key={index}>
              <div className={styles.itemImage}>
                <Image src={item.image} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
        {pathname === '/' && (
          <Link href="/service/" className={styles.itemLinkMore}>
            <span>more</span>
          </Link>
        )}
        {pathname === '/service/' && (
          <p className={styles.notice}>
            西川塗装では、お客様の豊かな暮らしを維持するために、幅広い施工メニューを準備しています。
          </p>
        )}
      </div>
    </div>
  );
};

export default DetailService;
