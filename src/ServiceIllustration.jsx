/**
 * ServiceIllustration — a drawn scene for each of the eight service pages.
 *
 * These replace the stock 3D renders, which all read as the same lilac
 * AI-generated blob and said nothing about the service they sat on.
 *
 * Drawn as SVG rather than shipped as images because it buys three things
 * here: they stay sharp at any size, they are a couple of KB each instead of a
 * couple of hundred, and the chalk texture is a filter rather than baked in,
 * so one set of shapes serves the light page and the dark one.
 *
 * The visual language follows the reference the owner supplied: a deep ink
 * ground, white chalky outlines, and solid brand-blue fills — no gradients, no
 * shading. The wobble is a turbulence displacement filter, which is what makes
 * a plain <circle> read as something drawn by hand rather than by a computer.
 *
 * The ground is deliberately dark in both themes: the media box on this page
 * is already a dark rounded frame, so a dark scene fits it, and it keeps the
 * eight pages looking like one set.
 */

import './ServiceIllustration.css';

/* --- UI/UX: an interface, and the pieces it is made of --------------------- */
const UiUx = () => (
  <>
    {/* The phone. */}
    <rect className="si-blue" x="118" y="40" width="104" height="172" rx="18" />
    <rect className="si-ink" x="118" y="40" width="104" height="172" rx="18" />
    <rect className="si-paper" x="132" y="62" width="76" height="36" rx="7" />
    <path className="si-ink" d="M132 116 h76 M132 132 h52 M132 148 h68" />
    <rect className="si-paper" x="132" y="170" width="76" height="24" rx="12" />
    {/* Cards lifting off it — the components an interface is assembled from. */}
    <rect className="si-ink" x="238" y="66" width="60" height="44" rx="9" />
    <path className="si-blue-stroke" d="M250 96 v-12 M264 96 v-20 M278 96 v-8" />
    <rect className="si-ink" x="238" y="132" width="60" height="30" rx="15" />
    <circle className="si-blue" cx="253" cy="147" r="9" />
    <rect className="si-ink" x="30" y="84" width="62" height="46" rx="9" />
    <rect className="si-blue" x="40" y="94" width="26" height="26" rx="6" />
    <path className="si-ink" d="M74 108 h10" />
    {/* The cursor that made it happen. */}
    <path className="si-paper" d="M70 158 l0 34 l9 -9 l7 15 l8 -4 l-7 -15 l12 0 z" />
    <path className="si-ink" d="M70 158 l0 34 l9 -9 l7 15 l8 -4 l-7 -15 l12 0 z" />
    <circle className="si-blue" cx="176" cy="24" r="13" />
    <circle className="si-ink" cx="176" cy="24" r="13" />
    <path className="si-ink" d="M170 24 l5 5 l9 -11" />
  </>
);

/* --- Web: a page that is already loaded ---------------------------------- */
const Web = () => (
  <>
    <rect className="si-ink" x="60" y="46" width="200" height="132" rx="12" />
    <path className="si-ink" d="M60 74 H260" />
    <circle className="si-blue" cx="78" cy="60" r="5" />
    <circle className="si-ink" cx="78" cy="60" r="5" />
    <rect className="si-blue" x="76" y="92" width="80" height="50" rx="8" />
    <path className="si-ink" d="M172 96 h72 M172 112 h56 M172 128 h72 M172 144 h38" />
    {/* The stand, and the desk it sits on. */}
    <path className="si-ink" d="M148 178 v16 M120 194 h80" />
    <path className="si-ink" d="M40 210 H280" />
    <circle className="si-blue" cx="244" cy="212" r="14" />
    <circle className="si-ink" cx="244" cy="212" r="14" />
    <path className="si-ink" d="M238 212 l5 5 l9 -11" />
  </>
);

