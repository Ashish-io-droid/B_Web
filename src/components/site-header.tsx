'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import { contact } from '@/data/contact';
export { contact };

const whatsappUrl = contact.whatsappUrl;

const navLinks = [
  { href: '/#properties', label: 'Properties' },
  { href: '/neelbad', label: 'Neelbad' },
  { href: '/#services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  /* Close drawer on route change */
  useEffect(() => { setDrawerOpen(false); }, [pathname]);

  /* Lock body scroll while drawer is open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  /* Escape key closes drawer */
  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && drawerOpen) setDrawerOpen(false);
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [drawerOpen]);

  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Mammaji Real Estate home">
          <Image className="brand-logo" src="/logo.png" alt="Mammaji Real Estate" width={188} height={118} priority />
        </Link>
        <nav aria-label="Main navigation">
          {navLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <a className="header-contact desktop-only" href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp Surrendra <span>↗</span>
        </a>
        <button
          className={`nav-toggle ${drawerOpen ? 'is-open' : ''}`}
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
        >
          <span /><span /><span />
        </button>
      </header>
      <div className={`nav-drawer ${drawerOpen ? 'is-open' : ''}`} aria-hidden={!drawerOpen}>
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setDrawerOpen(false)} tabIndex={drawerOpen ? 0 : -1}>
            {link.label}
          </Link>
        ))}
        <a
          className="drawer-cta button button-gold"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          tabIndex={drawerOpen ? 0 : -1}
        >
          WhatsApp Surrendra
        </a>
      </div>
    </>
  );
}

