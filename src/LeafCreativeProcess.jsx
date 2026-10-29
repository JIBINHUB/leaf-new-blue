import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './LeafCreativeProcess.css';

const stages = [
  { label: '01', title: 'Find your direction', detail: 'We bring your goals, audience and ideas into focus before the first pixel is designed.', tags: ['Strategy', 'Audience', 'Brand story'], bars: [94, 72, 55] },
  { label: '02', title: 'Design a distinct identity', detail: 'A thoughtful visual identity and intuitive interface give your brand a clear, memorable voice.', tags: ['Brand identity', 'UI / UX', 'Creative direction'], bars: [86, 76, 60] },
  { label: '03', title: 'Build for real people', detail: 'We turn that direction into responsive websites and digital experiences designed to grow with you.', tags: ['Web development', 'Mobile', 'Performance'], bars: [90, 70, 48] },
  { label: '04', title: 'Launch with impact', detail: 'Campaigns, content and launch support bring the work together across every touchpoint.', tags: ['Campaigns', 'Content', 'Launch'], bars: [95, 66, 52] },
];

export default function LeafCreativeProcess({ navigateTo }) {
  const [active, setActive] = useState(0);
  const stageRef = useRef(null);
  useEffect(() => {
    const section = stageRef.current;
    if (!section) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      if (reduced.matches) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / distance));
      section.style.setProperty('--process-progress', progress.toFixed(4));
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        setActive(Math.min(stages.length - 1, Math.floor(progress * stages.length)));
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reduced.addEventListener('change', schedule);
    return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); reduced.removeEventListener('change', schedule); if (frame) cancelAnimationFrame(frame); };
  }, []);
  const stage = stages[active];
  return <section className="leaf-process" id="leaf-approach" aria-labelledby="leaf-process-title">
    <div className="dt-container">
      <div className="leaf-process-intro">
        <span className="dt-eyebrow">FROM FIRST THOUGHT TO LAUNCH</span>
        <h2 id="leaf-process-title">Make ideas <em>move</em><br />your business forward.</h2>
        <p>Strategy, design and technology come together to build brands and digital experiences people remember.</p>
        <div className="leaf-orbit-actions"><button type="button" className="dt-blue-button" onClick={() => navigateTo('workspace')}>Start a project</button><button type="button" className="dt-secondary" onClick={() => navigateTo('services')}>Explore services <ArrowUpRight size={15}/></button></div>
      </div>
      <div className="leaf-process-scroll" ref={stageRef}>
      <div className="leaf-process-stage">
        <div className="leaf-process-globe">
          <div className="leaf-process-globe-art" aria-hidden="true"><div className="leaf-process-orbit leaf-process-orbit-one"/><div className="leaf-process-orbit leaf-process-orbit-two"/><div className="leaf-process-sphere"><i/><i/><i/><i/><i/><i/><b/><b/><b/></div><span className="leaf-process-traveller"/></div>
          <div className="leaf-process-points" aria-label="Choose a creative stage">{stages.map((item,i)=><button type="button" key={item.label} className={`leaf-process-point leaf-process-point-${i}${active===i?' is-active':''}`} aria-label={`${item.label}: ${item.title}`} aria-pressed={active===i} onClick={()=>setActive(i)}><span>{item.label}</span></button>)}</div>
        </div>
        <div className="leaf-process-right">
          <div className="leaf-process-panels" aria-hidden="true"><div className="leaf-process-brief"><span>THE LEAF APPROACH</span><p>From <b>ideas</b> to <b>impact</b>, every detail has a purpose.</p><small>Strategy · Design · Development</small></div><div className="leaf-process-chart" key={stage.label}>{stage.tags.map((tag,i)=><div key={tag} style={{'--bar':`${stage.bars[i]}%`}}><span>{tag}</span></div>)}</div></div>
          <div className="leaf-process-details" key={stage.label} aria-live="polite"><h3><span>{stage.label}</span> {stage.title}</h3><p>{stage.detail}</p><button type="button" onClick={() => navigateTo('services')}>Explore our services <ArrowUpRight size={15}/></button></div>
          <div className="leaf-process-tabs" aria-label="Creative process stages">{stages.map((item,i)=><button key={item.label} type="button" onClick={() => setActive(i)} aria-pressed={active===i} className={active===i?'active':''}><span>{item.label}</span>{item.title}</button>)}</div>
        </div>
      </div>
      </div>
    </div>
  </section>;
}
