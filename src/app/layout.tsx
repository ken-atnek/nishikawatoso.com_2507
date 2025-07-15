/* =======================================
 * 西川塗装 Layout
 * URL:src/app/layout.tsx
 * Created: 2025-07-09
 * Last updated: 2025-07-09
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
// import { M_PLUS_1p } from 'next/font/google';
// const mPlus1p = M_PLUS_1p({
//   weight: ['100', '300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// 実際の本番環境かどうかを判定
const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(
      process.env.NEXT_PUBLIC_METADATA_BASE || 'https://nishikawatoso.com/'
    )
  : undefined;

export const metadata: Metadata = {
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      url: metadataBase?.toString(),
      type: 'website',
      images: [
        {
          url: '/ogp.jpg',
          width: 1200,
          height: 630,
          alt: '西川塗装のOGP画像',
        },
      ],
    },
  }),
  title: ' 西川塗装',
  description: isRealProduction ? '西川塗装' : undefined,
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
  icons: {
    icon: [
      // { url: 'favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      // { url: 'favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: 'favicon/favicon.ico', type: 'image/x-icon' },
    ],
    // apple: [{ url: 'favicon/apple-touch-icon.png', sizes: '180x180' }],
    // other: [
    //   {
    //     rel: 'icon',
    //     url: 'favicon/android-chrome-192x192.png',
    //     sizes: '192x192',
    //     type: 'image/png',
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="robots"
          content={isRealProduction ? 'index, follow' : 'noindex, nofollow'}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
