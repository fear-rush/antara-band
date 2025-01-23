import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Antara Band - Indonesian Pop Music',
  description: 'Antara is an Indonesian pop band bridging generations with their unique sound. Listen to their latest single "Selasa Depan" on Spotify.',
  keywords: ['Antara Band', 'Indonesian Pop', 'Selasa Depan', 'Music', 'Band'],
  openGraph: {
    title: 'Antara Band - Indonesian Pop Music',
    description: 'Antara is an Indonesian pop band bridging generations with their unique sound.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={inter.className}>{children}</body>
    </html>
  );
}