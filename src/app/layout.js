import { Barlow } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ), // ✅ add this line
  title: 'Binary Global — SOCaaS',
  description: 'Always-on, AI-augmented SOC as a service...',
  openGraph: {
    title: 'Binary Global — SOCaaS',
    description: 'Always-on, AI-augmented SOC as a service...',
    images: ['/assets/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={barlow.variable}>
      <body>{children}</body>
    </html>
  );
}
