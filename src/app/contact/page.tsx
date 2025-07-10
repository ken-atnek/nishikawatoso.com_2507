/* =======================================
 * 西川塗装 お仕事Q&A / お問い合わせ
 * URL:src/app/contact/page.tsx
 * Created: 2025-07-10
 * Last updated: 2025-07-10
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageTop.module.scss';
import bgImage from '@/assets/images/title-contact-bg.webp';
import LeftBan from '@/components/LeftBan';
import PageHead from '@/components/common/PageHead';
import DetailQuestions from '@/components/DetailQuestions';
import DetailForm from '@/components/DetailForm';

export const generateMetadata = (): Metadata => {
  return {
    title: 'お仕事Q&A / お問い合わせ｜西川塗装',
    description:
      '私たち西川塗装は、熊本県荒尾にある塗装会社です。塗装に限らず住まい全般のお困りごとまでトータルサポートいたします。外壁・屋根の塗装はもちろん、外構から内装に至るまで住まいのアフターケア全般にご対応いたします。まずは、弊社スタッフがお客様のご希望をヒアリングさせていただいたき、最適なプランをご提案いたします。',
  };
};
export default function PageContact() {
  return (
    <>
      <PageHead
        title="お仕事Q&A / お問い合わせ"
        titleEn="contact"
        backgroundImage={bgImage}
      />
      <section className={styles.containerTop}>
        <article>
          <LeftBan />
          <div className={styles.blockContents}>
            <DetailQuestions />
            <DetailForm />
          </div>
        </article>
      </section>
    </>
  );
}
