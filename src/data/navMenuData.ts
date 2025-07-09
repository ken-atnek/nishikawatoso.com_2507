/* =======================================
 * メニュー項目
 * URL: src/data/navMenuData.ts
 * Created: 2025-07-09
 * Last updated: 2025-07-09
 * ======================================= */

export type NavMenuItem = {
  href: string;
  label: string;
};

export const navMenu: NavMenuItem[] = [
  { href: '/', label: 'TOP' },
  { href: '/service/', label: 'サービス / 施工内容' },
  { href: '/works/', label: '施工実績' },
  { href: '/contact/', label: 'お仕事Q&A / お問い合わせ' },
  { href: '/company/', label: '会社概要' },
];
