/**
 * HomeMarquee — the black announcement strip across the top of the home page.
 *
 * It is the one continuously moving element the Slush reference allows. The
 * list is rendered twice and the track slides by exactly half its width, so
 * the loop has no seam. It is a transform on a single element, which the
 * compositor handles without repainting anything.
 *
 * Hidden from assistive tech: the same services are named in the headline,
 * the departure board and the service grid, and a screen reader does not need
 * a fourth pass of them on a loop.
 */

const ITEMS = [
  'UI/UX design',
  'Websites',
  'Mobile apps',
  'AI ads',
  'Branding',
  'Motion',
  'Shopify stores',
  'No-code builds'
];

export default function HomeMarquee() {
  return (
    <div className="home-marquee" aria-hidden="true">
      <div className="home-marquee-track">
        {[0, 1].map((copy) => (
          <span className="home-marquee-group" key={copy}>
            {ITEMS.map((item) => (
              <span className="home-marquee-item" key={`${copy}-${item}`}>
                {item}
                <i>✦</i>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
