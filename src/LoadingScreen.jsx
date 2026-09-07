/**
 * LoadingScreen — the veil the site shows on arrival and between pages.
 *
 * Deliberately simple: a fixed sheet and the animation. There is no progress
 * bar — the drawing is already the thing that says the site is working.
 *
 * On first arrival only, it also counts. The count is not a decorative timer
 * running to a number someone picked: it is driven by what the browser is
 * actually doing — readyState moving through interactive and complete, and the
 * fonts resolving — and it reaches 100 at the moment the veil is told to
 * leave. Between pages there is nothing to count, because nothing is being
 * fetched, so the counter is not shown there.
 *
 * The veil is removed by a timer that is always set, so there is no path where
 * it can be left covering the site — the one failure mode a loading screen
 * must not have.
 */

import { useEffect, useState } from 'react';

import StudioLoader from './StudioLoader';
import './LoadingScreen.css';

/* Real milestones rather than a stopwatch. The browser will not tell us a
   percentage, but it will tell us which stage it has reached, and those stages
   are honest waypoints: a slow connection sits at the low numbers because it
   genuinely is still fetching, and a warm cache runs through them. */
const stageTarget = () => {
  if (typeof document === 'undefined') return 0.1;
  if (document.readyState === 'complete') return 0.92;
  if (document.readyState === 'interactive') return 0.45;
  return 0.1;
};

const useLoadProgress = (enabled, leaving) => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (!enabled) return undefined;

    /* Told to go: the count is finished, whatever it had reached. */
    if (leaving) {
      setPct(100);
      return undefined;
    }

    let raf = 0;
    let shown = 0;
    let fontsReady = false;
    let alive = true;

    document.fonts?.ready.then(() => { fontsReady = true; }).catch(() => {});

    const tick = () => {
      if (!alive) return;
      /* Held below 100 until the veil actually leaves — a counter that sits on
         100 while the screen is still up is worse than one that stops at 97. */
      const target = Math.min(0.97, stageTarget() + (fontsReady ? 0.05 : 0));
      shown += (target - shown) * 0.055;
      setPct(Math.round(shown * 100));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
    };
  }, [enabled, leaving]);

  return pct;
};

export default function LoadingScreen({ leaving = false, quick = false }) {
  /* Between pages nothing is being loaded, so there is nothing to count. */
  const showCount = !quick;
  const pct = useLoadProgress(showCount, leaving);

  return (
    <div className={`leaf-loading${leaving ? ' is-leaving' : ''}`} role="status" aria-live="polite">
      {/* Between pages the same drawing runs faster rather than being cut off
          before the mark is finished. */}
      <StudioLoader quick={quick} />

      {showCount && (
        <span className="leaf-loading-count" aria-hidden="true">
          <b>{pct}</b>
          <i>%</i>
        </span>
      )}

      <span className="sr-only">Loading</span>
    </div>
  );
}
