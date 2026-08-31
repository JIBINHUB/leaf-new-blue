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

/** Organic blob used as soft background atmosphere behind cards. */
export function Blob({ className = '', color = 'var(--tk-mint)', ...rest }) {
  return (
    <svg className={`tk-blob ${className}`} viewBox="0 0 200 200" aria-hidden="true" {...rest}>
      <path
        fill={color}
        d="M42 -62c14 12 22 32 22 52s-8 40-22 52-34 16-52 12-34-16-44-32-14-36-8-54 22-32 40-38 50-4 64 8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/** Four-point sparkle, scattered as punctuation. */
export function Sparkle({ className = '', color = 'var(--tk-butter)', ...rest }) {
  return (
    <svg className={`tk-sparkle ${className}`} viewBox="0 0 40 40" aria-hidden="true" {...rest}>
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
   TangleMark — a knot of scribble that unwinds into a clean arrow.

   One continuous stroke: it starts as a mess, works itself loose, and lands
   as a straight line with an arrowhead. That is the studio's pitch in a
   single gesture — tangled idea in, clear direction out — and it is the same
   line vocabulary as the annotation arrows elsewhere on the page.

   SVG, so the background is genuinely transparent, the line stays crisp at
   any size, it recolours from the palette, and the whole mark is about a
   kilobyte.
   -------------------------------------------------------------------------- */

export function TangleMark({ className = '' }) {
  const stroke = {
    fill: 'none',
    strokeWidth: 4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    pathLength: 1
  };

  return (
    <svg
      className={`tk-tangle ${className}`}
      viewBox="0 0 300 170"
      role="img"
      aria-label="A tangled line working itself loose into a clear arrow"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* The knot. Drawn as one path so the stroke never appears to jump. */}
      <path
        className="tk-tangle-knot"
        stroke="var(--tk-navy)"
        d="M46 96c-14-10-6-32 12-30s20 26 4 34-34-6-28-26 34-24 48-6 2 42-18 44-30-16-16-28 34-6 40 10-6 30-18 28-14-18-2-22 20 6 18 16"
        {...stroke}
      />

      {/* The resolution: the same weight of line, now going somewhere. */}
      <path
        className="tk-tangle-line"
        stroke="var(--tk-navy)"
        d="M92 108c22 10 44 6 62-6 20-13 40-20 72-20"
        {...stroke}
      />

      {/* Arrowhead, in the accent, landing last. */}
      <path
        className="tk-tangle-head"
        stroke="var(--tk-coral)"
        d="M212 66l16 16-16 16"
        {...stroke}
      />
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
   Connector line — a wandering dashed path that links one section to the
   next, drawing itself in as it scrolls into view.

   Decorative only, and hidden on narrow screens where there is no free
   margin for it to wander through.
   -------------------------------------------------------------------------- */

export function ConnectorLine({ variant = 'a', className = '' }) {
  const paths = {
    a: 'M100 4C40 44 168 78 100 120s-60 62 8 92',
    b: 'M108 4C176 40 44 76 112 116s52 60-12 96',
    c: 'M100 4C150 40 50 70 100 104s40 66-4 108'
  };

  return (
    <div className={`tk-connector ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 216" fill="none" className="tk-draw tk-connector-svg">
        <path
          d={paths[variant] || paths.a}
          pathLength="1"
          stroke="var(--tk-navy)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Circle scribble — a hand-drawn ring around a phrase. The path overshoots
   its start so it reads as drawn by hand rather than as a clean ellipse.
   -------------------------------------------------------------------------- */

export function CircleScribble({ className = '', color = 'var(--tk-coral)' }) {
  return (
    <svg
      className={`tk-scribble tk-draw ${className}`}
      viewBox="0 0 300 90"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M150 8C60 8 12 26 12 45s52 37 138 37 138-16 138-37S246 9 154 8c-24 0-52 3-74 9"
        pathLength="1"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Scroll parallax.

   Writes an offset into a custom property that CSS applies through the
   `translate` property — kept separate from `transform`, which the idle drift
   and twinkle animations already own, so the two never fight.

   Reads are batched into one rAF frame per scroll event, and the whole thing
   is skipped on phones and under reduced motion: a scroll handler doing
   layout reads is exactly the kind of work that made this site feel heavy.
   -------------------------------------------------------------------------- */

export function useParallax(active) {
  useEffect(() => {
    if (!active || typeof window === 'undefined') return;
    if (window.matchMedia('(max-width: 900px), (prefers-reduced-motion: reduce)').matches) return;

    const nodes = Array.from(document.querySelectorAll('[data-parallax]'));
    if (!nodes.length) return;

    let frame = null;

    const update = () => {
      frame = null;
      const mid = window.innerHeight / 2;
      nodes.forEach((node) => {
        const speed = parseFloat(node.dataset.parallax) || 0;
        const rect = node.getBoundingClientRect();
        // Distance of this element's centre from the viewport centre, so the
        // offset is zero as it passes the middle rather than at the top.
        const offset = (rect.top + rect.height / 2 - mid) * -speed;
        node.style.setProperty('--tk-par', `${offset.toFixed(1)}px`);
      });
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [active]);
}

/* --------------------------------------------------------------------------
   Section reveals.

   Applied by observing existing nodes and toggling a class, rather than
   wrapping sections in extra <div>s — several are grid or flex children, and
   an added wrapper would break their layout.
   -------------------------------------------------------------------------- */

/* Headings wipe upward from a clip instead of fading, so they read as being
   written onto the page rather than appearing. */
const WIPE_TARGETS = [
  '.c1-title',
  '.heads-head h2',
  '.tk-feature h2',
  '.tk-band h2'
];

const REVEAL_TARGETS = [
  '.home-about-section',
  '.c1-svc-card',
  '.heads-card',
  '.home-faq-item',
  '.home-contact-section',
  '.tk-feature',
  '.tk-band',
  '.tk-draw',
  '.tk-connector'
];

export function useSectionReveals(active) {
  useEffect(() => {
    if (!active || typeof window === 'undefined') return;

    const nodes = document.querySelectorAll(REVEAL_TARGETS.join(','));
    const wipes = document.querySelectorAll(WIPE_TARGETS.join(','));
    if (!nodes.length && !wipes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('tk-reveal', 'is-in'));
      wipes.forEach((node) => node.classList.add('tk-wipe', 'is-in'));
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

    wipes.forEach((node) => {
      node.classList.add('tk-wipe');
      observer.observe(node);
    });

    /* Failsafe: the reveal starts elements at opacity 0, so anything the
       observer fails to report would stay invisible permanently. Observers can
       miss elements under fast scrolling, and React can swap nodes out when the
       catalog loads. Content visibility never depends on the observer firing —
       only the animation does. */
    const sweep = () => {
      document.querySelectorAll('.tk-reveal:not(.is-in), .tk-wipe:not(.is-in)').forEach((node) => {
        if (node.getBoundingClientRect().top < window.innerHeight * 1.25) {
          node.classList.add('is-in');
          observer.unobserve(node);
        }
      });
      if (!document.querySelector('.tk-reveal:not(.is-in), .tk-wipe:not(.is-in)')) {
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