/* --- AI ads: a signal finding its mark ------------------------------------ */
const AiAds = () => (
  <>
    <circle className="si-ink" cx="164" cy="126" r="72" />
    <circle className="si-ink" cx="164" cy="126" r="46" />
    <circle className="si-blue" cx="164" cy="126" r="20" />
    <circle className="si-ink" cx="164" cy="126" r="20" />
    <path className="si-blue-stroke" d="M40 206 C 78 168, 110 142, 152 130" />
    <path className="si-ink" d="M40 206 C 78 168, 110 142, 152 130" />
    <path className="si-blue" d="M262 44 l7 18 l18 7 l-18 7 l-7 18 l-7 -18 l-18 -7 l18 -7 z" />
    <path className="si-ink" d="M262 44 l7 18 l18 7 l-18 7 l-7 18 l-7 -18 l-18 -7 l18 -7 z" />
    <path className="si-blue" d="M58 52 l5 13 l13 5 l-13 5 l-5 13 l-5 -13 l-13 -5 l13 -5 z" />
    <rect className="si-ink" x="228" y="164" width="52" height="46" rx="8" />
    <path className="si-blue-stroke" d="M238 200 v-14 M252 200 v-24 M266 200 v-8" />
  </>
);

/* --- Advertising: a message that carries --------------------------------- */
const Advertising = () => (
  <>
    <path className="si-blue" d="M104 110 L188 70 V186 L104 150 Z" />
    <path className="si-ink" d="M104 110 L188 70 V186 L104 150 Z" />
    <rect className="si-ink" x="72" y="108" width="34" height="44" rx="8" />
    <path className="si-ink" d="M132 154 l10 46 h22 l-8 -38" />
    <path className="si-ink" d="M206 96 C 228 118, 228 142, 206 164" />
    <path className="si-ink" d="M228 76 C 262 114, 262 148, 228 186" />
    <path className="si-ink" d="M250 56 C 294 108, 294 154, 250 206" />
    <rect className="si-blue" x="44" y="44" width="54" height="22" rx="11" />
    <rect className="si-ink" x="44" y="44" width="54" height="22" rx="11" />
    <rect className="si-blue" x="52" y="192" width="66" height="22" rx="11" />
    <rect className="si-ink" x="52" y="192" width="66" height="22" rx="11" />
  </>
);

/* --- Branding: the mark and its palette ----------------------------------- */
const Branding = () => (
  <>
    <circle className="si-blue" cx="140" cy="120" r="70" />
    <circle className="si-ink" cx="140" cy="120" r="70" />
    {/* The studio's own leaf, drawn into the mark. */}
    <path
      className="si-paper"
      d="M116 150 C 116 104, 152 84, 184 88 C 184 132, 154 158, 116 150 Z"
    />
    <path className="si-ink" d="M122 154 C 142 134, 164 116, 182 92" />
    <rect className="si-blue" x="236" y="62" width="38" height="38" rx="8" />
    <rect className="si-ink" x="236" y="62" width="38" height="38" rx="8" />
    <rect className="si-ink" x="236" y="110" width="38" height="38" rx="8" />
    <rect className="si-blue" x="236" y="158" width="38" height="38" rx="8" />
    <rect className="si-ink" x="236" y="158" width="38" height="38" rx="8" />
    <path className="si-ink" d="M46 200 h74 M46 216 h48" />
  </>
);

/* --- Mobile apps: a phone full of the thing you built --------------------- */
const MobileApps = () => (
  <>
    <rect className="si-ink" x="102" y="30" width="120" height="200" rx="20" />
    <path className="si-ink" d="M148 44 h28" />
    <rect className="si-blue" x="118" y="66" width="34" height="34" rx="9" />
    <rect className="si-ink" x="118" y="66" width="34" height="34" rx="9" />
    <rect className="si-ink" x="164" y="66" width="34" height="34" rx="9" />
    <rect className="si-ink" x="118" y="112" width="34" height="34" rx="9" />
    <rect className="si-blue" x="164" y="112" width="34" height="34" rx="9" />
    <rect className="si-ink" x="164" y="112" width="34" height="34" rx="9" />
    <rect className="si-blue" x="118" y="166" width="80" height="34" rx="16" />
    <rect className="si-ink" x="118" y="166" width="80" height="34" rx="16" />
    {/* A hand holding it. */}
    <path className="si-ink" d="M96 190 c -22 4, -30 18, -28 40 M226 190 c 22 4, 30 18, 28 40" />
    <circle className="si-blue" cx="262" cy="70" r="16" />
    <circle className="si-ink" cx="262" cy="70" r="16" />
  </>
);

