# Mammaji Real Estate
## Final Master Plan for Design, Build, Launch, and Operation

**Flagship project:** Neelbad Road, Bhopal, Madhya Pradesh  
**Public point of contact:** Surrendra  
**Call / WhatsApp:** +91 83191 85631  
**Product model:** Static, presentation-first website. Direct human conversion; no price, login, database, CMS, or conventional enquiry form.

---

## 1. Final creative proposition

### Land, in Relief

This website is not a real-estate portal wearing a luxury theme. It is a carefully constructed digital visit to one real place.

The opening experience takes a viewer from the **idea of land** to the **reality of a position**: an abstract, architectural interpretation of Neelbad’s geometry gradually aligns with the verified site plan; the visitor then inspects an exact plot; the site carries that context into a conversation with Surrendra.

The visual identity is built from the development itself: roads, boundaries, cardinal orientation, plot proportions, site photography, and the Mammaji mark. This makes the design difficult to mistake for a generic template or AI-generated “luxury” site.

### The one standard for every decision

> Does this help the visitor understand, trust, choose, or contact?

If an element does none of these, it is removed.

### Success definition

A buyer on an ordinary phone can understand the project, open an exact plot, compare options with family, share that selection, and message Surrendra without typing the context again.

---

## 2. Scope, boundaries, and content truth

### Launch scope

| Route | Purpose |
| --- | --- |
| `/` | Short, memorable brand/project arrival that directs visitors into Neelbad |
| `/neelbad` | Complete interactive project and plot-selection experience |
| `/about` | Human, evidence-led Mammaji story |
| `/contact` | Concierge-style Call / WhatsApp / directions contact page |
| `/properties` | Publish only once genuine secondary listings are approved |
| `/properties/[slug]` | Publish only for an approved individual listing |

### Explicitly excluded from launch

Prices or price ranges; budget fields; payment/booking; search and filters; login; CMS; database; CRM dashboard; generic enquiry forms; fake countdowns; AI chatbots; unconsented testimonials; auto-rotating carousels; generic stock-villa proof; WebGL masterplan; and unnecessary 3D.

### Truth status: use this rigorously

| Content class | Can appear publicly now? | Rule |
| --- | --- | --- |
| Confirmed business contact | Yes | Public name: Surrendra; number: +91 83191 85631 |
| Location/project count/area range | Yes, after final business approval | Neelbad Road, Bhopal; 20 plots; 800–1,248 sqft from supplied material |
| Plot areas | **Draft source data pending CAD/business reconciliation** | May be implemented in staging; do not label as verified publicly until sign-off |
| Plot dimensions | **Draft, pending CAD confirmation** | The trapezoidal shared edges make image-only interpretation unsafe; do not publish until approved |
| Corner plots | Yes, subject to final table reconciliation | 01, 10, 11, 20 |
| Availability | No, until supplied by Surrendra | Never default everything to “Available” |
| 532 sqft green marked area | No | Do not name it until official designation is confirmed |
| Amenities from real photography | Yes, after image-use/project-specific confirmation | Label each image honestly |
| Approvals, documentation, readiness, returns, nearby travel times | No, until source/wording approval | Omit rather than soften or guess |

### Source-of-truth protocol

Maintain three files from the first day:

```text
src/data/neelbad-plots.ts       # sole typed plot data source
CONTENT_SOURCES.md              # public claim → source → approver → date
PLOT_STATUS_UPDATE.md           # safe operational update procedure
```

Nothing factual is typed directly into a component. No image is used as the only record of a key fact.

---

## 3. Design-token appendix

This appendix is mandatory. It prevents the style from drifting as implementation grows.

### 3.1 Colour tokens and screen ratios

| Token | Hex | Role |
| --- | --- | --- |
| `forest-950` | `#071C17` | Main immersive background, footer, high-drama sections |
| `forest-900` | `#0C2921` | Navigation surface, dark elevated regions |
| `ivory-50` | `#F4F0E6` | Reading surface, editorial reset, plan background |
| `gold-500` | `#C7A24A` | Selected plot outline, active rule, small key action accent |
| `gold-300` | `#E5CA7A` | Focus/hover highlight only |
| `ink-950` | `#111511` | Primary text on ivory |
| `stone-500` | `#A7A398` | Secondary copy, technical labels, low-contrast dividers |
| `line-light` | `rgba(244,240,230,.16)` | Hairline on dark surfaces |
| `line-dark` | `rgba(17,21,17,.14)` | Hairline on ivory surfaces |

