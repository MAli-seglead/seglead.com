import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Black.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SEGLEAD İŞİNİZİ BÜYÜTEN WEB SİTELERİ',
  description: 'Yeni nesil işletmeler için modern, hızlı ve satış odaklı web çözümleri.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={satoshi.className}>{children}</body>
    </html>
  );
}