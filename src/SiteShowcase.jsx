/**
 * SiteShowcase — the website work, as one live browser window.
 *
 * This replaces a stack of eight cards that each held a live frame of a real
 * site. Two things were wrong with that, and they were the same thing: a
 * browser cannot cheaply composite an iframe that is being scaled and moved,
 * so it re-renders every one of those pages on every frame of the animation.
 * Eight third-party pages, transformed sixty times a second, is what made it
 * heavy — and it is why the cards behind the front one painted as dark slabs
 * rather than as websites.
 *
 * So exactly one site is ever live here. The cards behind it are empty edges,
 * plain divs with a border, which cost nothing and still read as a stack. The
 * live window itself is never transformed; switching sites swaps the whole
 * card, which fades and rises in on its own.
 *
 * Same component on every screen — the layout changes in CSS, the behaviour
 * does not.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

import SitePreview from './SitePreview';
import './SiteShowcase.css';

/* The frame renders the site at 1280 x 900, so a screen kept at those
   proportions shows the whole page rather than a crop of its top corner. */
const HOLD_MS = 7000;
const GHOST_CARDS = 3;

const toDomain = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

export default function SiteShowcase({ sites, rotateMs = HOLD_MS }) {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const shellRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const node = shellRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
      threshold: 0.15
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  /* Never runs off screen or in a background tab. */
  useEffect(() => {
    if (!onScreen || held || sites.length < 2) return undefined;
    const id = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % sites.length);
    }, rotateMs);
    return () => clearInterval(id);
  }, [onScreen, held, sites.length, rotateMs]);

  /* The index scrolls sideways on a phone, so the name of the site now showing
     has to come along with it. block: 'nearest' keeps the page still. */
  useEffect(() => {
    const chip = listRef.current?.children[active];
    chip?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [active]);

  const hold = useCallback(() => setHeld(true), []);
  const release = useCallback(() => setHeld(false), []);

  if (!sites.length) return null;

  const site = sites[Math.min(active, sites.length - 1)];
  const domain = toDomain(site.url);

  return (
    <div
      className="pf-web-stage"
      ref={shellRef}
      onMouseEnter={hold}
      onMouseLeave={release}
      onFocusCapture={hold}
      onBlurCapture={release}
    >
      <ol className="pf-web-index" ref={listRef} aria-label="Websites we built">
        {sites.map((entry, index) => (
          <li key={entry.url}>
            <button
              type="button"
              className={index === active ? 'is-active' : undefined}
              aria-current={index === active}
              onClick={() => setActive(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{entry.name}</strong>
              <em>{toDomain(entry.url)}</em>
            </button>
          </li>
        ))}
      </ol>

      <div className="pf-web-window">
        <div className="pf-web-deck">
          {/* Empty edges. They give the window the depth the old stack had, at
              the cost of three borders rather than seven live web pages. */}
          {Array.from({ length: GHOST_CARDS }, (_, i) => (
            <i key={`edge-${i}`} style={{ '--i': i + 1 }} aria-hidden="true" />
          ))}

          {/* Keyed on the site so React swaps the whole card rather than
              repointing the frame, which is what lets it animate in. */}
          <article className="pf-swap-card" key={site.url}>
            <span className="pf-swap-chrome">
              <i /><i /><i />
              <em>{domain}</em>
              {/* The only thing here that leaves the page. */}
              <a className="pf-swap-open" href={site.url} target="_blank" rel="noreferrer noopener">
                Open <ArrowUpRight size={13} />
              </a>
            </span>

            <span className="pf-swap-screen">
              <SitePreview
                url={site.url}
                domain={domain}
                title={site.name}
                canPreview={site.preview !== false}
              />
            </span>

            <span className="pf-swap-caption">
              <strong>{site.name}</strong>
              {site.note && <span>{site.note}</span>}
            </span>
          </article>
        </div>

        {/* How long the current site has left. Restarted by the key, and
            paused with the cycle. */}
        <span className="pf-web-progress" aria-hidden="true">
          <i
            key={`${site.url}-${held}`}
            style={{ animationDuration: `${rotateMs}ms`, animationPlayState: held ? 'paused' : 'running' }}
          />
        </span>
      </div>
    </div>
  );
}
