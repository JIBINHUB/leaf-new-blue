/**
 * HeroStickers — the hero's collage: an inflated ribbon behind the headline and
 * a few cut-out stickers pinned around it.
 *
 * The Slush reference builds its hero from 3D-rendered blue ribbons. Those are
 * renders, not something a stylesheet can make, so the ribbon here is the flat
 * version of the same idea: one thick tube of Electric Blue with a black edge
 * and a single highlight stroke — the look of a sticker of a ribbon rather than
 * a photograph of one. No gradients, which the reference forbids outright.
 *
 * The stickers are the reference's device too: flat shapes in the six-colour
 * palette with black outlines, rotated and scattered rather than aligned. One
 * of them is the studio's own leaf, traced from the logo for the loading
 * screen, so the collage carries the brand rather than generic clip-art.
 *
 * Everything is static. The reference restricts motion to the marquee and
 * button hovers, and a still collage costs a phone nothing.
 */

import { LEAF } from './StudioLoader';

const RIBBON = 'M-80 360 C 150 80, 430 540, 680 280 S 1080 30, 1330 230';

/* The ribbon lives behind the "What we do" board rather than behind the
   headline. Everything in that band — the tag, the flap tiles, the buttons —
   sits on its own solid surface, so the ribbon can cross it without ever
   running behind a letter. Behind the headline it cut through the words. */
export function HeroRibbon() {
  return (
    <svg className="hs-ribbon" viewBox="0 0 1240 520" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path className="hs-ribbon-edge" d={RIBBON} />
      <path className="hs-ribbon-body" d={RIBBON} />
      <path className="hs-ribbon-shine" d={RIBBON} />
    </svg>
  );
}

export default function HeroStickers() {
  return (
    <div className="hero-stickers" aria-hidden="true">

      {/* Coin: Sunburst, with a star. */}
      <svg className="hs-sticker hs-coin" viewBox="0 0 100 100" focusable="false">
        <circle cx="50" cy="50" r="46" fill="#ffd731" stroke="#000" strokeWidth="3" />
        <circle cx="50" cy="50" r="34" fill="none" stroke="#000" strokeWidth="2" />
        <path
          d="M50 28 L55.3 42.7 L70.9 43.2 L58.6 52.8 L62.9 67.8 L50 59 L37.1 67.8 L41.4 52.8 L29.1 43.2 L44.7 42.7 Z"
          fill="#000"
        />
      </svg>

      {/* The studio's own mark as a sticker: Voltage Violet disc, white leaf. */}
      <svg className="hs-sticker hs-badge" viewBox="0 0 100 100" focusable="false">
        <circle cx="50" cy="50" r="46" fill="#5c4ade" stroke="#000" strokeWidth="3" />
        <path d={LEAF} fill="#ffffff" stroke="#000" strokeWidth="2.2" strokeLinejoin="round" />
      </svg>

      {/* Check: Mint Pop. */}
      <svg className="hs-sticker hs-check" viewBox="0 0 100 100" focusable="false">
        <rect x="4" y="4" width="92" height="92" rx="20" fill="#55db9c" stroke="#000" strokeWidth="3" />
        <path d="M28 52 L44 68 L74 34" fill="none" stroke="#000" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Cursor: Ember — the "we build it" sticker. */}
      <svg className="hs-sticker hs-cursor" viewBox="0 0 100 100" focusable="false">
        <rect x="4" y="4" width="92" height="92" rx="20" fill="#fb4903" stroke="#000" strokeWidth="3" />
        <path d="M34 22 L34 74 L46 62 L55 80 L64 76 L55 58 L72 58 Z" fill="#ffffff" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
      </svg>

      {/* Speech bubble: Lavender. */}
      <svg className="hs-sticker hs-bubble" viewBox="0 0 100 100" focusable="false">
        <path
          d="M14 14 H86 A10 10 0 0 1 96 24 V62 A10 10 0 0 1 86 72 H44 L24 90 V72 H14 A10 10 0 0 1 4 62 V24 A10 10 0 0 1 14 14 Z"
          fill="#e9ccff"
          stroke="#000"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <text x="50" y="52" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="26" fill="#000">hi!</text>
      </svg>
    </div>
  );
}
