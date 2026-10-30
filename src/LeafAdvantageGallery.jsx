import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './LeafAdvantageGallery.css';

const NOTES = [
  ['Strategy & campaigns', 'A clear idea, brought to life with a story worth sharing.'],
  ['Digital design', 'Interfaces that bring clarity, character, and a little delight.'],
  ['Creative direction', 'A distinctive visual world, made around the product.'],
  ['Product experience', 'Thoughtful screens that make everyday interactions feel effortless.'],
  ['Brand identity', 'A consistent visual language, from the first impression onward.'],
  ['Identity systems', 'Simple, memorable marks with room for a brand to grow.'],
  ['AI & advertising', 'Fresh creative possibilities for campaigns with character.'],
  ['Fashion & lifestyle', 'Art direction that turns a product into a point of view.'],
  ['Product advertising', 'Images and ideas that make the details worth noticing.'],
  ['Brand systems', 'A connected identity for a brand’s next chapter.'],
  ['Product visualisation', 'Ideas made tangible through considered images and composition.'],
  ['Product storytelling', 'The right light, angle, and story for a standout product.'],
  ['Campaign direction', 'A complete creative mood, from the concept to the final frame.'],
  ['Mobile experiences', 'Clear, friendly digital experiences built around real people.']
];
const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));

export default function LeafAdvantageGallery({ items }) {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const buttonRefs = useRef([]);
  const offsetRef = useRef(0);
  const centerRef = useRef(3);
  const redrawRef = useRef(() => {});
  const [activeIndex, setActiveIndex] = useState(null);
  const selectedRef = useRef(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];
  const activeNote = activeIndex === null ? null : [activeItem.category || NOTES[activeIndex % NOTES.length][0], activeItem.description || NOTES[activeIndex % NOTES.length][1]];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const draw = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const mobile = rect.width <= 640;
      const height = section.firstElementChild.offsetHeight;
      const progress = clamp(-rect.top / Math.max(1, rect.height - height));
      const visibleCount = mobile ? 5 : 7;
      const start = (visibleCount - 1) / 2;
      const center = clamp(start + progress * Math.max(0, items.length - visibleCount) + offsetRef.current, 0, items.length - 1);
      centerRef.current = center;
      const radius = rect.width * (mobile ? 0.76 : 0.59);
      const step = mobile ? 28 : 18;
      const cardWidth = cardRefs.current[0]?.offsetWidth || 164;
      const entrance = (1 - clamp((height - rect.top) / height)) * 95;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        if (reduced.matches) {
          card.style.transform = 'none';
          card.style.visibility = 'visible';
          card.style.opacity = '1';
          card.removeAttribute('aria-hidden');
          buttonRefs.current[index].tabIndex = 0;
          return;
        }
        const angle = (index - center) * step;
        const radians = angle * Math.PI / 180;
        const x = rect.width / 2 + Math.sin(radians) * radius - cardWidth / 2;
        const y = height * (mobile ? 0.60 : 0.64) + radius * (1 - Math.cos(radians)) - cardWidth / 2 + entrance;
        const visible = Math.abs(angle) < 78 && x + cardWidth > 0 && x < rect.width && y < height;
        card.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0) rotate(${(angle * 0.78).toFixed(2)}deg)`;
        card.style.zIndex = `${Math.round(100 - Math.abs(angle))}`;
        card.style.visibility = visible ? 'visible' : 'hidden';
        card.style.opacity = visible ? '1' : '0';
        card.setAttribute('aria-hidden', visible ? 'false' : 'true');
        buttonRefs.current[index].tabIndex = visible ? 0 : -1;
      });
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(draw); };
    redrawRef.current = draw;
    draw();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reduced.addEventListener('change', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reduced.removeEventListener('change', schedule);
      redrawRef.current = () => {};
    };
  }, [items]);

  const move = (direction) => {
    const target = clamp(centerRef.current + direction, 0, items.length - 1);
    offsetRef.current += target - centerRef.current;
    selectedRef.current = null;
    setActiveIndex(null);
    redrawRef.current();
  };

  const handleKey = (event, index) => {
    if (event.key === 'Escape') { selectedRef.current = null; setActiveIndex(null); return; }
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    const target = clamp(index + (event.key === 'ArrowRight' ? 1 : -1), 0, items.length - 1);
    offsetRef.current += target - centerRef.current;
    redrawRef.current();
    buttonRefs.current[target]?.focus({ preventScroll: true });
  };

  return (
    <section ref={sectionRef} className="leaf-advantage-arc" id="leaf-advantage" aria-labelledby="leaf-arc-title">
      <div className="leaf-arc-sticky">
        <header className="leaf-arc-heading">
          <span>SELECTED POSTERS</span>
          <h2 id="leaf-arc-title">Ideas made<br />to be noticed.</h2>
          <p>A selection of posters and campaigns from the Leaf studio.</p>
        </header>

        <div id="leaf-arc-detail" className={`leaf-arc-detail${activeItem ? ' is-active' : ''}`} aria-live="polite" aria-hidden={!activeItem}>
          {activeItem && <div key={activeIndex}><span>{activeNote[0]}</span><h3>{activeItem.alt}</h3><p>{activeNote[1]}</p></div>}
        </div>

        <ul className="leaf-arc-projects" aria-label="Leaf poster gallery">
          {items.map((item, index) => (
            <li key={item.src} ref={(node) => { cardRefs.current[index] = node; }} className="leaf-arc-card">
              <button
                ref={(node) => { buttonRefs.current[index] = node; }}
                type="button"
                className={`leaf-arc-project${activeIndex === index ? ' is-active' : ''}`}
                aria-label={`${item.alt}. Show project details`}
                aria-expanded={activeIndex === index}
                aria-controls="leaf-arc-detail"
                onPointerEnter={(event) => { if (event.pointerType === 'mouse') setActiveIndex(index); }}
                onPointerLeave={(event) => { if (event.pointerType === 'mouse') setActiveIndex(selectedRef.current); }}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(selectedRef.current)}
                onClick={() => { selectedRef.current = index; setActiveIndex(index); }}
                onKeyDown={(event) => handleKey(event, index)}
              >
                <span className="leaf-arc-project-image"><img src={item.src} alt="" loading="lazy" decoding="async" /></span>
              </button>
            </li>
          ))}
        </ul>

        <div className="leaf-arc-footer">
          <button type="button" onClick={() => move(-1)} aria-label="Previous posters"><ArrowLeft size={17} /></button>
          <p><span className="leaf-arc-desktop-hint">Hover</span><span className="leaf-arc-touch-hint">Tap a poster</span> to reveal more information</p>
          <button type="button" onClick={() => move(1)} aria-label="Next posters"><ArrowRight size={17} /></button>
        </div>
      </div>
    </section>
  );
}
