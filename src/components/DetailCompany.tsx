/* =======================================
 * 西川塗装 コンセプト
 * URL: src/components/DetailCompany.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-10
 * Last updated: 2025-07-10
 * ======================================= */
import ExternalLink from '@/components/common/ExternalLink';
import styles from '@/styles/components/Details.module.scss';
const DetailCompany = () => {
  return (
    <div className={styles.wrapDetails}>
      <h3>会社概要</h3>
      <div className={`${styles.itemDetail} ${styles.detailCompany}`}>
        <dl>
          <dt>商業</dt>
          <dd>西川塗装</dd>
        </dl>
        <dl>
          <dt>代表者</dt>
          <dd>西川　拓郎</dd>
        </dl>
        <dl>
          <dt>設立</dt>
          <dd>2001年4月1日</dd>
        </dl>
        <dl>
          <dt>所在地</dt>
          <dd>
            <address>
              <span>〒864-0032</span>熊本県荒尾市増永410‐5
            </address>
          </dd>
        </dl>
        <dl>
          <dt>電話番号</dt>
          <dd>
            <ExternalLink
              href="tel:0968627029"
              aria-label="0968-62-7029に電話"
              className={styles.itemTel}
            >
              0968‐62‐7029
            </ExternalLink>
          </dd>
        </dl>
        <dl>
          <dt>FAX</dt>
          <dd>
            <ExternalLink
              href="tel:0968627029"
              aria-label="0968-62-7029に電話"
              className={styles.itemTel}
            >
              0968‐62‐7029
            </ExternalLink>
          </dd>
        </dl>
        <dl>
          <dt>事業内容</dt>
          <dd>
            <span>一般建築塗装工事</span>
            <span>室内外リフォーム・リノベーション・施工/設計</span>
            <span>大小規模修繕工事</span>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default DetailCompany;
