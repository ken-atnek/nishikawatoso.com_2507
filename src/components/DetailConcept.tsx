/* =======================================
 * 西川塗装 コンセプト
 * URL: src/components/DetailConcept.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-09
 * Last updated: 2025-07-09
 * ======================================= */

import styles from '@/styles/components/Details.module.scss';
import Concept from '@/assets/images/detail-concept.webp';
import Image from 'next/image';
const DetailConcept = () => {
  return (
    <div className={styles.wrapDetails}>
      <h3>コンセプト</h3>
      <div className={`${styles.itemDetail} ${styles.detailConcept}`}>
        <div className={styles.itemImage}>
          <Image src={Concept} alt="コンセプト" fill />
        </div>
        <h4>丁寧な仕事の積み重ね</h4>
        <p>
          塗装に限らず住まい全般のお困りごとまでトータルサポートいたします。
          西川塗装では外壁・屋根の塗装はもちろん、外構から内装に至るまで住まいのアフターケア全般にご対応いたします。
          <br />
          まずは、弊社スタッフがお客様のご希望をヒアリングさせていただいたき、最適なプランをご提案いたします。
        </p>
      </div>
    </div>
  );
};

export default DetailConcept;
