import { ArrowUpRight } from 'lucide-react';
import './SiteShowcase.css';

const previews = {
  'ORU CODE': 'orucode-mobile-hero.png', 'Mallugrapher UK': 'mallugrapher-mobile-hero.png',
  'NAINU Boutique': 'nainu-mobile-hero.png', 'UNIQ Floors': 'uniq-mobile-hero.png',
  COVEO: 'coveo-mobile.jpg', 'Vero Studio': 'vero-desktop.jpg',
  'Friends Tax Point': 'friends-mobile-hero.png', ClearTax: 'cleartax-mobile-hero.png',
  Rae: 'rae-desktop.jpg', UNDERNEAT: 'underneat-mobile-hero.png',
  'Leaf Creationism': 'leaf-mobile-hero.png'
};

export default function SiteShowcase({ sites }) {
  return <div className="pf-simple-grid">
    {sites.map((site, index) => <a className="pf-simple-card" key={site.url} href={site.url} target="_blank" rel="noopener noreferrer">
      <div className="pf-simple-image">
        {previews[site.name] && <img src={`/assets/portfolio/websites/${previews[site.name]}`} alt="" loading="lazy" decoding="async" />}
      </div>
      <div className="pf-simple-info"><span><small>{String(index + 1).padStart(2, '0')} / {site.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</small><strong>{site.name}</strong></span><ArrowUpRight size={19} aria-hidden="true" /></div>
    </a>)}
  </div>;
}
