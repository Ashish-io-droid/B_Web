import type { Metadata } from 'next';
import Image from 'next/image';
import './about.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'About | Mammaji Real Estate',
  description: 'An honest introduction to Mammaji Real Estate.',
};

export default function AboutPage() {
  return (
    <main>
      <div className="dark-page">
        <SiteHeader />
        <section className="project-intro">
          <p className="eyebrow">About Mammaji</p>
          <h1>Local knowledge.<br /><em>Personal service.</em></h1>
          <p>Mammaji Real Estate is built around straightforward conversations and a close understanding of Bhopal. Our story is grounded in verified facts and authentic photographs.</p>
        </section>
      </div>

      <section className="statement section-shell">
        <p className="eyebrow">What guides the work</p>
        <div className="statement-content">
          <div className="about-logo-mark"><Image src="/logo.png" alt="Mammaji Real Estate" width={300} height={188} /></div>
          <div>
            <h2>Start with what can be shown.</h2>
            <p>We keep the experience personal, the information clear, and the next step direct. That means no invented proof, no anonymous lead form, and no urgency theatre.</p>
            <div className="about-values">
              <span>Transparency</span>
              <span>Local knowledge</span>
              <span>Personal service</span>
              <span>CAD Verified</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-visuals section-shell">
        <div className="about-visuals-grid">
          <article className="about-image-card">
            <div className="about-img-frame" style={{ position: 'relative', minHeight: '340px' }}>
              <Image
                src="/images/brochure_book_image.jpg"
                alt="Mammaji Real Estate official project brochure"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="about-img-copy">
              <span>DOCUMENTATION</span>
              <h3>Verified Project Records</h3>
              <p>Every plot dimension, boundary stone, and road alignment is documented in official project paperwork.</p>
            </div>
          </article>

          <article className="about-image-card">
            <div className="about-img-frame" style={{ position: 'relative', minHeight: '340px' }}>
              <Image
                src="/images/aesthetic_oneplot_diagram_image.jpg"
                alt="Architectural single-plot layout precision"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="about-img-copy">
              <span>CADASTRAL PRECISION</span>
              <h3>Single Plot Blueprint</h3>
              <p>Clarity before consultation. Examine individual layouts with accurate dimensions and dual area measurements.</p>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
