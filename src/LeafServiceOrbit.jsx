import React, { useState } from 'react';
import { ArrowUpRight, Layers, Plus } from 'lucide-react';
import './LeafServiceOrbit.css';

const positions = [
  { x: 17, y: 26 }, { x: 38, y: 13 }, { x: 69, y: 14 }, { x: 89, y: 29 },
  { x: 85, y: 68 }, { x: 67, y: 84 }, { x: 36, y: 84 }, { x: 13, y: 63 },
];
const rings = [
  'M 95 240 C 180 60 520 15 690 95 C 855 173 770 300 550 340 C 310 385 0 345 95 240 Z',
  'M 65 235 C 135 135 400 80 600 80 C 805 80 890 190 755 270 C 620 350 250 365 105 300 C 75 285 45 260 65 235 Z',
  'M 140 285 C 190 155 475 15 670 85 C 855 150 765 265 575 315 C 370 370 85 380 140 285 Z',
];

export default function LeafServiceOrbit({ serviceCategories, serviceTaglines, navigateTo, openServiceModal }) {
  const [selected, setSelected] = useState(null);
  return <section className="leaf-service-orbit" aria-labelledby="leaf-service-orbit-title">
    <div className="leaf-service-orbit-heading">
      <span className="dt-eyebrow">THE LEAF APPROACH / OUR SERVICES</span>
      <h2 id="leaf-service-orbit-title">Bring ideas <span className="leaf-orbit-inline"><Layers aria-hidden="true" /></span> to life<br /><em>together.</em></h2>
      <p>From branding and digital experiences to campaigns and launch, our services come together around your idea.</p>
      <div className="leaf-orbit-actions"><button type="button" className="dt-blue-button" onClick={() => navigateTo('workspace')}>Start a project</button><button type="button" className="dt-secondary" onClick={() => navigateTo('services')}>Explore services <ArrowUpRight size={15} /></button></div>
    </div>
    <div className="leaf-orbit-stage">
      <svg className="leaf-orbit-lines" viewBox="0 0 900 420" aria-hidden="true">
        {rings.map((path, i) => <g key={path}><path d={path} className="leaf-orbit-ring" /><circle r="3" className="leaf-orbit-dot"><animateMotion dur={`${15 + i * 4}s`} repeatCount="indefinite" path={path}/></circle><circle r="2" className="leaf-orbit-dot is-dim"><animateMotion dur={`${20 + i * 5}s`} begin={`-${i * 4 + 6}s`} repeatCount="indefinite" path={path}/></circle></g>)}
      </svg>
      <div className="leaf-orbit-core" role="img" aria-label="Leaf Creationism logo"><img src="/assets/brand/leaf-glass-orbit.png" alt="" /></div>
      <div className="leaf-orbit-service-labels" aria-label="Explore our services">{serviceCategories.map((service, index) => <button key={service.id} type="button" className={`leaf-orbit-label${selected === service.id ? ' is-selected' : ''}`} style={{ '--label-x': `${positions[index].x}%`, '--label-y': `${positions[index].y}%` }} aria-pressed={selected === service.id} onClick={() => setSelected(selected === service.id ? null : service.id)}>{service.name}<Plus size={13}/></button>)}</div>
    </div>
    <div className="leaf-orbit-detail" aria-live="polite">{selected ? <><div><span className="dt-eyebrow">SELECTED SERVICE</span><h3>{serviceCategories.find(s => s.id === selected)?.name}</h3><p>{serviceTaglines[selected]}</p></div><button type="button" className="dt-secondary" onClick={() => openServiceModal(selected)}>View service details <ArrowUpRight size={15}/></button></> : <p>Select a service to learn more <span>↗</span></p>}</div>
  </section>;
}
