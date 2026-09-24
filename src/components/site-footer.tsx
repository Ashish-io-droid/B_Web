import Link from 'next/link';
import Image from 'next/image';
import { contact } from '@/data/contact';

export function SiteFooter() {
  return <footer className="site-footer">
    <div>
      <div className="footer-brand">
        <Image className="footer-logo" src="/logo.png" alt="Mammaji Real Estate" width={220} height={138} />
      </div>
      <h2>Looking at a particular plot?</h2>
      <div className="footer-links">
        <Link href="/neelbad">Neelbad</Link>
        <Link href="/about">About</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </div>
    <div className="footer-actions">
      <a className="button button-gold" href={contact.whatsappUrl} target="_blank" rel="noreferrer">Speak with Surrendra</a>
      <Link className="text-link" href="/neelbad">Explore the plan →</Link>
    </div>
    <p className="footer-fine">Neelbad Road, Bhopal, Madhya Pradesh · Information shown is subject to verification and applicable documentation.</p>
  </footer>;
}
