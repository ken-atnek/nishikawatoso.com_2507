/* =======================================
 * 西川塗装 お仕事Q&A
 * URL: src/components/DetailQuestions.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-09
 * Last updated: 2025-07-10
 * ======================================= */
'use client';
import styles from '@/styles/components/Details.module.scss';
import { useMemo } from 'react';
import { useState, useRef } from 'react';
const DetailQuestions = () => {
  const listData = useMemo(
    () => [
      {
        title:
          'Q：見積には費用がかかりますか？見積にはどのくらい時間がかかりますか？',
        answer: (
          <>
            お見積はもちろん無料です。お見積り書作成にあたり、まずは直接現地に伺い、ご希望の箇所を実測いたします。その際にお客様のご要望もお聞かせいただき、合わせてお見積書を作成いたします。なお、訪問は1時間程度お時間を頂戴いたします。
          </>
        ),
      },
      {
        title:
          'Q：「気になっているちょっとした箇所だけ・・・」という相談も大丈夫でしょうか？',
        answer: (
          <>
            もちろん大丈夫です。例えば「窓のサッシだけ」といった1日でできる小さな作業も遠慮なくご相談ください。
          </>
        ),
      },
      {
        title:
          'Q：トイレ、お風呂、キッチンの水回りをリフォームしたいと思っています。どんなメーカーの商品が選べますか？',
        answer: (
          <>
            弊社はどこのメーカーの商品でも施工設置できます。予算感からご希望に合う商品をご提案いたします。
          </>
        ),
      },
      {
        title: 'Q：平日の日中は仕事をしています。施工は土日でも可能ですか？',
        answer: (
          <>
            土日での施工もちろん対応致します。
            <br />
            外壁塗装などの外装についての施工については、ご不在の際にも対応・施工は可能です。
          </>
        ),
      },
      {
        title: 'Q：追加費用が掛かる場合はどんな時ですか？',
        answer: (
          <>
            基本的には最初のお見積りに沿って施工は行います。
            <br />
            作業工程の中でプラス施工が必要になった場合は、ご相談ののち改めてお見積りさせていただきます。
          </>
        ),
      },
    ],
    []
  );
  return (
    <div className={styles.wrapDetails}>
      <h3>お仕事Q&A</h3>
      <div className={`${styles.itemDetail} ${styles.detailQuestions}`}>
        <ul className={styles.listQuestions}>
          {listData.map((item, index) => (
            <QuestionsItem
              key={index}
              title={item.title}
              answer={item.answer}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailQuestions;

// 子コンポーネント
const QuestionsItem = ({
  title,
  answer,
}: {
  title: string;
  answer: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={isOpen ? styles.open : styles.closed}
      >
        {title}
      </button>
      <div
        ref={contentRef}
        className={styles.itemAnswer}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.4s ease',
          overflow: 'hidden',
        }}
      >
        <div>{answer}</div>
      </div>
    </li>
  );
};
