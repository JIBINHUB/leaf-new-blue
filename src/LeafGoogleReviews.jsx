import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './LeafGoogleReviews.css';

const reviews = [
  { name: 'Noviqo', initials: 'N', quote: 'A futuristic, visually stunning website that perfectly captures the vibe of our film and tech magazine.' },
  { name: 'Fazi L S', initials: 'F', quote: 'My experience with Leaf Creationism was a breath of fresh air.' },
  { name: 'Simi Chacko', initials: 'S', quote: 'Nice service' },
];

export default function LeafGoogleReviews() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches) return;
    const timer = window.setInterval(() => setIndex(i => (i + 1) % reviews.length), 6000);
    return () => window.clearInterval(timer);
  }, []);
  const review = reviews[index];
  return <a className="leaf-google-reviews" href="https://share.google/FF1yTWQbj1Gu2wtEr" target="_blank" rel="noopener noreferrer" aria-label="Read Leaf Creationism reviews on Google">
    <span className="leaf-google-header"><span className="leaf-google-wordmark"><i>G</i>oogle reviews</span><span className="leaf-google-score">5.0 <span aria-label="5 out of 5 stars">★★★★★</span></span><ArrowUpRight size={16} aria-hidden="true" /></span>
    <span className="leaf-google-review" key={review.name}><span className={`leaf-google-avatar leaf-google-avatar-${index}`} aria-hidden="true">{review.initials}</span><span className="leaf-google-review-body"><strong>{review.name}</strong><span className="leaf-google-stars" aria-hidden="true">★★★★★</span><span className="leaf-google-quote">“{review.quote}”</span></span></span>
  </a>;
}
