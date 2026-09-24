'use client';

import { useEffect, useState } from 'react';
import './spline-hero.css';

const sceneUrl = 'https://app.spline.design/file/bf51e4b8-7553-40d7-8faf-43ae5571bad7?view=preview';

export function SplineHero() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 901px) and (prefers-reduced-motion: no-preference)');
    const decide = () => setEnabled(media.matches);
    decide(); media.addEventListener('change', decide);
    return () => media.removeEventListener('change', decide);
  }, []);

  if (!enabled) return null;
  return <div className="spline-hero" aria-hidden="true"><iframe src={sceneUrl} title="" loading="lazy" tabIndex={-1} /><a href="https://app.spline.design/community/file/fba5a24b-a843-461d-b983-e5c140313420" target="_blank" rel="noreferrer">Scene by DesignGabor · CC BY 4.0</a></div>;
}
