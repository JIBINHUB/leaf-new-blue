/**
 * BeforeAfterVideo — two takes of the same shot, split by a handle you drag.
 *
 * Both clips run in the same box: the finished one underneath, the rough one
 * on top clipped to the left of the handle. Dragging the handle moves the clip
 * edge, so the same frame is seen twice at once.
 *
 * Three things it is careful about, all learned on this site:
 *
 *   - the pair only play while the section is on screen and the tab is in the
 *     foreground. Two videos decoding behind every other route is exactly the
 *     kind of cost a cheap phone cannot absorb.
 *   - they are kept in step. Two <video> elements started together still
 *     drift, and a before/after that is half a second out of sync is worse
 *     than no before/after at all.
 *   - it is a real slider for the keyboard, not a mouse-only toy.
 */

import { useCallback, useEffect, useRef, useState } from 'react';

import LeafMark from './LeafMark';
import './BeforeAfterVideo.css';

const DRIFT_TOLERANCE = 0.12;

export default function BeforeAfterVideo({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
  start = 50
}) {
  const shellRef = useRef(null);
  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(start);

  /* --- Play only where it can be seen ------------------------------------ */
  useEffect(() => {
    const shell = shellRef.current;
    const before = beforeRef.current;
    const after = afterRef.current;
    if (!shell || !before || !after) return undefined;

    const play = () => {
      if (document.hidden) return;
      before.play().catch(() => {});
      after.play().catch(() => {});
    };
    const pause = () => {
      before.pause();
      after.pause();
    };

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? play() : pause()),
      { threshold: 0.25 }
    );
    observer.observe(shell);

    const onVisibility = () => (document.hidden ? pause() : undefined);
    document.addEventListener('visibilitychange', onVisibility);

    /* The two clips are a few frames apart in length, so rather than trust
       them to stay together, the finished one is the clock and the rough one
       is nudged back whenever it drifts past a frame or two. */
    const sync = () => {
      if (Math.abs(before.currentTime - after.currentTime) > DRIFT_TOLERANCE) {
        before.currentTime = after.currentTime;
      }
    };
    after.addEventListener('timeupdate', sync);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      after.removeEventListener('timeupdate', sync);
      pause();
    };
  }, []);

  /* --- The handle -------------------------------------------------------- */
  const moveTo = useCallback((clientX) => {
    const shell = shellRef.current;
    if (!shell) return;
    const rect = shell.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (event) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    moveTo(event.clientX);
  };

  const onPointerMove = (event) => {
    if (!draggingRef.current) return;
    moveTo(event.clientX);
  };

  const endDrag = (event) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const onKeyDown = (event) => {
    const step = event.shiftKey ? 10 : 4;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setPosition((p) => Math.max(0, p - step));
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      setPosition((p) => Math.min(100, p + step));
    }
  };

  return (
    <div
      className="ba-shell"
      ref={shellRef}
      style={{ '--ba-pos': `${position}%` }}
      /* touch-action stays default: a vertical swipe here is a page scroll,
         and only a sideways drag moves the handle. */
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <video
        className="ba-video ba-after"
        ref={afterRef}
        src={afterSrc}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={afterLabel}
      />

      <div className="ba-before-layer">
        <video
          className="ba-video ba-before"
          ref={beforeRef}
          src={beforeSrc}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={beforeLabel}
        />
      </div>

      <span className="ba-tag ba-tag-before">{beforeLabel}</span>
      <span className="ba-tag ba-tag-after">{afterLabel}</span>

      <div
        className="ba-handle"
        role="slider"
        tabIndex={0}
        aria-label={`Reveal ${beforeLabel} or ${afterLabel}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)}% ${beforeLabel}`}
        onKeyDown={onKeyDown}
      >
        {/* The studio's own mark rather than a pair of chevrons — it is the
            one thing on this section that carries the brand. */}
        <span className="ba-grip" aria-hidden="true">
          <LeafMark size={20} />
        </span>
      </div>
    </div>
  );
}
