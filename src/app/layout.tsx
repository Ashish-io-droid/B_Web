import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import './theme.css';
import './premium.css';
import './mobile-ux.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mammajirealestate.in'),
  title: { default: 'Mammaji Real Estate | Neelbad, Bhopal', template: '%s | Mammaji Real Estate' },
  description: 'A precise way to explore residential plots at Neelbad Road, Bhopal.',
  keywords: ['Mammaji Real Estate', 'Neelbad Road plots', 'Bhopal real estate', 'residential plots Bhopal'],
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'Mammaji Real Estate', title: 'Mammaji Real Estate | Neelbad, Bhopal', description: 'Explore residential plots at Neelbad Road, Bhopal.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: 'Mammaji Real Estate', telephone: '+918319185631', address: { '@type': 'PostalAddress', addressLocality: 'Bhopal', addressRegion: 'Madhya Pradesh', addressCountry: 'IN' }, areaServed: 'Bhopal' };
  return <html lang="en" className={`${playfair.variable} ${inter.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />{children}</body></html>;
}
