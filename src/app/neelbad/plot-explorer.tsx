'use client';

import './plot-lens.css';
import { KeyboardEvent, useEffect, useMemo, useState } from 'react';
import { neelbadPlots, plotLabel, type Plot } from '@/data/neelbad-plots';

type Dimension = {
  text: string;
  x: number;
  y: number;
  rotate?: number;
  anchor?: 'start' | 'middle' | 'end';
};

type PlotShape = {
  id: number;
  d: string;
  labelX: number;
  labelY: number;
  rotation?: number;
  dimensions: Dimension[];
};

/**
 * Reference redraw of the supplied Neelbad Road layout.
 * Coordinates use a stable 1080 x 1512 artboard so the site plan scales
 * without changing the land geometry or typography proportions.
 */
const plotShapes: PlotShape[] = [
  {
    id: 1,
    d: 'M205 1094 L370 1153 L398 1069 L235 1013 Z',
    labelX: 302,
    labelY: 1092,
    dimensions: [
      { text: '28\'', x: 224, y: 1176, rotate: -70 },
      { text: '47\'-7"', x: 302, y: 1146, rotate: 19 },
      { text: '29\'-4"', x: 386, y: 1178, rotate: -71 },
    ],
  },
  {
    id: 2,
    d: 'M235 1013 L398 1069 L427 984 L263 932 Z',
    labelX: 333,
    labelY: 1001,
    dimensions: [
      { text: '25\'', x: 254, y: 1108, rotate: -70 },
      { text: '41\'-1"', x: 333, y: 1082, rotate: 18 },
      { text: '25\'', x: 416, y: 1116, rotate: -70 },
    ],
  },
  {
    id: 3,
    d: 'M263 932 L427 984 L456 899 L293 851 Z',
    labelX: 364,
    labelY: 913,
    dimensions: [
      { text: '25\'', x: 283, y: 1026, rotate: -70 },
      { text: '42\'-2"', x: 364, y: 1002, rotate: 17 },
      { text: '25\'', x: 446, y: 1034, rotate: -70 },
    ],
  },
  {
    id: 4,
    d: 'M293 851 L456 899 L485 814 L323 770 Z',
    labelX: 395,
    labelY: 825,
    dimensions: [
      { text: '25\'', x: 315, y: 945, rotate: -70 },
      { text: '43\'-3"', x: 395, y: 921, rotate: 17 },
      { text: '25\'', x: 478, y: 954, rotate: -70 },
    ],
  },
  {
    id: 5,
    d: 'M323 770 L485 814 L514 729 L353 689 Z',
    labelX: 426,
    labelY: 739,
    dimensions: [
      { text: '25\'', x: 345, y: 864, rotate: -70 },
      { text: '43\'-10"', x: 426, y: 838, rotate: 16 },
      { text: '25\'', x: 507, y: 870, rotate: -70 },
    ],
  },
  {
    id: 6,
    d: 'M353 689 L514 729 L543 644 L383 608 Z',
    labelX: 457,
    labelY: 653,
    dimensions: [
      { text: '25\'', x: 375, y: 783, rotate: -70 },
      { text: '44\'-7"', x: 457, y: 758, rotate: 14 },
      { text: '25\'', x: 536, y: 791, rotate: -70 },
    ],
  },
  {
    id: 7,
    d: 'M383 608 L543 644 L572 559 L413 527 Z',
    labelX: 488,
    labelY: 567,
    dimensions: [
      { text: '20\'', x: 405, y: 703, rotate: -70 },
      { text: '45\'-3"', x: 488, y: 678, rotate: 13 },
      { text: '20\'', x: 566, y: 712, rotate: -70 },
    ],
  },
  {
    id: 8,
    d: 'M413 527 L572 559 L601 474 L443 446 Z',
    labelX: 519,
    labelY: 481,
    dimensions: [
      { text: '20\'', x: 435, y: 623, rotate: -70 },
      { text: '44\'-10"', x: 519, y: 598, rotate: 11 },
      { text: '20\'', x: 595, y: 633, rotate: -70 },
    ],
  },
  {
    id: 9,
    d: 'M443 446 L601 474 L630 389 L473 365 Z',
    labelX: 550,
    labelY: 395,
    dimensions: [
      { text: '20\'-1"', x: 464, y: 541, rotate: -70 },
      { text: '42\'-11"', x: 550, y: 514, rotate: 10 },
      { text: '20\'', x: 624, y: 550, rotate: -70 },
    ],
  },
  {
    id: 10,
    d: 'M473 365 L630 389 L659 304 L503 284 Z',
    labelX: 581,
    labelY: 322,
    dimensions: [
      { text: '20\'-1"', x: 494, y: 460, rotate: -70 },
      { text: '45\'-0"', x: 581, y: 434, rotate: 9 },
      { text: '22\'', x: 654, y: 470, rotate: -71 },
    ],
  },
  {
    id: 11,
    d: 'M735 330 L905 388 L876 473 L706 415 Z',
    labelX: 806,
    labelY: 402,
    dimensions: [
      { text: '40\'', x: 820, y: 359, rotate: 19 },
      { text: '20\'', x: 720, y: 372, rotate: -71 },
    ],
  },
  {
    id: 12,
    d: 'M706 415 L876 473 L847 558 L677 500 Z',
    labelX: 777,
    labelY: 487,
    dimensions: [
      { text: '40\'', x: 791, y: 444, rotate: 19 },
      { text: '20\'', x: 691, y: 457, rotate: -71 },
    ],
  },
  {
    id: 13,
    d: 'M677 500 L847 558 L818 643 L648 585 Z',
    labelX: 748,
    labelY: 572,
    dimensions: [
      { text: '40\'', x: 762, y: 529, rotate: 19 },
      { text: '20\'', x: 662, y: 542, rotate: -71 },
    ],
  },
  {
    id: 14,
    d: 'M648 585 L818 643 L789 728 L619 670 Z',
    labelX: 719,
    labelY: 657,
    dimensions: [
      { text: '40\'', x: 733, y: 614, rotate: 19 },
      { text: '20\'', x: 633, y: 627, rotate: -71 },
    ],
  },
  {
    id: 15,
    d: 'M619 670 L789 728 L760 813 L590 755 Z',
    labelX: 690,
    labelY: 742,
    dimensions: [
      { text: '40\'', x: 704, y: 699, rotate: 19 },
      { text: '20\'', x: 604, y: 712, rotate: -71 },
    ],
  },
  {
    id: 16,
    d: 'M564 832 L734 890 L705 975 L535 917 Z',
    labelX: 635,
    labelY: 904,
    dimensions: [
      { text: '40\'', x: 649, y: 861, rotate: 19 },
      { text: '20\'', x: 549, y: 874, rotate: -71 },
    ],
  },
  {
    id: 17,
    d: 'M535 917 L705 975 L676 1060 L506 1002 Z',
    labelX: 606,
    labelY: 989,
    dimensions: [
      { text: '40\'', x: 620, y: 946, rotate: 19 },
      { text: '20\'', x: 520, y: 959, rotate: -71 },
    ],
  },
  {
    id: 18,
    d: 'M506 1002 L676 1060 L640 1166 L470 1108 Z',
    labelX: 573,
    labelY: 1084,
    dimensions: [
      { text: '40\'', x: 591, y: 1031, rotate: 19 },
      { text: '25\'', x: 488, y: 1055, rotate: -71 },
    ],
  },
  {
    id: 19,
    d: 'M470 1108 L640 1166 L604 1272 L434 1214 Z',
    labelX: 537,
    labelY: 1190,
    dimensions: [
      { text: '40\'', x: 555, y: 1137, rotate: 19 },
      { text: '25\'', x: 452, y: 1161, rotate: -71 },
    ],
  },
  {
    id: 20,
    d: 'M434 1214 L604 1272 L568 1378 L398 1320 Z',
    labelX: 501,
    labelY: 1296,
    dimensions: [
      { text: '40\'', x: 519, y: 1243, rotate: 19 },
      { text: '25\'', x: 416, y: 1267, rotate: -71 },
    ],
  },
];

