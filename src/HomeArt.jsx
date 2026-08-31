/**
 * Paper-cut illustration and motion layer for the home page.
 *
 * Everything here is inline SVG rather than image files: it is a few KB of
 * markup, scales to any screen without a second asset, recolours from the CSS
 * palette, and never adds a network request. Given how much of this site's
 * mobile trouble came from heavy raster art, that matters.
 *
 * Style rules, kept consistent across every scene:
 *   - flat solid fills, never gradients
 *   - one bold ink outline weight, round caps and joins
 *   - exaggerated, simple geometry; character over anatomy
 *   - art sits directly on the cream canvas, no frames or masks
 */

import { useEffect, useRef, useState } from 'react';

const INK = 'var(--ink, #2c2e2a)';
const S = 7;   // one outline weight everywhere

/* Shared stroke props so no scene drifts from the house line weight. */
const line = { stroke: INK, strokeWidth: S, strokeLinecap: 'round', strokeLinejoin: 'round' };

/* --------------------------------------------------------------------------
   Scroll reveal. One observer per element, disconnected as soon as it fires —
   these are one-shot entrances, so there is nothing to keep watching.
   -------------------------------------------------------------------------- */

export function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Honour reduced motion by showing content immediately, never by animating.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, shown];
}

export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      className={`art-reveal${shown ? ' is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* --------------------------------------------------------------------------
   Hero scene — the studio at work.
   Two characters, a screen, a plant, and loose confetti shapes that drift.
   -------------------------------------------------------------------------- */

export function PaperStudioScene() {
  return (
    <svg
      className="art-scene art-scene-hero"
      viewBox="0 0 960 520"
      role="img"
      aria-label="Illustration of the Leaf Creationism team designing and building together"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* loose confetti */}
      <g className="art-float-slow">
        <circle cx="86" cy="92" r="21" fill="var(--sun,#f5e211)" {...line} />
        <path d="M846 74c14-18 34-18 48 0" fill="none" {...line} />
      </g>
      <g className="art-float-fast">
        <rect x="884" y="176" width="38" height="38" rx="10" fill="var(--coral,#ff705d)" {...line} />
        <circle cx="150" cy="392" r="13" fill="var(--sky,#2ba0ff)" {...line} />
      </g>

      {/* plant, left */}
      <g>
        <path d="M108 470V352" fill="none" {...line} />
        <path d="M108 386c-38-6-56-34-52-66 32-4 56 20 52 66Z" fill="var(--grass,#8ed462)" {...line} />
        <path d="M108 410c36-10 52-40 44-70-32 0-52 26-44 70Z" fill="var(--grass,#8ed462)" {...line} />
        <path d="M76 470h64l-8 44H84Z" fill="var(--sandstone,#e0dbce)" {...line} />
      </g>

      {/* screen the team is working on */}
      <g className="art-float-slow">
        <rect x="352" y="126" width="272" height="188" rx="26" fill="var(--paper,#fff)" {...line} />
        <rect x="384" y="162" width="118" height="18" rx="9" fill="var(--sky,#2ba0ff)" {...line} />
        <rect x="384" y="200" width="180" height="14" rx="7" fill="var(--sandstone,#e0dbce)" {...line} />
        <rect x="384" y="232" width="140" height="14" rx="7" fill="var(--sandstone,#e0dbce)" {...line} />
        <rect x="384" y="266" width="76" height="24" rx="12" fill="var(--coral,#ff705d)" {...line} />
        <path d="M488 314v34" fill="none" {...line} />
        <path d="M436 348h104" fill="none" {...line} />
      </g>

      {/* character A — seated left, gesturing at the screen */}
      <g>
        <path d="M232 514V424" fill="none" {...line} />
        <path d="M286 514V424" fill="none" {...line} />
        <path d="M212 424h94a22 22 0 0 0 22-22v-74a68 68 0 0 0-136 0v74a22 22 0 0 0 22 22Z"
              fill="var(--coral,#ff705d)" {...line} />
        {/* arm reaching toward the screen */}
        <path d="M318 348l54-38" fill="none" {...line} />
        <circle cx="259" cy="212" r="52" fill="var(--paper,#fff)" {...line} />
        <path d="M241 206h2M277 206h2" {...line} strokeWidth={S + 3} />
        <path d="M243 232c10 10 24 10 34 0" fill="none" {...line} />
        {/* hair */}
        <path d="M207 200c0-36 24-58 52-58s52 22 52 58c-16-14-34-20-52-20s-36 6-52 20Z"
              fill={INK} {...line} />
      </g>

      {/* character B — standing right, holding an oversized pencil */}
      <g>
        <path d="M700 514v-86" fill="none" {...line} />
        <path d="M752 514v-86" fill="none" {...line} />
        <path d="M682 428h88a20 20 0 0 0 20-20v-88a64 64 0 0 0-128 0v88a20 20 0 0 0 20 20Z"
              fill="var(--sky,#2ba0ff)" {...line} />
        <circle cx="726" cy="206" r="50" fill="var(--paper,#fff)" {...line} />
        <path d="M709 200h2M743 200h2" {...line} strokeWidth={S + 3} />
        <path d="M711 226c9 9 22 9 31 0" fill="none" {...line} />
        <path d="M676 196c4-34 26-52 50-52s46 18 50 52c0-4-22-16-50-16s-50 12-50 16Z"
              fill={INK} {...line} />
        {/* pencil */}
        <g className="art-float-fast">
          <path d="M646 356l-62 62" fill="none" {...line} strokeWidth={S + 12} stroke="var(--sun,#f5e211)" />
          <path d="M646 356l-62 62" fill="none" {...line} />
          <path d="M584 418l-26 12 12-26Z" fill={INK} {...line} />
        </g>
        <path d="M664 344l-18 12" fill="none" {...line} />
      </g>

      {/* ground */}
      <path d="M40 514h880" fill="none" {...line} />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Spot scene — a single character with an idea, used beside body copy.
   -------------------------------------------------------------------------- */

export function PaperIdeaScene() {
  return (
    <svg
      className="art-scene art-scene-idea"
      viewBox="0 0 420 460"
      role="img"
      aria-label="Illustration of a person with a bright idea"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lightbulb sits above the disc, so it never crowds the face. */}
      <g className="art-float-slow">
        <path d="M210 26v-18M148 48l-12-13M272 48l12-13" fill="none" {...line} />
        <circle cx="210" cy="88" r="40" fill="var(--sun,#f5e211)" {...line} />
        <path d="M192 130h36" fill="none" {...line} />
        <path d="M198 146h24" fill="none" {...line} />
      </g>

      {/* Disc backdrop. The figure is drawn to sit inside it rather than
          being clipped by it — a cropped body read as a tongue before. */}
      <circle cx="210" cy="290" r="140" fill="var(--grass,#8ed462)" {...line} />

      {/* Shoulders: a wide rounded cap that stops well inside the disc. */}
      <path d="M124 412a86 86 0 0 1 172 0Z" fill="var(--coral,#ff705d)" {...line} />

      {/* Head */}
      <circle cx="210" cy="268" r="62" fill="var(--paper,#fff)" {...line} />
      <path d="M190 260h2M228 260h2" {...line} strokeWidth={S + 4} />
      <path d="M192 292c11 12 25 12 36 0" fill="none" {...line} />

      {/* Hair cap */}
      <path d="M152 258c0-40 26-64 58-64s58 24 58 64c-17-16-36-24-58-24s-41 8-58 24Z"
            fill={INK} {...line} />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Rotating sticker badge. Text is laid on a circular path, and the whole
   group spins slowly — a sticker-soft flourish rather than a UI control.
   -------------------------------------------------------------------------- */

export function SpinBadge({ text = 'LEAF CREATIONISM · KERALA · SINCE 2025 · ' }) {
  return (
    <div className="art-badge" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="art-badge-ring">
        <defs>
          <path id="art-badge-path" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        <text className="art-badge-text">
          <textPath href="#art-badge-path" startOffset="0%">{text.repeat(2)}</textPath>
        </text>
      </svg>
      <span className="art-badge-core">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
             stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14Z" />
          <path d="M5 19c3-3 6-5 10-7" />
        </svg>
      </span>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Scrolling word strip. The list is rendered twice and the track is animated
   by exactly -50%, so the loop is seamless with no JS driving it.
   -------------------------------------------------------------------------- */

export function MarqueeStrip({ words, tone = 'ink' }) {
  return (
    <div className={`art-marquee art-marquee-${tone}`} aria-hidden="true">
      <div className="art-marquee-track">
        {[0, 1].map((copy) => (
          <div className="art-marquee-set" key={copy}>
            {words.map((word) => (
              <span key={`${copy}-${word}`}>
                {word}
                <i className="art-marquee-dot" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Section reveals.

   Applied by observing existing nodes and toggling a class, rather than
   wrapping sections in extra <div>s — several of these sections are grid or
   flex children, and an added wrapper would break their layout.
   -------------------------------------------------------------------------- */

const REVEAL_TARGETS = [
  '.home-about-section',
  '.c1-svc-card',
  '.heads-card',
  '.home-faq-item',
  '.home-contact-section',
  '.edi-band'
];

export function useSectionReveals(active) {
  useEffect(() => {
    if (!active || typeof window === 'undefined') return;

    const nodes = document.querySelectorAll(REVEAL_TARGETS.join(','));
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('art-reveal', 'is-in'));
      return;
    }

    const reveal = (node) => node.classList.add('is-in');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);   // one-shot
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 }
    );

    nodes.forEach((node, index) => {
      node.classList.add('art-reveal');
      // Stagger within a row so cards arrive in sequence, capped so later
      // items never feel like they are lagging behind the scroll.
      node.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
      observer.observe(node);
    });

    /* Failsafe.
       The reveal starts elements at opacity 0, so anything the observer fails
       to report would stay invisible permanently — content lost to a purely
       decorative effect. Observers can miss elements under fast or scripted
       scrolling, and React can swap nodes out from under us when the catalog
       loads. So we sweep: anything still hidden that has reached the viewport
       is shown regardless. Content visibility never depends on the observer
       firing, only the animation does. */
    const sweep = () => {
      const hidden = document.querySelectorAll('.art-reveal:not(.is-in)');
      hidden.forEach((node) => {
        if (node.getBoundingClientRect().top < window.innerHeight * 1.25) {
          reveal(node);
          observer.unobserve(node);
        }
      });
      if (!document.querySelector('.art-reveal:not(.is-in)')) {
        window.clearInterval(timer);
      }
    };

    const timer = window.setInterval(sweep, 1200);
    window.addEventListener('scroll', sweep, { passive: true });

    return () => {
      observer.disconnect();
      window.clearInterval(timer);
      window.removeEventListener('scroll', sweep);
    };
  }, [active]);
}