**Colour ratio rule per viewport/screenful:**

- Standard editorial screen: **60–75% ivory, 20–35% forest, 0–5% gold**.
- Immersive/hero screen: **65–80% forest, 15–30% imagery or ivory, 0–5% gold**.
- Masterplan screen: **70–85% ivory, 10–20% forest, 1–3% gold**.
- Gold may never become a panel background, button fill, large gradient, or more than 5% of visible area.

### 3.2 Typography tokens

Self-host subsetted WOFF2 files. Use a high-contrast display serif (approved choice: Fraunces or equivalent) and Inter/approved grotesk for UI/body. Do not depend on a Google Fonts CDN.

| Token | CSS value | Use |
| --- | --- | --- |
| `display-xl` | `clamp(4rem, 9vw, 10rem)` / `.88` | Hero statement, only once per route |
| `display-lg` | `clamp(3rem, 6vw, 7rem)` / `.92` | Major section title |
| `display-md` | `clamp(2.25rem, 4vw, 4.5rem)` / `.98` | Project/section title |
| `heading-lg` | `clamp(1.75rem, 2.5vw, 2.75rem)` / `1.05` | Supporting headline |
| `heading-sm` | `clamp(1.25rem, 1.6vw, 1.5rem)` / `1.2` | Card/sheet title |
| `body-lg` | `clamp(1.0625rem, 1.2vw, 1.1875rem)` / `1.55` | Lead paragraph |
| `body` | `1rem` / `1.6` | Standard readable body copy |
| `body-sm` | `.875rem` / `1.45` | Supporting copy only |
| `label` | `.6875rem` / `1.2`, `0.16em` tracking, uppercase | Technical/meta labels |
| `plot-number` | `clamp(1.25rem, 2.2vw, 2rem)` / `1` | Selected plot/plan numeral |

Body text must not go below 16px on mobile. Large display text uses only one or two lines; never use it to create wordy “luxury” slogans.

### 3.3 Spacing and layout tokens

| Token | Value | Use |
| --- | --- | --- |
| `space-1` | 4px | optical micro adjustments |
| `space-2` | 8px | related UI elements |
| `space-3` | 12px | labels to copy |
| `space-4` | 16px | compact component padding |
| `space-5` | 24px | standard component gap |
| `space-6` | 32px | panel/internal section gap |
| `space-7` | 48px | content group separation |
| `space-8` | 64px | mobile section gap |
| `space-9` | 96px | tablet section gap |
| `space-10` | 128px | desktop section gap |
| `space-11` | 160px | major editorial transition |

- Max content width: 1440px.
- Desktop grid: 12 columns, 24px gutters; tablet: 6 columns, 20px gutters; mobile: 4 columns, 16px gutters.
- Horizontal page padding: `clamp(20px, 4vw, 64px)`.
- Desktop vertical sections: 128–160px; mobile: 72–96px. Do not compress all sections into the same rhythm.

### 3.4 Shape, surface, shadow, and motion tokens

| Token | Value | Rule |
| --- | --- | --- |
| `radius-sm` | 8px | controls, small image crops |
| `radius-md` | 16px | panel/sheet shell only |
| `radius-lg` | 24px | rare large crop, never every container |
| `radius-pill` | 999px | header/compact status only |
| `shadow-panel` | `0 20px 60px rgba(0,0,0,.18)` | one restrained panel shadow |
| `shadow-none` | none | default; use lines and spacing first |
| `duration-fast` | 180ms | hover/focus feedback |
| `duration-ui` | 320ms | drawer, tray, layout movement |
| `duration-editorial` | 650ms | headline/image reveal |
| `ease-premium` | `cubic-bezier(.22,1,.36,1)` | all bespoke motion |

No glassmorphism overload, no large blur panels, no gradients behind text, no bouncy physics, and no shadows on every card.

---

## 4. Design language and image treatment

