/**
 * Floating product artifacts for the home page.
 *
 * In this system the hero is a text-and-UI collage: fragments of real product
 * surface float around the headline instead of illustration or photography.
 *
 * The fragments here show Leaf's actual working surfaces — a project board, an
 * enquiry trend, a booking composer — rather than invented dashboard filler.
 * Figures are illustrative of the format, not live data, and are labelled so
 * they never read as a performance claim.
 */

import { useEffect } from 'react';

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
  '.st-accent',
  '.st-band'
];

export function useSectionReveals(active) {
  useEffect(() => {
    if (!active || typeof window === 'undefined') return;

    const nodes = document.querySelectorAll(REVEAL_TARGETS.join(','));
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('st-reveal', 'is-in'));
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
      node.classList.add('st-reveal');
      node.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      observer.observe(node);
    });

    /* Failsafe: the reveal starts elements at opacity 0, so anything the
       observer fails to report would stay invisible permanently. Observers can
       miss elements under fast scrolling, and React can swap nodes out when the
       catalog loads. Content visibility never depends on the observer firing —
       only the animation does. */
    const sweep = () => {
      document.querySelectorAll('.st-reveal:not(.is-in)').forEach((node) => {
        if (node.getBoundingClientRect().top < window.innerHeight * 1.25) {
          node.classList.add('is-in');
          observer.unobserve(node);
        }
      });
      if (!document.querySelector('.st-reveal:not(.is-in)')) window.clearInterval(timer);
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

/* --------------------------------------------------------------------------
   Artifacts
   -------------------------------------------------------------------------- */

/** Project board fragment — the studio's work in flight. */
export function ProjectBoardCard() {
  const rows = [
    { name: 'Brand identity', stage: 'In progress', tone: 'live' },
    { name: 'Shopify store', stage: 'In review', tone: 'review' },
    { name: 'Campaign films', stage: 'Delivered', tone: 'done' }
  ];

  return (
    <div className="st-artifact st-artifact-board">
      <div className="st-artifact-head">
        <span className="st-artifact-title">Studio board</span>
        <span className="st-artifact-meta">This week</span>
      </div>
      <ul className="st-board-rows">
        {rows.map((row) => (
          <li key={row.name}>
            <span className="st-board-name">{row.name}</span>
            <span className={`st-chip is-${row.tone}`}>{row.stage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Enquiry trend fragment. A gestural line — no axes, no gridlines — drawn as
 * a single path so it stays crisp at any size.
 */
export function EnquiryTrendCard() {
  return (
    <div className="st-artifact st-artifact-trend">
      <span className="st-artifact-meta">Enquiries</span>
      <strong className="st-metric">Every brief answered</strong>
      <span className="st-delta">Replies within one working day</span>
      <svg viewBox="0 0 220 64" className="st-spark" aria-hidden="true">
        <path
          d="M4 54C26 52 40 44 58 40s30 6 48-2 30-22 50-26 34 2 56-4"
          fill="none"
          stroke="var(--st-sienna)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="212" cy="8" r="4" fill="var(--st-sienna)" />
      </svg>
    </div>
  );
}

/** Booking composer — mirrors the real enquiry flow on the site. */
export function BriefComposerCard({ onSubmit }) {
  return (
    <div className="st-artifact st-artifact-composer">
      <p className="st-composer-placeholder">Tell us what you're building…</p>
      <div className="st-composer-foot">
        <span className="st-composer-tags">
          <span>Design</span>
          <span>Build</span>
          <span>Launch</span>
        </span>
        <button
          type="button"
          className="st-send"
          onClick={onSubmit}
          aria-label="Start a project brief"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
               stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/** Presence bubbles — the two studio heads, with the cursor motif. */
export function PresenceCard() {
  return (
    <div className="st-artifact st-artifact-presence">
      <span className="st-avatar is-one">JC</span>
      <span className="st-avatar is-two">JM</span>
      <span className="st-presence-copy">Two heads on every project</span>
    </div>
  );
}
