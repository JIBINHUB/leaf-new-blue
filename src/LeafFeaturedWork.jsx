import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import './LeafFeaturedWork.css';

export default function LeafFeaturedWork({ items, navigateTo }) {
  const previews = { 'ORU CODE': 'orucode', 'Mallugrapher UK': 'mallugrapher', 'NAINU Boutique': 'nainu', 'UNIQ Floors': 'uniq', 'COVEO': 'coveo', 'Vero Studio': 'vero', 'Friends Tax Point': 'friends', 'ClearTax': 'cleartax', 'Rae': 'rae', 'UNDERNEAT': 'underneat', 'Leaf Creationism': 'leaf-home' };
  const roles = {
    'ORU CODE': 'Full stack development',
    'Mallugrapher UK': 'Full stack development',
    'NAINU Boutique': 'Full stack development',
    'UNIQ Floors': 'Full stack development',
    'COVEO': 'UI/UX',
    'Vero Studio': 'UI/UX and front-end',
    'Friends Tax Point': 'Full stack development',
    'ClearTax': 'UI/UX',
    'Rae': 'UI/UX and front-end',
    'UNDERNEAT': 'UI/UX and front-end',
    'Leaf Creationism': 'Full stack development',
    'Leaf Creationism — Services': 'Full stack development'
  };
  const featuredItems = items.flatMap(item => item.name === 'Leaf Creationism'
    ? [item, { ...item, name: 'Leaf Creationism — Services', mockup: 'leaf-services' }]
    : [item]);
  const previewFor = item => `/assets/portfolio/websites/featured-mockups/${item.mockup || previews[item.name]}.jpg`;

  return <section className="leaf-featured" aria-labelledby="leaf-featured-title">
    <div className="dt-container leaf-featured-layout">
      <div className="leaf-featured-heading">
        <span className="dt-eyebrow">WEBSITE PROJECTS / LEAF CREATIONISM</span>
        <h2 id="leaf-featured-title">Work made<br/><em>to move.</em></h2>
        <p>A closer look at the websites and digital experiences we have built.</p>
        <button type="button" onClick={() => navigateTo('portfolio')}>All work <ArrowUpRight size={16}/></button>
        <span className="leaf-featured-count">{String(featuredItems.length).padStart(2, '0')} PROJECTS</span>
      </div>
      <div className="leaf-featured-grid">
        {featuredItems.map((item, index) => <a className="leaf-featured-card" key={`${item.url}-${index}`} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name} website — ${roles[item.name]}`}>
          <span className="leaf-featured-media"><img src={previewFor(item)} alt={`Mobile website mockup for ${item.name}`} loading="lazy" decoding="async" /></span>
          <span className="leaf-featured-caption">
            <span className="leaf-featured-title">{item.name}</span>
            <span className="leaf-featured-details" aria-hidden="true">
              <span className="leaf-featured-marquee">{[0, 1].map(copy => <span key={copy}>{[0, 1, 2].map(repeat => <React.Fragment key={repeat}><i>●</i> {roles[item.name]} &nbsp; </React.Fragment>)}</span>)}</span>
            </span>
            <Plus className="leaf-featured-plus" size={30} strokeWidth={1.4} aria-hidden="true" />
          </span>
        </a>)}
      </div>
    </div>
  </section>;
}
