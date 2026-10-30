import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import LeafAdvantageGallery from './LeafAdvantageGallery';
import LeafServiceOrbit from './LeafServiceOrbit';
import LeafPhonePreview from './LeafPhonePreview';
import LeafAbout from './LeafAbout';
import LeafFeaturedWork from './LeafFeaturedWork';
import LeafStudioHeads from './LeafStudioHeads';
import LeafGoogleReviews from './LeafGoogleReviews';
const FlexCarousel = lazy(() => import('./FlexCarousel'));
import './LeafPosterCarousel.css';
import './LeafFeatureScenes.css';
import ProjectFolder from './ProjectFolder';
import { PlanningChecklist, LaunchLattice } from './PlanningCards';
import { ArrowRight, ArrowUpRight, Layers, PenTool, Code2, Megaphone, Check, Plus } from 'lucide-react';

const services = [
  { icon: PenTool, label: '01 / DESIGN', title: 'Design that feels intuitive.', text: 'Thoughtful interfaces and brand systems, built around the people using them.', id: 'uiux' },
  { icon: Code2, label: '02 / DEVELOPMENT', title: 'Built for the real world.', text: 'Responsive websites, apps, and digital experiences that are ready to grow.', id: 'web' },
  { icon: Megaphone, label: '03 / CAMPAIGNS', title: 'Ideas that find their audience.', text: 'Creative direction, advertising, and content with a clear point of view.', id: 'adv' },
];

const posters = [
  ['upcreate-strategy-poster.jpg','Upcreate strategy poster','Strategy & campaign'],
  ['the-holland-poster.jpg','The Holland poster','Poster design'],
  ['transit-campaign-poster.jpg','Transit campaign poster','Campaign design'],
  ['sip-and-smile-poster.jpg','Sip & Smile poster','Poster design'],
  ['friends-tax-branch-poster.jpg','Friends Tax branch poster','Campaign design'],
  ['friends-tax-services-poster.jpg','Friends Tax services poster','Campaign design'],
  ['nutrixa-product-campaign.jpg','Nutrixa product campaign','Product campaign'],
  ['noble-energy-campaign-system.jpg','Noble Energy campaign','Brand campaign'],
  ['follicle-product-campaign.jpg','Follicle product campaign','Product campaign'],
  ['superchat-campaign.jpg','Superchat campaign','Advertising'],
  ['christmas-fashion-campaign.jpg','Christmas fashion campaign','Art direction'],
  ['denim-product-campaign.jpg','Denim product campaign','Product campaign'],
].map(([file, alt, category]) => ({src:`/assets/portfolio/thumbs/${file}`,alt,category,description:'Explore more of this work in our portfolio.'}));

