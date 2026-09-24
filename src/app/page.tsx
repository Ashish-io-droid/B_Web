import Link from 'next/link';
import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { contact } from '@/data/contact';
import { SplineIntro } from '@/components/spline-intro';
import { EnquiryForm } from '@/components/enquiry-form';
import { LifestyleVideo } from '@/components/lifestyle-video';
import './living-interlude.css';
import './home-premium.css';

const featuredProperties = [
  {
    number: '01',
    title: 'The corner arrival',
    area: '1,248 sqft (138.7 Gaj)',
    meta: 'Corner position · Dual road frontage',
    img: '/images/PlotView_image.jpg',
    alt: 'Plot 01 corner boundary perspective at Neelbad Road',
  },
  {
    number: '02',
    title: 'The generous edge',
    area: '1,105 sqft (122.8 Gaj)',
    meta: 'Residential position · Open view corridor',
    img: '/images/land_view_real_image.jpg',
    alt: 'Plot 06 boundary landscape view at Neelbad Road',
  },
  {
    number: '03',
    title: 'The composed collection',
    area: '800 sqft onwards (88.9 Gaj)',
    meta: '20 positions total · 18\' CC Road access',
    img: '/images/Road_view_image.jpg',
    alt: '18-foot internal concrete road circulation network',
  },
  {
    number: '04',
    title: 'The measured choice',
    area: '1,040 sqft (115.6 Gaj)',
    meta: 'Residential position · Clear plot context',
    img: '/images/aesthetic_oneplot_diagram_image.jpg',
    alt: 'Illustrated residential plot plan and measurement context',
  },
];

