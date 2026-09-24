'use client';

import { useEffect, useState } from 'react';

export function LifestyleVideo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Rendering after hydration prevents browser video-control extensions from
  // modifying the server HTML before React can attach to it.
  if (!mounted) return null;

  return (
    <video className="living-interlude-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
      <source src="/house-animation.mp4" type="video/mp4" />
    </video>
  );
}
