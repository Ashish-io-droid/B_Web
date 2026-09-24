import Image from 'next/image';
import './material-index.css';

const entries = [
  {
    number: '01',
    title: 'Grand Entrance Gateway',
    description: 'Private arrival threshold and security gateway',
    img: '/images/Entrance_gate_image.jpg',
    tag: 'ENTRANCE THRESHOLD',
  },
  {
    number: '02',
    title: 'Sacred Mandir',
    description: 'On-site spiritual centre and community anchor',
    img: '/images/Mandir_image.jpg',
    tag: 'SPIRITUAL LANDMARK',
  },
  {
    number: '03',
    title: 'Lush Green Canopy',
    description: 'Tree-lined arrival corridor and open green spaces',
    img: '/images/lush_entry_image.jpg',
    tag: 'NATURAL CANOPY',
  },
  {
    number: '04',
    title: '18\' CC Concrete Roads',
    description: 'Engineered all-weather internal circulation network',
    img: '/images/Road_view_image.jpg',
    tag: 'CIRCULATION NETWORK',
  },
  {
    number: '05',
    title: 'Groundwork & Infrastructure',
    description: 'Active development, leveling, and electrification ducts',
    img: '/images/construction_work_image.jpg',
    tag: 'INFRASTRUCTURE PROGRESS',
  },
  {
    number: '06',
    title: 'Perimeter Boundary Walls',
    description: 'Secured precast walls demarcating plot perimeters',
    img: '/images/walls_boundary_image.jpg',
    tag: 'BOUNDARY DEMARCATION',
  },
];

export function MaterialIndex() {
  return (
    <section className="material-index section-shell" id="proof">
      <div className="material-intro">
        <p className="eyebrow">03 / Material index</p>
        <h2>Look closely at<br /><em>the real setting.</em></h2>
        <p>A structured photographic record of verified on-site development. Every feature documented directly from Neelbad Road.</p>
      </div>
      <div className="material-grid">
        {entries.map((entry) => (
          <article className="material-card" key={entry.number}>
            <div className="material-crop" style={{ position: 'relative', minHeight: '190px' }}>
              <Image
                src={entry.img}
                alt={entry.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <p className="material-number">{entry.number}</p>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
              <small>{entry.tag}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
