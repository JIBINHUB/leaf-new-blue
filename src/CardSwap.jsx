/**
 * CardSwap — a stack of cards that cycles one at a time.
 *
 * Component supplied by the project owner. Kept as provided apart from this
 * header and two changes, both marked inline:
 *
 *   1. the swap interval only runs while the stack is on screen and the tab is
 *      visible. As supplied it ran forever from mount, which in this
 *      single-page app means a timer firing behind every other route.
 *   2. pauseOnHover no longer leaks an interval when the component unmounts
 *      mid-hover.
 *
 * Its stylesheet is authored locally in CardSwap.css, which the supplied
 * snippet does not include.
 */

import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import './CardSwap.css';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    /* Added: the cycle only runs while the stack is actually on screen and the
       tab is in the foreground. Upstream started it on mount and never stopped,
       so in this single-page app a timeline kept firing behind every other
       route the visitor moved to. */
    const node = container.current;
    let running = false;

    const start = () => {
      if (running) return;
      running = true;
      swap();
      intervalRef.current = window.setInterval(swap, delay);
    };

    const stop = () => {
      running = false;
      tlRef.current?.pause();
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    };

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting && !document.hidden ? start() : stop()),
      { threshold: 0.15 }
    );
    if (node) observer.observe(node);

    const onVisibility = () => {
      if (document.hidden) stop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const pause = () => {
      tlRef.current?.pause();
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    };
    const resume = () => {
      tlRef.current?.play();
      if (running && !intervalRef.current) intervalRef.current = window.setInterval(swap, delay);
    };

    if (pauseOnHover && node) {
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
    }

    /* One cleanup path for every case. The supplied version returned early
       when pauseOnHover was set, so its listeners and interval could outlive
       the component. */
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      if (pauseOnHover && node) {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
      }
      tlRef.current?.kill();
      clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        })
      : child
  );

  return (
    <div ref={container} className="card-swap-container" style={{ width, height }}>
      {rendered}
    </div>
  );
};

export default CardSwap;
