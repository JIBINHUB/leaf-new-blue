/**
 * LeafMark — the studio's logo, drawn in whatever colour it inherits.
 *
 * The mark is a white PNG, so it is used as a mask over a currentColor fill
 * rather than as an <img>. That way one file works on any ground — dark ink on
 * the white drag handle, white on a dark header — with no second asset and no
 * recolouring.
 *
 * Lives in its own module because both App and BeforeAfterVideo need it, and
 * importing it out of App would make the two files depend on each other.
 */

/* A mark file of its own, trimmed from the full logo and re-centred on a
   square canvas with an even margin. The full logo could not be used here: its
   artwork sits 400px wide and 401px tall inside a 512px canvas, and it is not
   centred — 46px of padding above, 65px below. Scaling that mask up to crop
   the padding away (mask-size: 128%) pushed the top of the circle outside the
   element box and left the sides flush with the edge, so the mark rendered
   visibly cut. This file needs no scaling trick: contain fits it, and the 6%
   margin keeps the circle's antialiased edge off the boundary. */
const MASK = 'url(/assets/brand/leaf-creationism-mark.png)';

const LeafMark = ({ size = 24, className = '' }) => (
  <span
    /* A stable class so stylesheets can size the mark the way they size the
       icons beside it — the ring, for one, sizes its icons as a percentage of
       the button rather than in pixels. */
    className={`leaf-mark ${className}`.trim()}
    aria-hidden="true"
    style={{
      display: 'inline-block',
      width: size,
      height: size,
      backgroundColor: 'currentColor',
      WebkitMaskImage: MASK,
      WebkitMaskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskImage: MASK,
      maskSize: 'contain',
      maskRepeat: 'no-repeat',
      maskPosition: 'center'
    }}
  />
);

export default LeafMark;
