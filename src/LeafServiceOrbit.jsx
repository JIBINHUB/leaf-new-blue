import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './LeafServiceOrbit.css';

export default function LeafServiceOrbit({ serviceCategories, serviceTaglines, navigateTo, openServiceModal }) {
  const [selected, setSelected] = useState(serviceCategories[0]?.id);
  const active = serviceCategories.find(service => service.id === selected);

  return <section className="leaf-service-orbit leaf-service-feature" aria-labelledby="leaf-service-orbit-title">
    <div className="leaf-service-feature-visual" aria-hidden="true" />
    <div className="leaf-service-feature-inner">
      <div className="leaf-service-feature-intro">
        <h2 id="leaf-service-orbit-title">BRING IDEAS TO LIFE <span>together.</span></h2>
        <p>From branding and digital experiences to campaigns and launch, our services come together around your idea.</p>
        <div className="leaf-service-feature-actions">
          <button type="button" className="dt-blue-button" onClick={() => navigateTo('workspace')}>Start a project <ArrowUpRight size={16} /></button>
          <button type="button" className="dt-secondary" onClick={() => navigateTo('services')}>Explore services <ArrowUpRight size={16} /></button>
        </div>
      </div>
      <div className="leaf-service-feature-panel">
        <div className="leaf-service-feature-panel-head"><span>WHAT WE DO</span><span>EXPLORE OUR SERVICES <ArrowRight size={14} /></span></div>
        <div className="leaf-service-feature-options" aria-label="Explore our services">
          {serviceCategories.map((service, index) => <button key={service.id} type="button" className={selected === service.id ? 'is-active' : ''} aria-pressed={selected === service.id} onClick={() => setSelected(service.id)}><span className="leaf-service-feature-icon" data-form={index} aria-hidden="true" /><span className="leaf-service-feature-name">{service.name}</span></button>)}
        </div>
        {active && <div className="leaf-service-feature-detail" aria-live="polite">
          <div><h3>{active.name}</h3><p>{serviceTaglines[active.id]}</p></div>
          <button type="button" onClick={() => openServiceModal(active.id)} aria-label={`View ${active.name} details`}><ArrowUpRight size={21} /></button>
        </div>}
      </div>
      <div className="leaf-service-feature-footer"><span>STRATEGY · DESIGN · DEVELOPMENT</span><span>MADE FOR WHAT’S NEXT <ArrowUpRight size={14} /></span></div>
    </div>
  </section>;
}
