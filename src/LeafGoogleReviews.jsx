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
      if (entry.isIntersecting) timer = setInterval(() => { if (!document.hidden) setIndex(i => (i + 1) % reviews.length); }, 4500);
    });
    observer.observe(ref.current);
    return () => { clearInterval(timer); observer.disconnect(); };
  }, []);
  return <section ref={ref} className="leaf-google-reviews" aria-label="Customer reviews of Leaf Creationism">
    <header className="leaf-google-header"><span className="leaf-google-wordmark"><svg className="leaf-google-logo" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.89-1.74 2.98-4.3 2.98-7.36Z"/><path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.41l-3.24-2.51c-.9.6-2.05.96-3.38.96-2.61 0-4.82-1.76-5.61-4.12H3.05v2.59A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.39 13.92A6 6 0 0 1 6.07 12c0-.67.12-1.32.32-1.92V7.49H3.05A10 10 0 0 0 2 12c0 1.61.38 3.14 1.05 4.51l3.34-2.59Z"/><path fill="#EA4335" d="M12 5.96c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.95 5.49l3.34 2.59A5.99 5.99 0 0 1 12 5.96Z"/></svg> Google reviews</span><a href={source} target="_blank" rel="noopener noreferrer" aria-label="Read Leaf Creationism reviews on Google"><ArrowUpRight size={16}/></a></header>
    <div className="leaf-google-slides">{reviews.map((review,i)=><article key={review.name} className={`leaf-google-review${index === i ? " is-active" : ""}`} aria-hidden={index !== i}><span className={`leaf-google-avatar leaf-google-avatar-${i}`} aria-hidden="true">{review.initials}</span><div className="leaf-google-review-body"><strong>{review.name}</strong><span className="leaf-google-stars" aria-label="5 out of 5 stars">★★★★★</span><blockquote className="leaf-google-quote">{review.quote}</blockquote></div></article>)}</div>
  </section>;
}
