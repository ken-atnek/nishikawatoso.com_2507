/* =======================================
 * 西川塗装 TOPページ
 * URL: /app/page.tsx
 * Created: 2025-07-09
 * Last updated: 2025-07-09
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';

export const generateMetadata = (): Metadata => {
  return {
    title: '西川塗装',
    description:
      '私たち西川塗装は、熊本県荒尾にある塗装会社です。塗装に限らず住まい全般のお困りごとまでトータルサポートいたします。外壁・屋根の塗装はもちろん、外構から内装に至るまで住まいのアフターケア全般にご対応いたします。まずは、弊社スタッフがお客様のご希望をヒアリングさせていただいたき、最適なプランをご提案いたします。',
  };
};
export default function Home() {
  return <></>;
}