### Editorial material system

- **Ivory is where facts are read.** It has the clarity of a drawing sheet.
- **Forest is where a moment is felt.** Use it for arrival, transition, proof, and closure.
- **Gold behaves like drafting ink.** It traces, identifies, and confirms. It does not decorate.
- **Fine technical lines** derive from roads and plot boundaries. They can direct a gaze or divide content, never fill a screen arbitrarily.
- **The supplied logo** is preserved exactly. Request SVG/AI/EPS or transparent high-resolution PNG before production. Do not redraw it.

### Photography protocol

1. Create one non-destructive grading preset for all real project photography: slightly warmer white balance, gently raised blacks, controlled highlights, mild desaturation, and a consistent natural contrast. The goal is documentary coherence—not a fake dusk or orange/gold filter.
2. Crop each image for its role; never stretch brochure images to fill every module.
3. Every image receives one consistent honest label, placed in the same technical-caption position:

   - `PHOTOGRAPHED ON SITE` — authentic project/location photo.
   - `REPRESENTATIVE IMAGE` — illustrative/rendered/non-project-specific image.
   - `SITE PLAN — FOR REFERENCE` — plan image until CAD-reconciled interactive SVG is approved.

4. If a photo cannot be truthfully labelled “Photographed on site,” it cannot be used as proof of a facility.
5. A portrait of Surrendra is used only if it is an authentic, consented image.

### Image delivery rules

- Keep hero/LCP image in initial HTML, eager/high priority; never lazy-load it.
- Preload the one desktop/mobile-responsive hero candidate with `imagesrcset`/`imagesizes`; only preload resources proven critical.
- Deliver responsive AVIF/WebP, explicit width/height or aspect ratio, and below-fold `loading="lazy"`.
- Self-host and preload only the font file/weight required for the first visual screen, with `crossorigin`; subset fonts to required scripts/weights.

