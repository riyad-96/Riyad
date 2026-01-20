import type { Metadata } from 'next';
import { Geist_Mono, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--geist-mono',
});

export const metadata: Metadata = {
  title: 'Riyad',
  description: 'Junior MERN-stack Developer & Open Source Contributor',
  openGraph: {
    title: 'Riyad | Junior MERN-stack Developer',
    description:
      'Junior MERN-stack Developer focused on React and modern web UI.',
    url: 'https://riyad-devfolio.vercel.app',
    siteName: 'Riyad',
    images: [
      {
        url: '/me.png',
        width: 490,
        height: 490,
        alt: 'Riyad Portfolio Preview',
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
