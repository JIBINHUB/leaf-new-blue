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
   Figure construction.

   Limbs are filled capsules (rounded rects, rotated about the shoulder or
   hip) rather than bare strokes — that one change is what separates a
   stick figure from a paper-cut character. Every figure gets hands, shoes
   and a hair shape, and the same outline weight as everything else.
   -------------------------------------------------------------------------- */

/** A rounded limb, rotated about its top end. */
function Limb({ x, y, w = 34, h = 104, angle = 0, fill }) {
  return (
    <rect
      x={x} y={y} width={w} height={h} rx={w / 2}
      fill={fill}
      transform={`rotate(${angle} ${x + w / 2} ${y + w / 2})`}
      {...line}
    />
  );
}

/** Rotate a point about a pivot — used to place a hand at a limb's far end. */
function endOf({ x, y, w = 34, h = 104, angle = 0 }) {
  const px = x + w / 2;
  const py = y + w / 2;
  const dy = h - w;
  const rad = (angle * Math.PI) / 180;
  return {
    cx: px - dy * Math.sin(rad),
    cy: py + dy * Math.cos(rad)
  };
}

function Figure({
  cx, top, shirt, trousers = INK, shoes = 'var(--sandstone,#e0dbce)',
  hair = INK, leftArm, rightArm, children
}) {
  const headR = 52;
  const headY = top + headR;
  const bodyY = top + headR * 2 - 12;
  const bodyH = 146;
  const legY = bodyY + bodyH - 6;
  const legH = 92;

  const ARM_W = 38;
  // Arms overlap the torso edge by ~16px so they read as attached rather than
  // as floating sticks beside the body.
  const la = { x: cx - 84, y: bodyY + 14, w: ARM_W, h: 104, angle: 12, ...leftArm };
  const ra = { x: cx + 46, y: bodyY + 14, w: ARM_W, h: 104, angle: -12, ...rightArm };
  const lh = endOf(la);
  const rh = endOf(ra);

  return (
    <g>
      {/* legs, clearly separated */}
      <rect x={cx - 44} y={legY} width={36} height={legH} rx={18} fill={trousers} {...line} />
      <rect x={cx + 8} y={legY} width={36} height={legH} rx={18} fill={trousers} {...line} />

      {/* shoes: a lighter fill and a gap between them, or the two legs and
          both shoes merge into one dark block */}
      <rect x={cx - 50} y={legY + legH - 6} width={46} height={26} rx={13} fill={shoes} {...line} />
      <rect x={cx + 4} y={legY + legH - 6} width={46} height={26} rx={13} fill={shoes} {...line} />

      {/* arms behind the torso */}
      <Limb {...la} fill={shirt} />
      <Limb {...ra} fill={shirt} />

      {/* torso */}
      <rect x={cx - 62} y={bodyY} width={124} height={bodyH} rx={46} fill={shirt} {...line} />

      {/* hands, sized to the limb so they read as a fist, not a balloon */}
      <circle cx={lh.cx} cy={lh.cy} r={17} fill="var(--paper,#fff)" {...line} />
      <circle cx={rh.cx} cy={rh.cy} r={17} fill="var(--paper,#fff)" {...line} />

      {/* head */}
      <circle cx={cx} cy={headY} r={headR} fill="var(--paper,#fff)" {...line} />
      <path d={`M${cx - 19} ${headY - 8}h2M${cx + 17} ${headY - 8}h2`} {...line} strokeWidth={S + 4} />
      <path d={`M${cx - 18} ${headY + 18}c10 11 26 11 36 0`} fill="none" {...line} />
      <path
        d={`M${cx - 52} ${headY - 10}c0-34 23-56 52-56s52 22 52 56c-15-15-32-22-52-22s-37 7-52 22Z`}
        fill={hair}
        {...line}
      />

      {/* props are given the right hand's position so they sit in the grip */}
      {typeof children === 'function' ? children(rh) : children}
    </g>
  );
}

/* --------------------------------------------------------------------------
   Hero scene — the studio at work.
   -------------------------------------------------------------------------- */

