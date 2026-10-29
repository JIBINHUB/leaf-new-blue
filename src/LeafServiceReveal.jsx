import React, { useEffect, useRef, useState } from 'react';
import './LeafServiceReveal.css';

export default function LeafServiceReveal({ serviceCategories, openServiceModal }) {
  const section = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => { frame = 0; if (!section.current) return; const rect = section.current.getBoundingClientRect(); setProgress(reduced.matches ? 1 : Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - window.innerHeight)))); };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); window.addEventListener('scroll', schedule, { passive:true }); window.addEventListener('resize', schedule); reduced.addEventListener('change', schedule);
    return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); reduced.removeEventListener('change', schedule); if (frame) cancelAnimationFrame(frame); };
  }, []);
  const rawReveal = Math.min(1, Math.max(0, (progress - .08) / .62));
  const reveal = rawReveal * rawReveal * (3 - 2 * rawReveal);
  const icon = (service, i, interactive = true) => { const Icon = service.icon; const className = `leaf-reveal-icon leaf-reveal-color-${i % 4}`; const content = <Icon size={28} strokeWidth={1.7} aria-hidden="true"/>; return interactive ? <button type="button" className={className} key={service.id} style={{'--icon-index':i}} tabIndex={reveal > .5 ? 0 : -1} aria-label={`Explore ${service.name}`} onClick={() => openServiceModal(service.id)}>{content}</button> : <span className={className} key={service.id} style={{'--icon-index':i}}>{content}</span>; };
  return <section className="leaf-reveal" ref={section} aria-labelledby="leaf-reveal-title" style={{'--reveal':reveal}}><div className="leaf-reveal-sticky">
    <div className="leaf-reveal-halo leaf-reveal-halo-one" aria-hidden="true"/><div className="leaf-reveal-halo leaf-reveal-halo-two" aria-hidden="true"/>
    <p className="leaf-reveal-intro">Start with style. Not a blank canvas.</p>
    <div className="leaf-reveal-initial" aria-hidden={reveal > .5}>{serviceCategories.map((service,i)=>icon(service,i,false))}</div>
    <h2 id="leaf-reveal-title" className="leaf-reveal-statement"><span>Leaf brings {icon(serviceCategories[0],0)} UI/UX, {icon(serviceCategories[1],1)} web,</span><span>{icon(serviceCategories[2],2)} AI ads, {icon(serviceCategories[3],3)} advertising,</span><span>{icon(serviceCategories[4],4)} branding, {icon(serviceCategories[5],5)} apps,</span><span>{icon(serviceCategories[6],6)} no-code and {icon(serviceCategories[7],7)} Shopify</span><span>together for your brand.</span></h2>
    <p className="leaf-reveal-hint">Select an icon to explore a service</p>
  </div></section>;
}
