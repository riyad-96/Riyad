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
  description: 'Junior Full-Stack Developer & Open Source Contributor',
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
