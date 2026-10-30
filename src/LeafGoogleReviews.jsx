import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import reviews from './googleReviews.json';
import './LeafGoogleReviews.css';
const source = 'https://share.google/FF1yTWQbj1Gu2wtEr';
export default function LeafGoogleReviews() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer;
    const observer = new IntersectionObserver(([entry]) => {
      clearInterval(timer);
      if (entry.isIntersecting) timer = setInterval(() => { if (!document.hidden) setIndex(i => (i + 1) % reviews.length); }, 6000);
    });
    observer.observe(ref.current);
    return () => { clearInterval(timer); observer.disconnect(); };
  }, []);
  return <section ref={ref} className="leaf-google-reviews" aria-label="Customer reviews of Leaf Creationism">
    <header className="leaf-google-header"><span className="leaf-google-wordmark"><b aria-hidden="true">G</b> Google reviews</span><a href={source} target="_blank" rel="noopener noreferrer" aria-label="Read Leaf Creationism reviews on Google"><ArrowUpRight size={16}/></a></header>
    <div className="leaf-google-slides">{reviews.map((review,i)=><article key={review.name} className="leaf-google-review" hidden={index !== i}><span className={`leaf-google-avatar leaf-google-avatar-${i}`} aria-hidden="true">{review.initials}</span><div className="leaf-google-review-body"><strong>{review.name}</strong><span className="leaf-google-stars" aria-label="5 out of 5 stars">★★★★★</span><blockquote className="leaf-google-quote">{review.quote}</blockquote></div></article>)}</div>
    <div className="leaf-google-review-dots" aria-label="Choose a review">{reviews.map((review,i)=><button type="button" key={review.name} onClick={()=>setIndex(i)} aria-label={`Show review by ${review.name}`} aria-pressed={index === i}/>)}</div>
  </section>;
}
