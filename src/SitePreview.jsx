/**
 * SitePreview — a live, scaled-down view of a real website.
 *
 * The frame is only mounted once the card scrolls into view, and unmounted
 * when it leaves. Six live sites loading at once is genuinely heavy, and this
 * site is one people keep telling us feels slow — so nothing loads until it is
 * about to be looked at.
 *
 * The iframe is rendered at desktop width and scaled down, which is what makes
 * it read as a screenshot of the real page rather than a squashed mobile view.
 * It never receives pointer events: clicks belong to the card, which opens the
 * site properly in a new tab.
 */

import { useEffect, useRef, useState } from 'react';

const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 900;

export default function SitePreview({ url, domain, title, canPreview = true }) {
  const holderRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    const node = holderRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    observer.observe(node);

    // Scale so the desktop-width frame fits this card exactly.
    const resize = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      if (w > 0) setScale(w / FRAME_WIDTH);
    });
    resize.observe(node);

    return () => {
      observer.disconnect();
      resize.disconnect();
    };
  }, []);

  /* A site can be off limits for two reasons: the owner told us up front that
     it refuses framing (canPreview: false — Vercel's deployment protection
     answers with a sign-in page whose CSP forbids it), or the load failed on
     its own. Either way the domain panel stands in, rather than the blank
     white box a blocked frame leaves behind — the block is enforced by the
     browser, so no error ever reaches the iframe for us to catch. */
  if (!canPreview || failed) {
    return (
      <span className="pf-web-fallback" ref={holderRef}>
        {domain}
      </span>
    );
  }

  return (
    <span className="pf-web-frame" ref={holderRef}>
      {visible && (
        <iframe
          src={url}
          title={`${title} live preview`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin"
          onError={() => setFailed(true)}
          style={{
            width: `${FRAME_WIDTH}px`,
            height: `${FRAME_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left'
          }}
        />
      )}
      {!visible && <span className="pf-web-fallback">{domain}</span>}
    </span>
  );
}
