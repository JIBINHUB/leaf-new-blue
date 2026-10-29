import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './LeafFeaturedWork.css';

export default function LeafFeaturedWork({ items, navigateTo }) {
  const previews = { 'ORU CODE': 'orucode', 'Mallugrapher UK': 'mallugrapher', 'NAINU Boutique': 'nainu', 'UNIQ Floors': 'uniq', 'COVEO': 'coveo', 'Vero Studio': 'vero', 'Friends Tax Point': 'friends', 'ClearTax': 'cleartax', 'Rae': 'rae', 'UNDERNEAT': 'underneat', 'Leaf Creationism': 'leaf' };
  const previewFor = item => {
    const featured = { 'Vero Studio': 'vero-desktop.jpg', 'Rae': 'rae-desktop.jpg', 'COVEO': 'coveo-mobile.jpg' };
    return featured[item.name] ? `/assets/portfolio/websites/${featured[item.name]}` : previews[item.name] ? `/assets/portfolio/websites/${previews[item.name]}-mobile-hero.png` : item.image;
  };

  return <section className="leaf-featured" aria-labelledby="leaf-featured-title">
    <div className="dt-container leaf-featured-layout">
      <div className="leaf-featured-heading">
        <span className="dt-eyebrow">WEBSITE PROJECTS / LEAF CREATIONISM</span>
        <h2 id="leaf-featured-title">Work made<br/><em>to move.</em></h2>
        <p>A closer look at the websites and digital experiences we have built.</p>
        <button type="button" onClick={() => navigateTo('portfolio')}>All work <ArrowUpRight size={16}/></button>
        <span className="leaf-featured-count">{String(items.length).padStart(2, '0')} PROJECTS</span>
      </div>
      <div className="leaf-featured-grid">
        {items.map((item, index) => <a className="leaf-featured-card" key={`${item.url}-${index}`} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name} website`}>
          <span className="leaf-featured-media">{previewFor(item) ? <img src={previewFor(item)} alt="" loading="lazy" className={item.name === 'Vero Studio' ? 'is-vero' : item.name === 'Rae' ? 'is-rae' : undefined} /> : <span className="leaf-featured-placeholder"><small>WEBSITE PROJECT</small><strong>{item.name}</strong><span>{item.url.replace(/^https?:\/\//, '')}</span></span>}</span>
          <span className="leaf-featured-caption"><span><strong>{item.name}</strong><small>{item.services.join(' / ')}</small></span><ArrowUpRight size={20}/></span>
        </a>)}
      </div>
    </div>
  </section>;
}
