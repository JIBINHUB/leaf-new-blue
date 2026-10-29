import React, { useState } from 'react';
import { ArrowUpRight, RotateCw } from 'lucide-react';
import './LeafStudioHeads.css';

export default function LeafStudioHeads({ heads }) {
  const [flipped, setFlipped] = useState(false);
  return <section className="leaf-people" aria-labelledby="leaf-people-title">
    <div className="dt-container leaf-people-layout">
      <div className="leaf-people-copy">
        <span className="dt-eyebrow">THE PEOPLE BEHIND LEAF</span>
        <h2 id="leaf-people-title">Meet the minds<br/><em>behind the work.</em></h2>
        <p>Thoughtful ideas begin with people who care. Meet the creative heads shaping the vision at Leaf Creationism.</p>
        <span className="leaf-people-hint"><RotateCw size={16}/> Tap the card to meet {flipped ? heads[0].name : heads[1].name}</span>
      </div>
      <button className={`leaf-people-flip${flipped ? ' is-flipped' : ''}`} type="button" onClick={() => setFlipped(!flipped)} onPointerMove={(event) => {
        if (event.pointerType !== 'mouse') return;
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty('--card-x', `${((event.clientX - rect.left) / rect.width * 100).toFixed(1)}%`);
        event.currentTarget.style.setProperty('--card-y', `${((event.clientY - rect.top) / rect.height * 100).toFixed(1)}%`);
        event.currentTarget.style.setProperty('--tilt-x', `${((.5 - (event.clientY - rect.top) / rect.height) * 8).toFixed(1)}deg`);
        event.currentTarget.style.setProperty('--tilt-y', `${(((event.clientX - rect.left) / rect.width - .5) * 8).toFixed(1)}deg`);
      }} onPointerLeave={(event) => { event.currentTarget.style.setProperty('--tilt-x', '0deg'); event.currentTarget.style.setProperty('--tilt-y', '0deg'); }} aria-label={`Show ${flipped ? heads[0].name : heads[1].name}`}>
        <span className="leaf-people-card-inner">
          {heads.map((person, index) => <span className={`leaf-people-card ${index ? 'leaf-people-card-back' : ''}`} key={person.name} aria-hidden={flipped !== Boolean(index)}>
            <span className="leaf-people-photo"><img src={person.image} alt="" loading="lazy" /><span className="leaf-people-card-bottom"><strong>{person.name}</strong><small>{person.role}</small></span></span>
            <span className="leaf-people-card-id"><span>LEAF / STUDIO HEADS<br/><small>CREATIVE IDENTITY · 0{index + 1} / 02</small></span><span className="leaf-people-next">MEET {heads[index ? 0 : 1].name.split(' ')[0]} <ArrowUpRight size={15}/></span></span>
          </span>)}
        </span>
      </button>
    </div>
  </section>;
}