const plotById = (id: number | null) => id ? neelbadPlots.find((plot) => plot.id === id) ?? null : null;
const validId = (value: number) => neelbadPlots.some((plot) => plot.id === value);
const pad = (id: number) => String(id).padStart(2, '0');
const toGaj = (sqft: number) => (sqft / 9).toFixed(1);

type FilterType = 'all' | 'corner' | 'large' | 'compact';

const matchesFilter = (plot: Plot, filter: FilterType) => {
  if (filter === 'all') return true;
  if (filter === 'corner') return plot.isCorner;
  if (filter === 'large') return plot.areaSqft >= 1000;
  if (filter === 'compact') return plot.areaSqft === 800;
  return true;
};

function readUrlState() {
  const url = new URL(window.location.href);
  const selectedMatch = url.hash.match(/^#plot-(\d{1,2})$/);
  const nextSelected = selectedMatch && validId(Number(selectedMatch[1])) ? Number(selectedMatch[1]) : null;
  const nextCompared = (url.searchParams.get('compare') ?? '').split(',').map(Number).filter(validId).filter((id, index, all) => all.indexOf(id) === index).slice(0, 3);
  return { nextSelected, nextCompared };
}

export function PlotExplorer() {
  const [selected, setSelected] = useState<number | null>(null);
  const [compared, setCompared] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState<FilterType>('all');
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const restore = () => {
      const state = readUrlState();
      setSelected(state.nextSelected);
      setCompared(state.nextCompared);
    };
    restore();
    window.addEventListener('hashchange', restore);
    window.addEventListener('popstate', restore);
    return () => {
      window.removeEventListener('hashchange', restore);
      window.removeEventListener('popstate', restore);
    };
  }, []);

  const plot = useMemo(() => plotById(selected), [selected]);
  const hoveredPlot = useMemo(() => plotById(hovered), [hovered]);

  const selectPlot = (id: number) => {
    setSelected(id);
    setCopied(false);
    const url = new URL(window.location.href);
    url.hash = `plot-${pad(id)}`;
    window.history.pushState(null, '', url);
  };

  const closePlot = () => {
    setSelected(null);
    const url = new URL(window.location.href);
    url.hash = '';
    window.history.pushState(null, '', url);
  };

  const setComparison = (ids: number[]) => {
    setCompared(ids);
    const url = new URL(window.location.href);
    if (ids.length) url.searchParams.set('compare', ids.map(pad).join(','));
    else url.searchParams.delete('compare');
    window.history.replaceState(null, '', url);
  };

  const toggleCompare = (id: number) =>
    setComparison(
      compared.includes(id)
        ? compared.filter((item) => item !== id)
        : compared.length < 3
          ? [...compared, id]
          : compared,
    );

  const copySelectedLink = async () => {
    if (!plot) return;
    const url = `${window.location.origin}${window.location.pathname}#plot-${pad(plot.id)}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt('Copy this plot link', url);
    }
  };

  const selectedMessage = plot
    ? `Hello Surrendra, I would like to know more about ${plotLabel(plot.id)} (${plot.areaSqft.toLocaleString('en-IN')} sqft / ${toGaj(plot.areaSqft)} Gaj) at Neelbad Road.`
    : '';
  const comparisonText = compared
    .map((id) => {
      const item = plotById(id)!;
      return `${plotLabel(id)} (${item.areaSqft.toLocaleString('en-IN')} sqft / ${toGaj(item.areaSqft)} Gaj${item.isCorner ? ', Corner' : ''})`;
    })
    .join(', ');
  const comparisonUrl = typeof window === 'undefined'
    ? '/neelbad'
    : `${window.location.origin}${window.location.pathname}?compare=${compared.map(pad).join(',')}`;

  return (
    <section className="explorer section-shell" id="plan">
      <div className="explorer-heading">
        <div>
          <p className="eyebrow">02 / Plot lens</p>
          <h2>The plan,<br /><em>made personal.</em></h2>
        </div>
        <p>Select a plot from the drawing or list. Filter by size or corner status, compare positions, and share directly via WhatsApp.</p>
      </div>

      <div className="plot-filter-bar">
        <span className="filter-label">Filter collection</span>
        <div className="filter-pills" role="tablist" aria-label="Filter plot collection">
          <button className={`filter-pill ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            All positions <small>20</small>
          </button>
          <button className={`filter-pill ${filter === 'corner' ? 'active' : ''}`} onClick={() => setFilter('corner')}>
            Corner plots <small>4</small>
          </button>
          <button className={`filter-pill ${filter === 'large' ? 'active' : ''}`} onClick={() => setFilter('large')}>
            Grand 1,000+ sqft <small>9</small>
          </button>
          <button className={`filter-pill ${filter === 'compact' ? 'active' : ''}`} onClick={() => setFilter('compact')}>
            800 sqft <small>7</small>
          </button>
        </div>
      </div>

      <div className="plan-layout">
        <div className="plan-visual">
          <div className="plan-inspector" aria-live="polite">
            {hoveredPlot ? (
              <div className="inspector-content is-hovered">
                <span className="inspect-tag">INSPECTING</span>
                <strong>{plotLabel(hoveredPlot.id)}</strong>
                <span className="inspect-sep">·</span>
                <span className="inspect-data">{hoveredPlot.areaSqft.toLocaleString('en-IN')} sqft ({toGaj(hoveredPlot.areaSqft)} Gaj)</span>
                {hoveredPlot.isCorner && <span className="inspect-corner">CORNER</span>}
                <span className="inspect-hint">Click to select →</span>
              </div>
            ) : plot ? (
              <div className="inspector-content is-selected">
                <span className="inspect-tag">SELECTED</span>
                <strong>{plotLabel(plot.id)}</strong>
                <span className="inspect-sep">·</span>
                <span className="inspect-data">{plot.areaSqft.toLocaleString('en-IN')} sqft ({toGaj(plot.areaSqft)} Gaj)</span>
                {plot.isCorner && <span className="inspect-corner">CORNER</span>}
                <span className="inspect-hint">18' CC Road Access</span>
              </div>
            ) : (
              <div className="inspector-content is-idle">
                <span className="inspect-symbol">✦</span>
                <span>HOVER OVER ANY POSITION TO INSPECT SPECIFICATIONS · CLICK TO SELECT</span>
              </div>
            )}
          </div>

          <SitePlan
            selected={selected}
            onSelect={selectPlot}
            filter={filter}
            hovered={hovered}
            onHover={setHovered}
            onLeave={() => setHovered(null)}
          />
          <div className="plan-meta-row">
            <span>INTERACTIVE SITE PLAN · 1:200 ARCHITECTURAL REFERENCE</span>
            <span className="unit-hint">1 SQ YARD = 9 SQFT (1 GAJ)</span>
          </div>
          <div className="plan-key">
            <span><i className="key-selected" /> Selected position</span>
            <span><b className="key-boundary" /> Plot boundary</span>
            <span><em className="key-corner" /> Corner plot (Dual road)</span>
            <span><span className="key-common" /> 532 sqft Common utility</span>
          </div>
        </div>

        <div className="plot-list" aria-label="Select a plot from the list">
          {neelbadPlots.map((item) => {
            const isDimmed = filter !== 'all' && !matchesFilter(item, filter);
            return (
              <PlotButton
                key={item.id}
                plot={item}
                active={item.id === selected}
                dimmed={isDimmed}
                onClick={() => selectPlot(item.id)}
                onHover={() => setHovered(item.id)}
                onLeave={() => setHovered(null)}
              />
            );
          })}
        </div>

        <aside className="plot-sheet" aria-live="polite">
          {plot ? (
            <>
              <button className="close" onClick={closePlot} aria-label="Close plot details">×</button>
              <p className="eyebrow">Selected position</p>
              <h3>{plotLabel(plot.id)}</h3>
              <dl>
                <div>
                  <dt>Reference area</dt>
                  <dd>
                    <strong>{plot.areaSqft.toLocaleString('en-IN')} sqft</strong>
                    <small className="sheet-sub">({toGaj(plot.areaSqft)} Gaj / वर्ग गज)</small>
                  </dd>
                </div>
                <div>
                  <dt>Position</dt>
                  <dd>{plot.isCorner ? 'Corner plot (Dual road frontage)' : 'Standard residential position'}</dd>
                </div>
                <div>
                  <dt>Road access</dt>
                  <dd>18' All-weather concrete road</dd>
                </div>
                <div>
                  <dt>Current status</dt>
                  <dd><span className="status-badge">Available to verify</span></dd>
                </div>
              </dl>
              <p className="sheet-note">Exact cadastral dimensions, documents, and current availability are confirmed with Surrendra.</p>
              <a className="button button-gold full" href={`https://wa.me/918319185631?text=${encodeURIComponent(selectedMessage)}`} target="_blank" rel="noreferrer">
                WhatsApp about {plotLabel(plot.id)}
              </a>
              <div className="sheet-utilities">
                <button onClick={copySelectedLink}>{copied ? 'Link copied' : 'Copy plot link'}</button>
                <button onClick={() => toggleCompare(plot.id)}>
                  {compared.includes(plot.id) ? 'Remove from comparison' : compared.length === 3 ? 'Comparison full' : 'Add to comparison'}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="eyebrow">Select a plot</p>
              <h3>Start with the plan.</h3>
              <p>Choose any of the twenty positions to view exact reference area in sqft and Gaj, explore orientation, and message Surrendra with full context.</p>
            </>
          )}
        </aside>
      </div>

      {compared.length > 0 && (
        <div className="comparison">
          <div>
            <p className="eyebrow">Your selections · {compared.length} / 3</p>
            <strong>{compared.map((id) => plotLabel(id)).join(' · ')}</strong>
            <p className="comparison-data">
              {compared.map((id) => {
                const item = plotById(id)!;
                return `${item.areaSqft.toLocaleString('en-IN')} sqft (${toGaj(item.areaSqft)} Gaj)${item.isCorner ? ' · corner' : ''}`;
              }).join('  /  ')}
            </p>
          </div>
          <div className="comparison-actions">
            <button className="text-link" onClick={() => setComparison([])}>Clear</button>
            <a
              className="text-link"
              target="_blank"
              rel="noreferrer"
              href={`https://wa.me/918319185631?text=${encodeURIComponent(`Hello Surrendra, we are comparing ${comparisonText} at Neelbad Road. Could you please share the latest details?\n\n${comparisonUrl}`)}`}
            >
              Share comparison →
            </a>
          </div>
        </div>
      )}

      <MobileHandoff plot={plot} />
    </section>
  );
}

