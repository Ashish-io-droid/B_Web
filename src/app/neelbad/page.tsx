import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { LocationContext } from '@/components/location-context';
import { PlotExplorer } from './plot-explorer';
import Image from 'next/image';
import { contact } from '@/data/contact';
import { CadastreRelief } from '@/components/cadastre-relief';
import './neelbad-page.css';

const realityProofSheets = [
  {
    number: '01',
    title: 'Entrance Gateway',
    tag: 'Architectural Arrival Gate',
    img: '/images/Entrance_gate_image.jpg',
    alt: 'Grand architectural entrance gate and boundary wall at Neelbad Road',
    copy: 'The completed entrance gate structure establishing a dignified, private threshold for residents and visitors.',
  },
  {
    number: '02',
    title: 'Spiritual Centre',
    tag: 'On-Site Mandir',
    img: '/images/Mandir_image.jpg',
    alt: 'Sacred on-site mandir providing a peaceful anchor',
    copy: 'A serene on-site mandir established within the layout, offering an enduring community and spiritual landmark.',
  },
  {
    number: '03',
    title: 'Circulation & Connectivity',
    tag: 'Arterial Road Network',
    img: '/images/road_connectivity_image.jpg',
    alt: 'Neelbad Road direct connectivity corridor',
    copy: 'Direct approach from Neelbad Road connecting swiftly into Bhopal’s VIP waterfront corridor, Bhadbhada circuit, and western bypass.',
  },
  {
    number: '04',
    title: 'Demarcated Boundaries',
    tag: 'Secured Perimeter',
    img: '/images/walls_boundary_image.jpg',
    alt: 'Perimeter boundary walls and plot cornerstones',
    copy: 'Solid perimeter boundary demarcation ensuring clean corner demarcation, legal clarity, and enhanced site security.',
  },
];

export default function NeelbadPage() {
  return (
    <main>
      <section className="neelbad-arrival">
        <div className="neelbad-arrival-image">
          <Image
            src="/images/plot_droneView_image.jpg"
            alt="Aerial perspective of Neelbad Road plots setting"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <SiteHeader />
        <i className="route-line" />
        <div className="neelbad-arrival-copy">
          <p className="eyebrow">Neelbad Road, Bhopal · 20 residential plots</p>
          <h1>A place to begin,<br /><em>precisely chosen.</em></h1>
          <p>Examine a finite place, understand every position, and carry the exact context into a direct conversation with Surrendra.</p>
          <div className="actions">
            <a className="button button-gold" href="#plan">Explore the plan →</a>
            <a className="button button-line" href={contact.whatsappUrl} target="_blank" rel="noreferrer">Speak with Surrendra</a>
          </div>
        </div>
      </section>

      <CadastreRelief />

      <PlotExplorer />

      <section className="reality-sheets">
        <div className="reality-intro section-shell">
          <p className="eyebrow">04 / Reality</p>
          <h2>Evidence is part<br />of the experience.</h2>
          <p>Authentic verified photography from the site. Every gate, landmark, and road presented as an honest record.</p>
        </div>
        {realityProofSheets.map((sheet) => (
          <article className="proof-sheet" key={sheet.number}>
            <div className="proof-sheet-image">
              <Image
                src={sheet.img}
                alt={sheet.alt}
                fill
                sizes="(max-width: 800px) 100vw, 55vw"
                style={{ objectFit: 'cover' }}
              />
              <span className="proof-tag">{sheet.tag}</span>
            </div>
            <div className="proof-sheet-copy">
              <span>{sheet.number} / REALITY</span>
              <h3>{sheet.title}</h3>
              <p>{sheet.copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="dark-page">
        <LocationContext />
      </section>

      <section className="assurance-rows section-shell">
        <div>
          <p className="eyebrow">07 / Information & assurance</p>
          <h2>Nothing important<br />is implied.</h2>
        </div>
        <div>
          {[
            ['Project information', 'The Neelbad collection contains twenty freehold residential plot positions.'],
            ['Plot information', 'Published plot areas are accurate references in both square feet and Gaj (square yards). CAD dimensions confirmed upon request.'],
            ['Documentation', 'Approved documents, registration paperwork, and applicable records are shared directly after verification.'],
            ['Verification', 'Availability, dimensions, and the 532 sqft common amenity area are verified directly before any transaction.'],
          ].map(([title, text]) => (
            <details key={title}>
              <summary>{title}<span>+</span></summary>
              <p>{text}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="handoff">
        <div className="handoff-portrait">
          <Image
            src="/images/brochure_preview_open.jpg"
            alt="Official verified project brochure and documentation"
            fill
            sizes="(max-width: 800px) 100vw, 45vw"
            style={{ objectFit: 'cover' }}
          />
          <span>VERIFIED DOCUMENTATION & BROCHURE</span>
        </div>
        <div className="handoff-copy">
          <p className="eyebrow">08 / Human handoff</p>
          <h2>Speak with<br /><em>Surrendra.</em></h2>
          <p>Looking at a particular position? Share the exact plot context directly, or call to begin a considered conversation.</p>
          <div className="handoff-actions">
            <a className="button button-gold" href={contact.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Surrendra →</a>
            <a className="button button-line" href={`tel:${contact.phone}`}>Call {contact.displayPhone}</a>
          </div>
        </div>
      </section>

      <div className="neelbad-mobile-actions">
        <a className="button button-line" href={`tel:${contact.phone}`}>Call</a>
        <a className="button button-gold" href={contact.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>

      <SiteFooter />
    </main>
  );
}
