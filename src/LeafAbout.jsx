import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Lightbulb, Link2, Send } from 'lucide-react';
import './LeafAbout.css';

export default function LeafAbout({ navigateTo }) {
  const section = useRef(null);
  useEffect(() => {
    const element = section.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    element.classList.add('leaf-about-ready');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.add('leaf-about-visible'); observer.disconnect(); }
    }, { threshold: .15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="leaf-about" ref={section} aria-labelledby="leaf-about-title">
      <div className="leaf-about-orbit leaf-about-orbit-one" aria-hidden="true" />
      <div className="leaf-about-orbit leaf-about-orbit-two" aria-hidden="true" />
      <div className="leaf-about-inner dt-container">
        <div className="leaf-about-topline">
          <span>ABOUT LEAF CREATIONISM</span>
          <span>INDEPENDENT CREATIVE STUDIO · KERALA, INDIA</span>
        </div>
        <div className="leaf-about-main">
          <div className="leaf-about-copy">
            <p className="leaf-about-overline"><span /> THE STUDIO BEHIND THE IDEAS</p>
            <h2 id="leaf-about-title">Good ideas are everywhere.<br /><em>Distinctive ones are made.</em></h2>
            <p className="leaf-about-lede">We turn the spark in your head into a brand people feel, a digital experience people enjoy, and a story people remember.</p>
            <div className="leaf-about-actions">
              <button type="button" className="leaf-about-primary" onClick={() => navigateTo('workspace')}>Bring us your idea <ArrowUpRight size={18} aria-hidden="true" /></button>
              <button type="button" className="leaf-about-secondary" onClick={() => navigateTo('portfolio')}>See what we make <ArrowUpRight size={17} aria-hidden="true" /></button>
            </div>
          </div>
          <div className="leaf-about-art" aria-hidden="true">
            <div className="leaf-about-glow" />
            <img src="/assets/leaf-cloud-3d.png" alt="" loading="lazy" />
            <span className="leaf-about-glass-note leaf-about-note-one"><Lightbulb size={16} /> IDEAS WITH ENERGY</span>
            <span className="leaf-about-glass-note leaf-about-note-two"><Link2 size={16} /> MADE TO CONNECT</span>
          </div>
        </div>
        <div className="leaf-about-footer">
          <p><strong>One studio. Every part of the picture.</strong> Strategy, branding, design, development and campaigns come together around your ambition.</p>
          <button type="button" onClick={() => navigateTo('services')}>Explore our services <ArrowUpRight size={19} aria-hidden="true" /></button>
          <span className="leaf-about-footer-mark"><Send size={17} aria-hidden="true" /> FROM FIRST THOUGHT TO FIRST IMPRESSION</span>
        </div>
      </div>
    </section>
  );
}