function SitePlan({
  selected,
  onSelect,
  filter,
  hovered,
  onHover,
  onLeave,
}: {
  selected: number | null;
  onSelect: (id: number) => void;
  filter: FilterType;
  hovered: number | null;
  onHover: (id: number) => void;
  onLeave: () => void;
}) {
  const keySelect = (event: KeyboardEvent<SVGGElement>, id: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(id);
    }
  };

  return (
    <svg
      className="site-plan site-plan-vector"
      viewBox="0 0 1080 1512"
      preserveAspectRatio="xMidYMid meet"
      role="group"
      aria-label="Interactive Neelbad Road site plan"
    >
      <title>Interactive Neelbad Road plot layout</title>
      <desc>Twenty numbered residential plot positions with roads, dimensions and site-plan orientation.</desc>

      <defs>
        <pattern id="common-area-hatch" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="#e8f2e6" />
          <circle cx="4" cy="4" r="1.2" fill="#588554" />
        </pattern>
        <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#c5a869" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Canvas Ground */}
      <rect className="plan-ground" width="1080" height="1512" rx="10" />

      {/* Outer Cadastral Frame & Corner Marks */}
      <rect x="24" y="24" width="1032" height="1464" rx="8" className="plan-outer-border" />
      <g className="plan-cad-marks" aria-hidden="true">
        <path d="M38 52 L38 38 L52 38" />
        <path d="M1028 38 L1042 38 L1042 52" />
        <path d="M38 1460 L38 1474 L52 1474" />
        <path d="M1028 1474 L1042 1474 L1042 1460" />
        <text x="46" y="1466" className="cad-coord">23°10'53"N · 77°20'32"E</text>
        <text x="1034" y="1466" textAnchor="end" className="cad-coord">CADASTRE 1:200 SCALE</text>
      </g>

      {/* Clean Architectural Title Block */}
      <g className="plan-header-block">
        <text className="plan-brand-heading" x="540" y="66" textAnchor="middle">
          MAMMAJI REAL ESTATE
        </text>
        <text className="plan-sub-heading" x="540" y="92" textAnchor="middle">
          NEELBAD ROAD, BHOPAL · 20 RESIDENTIAL PLOTS
        </text>
        <line x1="390" y1="106" x2="690" y2="106" className="plan-header-line" />
      </g>

      <g transform="translate(0 -160)">
        {/* Central 18' access road with unified seamless paving */}
        <path
          className="vector-road central-road"
          d="M659 304 L370 1153 L398 1320 L564 832 L894 945 L920 868 L590 755 L735 330 Z"
        />

        {/* Existing main access road */}
        <path
          className="vector-road existing-road"
          d="M60 1042 L370 1153 L398 1320 L88 1209 Z"
        />

        {/* Clean Road Labels */}
        <text className="road-text" transform="translate(581 657) rotate(-71)">18' WIDE ROAD</text>
        <text className="road-text" transform="translate(730 840) rotate(19)">18' WIDE ROAD</text>
        <text className="road-text existing-road-text" transform="translate(225 1138) rotate(20)">MAIN ACCESS ROAD (NEELBAD) ➔</text>

        {/* 532 sqft common green amenity area */}
        <g className="common-area" aria-label="532 square feet common utility area">
          <path d="M754 273 L924 331 L905 388 L735 330 Z" />
          <text x="830" y="335" transform="rotate(19 830 335)">532 SQFT GREEN / UTILITY</text>
        </g>

        {plotShapes.map((shape) => {
          const item = plotById(shape.id)!;
          const isSelected = item.id === selected;
          const isDimmed = filter !== 'all' && !matchesFilter(item, filter);
          const isHovered = hovered === item.id;
          const displayId = pad(item.id);

          return (
            <g
              key={shape.id}
              id={item.svgId}
              className={`svg-plot ${isSelected ? 'selected' : ''} ${item.isCorner ? 'corner-plot' : ''} ${isDimmed ? 'is-dimmed' : ''} ${isHovered ? 'is-hovered' : ''}`}
              role="button"
              tabIndex={0}
              aria-label={`${plotLabel(item.id)}, ${item.areaSqft.toLocaleString('en-IN')} square feet (${toGaj(item.areaSqft)} Gaj)${item.isCorner ? ', corner plot' : ''}`}
              aria-pressed={isSelected}
              onClick={() => onSelect(item.id)}
              onKeyDown={(event) => keySelect(event, item.id)}
              onMouseEnter={() => onHover(item.id)}
              onMouseLeave={onLeave}
              filter={isSelected ? 'url(#gold-glow)' : undefined}
            >
              <path className="plot-hitbox" d={shape.d} />
              <path className="plot-visible" d={shape.d} />

              <g className="plot-copy">
                {item.isCorner && (
                  <circle cx={shape.labelX} cy={shape.labelY - 24} r="3" className="plot-corner-dot" />
                )}
                <text className="plot-id" x={shape.labelX} y={shape.labelY - 2}>
                  {displayId}
                </text>
                <text className="plot-area" x={shape.labelX} y={shape.labelY + 18}>
                  {item.areaSqft.toLocaleString('en-IN')} sqft
                </text>
              </g>
            </g>
          );
        })}
      </g>

      {/* Refined Architectural Compass Rose */}
      <g className="reference-compass" transform="translate(860 1285)" aria-label="Compass Rose">
        <circle className="compass-outer-ring" r="62" />
        <circle className="compass-inner-ring" r="48" />

        {/* Crosshair guide lines */}
        <line x1="-68" y1="0" x2="68" y2="0" className="compass-crosshair" />
        <line x1="0" y1="-68" x2="0" y2="68" className="compass-crosshair" />

        {/* Cardinal needles - True North to the right per cadastral survey */}
        <path className="compass-needle-n" d="M62 0 L10 7 L0 0 L10 -7 Z" />
        <path className="compass-needle-s" d="M-50 0 L-10 6 L0 0 L-10 -6 Z" />
        <path className="compass-needle-w" d="M0 -50 L6 -10 L0 0 L-6 -10 Z" />
        <path className="compass-needle-e" d="M0 50 L6 10 L0 0 L-6 10 Z" />

        <circle className="compass-center-dot" r="4" />
        <circle className="compass-center-ring" r="9" />

        {/* Cardinal labels */}
        <text className="compass-letter-n" x="78" y="4">N</text>
        <text className="compass-letter" x="-78" y="4">S</text>
        <text className="compass-letter" x="0" y="-60">W</text>
        <text className="compass-letter" x="0" y="74">E</text>
      </g>
    </svg>
  );
}

