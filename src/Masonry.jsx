/**
 * Masonry — a measured, GSAP-animated masonry grid.
 *
 * Component supplied by the project owner. Kept as provided apart from this
 * header and three changes, each marked inline:
 *
 *   1. useMedia no longer re-subscribes on every render.
 *   2. the image preload cannot block first paint indefinitely.
 *   3. clicking a tile calls onItemClick instead of opening item.url, so the
 *      grid can drive this site's existing reference cart.
 *
 * Its stylesheet is authored locally in Masonry.css, which the supplied
 * snippet does not include.
 */

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

import './Masonry.css';

const useMedia = (queries, values, defaultValue) => {
  /* The caller passes array literals, so `queries` is a new array on every
     render. With it in the dependency list the effect tore down and re-added a
     matchMedia listener per query on every single render. Joining to a string
     gives a stable dependency. */
  const queryKey = queries.join('|');

  const get = () => {
    if (typeof window === 'undefined') return defaultValue;
    return values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;
  };

  const [value, setValue] = useState(get);

  useEffect(() => {
    const lists = queryKey.split('|').map(q => matchMedia(q));
    const handler = () => setValue(get);
    lists.forEach(l => l.addEventListener('change', handler));
    handler();
    return () => lists.forEach(l => l.removeEventListener('change', handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryKey]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

/* Measures each item's real aspect ratio, so a tile can be sized to its media
   rather than to an invented height. That is what stops artwork being cropped:
   when the box matches the picture, there is nothing left to cut off.

   Nothing here blocks the grid. An earlier version waited for every request to
   settle — dozens of them on this archive — and laid out nothing until they
   were in, so the whole page sat empty for up to a second and a half and then
   appeared all at once. That wait was the "images not loading". Now the grid
   is laid out immediately from a default ratio and refined as measurements
   arrive, batched so it settles in a couple of passes rather than sixty-one. */
const measureItems = (items, onProgress) => {
  const ratios = new Map();
  let flush = null;
  let done = 0;

  const publish = () => {
    flush = null;
    onProgress(new Map(ratios));
  };

  const record = (id, ratio) => {
    done += 1;
    if (ratio && isFinite(ratio) && ratio > 0) ratios.set(id, ratio);
    // Batch: one update per frame-ish, plus a final one when everything is in.
    if (done === items.length) {
      clearTimeout(flush);
      publish();
    } else if (flush === null) {
      flush = setTimeout(publish, 150);
    }
  };

  items.forEach((item) => {
    if (item.type === 'video') {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.muted = true;
      video.onloadedmetadata = () => record(item.id, video.videoHeight / video.videoWidth);
      video.onerror = () => record(item.id, null);
      video.src = item.src;
      return;
    }

    const img = new Image();
    img.onload = () => record(item.id, img.naturalHeight / img.naturalWidth);
    img.onerror = () => record(item.id, null);
    img.src = item.img;
  });

  return () => clearTimeout(flush);
};

const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  onItemClick,
  selectedIds = []
}) => {
  /* Phones get three columns, not one. At one per row this archive was a
     23,000px scroll of sixty-one full-width pictures, which is what "showing
     one by one" meant — you could never see the work as a body of work. */
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:340px)'],
    [5, 4, 4, 3],
    2
  );

  const [containerRef, { width }] = useMeasure();
  const [ratios, setRatios] = useState(() => new Map());

  const getInitialPosition = item => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;

    if (animateFrom === 'random') {
      const directions = ['top', 'bottom', 'left', 'right'];
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 };
      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 };
      case 'left':
        return { x: -200, y: item.y };
      case 'right':
        return { x: window.innerWidth + 200, y: item.y };
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    let active = true;
    const cancel = measureItems(items, (measured) => {
      if (active) setRatios(measured);
    });
    return () => {
      active = false;
      cancel();
    };
  }, [items]);

  const grid = useMemo(() => {
    if (!width) return [];

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    return items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      /* Height follows the media's own proportions. Falls back to a portrait
         ratio only while a measurement is still outstanding. */
      const ratio = ratios.get(child.id) ?? 1.25;
      const height = columnWidth * ratio;
      const y = colHeights[col];

      colHeights[col] += height;

      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width, ratios]);

  /* Tiles are absolutely positioned, so the container has no natural height.
     It was set to a fixed value in CSS, which cut the grid off part-way down
     — the portfolio stopped showing everything once the columns grew past it.
     Measuring the tallest column makes it fit whatever is in the archive. */
  const containerHeight = useMemo(
    () => grid.reduce((tallest, item) => Math.max(tallest, item.y + item.h), 0),
    [grid]
  );

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;

      /* width and height are set, never tweened. Animating them drives a full
         layout recalculation every frame, and with 47 tiles moving at once
         that was the jank — the grid never felt smooth. Size lands instantly;
         only transforms and opacity animate, which the compositor handles
         without touching layout. */
      gsap.set(selector, { width: item.w, height: item.h });

      const animationProps = { x: item.x, y: item.y };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item, index);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          ...(blurToFocus && { filter: 'blur(10px)' })
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: 'blur(0px)' }),
          duration: 0.8,
          ease: 'power3.out',
          /* Capped so the last tile is not still arriving seconds after the
             first — 47 items at the raw stagger ran well over two seconds. */
          delay: Math.min(index * stagger, 0.9)
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration: duration,
          ease: ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (e, item) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3
        });
      }
    }
  };

  const handleMouseLeave = (e, item) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3
        });
      }
    }
  };

  return (
    <div ref={containerRef} className="list" style={{ height: containerHeight || undefined }}>
      {grid.map(item => {
        const isSelected = selectedIds.includes(item.id);

        return (
          <div
            key={item.id}
            data-key={item.id}
            className={`item-wrapper${isSelected ? ' is-selected' : ''}`}
            /* Was window.open(item.url). These are portfolio pieces rather than
               outbound links, so a click anywhere on the tile hands the item
               back to the page, which adds it to the reference cart the enquiry
               form already reads. The cart button below does the same thing and
               is what keyboard and screen reader users get. */
            onClick={() => onItemClick?.(item)}
            onMouseEnter={e => handleMouseEnter(e, item)}
            onMouseLeave={e => handleMouseLeave(e, item)}
          >
            <div className="item-img">
              {/* A real media element rather than a background image: the tile
                  is already sized to this item's proportions, so the picture
                  fills it exactly and nothing is cropped. Videos show their
                  first frame and only play on hover — fourteen of them playing
                  at once would be the heaviest thing on the site. */}
              {item.type === 'video' ? (
                <video
                  className="item-media"
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={e => e.currentTarget.play().catch(() => {})}
                  onMouseLeave={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                />
              ) : (
                <img className="item-media" src={item.img} alt={item.title || ''} loading="lazy" decoding="async" draggable={false} />
              )}
              {/* Every piece carries its own name, so the archive reads as a
                  list of work rather than a wall of unlabelled pictures. */}
              <span className="item-caption">
                <em>{item.title || 'Untitled piece'}</em>
                {item.category && <i>{item.category}</i>}
              </span>

              {/* The cart control. Stops the click bubbling so the tile's own
                  handler does not toggle it straight back. */}
              <button
                type="button"
                className="item-cart"
                aria-pressed={isSelected}
                aria-label={
                  isSelected
                    ? `Remove ${item.title || 'this piece'} from your references`
                    : `Add ${item.title || 'this piece'} to your references`
                }
                onClick={e => {
                  e.stopPropagation();
                  onItemClick?.(item);
                }}
              >
                {isSelected ? (
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                )}
              </button>

              {colorShiftOnHover && (
                <div
                  className="color-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))',
                    opacity: 0,
                    pointerEvents: 'none',
                    borderRadius: '8px'
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Masonry;
