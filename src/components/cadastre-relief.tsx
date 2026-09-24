'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ShowcaseView {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  img: string;
  alt: string;
}

const views: ShowcaseView[] = [
  {
    id: 'masterplan',
    label: 'Masterplan',
    title: '3D Enclave Masterplan',
    subtitle: 'All 20 numbered residential plots and true north orientation',
    img: '/images/Plot_details_image.jpg',
    alt: 'Masterplan layout with 20 numbered residential plots',
  },
  {
    id: 'cadastre',
    label: 'Blueprint Draft',
    title: 'Single-Plot Cadastral Blueprint',
    subtitle: 'Plot 1 through 6 with 18\' road frontage & CAD dimensions',
    img: '/images/aesthetic_oneplot_diagram_image.jpg',
    alt: 'Hand-drafted architectural cadastral blueprint with compass and ruler',
  },
  {
    id: 'ground',
    label: 'Ground Reality',
    title: 'Physical Site Demarcation',
    subtitle: 'Completed perimeter boundary, security pavilion & access road',
    img: '/images/land_view_real_image.jpg',
    alt: 'Physical site grounds with paved road and landscaped boundary walls',
  },
];

const specs = [
  {
    number: '01',
    title: '20 Precision Parcels',
    description: 'Individually demarcated freehold plots with permanent corner stones',
  },
  {
    number: '02',
    title: "18' CC Road Network",
    description: 'Engineered all-weather concrete internal circulation',
  },
  {
    number: '03',
    title: 'Solar & Vaastu Aligned',
    description: 'Prime East and North facing frontages for natural illumination',
  },
  {
    number: '04',
    title: '100% Freehold Title',
    description: 'Clear revenue lineage, approved records & immediate registry',
  },
];

export function CadastreRelief() {
  const [activeTab, setActiveTab] = useState<string>('masterplan');
  const currentView = views.find((v) => v.id === activeTab) || views[0];

  return (
    <section className="relief-transition" id="cadastre-relief">
      <div className="relief-content">
        <p className="eyebrow">02 / Master Cadastre · Relief</p>
        <h2>
          A real place,<br />
          <em>read slowly.</em>
        </h2>
        <p className="relief-lead">
          Roads, boundaries, orientation, and position become clearer as the drawing takes over from the physical setting.
        </p>

        <div className="relief-specs-grid">
          {specs.map((spec) => (
            <div className="relief-spec-card" key={spec.number}>
              <span className="spec-indicator">{spec.number}</span>
              <div className="spec-text">
                <strong>{spec.title}</strong>
                <p>{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relief-geodetic-bar">
          <span className="datum-chip">
            <span className="datum-dot" aria-hidden="true" />
            23°10&apos;53&quot; N · 77°20&apos;32&quot; E
          </span>
          <span className="datum-chip">ELEV 512M MSL</span>
          <span className="datum-chip gold-tag">SURVEY VERIFIED</span>
        </div>
      </div>

      <div className="relief-visual-showcase">
        {/* Sleek Minimalist View Switcher */}
        <div className="sleek-tabs" role="tablist" aria-label="Cadastre viewpoints">
          {views.map((view) => (
            <button
              key={view.id}
              role="tab"
              type="button"
              aria-selected={activeTab === view.id}
              className={`sleek-tab-btn ${activeTab === view.id ? 'active' : ''}`}
              onClick={() => setActiveTab(view.id)}
            >
              {view.label}
            </button>
          ))}
        </div>

        {/* Clean, Unobstructed Image Showcase */}
        <div className="sleek-showcase-frame">
          <div className="sleek-image-wrap">
            <Image
              key={currentView.id}
              src={currentView.img}
              alt={currentView.alt}
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: 'cover' }}
              className="sleek-view-image"
            />
          </div>

          {/* Understated Minimalist Caption */}
          <div className="sleek-caption-bar">
            <div>
              <span className="sleek-caption-title">{currentView.title}</span>
              <p className="sleek-caption-sub">{currentView.subtitle}</p>
            </div>
            <a href="#plan" className="sleek-plan-jump">
              Inspect Plan ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