export function PaperStudioScene() {
  return (
    <svg
      className="art-scene art-scene-hero"
      viewBox="0 0 960 560"
      role="img"
      aria-label="Illustration of the Leaf Creationism team designing and building together"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* loose confetti */}
      <g className="art-float-slow">
        <circle cx="74" cy="96" r="20" fill="var(--sun,#f5e211)" {...line} />
        <path d="M846 84c14-18 34-18 48 0" fill="none" {...line} />
      </g>
      <g className="art-float-fast">
        <rect x="884" y="184" width="36" height="36" rx="10" fill="var(--coral,#ff705d)" {...line} />
        <circle cx="898" cy="404" r="13" fill="var(--sky,#2ba0ff)" {...line} />
      </g>

      {/* plant */}
      <g>
        <path d="M96 500V392" fill="none" {...line} />
        <path d="M96 418c-36-6-53-32-49-62 30-4 53 19 49 62Z" fill="var(--grass,#8ed462)" {...line} />
        <path d="M96 440c34-9 49-38 41-66-30 0-49 24-41 66Z" fill="var(--grass,#8ed462)" {...line} />
        <path d="M66 500h60l-8 40H74Z" fill="var(--sandstone,#e0dbce)" {...line} />
      </g>

      {/* the screen they are working on */}
      <g className="art-float-slow">
        <rect x="388" y="146" width="232" height="172" rx="26" fill="var(--paper,#fff)" {...line} />
        <rect x="416" y="180" width="104" height="18" rx="9" fill="var(--sky,#2ba0ff)" {...line} />
        <rect x="416" y="216" width="160" height="14" rx="7" fill="var(--sandstone,#e0dbce)" {...line} />
        <rect x="416" y="246" width="122" height="14" rx="7" fill="var(--sandstone,#e0dbce)" {...line} />
        <rect x="416" y="276" width="72" height="22" rx="11" fill="var(--coral,#ff705d)" {...line} />
        <path d="M504 318v36" fill="none" {...line} />
        <path d="M456 354h96" fill="none" {...line} />
      </g>

      {/* left figure, gesturing at the screen */}
      <Figure
        cx={250}
        top={116}
        shirt="var(--coral,#ff705d)"
        rightArm={{ angle: -128, h: 108 }}
      />

      {/* right figure, holding an oversized pencil */}
      <Figure
        cx={718}
        top={124}
        shirt="var(--sky,#2ba0ff)"
        hair="#5a3a22"
        rightArm={{ angle: -34, h: 100 }}
      >
        {(hand) => (
          /* Drawn upright from the hand, then rotated as one group, so the
             pencil and its tip always stay in the grip. */
          <g transform={`rotate(-34 ${hand.cx} ${hand.cy + 13})`}>
            <rect x={hand.cx - 13} y={hand.cy} width="26" height="104" rx="7"
                  fill="var(--sun,#f5e211)" {...line} />
            <path d={`M${hand.cx - 13} ${hand.cy + 104}L${hand.cx} ${hand.cy + 140}L${hand.cx + 13} ${hand.cy + 104}Z`}
                  fill={INK} {...line} />
          </g>
        )}
      </Figure>

      {/* ground */}
      <path d="M40 546h880" fill="none" {...line} />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Spot scene — a bust with an idea, used to close the page.
   A bust rather than a full Figure, so no legs poke out of the disc.
   -------------------------------------------------------------------------- */

export function PaperIdeaScene() {
  const cx = 210;
  const headY = 262;

  return (
    <svg
      className="art-scene art-scene-idea"
      viewBox="0 0 420 470"
      role="img"
      aria-label="Illustration of a person with a bright idea"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* lightbulb, clear of the head */}
      <g className="art-float-slow">
        <path d="M210 30v-20M146 52l-13-14M274 52l13-14" fill="none" {...line} />
        <circle cx="210" cy="92" r="40" fill="var(--sun,#f5e211)" {...line} />
        <path d="M192 134h36M198 150h24" fill="none" {...line} />
      </g>

      {/* disc backdrop */}
      <circle cx="210" cy="278" r="142" fill="var(--grass,#8ed462)" {...line} />

      {/* shoulders, stopping well inside the disc */}
      <path d="M118 420a92 92 0 0 1 184 0Z" fill="var(--coral,#ff705d)" {...line} />

      {/* raised hand, mid-idea */}
      <rect x="296" y="316" width="30" height="92" rx="15"
            fill="var(--coral,#ff705d)" transform="rotate(-38 311 331)" {...line} />
      <circle cx="352" cy="264" r="19" fill="var(--paper,#fff)" {...line} />

      {/* head */}
      <circle cx={cx} cy={headY} r="60" fill="var(--paper,#fff)" {...line} />
      <path d={`M${cx - 21} ${headY - 8}h2M${cx + 19} ${headY - 8}h2`} {...line} strokeWidth={S + 4} />
      <path d={`M${cx - 19} ${headY + 20}c11 12 27 12 38 0`} fill="none" {...line} />
      <path
        d={`M${cx - 60} ${headY - 10}c0-38 26-62 60-62s60 24 60 62c-17-17-37-25-60-25s-43 8-60 25Z`}
        fill={INK}
        {...line}
      />
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