export default function Home() {
  return (
    <main>
      <SplineIntro />

      <section className="hero" id="arrival" tabIndex={-1}>
        <SiteHeader />
        <div className="hero-grid" aria-hidden="true"><i /><i /><i /><i /></div>

        <div className="hero-copy">
          <p className="eyebrow">Neelbad Road, Bhopal</p>
          <h1>A place to begin,<br /><em>precisely chosen.</em></h1>
          <p className="hero-lead">Twenty residential plots, arranged around a simple idea: choose land with clarity.</p>
          <div className="actions">
            <Link className="button button-gold" href="/neelbad">Explore the plan <span>→</span></Link>
            <a className="button button-line" href={contact.whatsappUrl} target="_blank" rel="noreferrer">Speak with Surrendra</a>
          </div>
        </div>

        <aside className="property-finder" aria-label="Start your property search">
          <p className="eyebrow">Find your position</p>
          <h2>Begin with<br />what matters.</h2>
          <div className="finder-fields">
            <label>Property type<span>Residential plot</span></label>
            <label>Location<span>Neelbad Road, Bhopal</span></label>
            <label>Reference area<span>800–1,248 sqft</span></label>
            <label>Availability<span>Verify with us</span></label>
          </div>
          <Link className="button button-gold" href="/neelbad">Search the plan →</Link>
        </aside>

        <div className="relief" aria-hidden="true">
          <div className="relief-road" />
          <div className="relief-plot r1" />
          <div className="relief-plot r2" />
          <div className="relief-plot r3" />
          <span>20 positions</span>
        </div>

        <div className="hero-meta-bar" aria-label="Project reference coordinates">
          <span className="meta-badge"><i className="compass-icon">N</i> 23°11' N · 77°21' E</span>
          <span className="meta-sep">/</span>
          <span>20 Residential Positions</span>
          <span className="meta-sep">/</span>
          <span>18' CC Road Network</span>
          <span className="meta-sep">/</span>
          <span>800–1,248 sqft</span>
        </div>
      </section>

      <section className="living-interlude" aria-labelledby="living-title">
        <LifestyleVideo />
        <div className="living-interlude-copy">
          <p className="eyebrow">More than a plot</p>
          <h2 id="living-title">Space for the life<br /><em>you imagine.</em></h2>
          <p>A considered home begins with the right piece of land—and room for every possibility that follows.</p>
          <Link className="text-link" href="/neelbad">Discover Neelbad →</Link>
        </div>
        <span className="living-interlude-label">MAMMAJI REAL ESTATE / A LIFE IN PLACE</span>
      </section>

      {/* Section 01: Featured Collection with Real Photography */}
      <section className="featured section-shell" id="properties">
        <div className="section-top">
          <div>
            <p className="eyebrow">01 / Featured collection</p>
            <h2>A considered place<br /><em>to start.</em></h2>
          </div>
          <Link className="text-link" href="/neelbad">View all positions →</Link>
        </div>
        <p className="section-intro">A focused residential land collection at Neelbad Road. Explore each position before you start the conversation.</p>
        <div className="property-grid">
          {featuredProperties.map((prop) => (
            <article className="property-card" key={prop.number}>
              <div className="property-image">
                <Image
                  src={prop.img}
                  alt={prop.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <span>NEELBAD / {prop.number}</span>
              </div>
              <div className="property-copy">
                <p>{prop.meta}</p>
                <h3>{prop.title}</h3>
                <strong>{prop.area}</strong>
                <Link href="/neelbad">Explore position <span>→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 02: Project Journal / Site Gallery with Real Images */}
      <section className="gallery section-shell" id="gallery">
        <div className="section-top">
          <div>
            <p className="eyebrow">02 / Project journal</p>
            <h2>See the setting<br /><em>as it takes shape.</em></h2>
          </div>
          <p className="section-intro">Verified site photography, architectural arrival gate, and sunset vista at Neelbad Road.</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-large">
            <Image
              src="/images/hero_image.png"
              alt="Sunset arrival setting and landscaped gateway at Neelbad Road"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              style={{ objectFit: 'cover' }}
            />
            <figcaption>Sunset arrival & landscaped gateway · Neelbad Road</figcaption>
          </figure>
          <figure style={{ position: 'relative' }}>
            <Image
              src="/images/Entrance_gate_images.jpg"
              alt="Grand architectural entrance gate and boundary"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <figcaption>01 / Grand entrance gate & security threshold</figcaption>
          </figure>
          <figure style={{ position: 'relative' }}>
            <Image
              src="/images/lush_entry_image.jpg"
              alt="Lush green entrance corridor at Neelbad Road"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <figcaption>02 / Lush entrance corridor & tree canopy</figcaption>
          </figure>
          <figure className="gallery-wide" style={{ position: 'relative' }}>
            <Image
              src="/images/sunset_view_image.jpg"
              alt="Golden-hour sunset across the Neelbad Road setting"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            <figcaption>03 / Sunset vista & open western horizon</figcaption>
          </figure>
        </div>
      </section>

      <section className="neelbad-reasons" id="why-neelbad">
        <div>
          <p className="eyebrow">Why Neelbad</p>
          <h2>The address is only<br />the beginning.</h2>
          <p>Verified connectivity, quiet living, and an authentic plan designed for long-term family value.</p>
        </div>
        <div className="reason-list">
          {[
            ['01', 'Readable planning', 'An interactive plan makes every position easier to understand.'],
            ['02', 'Room to compare', 'Reference areas in sqft and Gaj are clear before a call.'],
            ['03', 'A direct conversation', 'Ask about one specific position without losing the context.'],
            ['04', 'Verified next steps', 'Dimensions, availability, and documents are shared after confirmation.'],
          ].map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement section-shell">
        <p className="eyebrow">01 / The collection</p>
        <div className="statement-content">
          <div className="number">20</div>
          <div>
            <h2>Twenty positions.<br />One address.</h2>
            <p>Every plot has its own relationship to the plan. Explore the drawing, find a position, then share it with the people whose opinion matters.</p>
            <Link className="text-link" href="/neelbad">View every position →</Link>
          </div>
        </div>
      </section>

      <section className="fold">
        <div>
          <p className="eyebrow">02 / The plan fold</p>
          <h2>From a line<br />to a location.</h2>
        </div>
        <p>The geometry of Neelbad is the design language. It is not decoration—it is the route to a clearer decision.</p>
        <Link className="button button-gold" href="/neelbad">Open the masterplan →</Link>
      </section>

      <section className="service-band" id="services">
        <div className="service-band-copy">
          <p className="eyebrow">03 / Beyond the plan</p>
          <h2>Clarity at every<br />point of contact.</h2>
          <Link className="button button-gold" href="/contact">Make an enquiry →</Link>
        </div>
        <div className="service-list">
          {[
            ['01', 'Residential plots', 'A more deliberate path to selecting land.'],
            ['02', 'Site walkthroughs', 'See the context before deciding.'],
            ['03', 'Documentation guidance', 'Conversations grounded in verified information.'],
            ['04', 'WhatsApp support', 'A direct route to Surrendra and the team.'],
          ].map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Trust Section with Real Aerial Drone Photo */}
      <section className="trust section-shell" id="about">
        <div className="trust-image">
          <Image
            src="/images/plot_droneView_image.jpg"
            alt="Aerial drone view of 20 residential plots at Neelbad Road"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
          <span>AERIAL BLUEPRINT VIEW · NEELBAD ROAD</span>
        </div>
        <div className="trust-copy">
          <p className="eyebrow">04 / Mammaji Real Estate</p>
          <h2>A quieter, clearer<br /><em>way to choose.</em></h2>
          <p>We believe a good property conversation begins with the right context: a plan you can read, reference areas you can compare, and a direct person to speak with.</p>
          <div className="trust-points">
            <span><b>20</b> positions to explore</span>
            <span><b>800–1,248</b> sqft reference areas</span>
            <span><b>1:1</b> WhatsApp guidance</span>
          </div>
          <Link className="text-link" href="/about">About Mammaji →</Link>
        </div>
      </section>

      <section className="voices section-shell">
        <div className="section-top">
          <div>
            <p className="eyebrow">05 / Conversations</p>
            <h2>Every decision<br />starts with trust.</h2>
          </div>
          <p className="section-intro">We keep the experience direct and personal—there is always a clear next step, never a maze.</p>
        </div>
        <div className="voice-grid">
          {[
            ['A considered experience', '“The plan is the starting point. The final details are always confirmed in conversation.”'],
            ['Direct by design', '“Select a plot, send the context, and continue with a person who knows the site.”'],
            ['Built for clarity', '“Areas, dimensions, and availability are verified before any decision is made.”'],
            ['Prepared for the visit', '“A site visit becomes more useful when you arrive with the plot context already in hand.”'],
          ].map(([title, quote]) => (
            <article key={title}>
              <span>✦</span>
              <h3>{title}</h3>
              <p>{quote}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="visit section-shell" id="visit">
        <div>
          <p className="eyebrow">06 / Site visit</p>
          <h2>Walk the site<br /><em>with context.</em></h2>
          <p>Request a preferred visit time. The team will confirm the slot and share meeting details directly.</p>
          <div className="visit-slots">
            <span>Weekday visit</span>
            <span>Weekend visit</span>
            <span>Call-back request</span>
          </div>
        </div>
        <a className="button button-gold" href={contact.whatsappUrl} target="_blank" rel="noreferrer">Request a site visit →</a>
      </section>

      <section className="faq section-shell">
        <div>
          <p className="eyebrow">07 / Common questions</p>
          <h2>Everything starts<br />with a clear answer.</h2>
        </div>
        <div className="faq-list">
          {[
            ['Are the displayed areas final?', 'No. Plot areas are provided as references. Dimensions and final documentation are confirmed directly with the team.'],
            ['Can I select a plot before contacting you?', 'Yes. Choose a position in the interactive plan and use its WhatsApp link to carry the exact plot context into your enquiry.'],
            ['How do I arrange a site visit?', 'Use the visit request or enquiry form. The team will confirm the preferred time before the visit.'],
            ['Can I receive a brochure or detailed plan?', 'A brochure download area is ready for the approved document. Until then, contact the team for verified materials.'],
          ].map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="enquiry" id="contact">
        <div>
          <p className="eyebrow">08 / Enquiry</p>
          <h2>Looking for a<br /><em>particular position?</em></h2>
          <p>Tell us what you are considering. We’ll help you find the right starting point at Neelbad Road.</p>
        </div>
        <EnquiryForm />
      </section>

      <section className="location-panel" id="location">
        <div>
          <p className="eyebrow">Location</p>
          <h2>Neelbad Road,<br />Bhopal.</h2>
          <p>Find the project location, get directions, and save the exact pin before your site visit.</p>
          <a className="text-link" href="https://maps.app.goo.gl/QzhUVP2zZPdS5NkQ8" target="_blank" rel="noreferrer">Open project location in Maps →</a>
        </div>
        <a className="map-placeholder map-link" href="https://maps.app.goo.gl/QzhUVP2zZPdS5NkQ8" target="_blank" rel="noreferrer" aria-label="Open Mammaji Real Estate location in Google Maps">
          <span>GOOGLE MAPS</span>
          <b>Project location<br />and directions ↗</b>
          <small>Tap to open the verified pin</small>
        </a>
      </section>

      {/* Proof Section with Cadastral Plot Details */}
      <section className="proof section-shell">
        <div className="proof-heading">
          <p className="eyebrow">03 / Material index</p>
          <h2>Evidence, not embellishment.</h2>
          <p>A site should speak for itself. The project details are presented as an honest record, with each verified asset clearly identified.</p>
        </div>
        <div className="proof-image">
          <Image
            src="/images/Plot_details_image.jpg"
            alt="Authentic cadastral plot dimension details and layout"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <span>AUTHENTIC CADASTRAL PLOT DETAILS & ROAD CIRCULATION</span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
