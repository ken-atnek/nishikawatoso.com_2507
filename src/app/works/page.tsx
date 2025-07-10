/* =======================================
 * 西川塗装 施工実績
 * URL:src/app/works/page.tsx
 * Created: 2025-07-10
 * Last updated: 2025-07-10
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageTop.module.scss';
import bgImage from '@/assets/images/title-works-bg.webp';
import LeftBan from '@/components/LeftBan';
import LinkContact from '@/components/LinkContact';
import PageHead from '@/components/common/PageHead';
import DetailWorks from '@/components/DetailWorks';

export const generateMetadata = (): Metadata => {
  return {
    title: '施工実績｜西川塗装',
    description:
      '私たち西川塗装は、熊本県荒尾にある塗装会社です。塗装に限らず住まい全般のお困りごとまでトータルサポートいたします。外壁・屋根の塗装はもちろん、外構から内装に至るまで住まいのアフターケア全般にご対応いたします。まずは、弊社スタッフがお客様のご希望をヒアリングさせていただいたき、最適なプランをご提案いたします。',
  };
};
export default function PageWorks() {
  return (
    <>
      <PageHead title="施工実績" titleEn="works" backgroundImage={bgImage} />
      <section className={styles.containerTop}>
        <article>
          <LeftBan />
          <div className={styles.blockContents}>
            <DetailWorks />
            <LinkContact />
          </div>
        </article>
      </section>
    </>
  );
}
