import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';

export default function NotFound() {
  return <main className="dark-page"><SiteHeader /><section className="project-intro"><p className="eyebrow">404 / Not found</p><h1>This route has<br /><em>moved on.</em></h1><p>The page you requested is not part of the current Mammaji collection.</p><Link href="/neelbad" className="button button-gold">Explore Neelbad →</Link></section></main>;
}
