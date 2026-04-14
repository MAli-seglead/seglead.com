import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from './providers';

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Black.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Seglead | İşinizi Büyüten Web Siteleri',
  description: 'Yeni nesil işletmeler için modern, hızlı ve satış odaklı web çözümleri.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={satoshi.className}>
      
        <Providers>
        <div className="grid-lines" />
          {children}
        </Providers>
      </body>
    </html>
  );
}