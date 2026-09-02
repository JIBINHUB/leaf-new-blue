/**
 * SiteShowcase — the website work.
 *
 * Desktop gets the swapping card stack (CardSwap), with each card carrying a
 * live frame of the real site rather than a screenshot. Cards are sized from
 * the section width so the page inside is big enough to read, and the stack is
 * given room to fan up and to the right without being clipped.
 *
 * Phones get a single window plus a swipe row of the other sites. Two reasons,
 * both learned on this site: the stack needs transform-style: preserve-3d,
 * which mobile Safari and Chrome fail to paint here, and six live third-party
 * pages at once is not something a phone should be asked to load.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

import CardSwap, { Card } from './CardSwap';
import SitePreview from './SitePreview';
import './SiteShowcase.css';

/* The frame renders the site at 1280 x 900, so a screen this many times its
   width is exactly tall enough to show the whole of it. */
const SCREEN_RATIO = 900 / 1280;
/* Measured from the rendered card, so the screen area lands on the exact
   height the frame needs and the whole page is visible. */
const CHROME_H = 44;
const CAPTION_H = 72;
/* Tighter than the component's defaults: the fan should read as one object
   with depth, not as six cards drifting apart. */
const CARD_GAP_X = 36;
const CARD_GAP_Y = 38;

const toDomain = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