These decisions follow current performance guidance: good field targets are LCP ≤2.5s, CLS ≤0.1, and INP ≤200ms at the 75th percentile. [LCP](https://web.dev/articles/optimize-lcp), [CLS](https://web.dev/articles/optimize-cls), [INP](https://web.dev/articles/inp), [web fonts](https://web.dev/learn/performance/optimize-web-fonts)

---

## 5. Information architecture and visual journey

### Homepage `/` — concise, iconic, and decisive

1. **Land, in Relief / hero**
   - Ivory canvas, forest header, route line, abstract site-relief/SVG form.
   - Copy: “A place to begin, precisely chosen.”
   - Meta: “Neelbad Road, Bhopal · 20 residential plots.”
   - Actions: `Explore the plan` / `Speak with Surrendra`.
2. **Twenty positions / one address**
   - One huge `20`, small anchored facts: 800–1,248 sqft, 18′ internal roads, four corner plots.
   - This is a collection statement, not a counter dashboard.
3. **Plan Fold**
   - Abstract relief aligns into exact plan linework; direct action bypasses animation and enters finished plan.
4. **Proof sheets**
   - Three real-image moments: Grand Entrance, Mandir, Wide CC Roads.
5. **Human handoff**
   - A restrained invitation to Call or WhatsApp Surrendra.
6. **Closing route line/footer**
   - The opening route line returns, faintly, as a final technical line leading into the contact actions. It bookends the journey without feeling like a motif pasted everywhere.

### Neelbad `/neelbad` — the complete decision experience

1. Location/title arrival.
2. Short, approved project framing.
3. Interactive masterplan: Plot Lens, plot list, availability legend, deep links.
4. Decision Tray and share comparison.
5. Full Material Index amenity evidence sequence.
6. Location drawer/map and verified nearby details.
7. Information/assurance with approved wording and: “Information shown is subject to verification and applicable documentation.”
8. Human handoff/contact.

### About `/about`

One honest business introduction, authentic portrait/photography, concise story, and three supportable values: Transparency, Local Knowledge, Personal Service. Do not add claims, counts, testimonials, awards, or years without source.

### Contact `/contact`

Surrendra’s name, Call, WhatsApp, approved directions/map, and operating hours only if accurate. Add `Usually responds within an hour` only if Surrendra confirms that it is consistently true; otherwise omit it.

### Properties routes

Remain unpublished until genuine listings, imagery, location data, and approval exist. When ready, present 2–6 “edition” stories with magazine-like hierarchy; never revive the portal/search interface.

---

## 6. Final interaction specification

### 6.1 Plan Fold

The home form resolves into the Neelbad plan. It is built in layered SVG/CSS, not as an expensive true 3D morph.

- Roads draw first; plot geometry follows; labels appear last.
- Runs once as a 700–1,100ms scroll-linked/triggered sequence.
- `Explore the plan` immediately jumps to a stable finished plan.
- Reduced-motion displays the stable final linework.
- It never gates plot selection.

### 6.2 Plot Lens

Selecting a plot:

1. Dims other plots to 25–35% opacity.
2. Gives the target a 2px gold outline, small quiet glow, and label.
3. Opens a desktop side panel or mobile bottom sheet.
4. Presents hierarchy: Plot number → sqft → approved dimensions → corner badge → approved status → Call / WhatsApp / Compare.
5. Updates URL hash and browser history using `#plot-06`.

**Deep-link contract**

- `/neelbad#plot-06` scrolls/focuses the plan and opens Plot 06’s panel/sheet.
- A direct plot link is copied by an explicit `Copy link` control in the panel.
- If a plot link is malformed or the plot is retired, show a calm inline notice and return the visitor to the plan; never show an error page.
- On back/forward, selection state follows the URL correctly.

### 6.3 Decision Tray and family sharing

The tray allows one to three plot selections and is intentionally compact until expanded.

- Closed: `Your selections · 2` plus miniature plot IDs.
- Expanded: Plot, area, approved dimensions, corner yes/no, approved status. Never price.
- Session-only persistence is acceptable; no account or personal data.
- `Share comparison` makes a WhatsApp message and a deep link:

```text
Hi Surrendra, we are comparing Plot 01 (1,248 sqft, Corner),
Plot 06 (1,105 sqft), and Plot 20 (1,000 sqft, Corner) at Neelbad Road.
Could you please share the latest details?

[site]/neelbad?compare=01,06,20
```

- `/neelbad?compare=01,06,20` restores the tray. If any listed plot is unavailable/retired, it remains identifiable but marked with the approved current state.

### 6.4 Finite-inventory states

The project needs an elegant response to inventory changing over time.

| Inventory condition | Homepage/hero | Masterplan | CTA language |
| --- | --- | --- | --- |
| 20+ active/unknown status | “20 residential plots” or neutral project framing | Neutral/confirmed per-plot status | “Explore the plan” |
| 1–19 available | “`N` positions currently available” only if status data is explicitly approved | Sold paths recede to low-contrast hatch, remain readable; no red warning grid | “See remaining plots” |
| 1–2 available | “A final few positions remain” only if factual | Available plots receive selected-state-ready focus; sold plots calm and quiet | “Ask Surrendra about the remaining plots” |
| 0 available | “Neelbad is fully reserved” only after confirmation | Entire plan becomes an elegant archival drawing; no broken selection state | “Ask about upcoming opportunities” |

Never use false urgency, countdowns, flashing “sold” stickers, or claim a number of available plots until the canonical data is current.

### 6.5 Material Index: real evidence

Replace amenity grids with a sequence of labelled proof sheets:

| Index | Subject | Treatment |
| --- | --- | --- |
| 01 | Grand Entrance Gate | Wide image, small indexed label, on-site/representative tag |
| 02 | Temple / Mandir | Calm centred composition, ivory caption pause |
| 03 | Lush Green Garden | Open crop and a small location-style caption |
| 04 | CCTV Security | Close factual detail; do not exaggerate security claims |
| 05 | Wide CC Roads / Street Lights | Horizontal paired sequence that follows road direction |
| 06 | Sewage / Electricity / Water Tank | Technical filmstrip, only if photographs are clear |
| 07 | Covered Campus / Tree Plantation / Diversions | Closing proof sequence |

Each image gets exactly one clear caption and truth label. A manual filmstrip/lightbox is added only where three or more useful real images exist. No autoplay gallery.

### 6.6 Location Drawer

- Closed: location/map crop with `View location context`.
- Open: official directions link, approved address, confirmed nearby essentials grouped by education/healthcare/shopping/connectivity.
- On mobile, it is an inline disclosure; on desktop, an expansion beside the map. It is never a trapped full-screen overlay.

### 6.7 Section index, image preview, and page transition

- Desktop Neelbad: a narrow rail shows `01 Overview / 02 Plan / 03 Proof / 04 Location / 05 Assurance`; active state is a 1px gold rule.
- Mobile: one small current-section label below header; no fixed rail.
- Fine-pointer desktop only: amenity text hover may reveal a 240px damped image preview. Keyboard focus gets a stationary equivalent; touch and reduced motion omit it.
- Route changes use a short 250–350ms fade/clip where browser capability permits. No full-page cinematic transition when a visitor needs to act immediately.

### 6.8 Human handoff

Every route ends with the same calm context-sensitive message:

> Looking at a particular plot? Speak with Surrendra.

For selected plots, the button reads `WhatsApp Surrendra about Plot 06`. A mobile bottom bar appears after the hero, preserves selected context, hides near footer, and never covers plan/dialog controls.

---

## 7. Technology and data architecture

| Layer | Decision |
| --- | --- |
| Framework | Next.js + TypeScript static export |
| Styling | Tailwind with the token system above; bespoke CSS only where visual logic needs it |
| Motion | Native CSS first; Motion/GSAP selectively for Plan Fold, trays, and editorial reveals |
| Plan | Semantic hand-traced SVG, pending CAD reconciliation |
| Media | Self-hosted AVIF/WebP plus original protected sources |
| Fonts | Self-hosted subsetted WOFF2; no Google Fonts dependency |
| Content | Typed data / markdown source files; no CMS/database/auth |
| Analytics | Plausible or GA4 with minimal, privacy-conscious event vocabulary |
| Hosting | Vercel or Netlify static with preview deployment per change |

### Plot data shape

```ts
type PlotStatus = 'unknown' | 'available' | 'reserved' | 'sold';

type Plot = {
  id: number;
  areaSqft: number;             // draft until CAD/business reconciliation
  dimensions?: string;          // withheld publicly until approved
  isCorner: boolean;
  status: PlotStatus;
  svgId: string;
  statusUpdatedAt?: string;
};
```

### CTA builders

```text
Call: tel:+918319185631
WhatsApp: https://wa.me/918319185631?text=[URL-encoded context]
```

Messages are generated from selected data, never manually duplicated in UI components.

### Accessibility implementation contract

- Every SVG plot is keyboard-focusable/selectable and has an accessible name.
- Plot status is text plus a non-colour cue (hatch/icon), not colour alone.
- A complete textual plot list offers the same selection flow without manipulating the drawing.
- Panels/sheets have explicit close controls, Escape behavior, focus entry, focus return to originating plot, and no background keyboard access while modal. Native `<dialog>` is preferred when appropriate; otherwise mirror its focus requirements. [MDN dialog guidance](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
- `prefers-reduced-motion` eliminates nonessential reveal/parallax/3D while retaining all content and selection. [MDN motion preference guidance](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility)

---

## 8. Spline: permitted only behind a hard gate

Spline may add an optional small, abstract relief object to the hero. It does not control content, navigation, or plot selection. Spline supports web embeds that respond to page-level mouse/scroll events and lazy loading, but browser 3D is materially more CPU/GPU intensive than 2D web content. [Spline Viewer](https://docs.spline.design/exporting-your-scene/web/exporting-as-spline-viewer), [Spline FAQ](https://docs.spline.design/basics/faq)

The scene ships only if it meets every condition:

- It is abstract, low-complexity, and visually specific to the site geometry.
- It contains no essential words, controls, or facts.
- The SVG/CSS hero is fully designed and renders first without it.
- It is lazy-loaded, performance-compressed, and uses automatic renderer fallback.
- It is disabled for reduced-motion, narrow mobile, and low-capability paths.
- It passes an Android Chrome 4G test without degrading initial rendering, scrolling, or input responsiveness.

One failed condition means no Spline in production. The core design remains complete.

---

## 9. Detailed implementation phases

### Phase 0 — Reconciliation and creative lock (Week 1)

**Goal:** remove ambiguity before visual polish becomes expensive.

1. Confirm Surrendra’s public spelling, contact number, response-expectation wording if any, and approval authority.
2. Receive/confirm logo vector, original high-resolution images, image rights, official project address/map pin, and source documentation.
3. Reconcile 20 plot records against CAD/vector plan or a business-approved technical source. Approve areas, dimensions, roads, corner status, and initial availability.
4. Confirm the 532 sqft marking’s designation or remove it from public interpretation.
5. Confirm which amenity images are “Photographed on site” and which, if any, are representative.
6. Create `CONTENT_SOURCES.md`; add no-publish status to all unconfirmed claims.
7. Prototype desktop and mobile hero, Plan Fold, Plot Lens, comparison sharing, and fully sold state. Create SVG/CSS fallback first.
8. Test prototype with Surrendra plus two representative potential buyers: direct plot deep link, compare, share to WhatsApp, and open on a second phone.

**Exit criteria:** all central plot figures are approved or correctly withheld; creative path is signed off; the core decision flow is understood without explanation.

### Phase 1 — Foundation and bespoke home (Weeks 2–3)

**Goal:** build an unmistakably authored first impression and reliable conversion base.

1. Initialise static Next.js/TypeScript project, token system, responsive grid, content types, preview pipeline, and governance documents.
2. Self-host subsetted font files; preload the first-screen font file/weight with `crossorigin`; set sane `font-display` behavior.
3. Produce hero image variants; preload only the identified LCP responsive hero with high fetch priority. Never lazy-load LCP media.
4. Build header, footer, navigation, Call/WhatsApp utility, global focus treatment, mobile action bar, and route metadata shell.
5. Build Land, in Relief in pure SVG/CSS: hero, route line, Twenty Positions composition, Plan Fold invitation, proof sheets, and Human Handoff/route-line footer bookend.
6. Add analytics wrapper and events without collecting personal data.
7. Test pages at 320px/768px/1440px, touch, keyboard, reduced motion, slow 4G.

**Exit criteria:** Home is visually complete without Spline; Call/WhatsApp work; no unsupported fact is visible; first-screen performance budget is on track.

### Phase 2 — Plot decision engine (Weeks 3–5)

**Goal:** deliver an exact, accessible, shareable masterplan.

1. Encode approved plot data in the single typed data source; retain source/version/date fields.
2. Trace/import SVG, map each `plot-01` through `plot-20`, and run one-to-one mapping audit.
3. Build masterplan legend, Plot Lens, desktop detail panel, mobile bottom sheet, textual plot list, and focus model.
4. Build URL hash deep links and query-based comparison restore/share flow.
5. Build Decision Tray, share comparison WhatsApp link, deep-link copy control, and robust malformed/retired state handling.
6. Build finite inventory modes for available/low/final/fully reserved conditions.
7. Generate and test 20 individual plot WhatsApp messages plus all comparison combinations supported by the tray.
8. Add Plan Fold/enhanced line drawing only after the stable interaction works without it.

**Exit criteria:** all 20 controls, data panel values, comparison values, deep links, share messages, plot list entries, corner badges, and status presentation pass the same audit matrix.

### Phase 3 — Evidence, location, and business pages (Weeks 5–6)

**Goal:** make trust visual and tangible without flooding the page.

1. Apply approved photography grade and responsive crops; record each asset’s truth label.
2. Build Material Index proof sheets and manual filmstrips only where supported by real content.
3. Build location drawer after map/address/landmark approval.
4. Build About around authentic business content and consented portrait.
5. Build Contact with accurate response expectation only if confirmed.
6. Build properties routes only when genuine inventory has passed the content approval process; otherwise omit from navigation.

**Exit criteria:** no page contains generic proof, unlabeled representative imagery, placeholder testimonial, or unapproved business promise.

### Phase 4 — Quality, performance, and launch (Weeks 7–8)

**Goal:** make the experience objectively launch-ready.

1. Accessibility test: semantic headings; text alternatives; keyboard navigation; SVG plot focus; dialog/sheet behavior; focus return; contrast; touch size; 200% zoom; reduced motion; status not conveyed by colour.
2. Core Web Vitals engineering:
   - Field target: **LCP ≤2.5s**, **CLS ≤0.1**, **INP ≤200ms**, each at 75th percentile.
   - Lab budget: no lazy hero; explicit media dimensions; hero/font preload only when justified; below-fold lazy media; deferred noncritical scripts; no render-blocking 3D.
3. Test hero/LCP priority, font loading, hydration cost, image payloads, plan interaction time, and drawer/tray responsiveness on mid-range Android 4G.
4. Complete SEO: titles, descriptions, canonical URLs, Open Graph images, sitemap, robots, and only evidence-supported LocalBusiness/Place/RealEstateListing schema.
5. Run content-source audit, no-price sweep, status freshness check, and Call/WhatsApp tests on physical Android and iPhone devices.
6. Provide a preview release to Surrendra; complete business walkthrough; record approval; deploy production.

**Exit criteria:** performance and accessibility budgets pass; every public statement is approved; no broken decision or conversion path remains.

### Phase 5 — Launch operations and evidence-led improvement (Weeks 9–12)

**Goal:** keep the site accurate and improve only from actual buyer behaviour.

1. Weekly plot-status review with Surrendra; use documented preview → approve → deploy process.
2. Review minimal analytics: `plot_selected`, `plot_compared`, `comparison_shared`, `plot_link_copied`, `whatsapp_click`, `call_click`, `location_opened`.
3. Review real buyer questions. Prioritise only proven gaps—for example, approved location evidence, new authentic project photos, or a shareable plot shortlist.
4. Recheck Core Web Vitals after any media/motion addition.
5. When fully reserved, switch to the deliberate archival/next-opportunities state instead of leaving stale availability patterns online.

---

## 10. QA matrix and launch checklist

### Plot/CTA audit, repeated for 01–20

- [ ] SVG control maps to correct source record.
- [ ] Panel/sheet shows approved area and only approved dimensions.
- [ ] Corner badge is correct.
- [ ] Status text, hatch/icon, legend, and textual list agree.
- [ ] Hash deep link opens correct plot and restores focus correctly.
- [ ] WhatsApp message includes correct plot context.
- [ ] Comparison add/remove/share restores correct plot IDs.

### Honest content audit

- [ ] Every amenity image has the correct “Photographed on site” or “Representative image” tag.
- [ ] No image implies an unverified facility.
- [ ] No financial/return, approval, readiness, distance, client-count, or response-time claim lacks written approval.
- [ ] No price or price-adjacent wording exists in metadata, image alt text, social cards, or page body.

### Experience audit

- [ ] Keyboard path is complete and visible.
- [ ] Mobile bottom bar does not cover primary UI.
- [ ] Dialog/sheet closes via clear button and Escape, and returns focus to originating plot.
- [ ] All controls have 44px target size or an equivalent forgiving hit area.
- [ ] At 200% zoom, text and controls remain usable.
- [ ] Reduced-motion leaves no blank/revealed-late content.
- [ ] Homepage and Neelbad remain coherent if JavaScript animation/3D fails.

### Performance and release audit

- [ ] Largest hero resource is discovered in initial HTML and correctly prioritised.
- [ ] Exactly one main image and only necessary font resources are preloaded.
- [ ] Images reserve layout space; no unmeasured embeds are introduced.
- [ ] Below-fold photography is responsive and lazy-loaded.
- [ ] Mid-range Android 4G performance is reviewed, not assumed from desktop.
- [ ] Production domain, HTTPS, favicon, sitemap, robots, metadata, analytics, and 404 route are checked.
- [ ] Surrendra has personally tested Call and WhatsApp actions on a real phone.

---

## 11. Definition of done

The final website is a fast, elegant, human digital experience that earns trust through proportion, proof, and precision. It does not imitate fashionable components, rely on synthetic-looking luxury imagery, or make the visitor wade through a portal.

It gives Neelbad its own visual language; protects fact accuracy until data is confirmed; gracefully handles its finite inventory; and lets a buyer share a specific plot or comparison with family before initiating a clear, contextual Call or WhatsApp conversation with Surrendra.
