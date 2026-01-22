import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cookies } from 'next/headers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value;
  const htmlClass = theme === 'dark' ? 'dark' : '';

  return (
    <html lang="en" className={htmlClass}>
      <body
        className={`${inter.variable} font-inter bg-white text-black antialiased dark:bg-neutral-950 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
