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
    <svg className={`tk-squiggle tk-draw ${className}`} viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M3 11c26-9 52-9 78 0s52 9 78 0 52-9 78 0"
        fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"
        pathLength="1"
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
   Sprout — the studio mascot.

   Leaf Creationism's own character rather than a borrowed one: a leaf with a
   face, drawn in the same navy line weight as the rest of the doodles.

   Three idle behaviours, all pure CSS on transform so none of them trigger
   layout: a slow bob, a periodic blink, and a waving arm. Limbs are filled
   capsules rotated about the shoulder or hip — the same construction that
   separates a character from a stick figure.
   -------------------------------------------------------------------------- */

export function Sprout({ className = '' }) {
  const ink = 'var(--tk-navy)';
  const stroke = { stroke: ink, strokeWidth: 5, strokeLinecap: 'round', strokeLinejoin: 'round' };

  return (
    <svg
      className={`tk-sprout ${className}`}
      viewBox="0 0 260 290"
      role="img"
      aria-label="Sprout, the Leaf Creationism mascot, waving"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="tk-sprout-bob">
        {/* legs and feet, behind the body */}
        <rect x="99" y="203" width="20" height="44" rx="10" fill={ink} />
        <rect x="123" y="203" width="20" height="44" rx="10" fill={ink} />
        <ellipse cx="101" cy="252" rx="20" ry="11" fill={ink} {...stroke} />
        <ellipse cx="141" cy="252" rx="20" ry="11" fill={ink} {...stroke} />

        {/* resting arm */}
        <rect x="40" y="140" width="18" height="56" rx="9"
              fill="var(--tk-mint)" transform="rotate(20 49 149)" {...stroke} />
        <circle cx="36" cy="185" r="11" fill="var(--tk-paper)" {...stroke} />

        {/* waving arm — rotates about the shoulder */}
        <g className="tk-sprout-wave">
          <rect x="182" y="120" width="18" height="56" rx="9"
                fill="var(--tk-mint)" transform="rotate(-140 191 129)" {...stroke} />
          <circle cx="215" cy="100" r="11" fill="var(--tk-paper)" {...stroke} />
        </g>

        {/* stem and sprig */}
        <path d="M120 50c-2-16 2-26 8-34" fill="none" {...stroke} />
        <path d="M128 16c12-8 24-4 28 6-10 8-22 6-28-6Z" fill="var(--tk-mint)" {...stroke} />

        {/* leaf body */}
        <path
          d="M120 46c66 22 78 100 46 146-18 24-74 24-92 0C42 146 54 68 120 46Z"
          fill="var(--tk-mint)"
          {...stroke}
        />

        {/* Veins stay in the upper leaf only. Running the midrib the full
            height put lines straight across the eyes and mouth, which read as
            a scowl rather than as texture. */}
        <g stroke={ink} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4">
          <path d="M120 62v40" />
          <path d="M120 84 96 72M120 84l24-12" />
        </g>

        {/* blush */}
        <circle cx="82" cy="160" r="10" fill="var(--tk-coral)" opacity="0.45" />
        <circle cx="158" cy="160" r="10" fill="var(--tk-coral)" opacity="0.45" />

        {/* face */}
        <g className="tk-sprout-blink">
          <circle cx="101" cy="138" r="9" fill={ink} />
          <circle cx="139" cy="138" r="9" fill={ink} />
          <circle cx="104" cy="135" r="3" fill="var(--tk-paper)" />
          <circle cx="142" cy="135" r="3" fill="var(--tk-paper)" />
        </g>
        <path d="M100 162c11 15 29 15 40 0" fill="none" {...stroke} />
      </g>
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Annotated arrow — a curved arrow with a handwritten label beside it.

   The path uses pathLength="1", so the draw-on animation normalises to a
   0..1 dash regardless of the actual geometry. That means the arrow can be
   redrawn or rescaled without recomputing a dash length.
   -------------------------------------------------------------------------- */

export function AnnotatedArrow({ label, className = '', flip = false }) {
  const color = 'var(--tk-navy)';
  return (
    <div className={`tk-annot ${className}${flip ? ' is-flipped' : ''}`} aria-hidden="true">
      <span className="tk-annot-label">{label}</span>
      <svg className="tk-annot-arrow tk-draw" viewBox="0 0 120 96" fill="none">
        <path
          d="M10 10c36 6 64 26 78 54"
          pathLength="1" stroke={color} strokeWidth="4" strokeLinecap="round"
        />
        <path
          d="M72 48c9 6 13 13 16 21-9-1-17 2-24 7"
          pathLength="1" stroke={color} strokeWidth="4"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
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
  '.tk-band',
  '.tk-draw'
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