function PlotButton({
  plot,
  active,
  dimmed,
  onClick,
  onHover,
  onLeave,
}: {
  plot: Plot;
  active: boolean;
  dimmed?: boolean;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <button
      className={`plot-button ${active ? 'active' : ''} ${dimmed ? 'is-dimmed' : ''}`}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="plot-btn-header">
        <span>{pad(plot.id)}</span>
        {plot.isCorner && <i className="corner-tag">Corner</i>}
      </div>
      <b>{plot.areaSqft.toLocaleString('en-IN')} sqft</b>
      <small className="plot-gaj-label">{toGaj(plot.areaSqft)} Gaj</small>
    </button>
  );
}

function MobileHandoff({ plot }: { plot: Plot | null }) {
  if (!plot) return null;
  const text = `Hello Surrendra, I would like to know more about ${plotLabel(plot.id)} (${plot.areaSqft.toLocaleString('en-IN')} sqft / ${toGaj(plot.areaSqft)} Gaj) at Neelbad Road.`;

  return (
    <a className="mobile-handoff" href={`https://wa.me/918319185631?text=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer">
      <span>{plotLabel(plot.id)} ({plot.areaSqft.toLocaleString('en-IN')} sqft)</span>
      <b>WhatsApp Plot Details →</b>
    </a>
  );
}