/* --- No-code: blocks going into place ------------------------------------- */
const NoCode = () => (
  <>
    <rect className="si-ink" x="58" y="52" width="152" height="158" rx="12" />
    <rect className="si-blue" x="74" y="70" width="120" height="32" rx="8" />
    <rect className="si-ink" x="74" y="70" width="120" height="32" rx="8" />
    <rect className="si-ink" x="74" y="112" width="56" height="44" rx="8" />
    <rect className="si-blue" x="138" y="112" width="56" height="44" rx="8" />
    <rect className="si-ink" x="138" y="112" width="56" height="44" rx="8" />
    <rect className="si-ink" x="74" y="166" width="120" height="28" rx="8" />
    {/* The one still being carried in. */}
    <rect className="si-blue" x="228" y="96" width="58" height="42" rx="10" />
    <rect className="si-ink" x="228" y="96" width="58" height="42" rx="10" />
    <path className="si-ink" d="M218 80 c 10 -14, 26 -14, 34 -2" />
    <path className="si-ink" d="M244 152 v24" />
    <circle className="si-blue" cx="258" cy="196" r="12" />
    <circle className="si-ink" cx="258" cy="196" r="12" />
  </>
);

/* --- Shopify: a shop that sells ------------------------------------------- */
const Shopify = () => (
  <>
    <path className="si-ink" d="M62 98 L84 54 H236 L258 98" />
    <rect className="si-ink" x="62" y="98" width="196" height="116" rx="10" />
    <path className="si-blue" d="M62 98 h49 v24 a24.5 24.5 0 0 1 -49 0 z" />
    <path className="si-ink" d="M62 98 h49 v24 a24.5 24.5 0 0 1 -49 0 z" />
    <path className="si-ink" d="M111 98 h49 v24 a24.5 24.5 0 0 1 -49 0 z" />
    <path className="si-blue" d="M160 98 h49 v24 a24.5 24.5 0 0 1 -49 0 z" />
    <path className="si-ink" d="M160 98 h49 v24 a24.5 24.5 0 0 1 -49 0 z" />
    <path className="si-ink" d="M209 98 h49 v24 a24.5 24.5 0 0 1 -49 0 z" />
    <rect className="si-ink" x="136" y="152" width="58" height="62" rx="6" />
    {/* A bag going out of the door. */}
    <path className="si-blue" d="M212 160 h44 v46 h-44 z" />
    <path className="si-ink" d="M212 160 h44 v46 h-44 z" />
    <path className="si-ink" d="M224 160 c 0 -12, 20 -12, 20 0" />
    <path className="si-ink" d="M40 214 H286" />
  </>
);

const SCENES = {
  uiux: UiUx,
  web: Web,
  ai: AiAds,
  adv: Advertising,
  brand: Branding,
  apps: MobileApps,
  nocode: NoCode,
  shopify: Shopify
};

export default function ServiceIllustration({ id, label = '' }) {
  const Scene = SCENES[id] || UiUx;
  return (
    <div className="si-wrap" role="img" aria-label={`${label} illustration`}>
      <svg viewBox="0 0 320 250" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* The chalk. Turbulence pushed through a displacement map roughens
              every edge by a pixel or two, which is what stops these reading as
              clean vector shapes. Static — nothing animates through the filter,
              because a filtered subtree has to be re-filtered every frame it
              moves and that is not a cost worth paying for a decoration. */}
          <filter id="si-chalk" x="-12%" y="-12%" width="124%" height="124%">
            <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <g filter="url(#si-chalk)">
          <Scene />
        </g>
      </svg>
    </div>
  );
}