export default function DovetailHome({ navigateTo, openServiceModal, serviceCategories, serviceTaglines, studioHeads, websiteProjects, portfolioImages }) {
  const [ad, setAd] = useState(0);
  const galleryRef = useRef(null);
  const [galleryReady, setGalleryReady] = useState(false);
  useEffect(() => {
    const target = galleryRef.current;
    if (!target) return undefined;
    if (!('IntersectionObserver' in window)) { setGalleryReady(true); return undefined; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setGalleryReady(true); observer.disconnect(); }
    }, { rootMargin: '400px' });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  const ads = [
    { tag: 'Limited Time', title: 'Flat 20% Off UI/UX', description: 'Elevate your digital presence today.', image: '/assets/ads/uiux-offer.jpg' },
    { tag: 'New Launch', title: 'Next-Gen AI Ads', description: 'Smart campaigns that convert.', video: '/assets/media/leaf-ad-carousel.mp4' },
    { tag: 'Award Winning', title: 'Best UI/UX Design', description: 'Recognized for premium digital experiences.', image: '/assets/ads/best-uiux-design.webp' },
    { tag: 'Exclusive', title: 'Brand Identity Lift', description: 'Redefine your market presence.', image: '/assets/ads/brand-identity-lift.jpg' },
  ];
  useEffect(() => { const timer = window.setInterval(() => setAd(value => (value + 1) % 4), 5000); return () => window.clearInterval(timer); }, []);
  return <main className="dt-home">
    <div className="leaf-code-background" aria-hidden="true">{Array.from({length: 18}, (_, i) => <span key={i} style={{'--column': i, '--delay': `${-i * 1.3}s`}}>{'{ 0 1 / + < > 1 0 } 01 10 / = 1 + 0 1 01 < > / 0 1 } '.repeat(8)}</span>)}</div>
    <section className="dt-hero dt-grid">
      <div className="dt-code-rain" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <div key={i} style={{ '--code-column': i, '--code-duration': `${18 + (i % 6) * 3}s`, '--code-delay': `${-(i * 3)}s` }}><span>{['01 0 1 0 01 10 001 1 0 10 11 00 101 0 1 10 01 0 101 11 00 1 0 10 01 1 00 101 0 1 01 10 11', '0 1 001 11 0 10 1 01 100 0 1 10 11 00 101 10 01 0 1 00 10 1 001 11 0 10 1 01 100 0 1', '{ } 0 1 / / 01 10 001 1 + 0 10 11 00 101 0 1 10 01 0 101 11 00 1 + 10 01 1 / / 101 0 1'][i % 3]}</span></div>)}</div>
      <div className="dt-container dt-reference-hero">
        <div className="dt-reference-top"><div className="leaf-old-ad" aria-label="Studio offers"><div className="leaf-old-ad-media">{ads[ad].video ? <video key={ads[ad].video} src={ads[ad].video} autoPlay muted loop playsInline preload="metadata" /> : <img src={ads[ad].image} alt="" decoding="async" />}</div><div className="leaf-old-ad-copy"><span>{ads[ad].tag}</span><strong>{ads[ad].title}</strong><p>{ads[ad].description}</p></div><div className="leaf-old-ad-dots">{ads.map((item,index)=><button key={item.title} type="button" aria-label={`Show ${item.title}`} aria-pressed={ad === index} onClick={()=>setAd(index)} />)}</div></div><LeafGoogleReviews /></div>
        <h1 className="dt-reference-title"><span>Make <img className="leaf-enter-photo" src="/assets/hero/enter-key-yellow.png" alt="" /> ideas</span><span className="leaf-hero-title-last"><span>worth</span> <span className="leaf-pixel-accent">noticing</span></span></h1>
        <p className="leaf-hero-description">Leaf Creationism is a creative studio in Kerala, building distinctive brands, websites and digital experiences that help businesses grow.</p>
        <LeafPhonePreview navigateTo={navigateTo} />
      </div>
    </section>
    <section ref={galleryRef} className="leaf-poster-showcase" aria-labelledby="leaf-poster-showcase-title">
      <div className="dt-container leaf-poster-showcase-head"><div><span className="dt-eyebrow">SELECTED POSTERS / LEAF CREATIONISM</span><h2 id="leaf-poster-showcase-title">Ideas in the <span className="leaf-pixel-accent">wild.</span></h2><p>A closer look at the campaigns, identities and visuals we’ve made.</p></div><button type="button" className="dt-secondary" onClick={() => navigateTo('portfolio')}>Explore all work <ArrowUpRight size={16}/></button></div>
      {galleryReady ? <Suspense fallback={<div className="leaf-poster-carousel" aria-hidden="true" />}><FlexCarousel items={portfolioImages} preset="liquid" intro="rise" fit="natural" cardHeight={0.52} bend={0.13} dispersion={0.1} squeeze={0.06} gap={22} radius={12} autoplay interval={4} captureWheel={false} className="leaf-poster-carousel" /></Suspense> : <div className="leaf-poster-carousel" aria-hidden="true" />}
      <p className="leaf-poster-instruction">DRAG TO EXPLORE <span>↔</span> &nbsp;·&nbsp; USE ARROW KEYS</p>
    </section>
    <LeafAbout navigateTo={navigateTo} />
    <LeafFeaturedWork items={websiteProjects} navigateTo={navigateTo} />
    <LeafStudioHeads heads={studioHeads} />
    <LeafServiceOrbit serviceCategories={serviceCategories} serviceTaglines={serviceTaglines} navigateTo={navigateTo} openServiceModal={openServiceModal} />
    <section className="dt-section dt-container dt-services"><div className="dt-section-head"><div><span className="dt-eyebrow">WHAT WE DO</span><h2>Built to move<br/>your brand forward.</h2></div><button type="button" className="dt-secondary" onClick={() => navigateTo('services')}>All services <ArrowUpRight size={16}/></button></div><div className="dt-service-grid">{services.map(({icon:Icon,label,title,text,id})=><button className="dt-service-card" key={id} type="button" onClick={()=>openServiceModal(id)}><span className="dt-service-top"><Icon size={21}/><ArrowUpRight size={16}/></span><span className="dt-eyebrow">{label}</span><strong>{title}</strong><p>{text}</p><span className="dt-card-link">Explore service <ArrowRight size={15}/></span></button>)}</div></section>
    <LeafAdvantageGallery items={posters} />
    <section className="leaf-feature-cards dt-container" aria-labelledby="leaf-features-title"><div className="leaf-feature-intro"><h2 id="leaf-features-title">Everything your idea needs.</h2><p>From the first conversation to launch, we make the next step clear.</p></div><div className="leaf-feature-grid"><article className="leaf-feature-card leaf-feature-brief"><h3>Start with your idea</h3><p>Tell us your goals. We’ll shape a clear direction together.</p><ProjectFolder /></article><article className="leaf-feature-card leaf-feature-design"><h3>Plan your project</h3><p>Use this simple checklist to prepare for your first conversation.</p><PlanningChecklist /></article><article className="leaf-feature-card leaf-feature-launch"><h3>Find your next step</h3><p>Bring your idea closer to launch with the right services.</p><LaunchLattice /></article></div></section>
    <section className="dt-section dt-container dt-cta"><div><span className="dt-eyebrow">READY WHEN YOU ARE</span><h2>Let’s make something<br/>worth noticing.</h2><p>Tell us what you’re working on. We’ll help you find the next step.</p></div><button type="button" className="dt-primary" onClick={()=>navigateTo('workspace')}>Start a project <ArrowUpRight size={16}/></button></section>
  </main>;
}
