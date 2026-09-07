/**
 * StudioLoader — the mark, drawing itself.
 *
 * The technique is the one the project owner supplied with the bicycle loader:
 * a line drawing whose strokes are dashed to their own length, so animating
 * stroke-dashoffset from full, to zero, to negative makes the drawing draw
 * itself, hold, and then rub itself out — over and over.
 *
 * The shape is ours. The ring is the logo's circle, and LEAF is the logo's
 * actual leaf: traced out of the mark's alpha channel (the 36,888 transparent
 * pixels inside the circle), reduced to 38 points and smoothed. It is the real
 * artwork rather than an approximation of it, and it is the only way to draw
 * this logo as a line — the brand file is a PNG, and a PNG has no outline to
 * animate.
 *
 * pathLength="100" on both shapes normalises their lengths, so one set of
 * keyframes drives a circle and a leaf of quite different perimeters without
 * either needing its real length measured.
 */

import './StudioLoader.css';

/* Traced from assets/brand/leaf-creationism-mark.png. Regenerate if the logo
   file ever changes. */
const LEAF = 'M75.4,20.2 Q75.6,20.1 76.0,21.0 Q76.3,22.0 77.0,25.4 Q77.7,28.9 77.6,34.7 Q77.5,40.5 75.6,47.0 Q73.8,53.5 71.2,57.8 Q68.7,62.1 65.8,65.2 Q62.9,68.3 58.8,71.1 Q54.8,73.9 50.9,75.5 Q47.1,77.1 40.0,79.2 Q33.0,81.3 31.0,82.7 Q29.0,84.1 28.2,85.3 Q27.4,86.6 27.4,87.3 Q27.4,88.0 25.6,86.8 Q23.7,85.7 25.1,80.8 Q26.5,76.0 29.3,71.6 Q32.0,67.1 37.0,62.9 Q42.0,58.6 50.6,53.5 Q59.2,48.4 61.5,46.2 Q63.8,44.0 65.1,41.9 Q66.3,39.8 62.4,42.8 Q58.5,45.8 50.1,49.9 Q41.8,53.9 38.2,56.4 Q34.6,58.8 31.8,61.6 Q29.0,64.4 27.3,66.8 Q25.6,69.2 23.2,74.4 Q20.9,79.7 20.0,75.3 Q19.1,70.9 19.3,66.1 Q19.5,61.4 20.9,56.8 Q22.3,52.3 24.5,48.7 Q26.7,45.1 29.1,42.8 Q31.6,40.5 35.1,38.5 Q38.5,36.6 42.8,35.3 Q47.1,34.0 53.8,32.9 Q60.5,31.7 63.7,30.4 Q66.8,29.1 70.0,26.5 Q73.3,23.8 74.2,22.1 Q75.1,20.3 75.1,20.3 Z';

const StudioLoader = ({ quick = false }) => (
  <div
    className={`studio-loader${quick ? ' is-quick' : ''}`}
    role="img"
    aria-label="Leaf Creationism is loading"
  >
    <svg className="sl-mark" viewBox="0 0 100 100" aria-hidden="true">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle className="sl-ring" cx="50" cy="50" r="46" pathLength="100" />
        <path className="sl-leaf" d={LEAF} pathLength="100" />
      </g>
    </svg>
  </div>
);

export default StudioLoader;
