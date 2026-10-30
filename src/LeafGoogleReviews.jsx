import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import reviews from './googleReviews.json';
import './LeafGoogleReviews.css';
const source = 'https://share.google/FF1yTWQbj1Gu2wtEr';
export default function LeafGoogleReviews() {
  return <section className="leaf-google-reviews" aria-label="Customer reviews of Leaf Creationism">
    <header className="leaf-google-header"><span className="leaf-google-wordmark"><b aria-hidden="true">G</b> Google reviews</span><a href={source} target="_blank" rel="noopener noreferrer" aria-label="Read Leaf Creationism reviews on Google"><ArrowUpRight size={17}/></a></header>
    <p className="leaf-google-business">Leaf Creationism · Customer feedback</p>
    <article className="leaf-google-review"><span className="leaf-google-avatar" aria-hidden="true">N</span><div className="leaf-google-review-body"><strong>{reviews[0].name}</strong><span className="leaf-google-stars" aria-label="5 out of 5 stars">★★★★★</span><blockquote className="leaf-google-quote">{reviews[0].quote}</blockquote></div></article>
    <details className="leaf-google-more"><summary>More customer reviews</summary>{reviews.slice(1).map(review=><article key={review.name}><strong>{review.name}</strong><blockquote>{review.quote}</blockquote></article>)}</details>
    <a className="leaf-google-source" href={source} target="_blank" rel="noopener noreferrer">Read reviews on Google <ArrowUpRight size={13}/></a>
  </section>;
}
