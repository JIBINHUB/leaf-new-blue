/**
 * Scroll reveals for the home page.
 *
 * Applied by observing existing nodes and toggling a class, rather than
 * wrapping sections in extra <div>s — several of these are grid or flex
 * children, and an added wrapper would break their layout.
 */

import { useEffect } from 'react';

const REVEAL_TARGETS = [
  '.home-about-section',
  '.c1-svc-card',
  '.heads-card',
  '.home-faq-item',
  '.home-contact-section',
  '.ig-statement',
  '.ig-band'
];

export function useSectionReveals(active) {
  useEffect(() => {
    if (!active || typeof window === 'undefined') return;

    const nodes = document.querySelectorAll(REVEAL_TARGETS.join(','));
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('ig-reveal', 'is-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 }
    );

    nodes.forEach((node, index) => {
      node.classList.add('ig-reveal');
      node.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      observer.observe(node);
    });

    /* Failsafe: the reveal starts elements at opacity 0, so anything the
       observer fails to report would stay invisible permanently. Observers can
       miss elements under fast scrolling. Content visibility never depends on
       the observer firing — only the animation does. */
    const sweep = () => {
      document.querySelectorAll('.ig-reveal:not(.is-in)').forEach((node) => {
        if (node.getBoundingClientRect().top < window.innerHeight * 1.25) {
          node.classList.add('is-in');
          observer.unobserve(node);
        }
      });
      if (!document.querySelector('.ig-reveal:not(.is-in)')) window.clearInterval(timer);
    };

    const timer = window.setInterval(sweep, 1200);
    window.addEventListener('scroll', sweep, { passive: true });

    return () => {
      observer.disconnect();
      window.clearInterval(timer);
      window.removeEventListener('scroll', sweep);
    };
  }, [active]);
}
