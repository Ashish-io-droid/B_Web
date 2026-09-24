import type { Metadata } from 'next';
import Image from 'next/image';
import './contact.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { contact } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Contact | Mammaji Real Estate',
  description: 'Speak directly with Surrendra about Neelbad Road, Bhopal.',
};

export default function ContactPage() {
  return (
    <main>
      <div className="dark-page">
        <SiteHeader />
        <section className="project-intro">
          <p className="eyebrow">Contact</p>
          <h1>Speak with<br /><em>Surrendra.</em></h1>
          <p>For Neelbad details, plot context, or a site conversation, call or send a WhatsApp message directly.</p>
          <p className="contact-actions-row">
            <a className="button button-gold" href={contact.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Surrendra</a>
            <a className="button button-line" href={`tel:${contact.phone}`}>Call {contact.displayPhone}</a>
          </p>
        </section>
      </div>

      <section className="contact-detail section-shell">
        <div className="contact-grid-split">
          <div className="contact-info-block">
            <p className="eyebrow">Direct line</p>
            <a className="direct-phone-link" href={`tel:${contact.phone}`}>{contact.displayPhone}</a>
            <p>Use the Neelbad plot lens first if you would like the message to include a specific plot or comparison.</p>
            <div className="contact-timing-card">
              <span>SITE VISITS & CONSULTATIONS</span>
              <strong>Monday – Sunday: 9:00 AM – 7:00 PM</strong>
              <small>Neelbad Road, Bhopal, Madhya Pradesh</small>
            </div>
          </div>

          <div className="contact-image-frame">
            <Image
              src="/images/road_connectivity_image.jpg"
              alt="Neelbad Road approach and connectivity"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <span className="contact-img-badge">NEELBAD ROAD APPROACH</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
