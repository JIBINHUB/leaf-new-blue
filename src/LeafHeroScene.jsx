import React, { useEffect, useRef } from 'react';

const Star = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M20 1c1.8 11.1 7.9 17.2 19 19-11.1 1.8-17.2 7.9-19 19C18.2 27.9 12.1 21.8 1 20 12.1 18.2 18.2 12.1 20 1Z" fill="currentColor" />
  </svg>
);

export default function LeafHeroScene() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const hero = sceneRef.current?.closest('.home-hero-layout');
    if (!hero) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;

    const update = () => {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const progress = reduced.matches ? 0 : Math.max(0, Math.min(1, -rect.top / rect.height));
      pointerX += (targetX - pointerX) * 0.085;
      pointerY += (targetY - pointerY) * 0.085;
      hero.style.setProperty('--hero-progress', progress.toFixed(4));
      hero.style.setProperty('--hero-pointer-x', `${reduced.matches ? 0 : pointerX.toFixed(2)}px`);
      hero.style.setProperty('--hero-pointer-y', `${reduced.matches ? 0 : pointerY.toFixed(2)}px`);
      if (Math.abs(targetX - pointerX) + Math.abs(targetY - pointerY) > 0.1) schedule();
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const move = (event) => {
      if (event.pointerType !== 'mouse' || reduced.matches) return;
      const rect = hero.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 30;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 24;
      schedule();
    };
    const reset = () => { targetX = 0; targetY = 0; schedule(); };

    update();
    hero.addEventListener('pointermove', move, { passive: true });
    hero.addEventListener('pointerleave', reset);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reduced.addEventListener('change', reset);
    return () => {
      window.cancelAnimationFrame(frame);
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', reset);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reduced.removeEventListener('change', reset);
    };
  }, []);

  return (
    <div ref={sceneRef} className="leaf-hero-stage" aria-label="Leaf's 3D character surrounded by floating creative objects">
      <span className="leaf-sky-cloud leaf-sky-cloud-small" aria-hidden="true" />
      <span className="leaf-sky-cloud leaf-sky-cloud-left" aria-hidden="true" />
      <span className="leaf-sky-cloud leaf-sky-cloud-right" aria-hidden="true" />

      <div className="leaf-scene-layer leaf-scene-cloud" aria-hidden="true"><div className="leaf-scene-float"><img src="/assets/leaf-cloud-3d.png" alt="" /></div></div>
      <div className="leaf-scene-layer leaf-scene-crayon" aria-hidden="true"><span className="leaf-scene-float leaf-prop-sprite leaf-prop-crayon" /></div>
      <div className="leaf-scene-layer leaf-scene-smile" aria-hidden="true"><span className="leaf-scene-float leaf-prop-sprite leaf-prop-smile" /></div>
      <div className="leaf-scene-layer leaf-scene-envelope" aria-hidden="true"><span className="leaf-scene-float leaf-prop-sprite leaf-prop-envelope" /></div>
      <div className="leaf-scene-layer leaf-scene-flower" aria-hidden="true"><span className="leaf-scene-float leaf-prop-sprite leaf-prop-flower" /></div>
      <div className="leaf-scene-layer leaf-scene-gem" aria-hidden="true">
        <svg className="leaf-scene-float" viewBox="0 0 70 130" fill="none"><path d="M35 2 65 82 35 128 5 82Z" fill="#90CEFF"/><path d="M35 2 35 83 5 82Z" fill="#E1F2FF"/><path d="m35 2 30 80-30 1Z" fill="#B5E0FF"/><path d="M35 83v45L5 82Z" fill="#379AF0"/><path d="M35 83v45l30-46Z" fill="#0877D8"/><path d="m35 2-9 80 9 46 7-45Z" fill="#fff" opacity=".35"/></svg>
      </div>
      <div className="leaf-scene-layer leaf-scene-heart" aria-hidden="true"><span className="leaf-scene-float leaf-spark-badge">♥</span></div>
      <div className="leaf-scene-layer leaf-scene-sprout" aria-hidden="true"><span className="leaf-scene-float leaf-sprout-badge"><i /><i /></span></div>
      <div className="leaf-scene-layer leaf-scene-mascot">
        <div className="leaf-mascot-greeting">
          <svg className="leaf-mascot-wave" viewBox="0 0 60 70" fill="none" aria-hidden="true"><path d="M33 9c12 8 17 17 17 27M14 22c9 5 13 11 14 20" stroke="#79CDA8" strokeWidth="2.5" strokeLinecap="round" /></svg>
          <img className="leaf-mascot-art" src="/assets/leaf-mascot-3d.png" alt="A happy 3D leaf character waving hello" fetchpriority="high" />
          <span className="leaf-mascot-shadow" aria-hidden="true" />
        </div>
      </div>
      <Star className="leaf-sky-star leaf-sky-star-one" />
      <Star className="leaf-sky-star leaf-sky-star-two" />
      <Star className="leaf-sky-star leaf-sky-star-three" />
      <Star className="leaf-sky-star leaf-sky-star-four" />
      <Star className="leaf-sky-star leaf-sky-star-five" />
      <span className="leaf-sky-dot leaf-sky-dot-one" aria-hidden="true" />
      <span className="leaf-sky-dot leaf-sky-dot-two" aria-hidden="true" />
      <span className="leaf-sky-dot leaf-sky-dot-three" aria-hidden="true" />
      <span className="leaf-sky-dot leaf-sky-dot-four" aria-hidden="true" />
    </div>
  );
}
