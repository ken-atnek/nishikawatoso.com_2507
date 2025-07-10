/* =======================================
 * 西川塗装 レフトバナー
 * URL: src/components/LeftBan.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-09
 * Last updated: 2025-07-09
 * ======================================= */

import Image from 'next/image';
import LinkBan01 from '@/assets/images/left-ban01.webp';
import LinkBan02 from '@/assets/images/left-ban02.webp';
import Link from 'next/link';
import styles from '@/styles/components/LeftBan.module.scss';

const LeftBan = () => {
  return (
    <nav className={styles.leftList}>
      <div>
        <Link href="/contact/">
          <Image src={LinkBan01} alt="西川塗装" />
        </Link>
      </div>
      <div>
        <Link href="/contact/">
          <Image src={LinkBan02} alt="お見積・ご依頼" />
        </Link>
      </div>
    </nav>
  );
};

export default LeftBan;
