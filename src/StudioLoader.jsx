/**
 * StudioLoader — the loading animation: record, capture, confirm.
 *
 * Supplied by the project owner. Converted from its styled-components block to
 * a stylesheet, because styled-components is not a dependency here and adding
 * a CSS-in-JS runtime for one animation would cost every visitor on every
 * page.
 *
 * Two changes to the content, both asked for: the accent is the site's blue
 * rather than the reference orange, and the "REC" label is the studio's name.
 * The timings and geometry are untouched — they are what make the laptop close
 * on the beat the tick appears.
 */

import LeafMark from './LeafMark';
import './StudioLoader.css';

const StudioLoader = () => (
  <div className="studio-loader" aria-hidden="true">
    <div className="loader">
      {/* The mark and the name are the animation's first beat — there is no
          separate wordmark under the loader any more. */}
      <div className="ph1">
        <span className="record"><LeafMark size={47} /></span>
        <span className="record-text">Leaf<br />Creationism</span>
      </div>

      <div className="ph2">
        <div className="laptop-b" />
        <svg className="laptop-t" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 30">
          <path
            d="M21 1H5C2.78 1 1 2.78 1 5V25a4 4 90 004 4H37a4 4 90 004-4V5c0-2.22-1.8-4-4-4H21"
            pathLength={100}
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
          />
        </svg>
      </div>

      <div className="icon" />
    </div>
  </div>
);

export default StudioLoader;
