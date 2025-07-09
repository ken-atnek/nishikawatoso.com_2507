/* =======================================
 * 西川塗装 FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-07-09
 * Last updated: 2025-07-09
 * ======================================= */
import { navMenu } from '@/data/navMenuData';
import styles from '@/styles/components/common/Footer.module.scss';
import ExternalLink from '@/components/common/ExternalLink';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <article>
        <div className={styles.boxContents}>
          <nav>
            {navMenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.itemLink}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.shopInfo}>
            <address>
              <span>〒864-0032</span>
              熊本県荒尾市増永410‐5
            </address>
            <ExternalLink
              href="tel:0968627029"
              aria-label="0968-62-7029に電話"
              className={styles.itemTel}
            >
              0968‐62‐7029
            </ExternalLink>
          </div>
        </div>
        <div className={styles.boxMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13389.83681711235!2d130.43445199999996!3d32.96788600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDU4JzA0LjQiTiAxMzDCsDI2JzA0LjAiRQ!5e0!3m2!1sja!2sus!4v1752034105034!5m2!1sja!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </article>
      <div className={styles.copyright}>
        Copyright 2021 Nishikawa Tosou All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
