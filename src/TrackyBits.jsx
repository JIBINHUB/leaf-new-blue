/**
 * Doodle and motion layer for the home page.
 *
 * This system's signature is hand-drawn annotation: curved arrows, squiggle
 * underlines and organic blobs that overlap the text rather than sitting in
 * their own containers. All inline SVG — a few hundred bytes each, scales
 * anywhere, recolours from the palette, no network request.
 *
 * Every doodle is decorative and marked aria-hidden; none of them carry
 * meaning that isn't already in the text.
 */

import { useEffect } from 'react';

/* --------------------------------------------------------------------------
   Doodles
   -------------------------------------------------------------------------- */

/** Squiggle underline. Sits under a highlighted word in the headline. */
export function Squiggle({ className = '', color = 'var(--tk-coral)' }) {
  return (
    <svg className={`tk-squiggle ${className}`} viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M3 11c26-9 52-9 78 0s52 9 78 0 52-9 78 0"
        fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"
      />
    </svg>
  );
}

/** Curved hand-drawn arrow with a head, pointing down-right. */
export function CurvedArrow({ className = '', color = 'var(--tk-navy)' }) {
  return (
    <svg className={`tk-arrow ${className}`} viewBox="0 0 120 100" fill="none" aria-hidden="true">
      <path
        d="M8 8c34 4 62 22 76 52"
        stroke={color} strokeWidth="4" strokeLinecap="round"
        strokeDasharray="0 0"
      />
      <path
        d="M70 46c8 6 12 12 14 20-9-1-16 1-23 6"
        stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

/** Organic blob used as soft background atmosphere behind cards. */
export function Blob({ className = '', color = 'var(--tk-mint)' }) {
  return (
    <svg className={`tk-blob ${className}`} viewBox="0 0 200 200" aria-hidden="true">
      <path
        fill={color}
        d="M42 -62c14 12 22 32 22 52s-8 40-22 52-34 16-52 12-34-16-44-32-14-36-8-54 22-32 40-38 50-4 64 8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/** Four-point sparkle, scattered as punctuation. */
export function Sparkle({ className = '', color = 'var(--tk-butter)' }) {
  return (
    <svg className={`tk-sparkle ${className}`} viewBox="0 0 40 40" aria-hidden="true">
      <path
        d="M20 2c2 10 6 14 16 16-10 2-14 6-16 16-2-10-6-14-16-16 10-2 14-6 16-16Z"
        fill={color} stroke="var(--tk-navy)" strokeWidth="2.5" strokeLinejoin="round"
      />
    </svg>
  );
}

/** Timer pill — the product motif from this system, carrying real studio copy. */
export function TimerPill({ label = 'Replies within one working day' }) {
  return (
    <div className="tk-timer">
      <span className="tk-timer-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <strong>0:00:00</strong>
      <span className="tk-timer-label">{label}</span>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Section reveals.

   Applied by observing existing nodes and toggling a class, rather than
   wrapping sections in extra <div>s — several are grid or flex children, and
   an added wrapper would break their layout.
   -------------------------------------------------------------------------- */

const REVEAL_TARGETS = [
  '.home-about-section',
  '.c1-svc-card',
  '.heads-card',
  '.home-faq-item',
  '.home-contact-section',
  '.tk-feature',
  '.tk-band'
];

export function useSectionReveals(active) {
  useEffect(() => {
    if (!active || typeof window === 'undefined') return;

    const nodes = document.querySelectorAll(REVEAL_TARGETS.join(','));
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('tk-reveal', 'is-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 }
    );

    nodes.forEach((node, index) => {
      node.classList.add('tk-reveal');
      node.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      observer.observe(node);
    });

    /* Failsafe: the reveal starts elements at opacity 0, so anything the
       observer fails to report would stay invisible permanently. Observers can
       miss elements under fast scrolling, and React can swap nodes out when the
       catalog loads. Content visibility never depends on the observer firing —
       only the animation does. */
    const sweep = () => {
      document.querySelectorAll('.tk-reveal:not(.is-in)').forEach((node) => {
        if (node.getBoundingClientRect().top < window.innerHeight * 1.25) {
          node.classList.add('is-in');
          observer.unobserve(node);
        }
      });
      if (!document.querySelector('.tk-reveal:not(.is-in)')) window.clearInterval(timer);
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