const useMatches = (query) => {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const list = window.matchMedia(query);
    const handler = () => setMatches(list.matches);
    handler();
    list.addEventListener('change', handler);
    return () => list.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

/* One card: browser chrome, the page, then who it is for.
   `live` decides whether this card actually loads the site. On desktop every
   card is live; on a phone only the front of the stack and the one behind it
   are, because six live third-party pages is not a load to hand a phone. */
const SiteCard = ({ site, domain, live = true }) => (
  <>
    <span className="pf-swap-chrome">
      <i /><i /><i />
      <em>{domain}</em>
      {/* The only way out of this page. Nothing else on the card navigates. */}
      <a
        className="pf-swap-open"
        href={site.url}
        target="_blank"
        rel="noreferrer noopener"
        onClick={(event) => event.stopPropagation()}
      >
        Open <ArrowUpRight size={13} />
      </a>
    </span>

    <span className="pf-swap-screen">
      {live ? (
        <SitePreview url={site.url} domain={domain} title={site.name} canPreview={site.preview !== false} />
      ) : (
        <span className="pf-web-fallback">{domain}</span>
      )}
    </span>

    <span className="pf-swap-caption">
      <strong>{site.name}</strong>
      {site.note && <span>{site.note}</span>}
    </span>
  </>
);

export default function SiteShowcase({ sites, rotateMs = 8000 }) {
  const isNarrow = useMatches('(max-width: 900px)');

  if (!sites.length) return null;

  return isNarrow
    ? <NarrowStack sites={sites} rotateMs={rotateMs} />
    : <StackShowcase sites={sites} />;
}

/* --- Desktop: the swapping stack ----------------------------------------- */

function StackShowcase({ sites }) {
  const wrapRef = useRef(null);
  const [cardW, setCardW] = useState(560);

  const fanX = CARD_GAP_X * (sites.length - 1);
  const fanY = CARD_GAP_Y * (sites.length - 1);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return undefined;

    /* contentRect already excludes the padding the fan sits in, so this is the
       room the front card itself has. Capped so the site inside stays a
       readable desktop page rather than a billboard. */
    const observer = new ResizeObserver(([entry]) => {
      const available = entry.contentRect.width;
      setCardW(Math.max(340, Math.min(available, 860)));
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const cardH = Math.round(CHROME_H + cardW * SCREEN_RATIO + CAPTION_H);

  return (
    <div className="pf-web-stage">
      {/* The index. It balances the stack, which sits off to one side by
          nature, and gives every site a way in even while it is buried in the
          pile. */}
      <ol className="pf-web-index">
        {sites.map((site, index) => (
          <li key={site.url}>
            <a href={site.url} target="_blank" rel="noreferrer noopener">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{site.name}</strong>
              <em>{toDomain(site.url)}</em>
            </a>
          </li>
        ))}
      </ol>

      <div
        className="pf-swap-wrap"
        ref={wrapRef}
        /* The stack fans up and to the right of the front card, so the group's
           real centre is above and right of the container's. Padding on the
           opposite sides pushes the container back down and left by half the
           fan, which lands the whole pile in the middle of its column. */
        style={{ minHeight: cardH + fanY, paddingTop: fanY, paddingRight: fanX }}
      >
        <CardSwap
          width={cardW}
          height={cardH}
          cardDistance={CARD_GAP_X}
          verticalDistance={CARD_GAP_Y}
          delay={5200}
          pauseOnHover
          skewAmount={4}
          easing="power"
          /* Deliberately no onCardClick. The card is a live view of someone
             else's site, and a stray click on it used to navigate away — the
             Open button is the only thing that leaves this page. */
        >
          {sites.map((site) => (
            <Card key={site.url} customClass="pf-swap-card">
              <SiteCard site={site} domain={toDomain(site.url)} />
            </Card>
          ))}
        </CardSwap>
      </div>
    </div>
  );
}

/* --- Phones: the same stack, built from 2D transforms --------------------- */

/* The desktop stack is GSAP moving cards inside a transform-style: preserve-3d
   container. That is precisely what mobile Safari and Chrome fail to paint on
   this site, so this rebuilds the same motion — front card drops away, the
   rest step forward, the dropped one returns to the back — using only
   translate, scale and opacity. No 3D context, no per-frame JavaScript: the
   browser interpolates the transitions on the compositor. */

const DROP_MS = 520;
const VISIBLE_DEPTH = 3;

function NarrowStack({ sites, rotateMs }) {
  const [order, setOrder] = useState(() => sites.map((_, index) => index));
  const [dropping, setDropping] = useState(null);
  const shellRef = useRef(null);
  const [onScreen, setOnScreen] = useState(false);
  const [cardW, setCardW] = useState(320);
  const dropTimer = useRef(null);

  useEffect(() => {
    const node = shellRef.current;
    if (!node) return undefined;

    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
      threshold: 0.15
    });
    io.observe(node);

    const ro = new ResizeObserver(([entry]) => {
      /* The fan leans right, so the card is narrower than the section by the
         depth it needs to lean into. */
      const width = entry.contentRect.width - VISIBLE_DEPTH * 12;
      if (width > 0) setCardW(Math.round(width));
    });
    ro.observe(node);

    return () => {
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  const advance = useCallback(() => {
    if (dropping !== null) return;
    setDropping(order[0]);
    /* The card is out of sight before the order changes, so the promotion
       never shows as a jump. */
    dropTimer.current = window.setTimeout(() => {
      setOrder(([first, ...rest]) => [...rest, first]);
      setDropping(null);
    }, DROP_MS);
  }, [dropping, order]);

  /* Deliberately not paused by touch. An earlier version held the cycle while
     a finger was down, but a tap that opens a site in a new tab can leave
     without a touchend, and the stack then sat frozen for good. Tapping a name
     in the index below is the way to stop on a site. */
  useEffect(() => {
    if (!onScreen || sites.length < 2) return undefined;
    const id = window.setInterval(() => {
      if (!document.hidden) advance();
    }, rotateMs);
    return () => clearInterval(id);
  }, [onScreen, sites.length, rotateMs, advance]);

  useEffect(() => () => clearTimeout(dropTimer.current), []);

  /* Jump straight to a site from the index row. */
  const bringToFront = (index) => {
    clearTimeout(dropTimer.current);
    setDropping(null);
    setOrder((currentOrder) => {
      const at = currentOrder.indexOf(index);
      return at < 0 ? currentOrder : [...currentOrder.slice(at), ...currentOrder.slice(0, at)];
    });
  };

  const cardH = Math.round(CHROME_H + cardW * SCREEN_RATIO + CAPTION_H);
  const frontIndex = order[0];
  const nextIndex = order[1 % order.length];
  const listRef = useRef(null);

  /* The index scrolls sideways, so the name of the site now on top has to be
     brought along with it — block: 'nearest' so the page itself never moves. */
  useEffect(() => {
    const chip = listRef.current?.children[frontIndex];
    chip?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [frontIndex]);

  return (
    <div className="pf-stack" ref={shellRef}>
      <div className="pf-stack-deck" style={{ height: cardH + VISIBLE_DEPTH * 10 }}>
        {sites.map((site, index) => {
          const slot = order.indexOf(index);
          const isDropping = dropping === index;
          /* While the front card is on its way out the others promote
             immediately, so nothing jumps when the order finally updates. */
          const depth = isDropping ? 0 : Math.max(0, dropping === null ? slot : slot - 1);
          const shown = Math.min(depth, VISIBLE_DEPTH);
          const live = index === frontIndex || index === nextIndex;

          return (
            /* A div, not a link. The whole card used to be one, so a tap
               anywhere — including a tap meant to stop the stack — opened the
               site. Only the Open button in the chrome does that now. */
            <div
              key={site.url}
              className={`pf-swap-card pf-stack-card${isDropping ? ' is-dropping' : ''}`}
              aria-hidden={depth !== 0}
              style={{
                width: cardW,
                height: cardH,
                zIndex: sites.length - shown,
                opacity: depth > VISIBLE_DEPTH ? 0 : 1,
                transform: isDropping
                  ? 'translate3d(0, 34%, 0) scale(0.94)'
                  : `translate3d(${shown * 12}px, ${shown * -10}px, 0) scale(${1 - shown * 0.04})`
              }}
            >
              <SiteCard site={site} domain={toDomain(site.url)} live={live} />
            </div>
          );
        })}
      </div>

      <span className="pf-stage-count">
        {String(order[0] + 1).padStart(2, '0')} / {String(sites.length).padStart(2, '0')}
      </span>

      <ol className="pf-stage-list" aria-label="Websites we built" ref={listRef}>
        {sites.map((entry, index) => (
          <li key={entry.url}>
            <button
              type="button"
              className={index === frontIndex ? 'is-active' : undefined}
              aria-current={index === frontIndex}
              onClick={() => bringToFront(index)}
            >
              <span className="pf-stage-num">{String(index + 1).padStart(2, '0')}</span>
              <span className="pf-stage-name">
                <strong>{entry.name}</strong>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
