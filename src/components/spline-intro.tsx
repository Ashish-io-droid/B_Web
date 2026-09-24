'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import './spline-intro.css';

const sceneUrl = 'https://app.spline.design/file/bf51e4b8-7553-40d7-8faf-43ae5571bad7?view=preview';

export function SplineIntro() {
  const [leaving, setLeaving] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);

  const dismiss = useCallback(() => {
    setLeaving(true);
    window.setTimeout(() => {
      document.getElementById('arrival')?.focus();
    }, 700);
  }, []);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > 10) dismiss();
    };

    let startY = 0;
    const onTouchStart = (event: TouchEvent) => {
      startY = event.changedTouches[0]?.clientY ?? 0;
    };
    const onTouchEnd = (event: TouchEvent) => {
      const endY = event.changedTouches[0]?.clientY ?? startY;
      if (Math.abs(startY - endY) > 24) dismiss();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (['Space', 'Enter', 'ArrowDown', 'PageDown', 'Escape'].includes(event.code)) {
        dismiss();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [dismiss]);

  // Safety fallback: reveal the scene after maximum 2.2s even if iframe onLoad event was delayed
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSceneReady(true);
    }, 2200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      className={`spline-intro ${leaving ? 'is-leaving' : ''}`}
      aria-label="Mammaji Real Estate introduction"
    >
      {/* Loading state before 3D initializes */}
      <div className={`intro-loader ${sceneReady ? 'is-ready' : ''}`} aria-hidden="true">
        <div className="loader-brand-ring">
          <Image className="loader-logo" src="/logo.png" alt="" width={90} height={57} priority />
        </div>
        <div className="loader-skeleton">
          <i />
          <i />
          <i />
        </div>
        <small>Neelbad Road · Bhopal</small>
      </div>

      {/* 3D Spline Scene Viewport */}
      <div className={`intro-scene ${sceneReady ? 'is-ready' : ''}`} aria-hidden="true">
        <iframe
          src={sceneUrl}
          title="3D Architectural Relief"
          loading="eager"
          tabIndex={-1}
          onLoad={() => setSceneReady(true)}
          allow="autoplay; fullscreen"
        />
      </div>

      {/* Atmospheric Shading & Vignette */}
      <div className="intro-shade" />
      <div className="intro-scene-mask" aria-hidden="true" />

      {/* Top Meta Bar */}
      <div className="intro-top">
        <span>Mammaji Real Estate</span>
        <span>Neelbad Road · Bhopal</span>
      </div>

      {/* Hero Statement */}
      <div className="intro-center">
        <span className="intro-copy-mask" aria-hidden="true" />
        <p>Land, in relief</p>
        <h1>
          Begin at<br />
          <em>Neelbad.</em>
        </h1>
      </div>

      {/* Action to Enter */}
      <div className="intro-actions-bottom">
        <button className="intro-enter" onClick={dismiss} aria-label="Enter website">
          <span>Enter site</span>
          <b>↓</b>
        </button>
        <span className="intro-hint">Scroll, tap, or press any key to enter</span>
      </div>

      <a
        className="intro-credit"
        href="https://app.spline.design/community/file/fba5a24b-a843-461d-b983-e5c140313420"
        target="_blank"
        rel="noreferrer"
      >
        Scene by DesignGabor · CC BY 4.0
      </a>
    </section>
  );
}
