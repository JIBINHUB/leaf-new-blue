/**
 * LoadingScreen — the veil the site shows on arrival and between pages.
 *
 * Deliberately simple: a fixed sheet and the animation, nothing else. There
 * is no progress bar under it — the animation is already the thing that says
 * the site is working, and a sweeping line that reports no real progress only
 * competed with it.
 *
 * It is removed by a timer that is always set, so there is no path where the
 * overlay can be left covering the site — the one failure mode a loading
 * screen must not have.
 */

import StudioLoader from './StudioLoader';
import './LoadingScreen.css';

export default function LoadingScreen({ leaving = false }) {
  return (
    <div className={`leaf-loading${leaving ? ' is-leaving' : ''}`} role="status" aria-live="polite">
      <StudioLoader />

      <span className="sr-only">Loading</span>
    </div>
  );
}
