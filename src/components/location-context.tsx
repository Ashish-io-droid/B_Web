'use client';

import { useState } from 'react';
import './location-context.css';

const corridorItems = [
  {
    destination: 'Bhadbhada Dam & VIP Circuit',
    time: '10–12 mins',
    note: 'Direct road access to the Upper Lake waterfront and VIP boulevard.',
  },
  {
    destination: 'Institutional Corridor',
    time: '12–15 mins',
    note: 'Proximity to premier institutes including Jagran Lakecity University & MANIT.',
  },
  {
    destination: 'TT Nagar & New Market',
    time: '18–20 mins',
    note: 'Bhopal’s primary commercial, shopping, and administrative district.',
  },
  {
    destination: 'Raja Bhoj Airport & Railway Links',
    time: 'Arterial connect',
    note: 'Streamlined connectivity via western bypass corridors.',
  },
];

export function LocationContext() {
  const [open, setOpen] = useState(false);

  return (
    <section className="location-context section-shell" id="location">
      <div className="location-editorial">
        <p className="eyebrow">04 / Location & Context</p>
        <h2>Rooted in<br /><em>Neelbad.</em></h2>
        <p className="location-lead">
          A tranquil residential pocket along Neelbad Road, Bhopal, carefully positioned away from urban congestion while maintaining immediate arterial links to the city.
        </p>

        <div className="location-specs">
          <div className="spec-card">
            <span>COORDINATES</span>
            <strong>23.18° N · 77.34° E</strong>
            <small>Neelbad Road, Bhopal</small>
          </div>
          <div className="spec-card">
            <span>CIRCULATION</span>
            <strong>18' CC Road</strong>
            <small>Internal concrete network</small>
          </div>
          <div className="spec-card">
            <span>COLLECTION</span>
            <strong>20 Positions</strong>
            <small>Freehold residential plots</small>
          </div>
        </div>

        <div className="location-actions">
          <a
            className="button button-gold"
            href="https://www.google.com/maps/search/?api=1&query=Neelbad+Road+Bhopal"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps ↗
          </a>
          <button
            className="location-disclosure-btn"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? 'Hide accuracy standard' : 'Accuracy standard'} <span>↓</span>
          </button>
        </div>

        {open && (
          <div className="location-note">
            <strong>Evidence-first documentation:</strong>
            <p>
              Travel times are indicative road estimates. Specific site milestone distances and CAD-confirmed site boundaries are shared directly during your conversation with Surrendra.
            </p>
          </div>
        )}
      </div>

      <div className="location-matrix">
        <p className="matrix-title">Strategic Proximities</p>
        <div className="matrix-list">
          {corridorItems.map((item, index) => (
            <article key={item.destination} className="matrix-card">
              <div className="matrix-card-head">
                <span className="matrix-index">0{index + 1}</span>
                <h3>{item.destination}</h3>
                <span className="matrix-time">{item.time}</span>
              </div>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
