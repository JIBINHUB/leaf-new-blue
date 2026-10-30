import React, { useState } from 'react';
import './PlanningCards.css';

export function PlanningChecklist() {
  const [checked, setChecked] = useState([]);
  const items = ['Define your goals', 'Choose your services', 'Gather your ideas'];
  return <div className="planning-checklist" aria-label="Project planning checklist"><span className="planning-caption">YOUR PROJECT CHECKLIST</span>{items.map((item, i) => <label key={item} className="planning-check"><input type="checkbox" checked={checked.includes(i)} onChange={() => setChecked(checked.includes(i) ? checked.filter(x => x !== i) : [...checked, i])}/><span className="planning-box" aria-hidden="true">✓</span><span>{item}</span></label>)}</div>;
}

export function LaunchLattice() {
  return <div className="launch-lattice-panel"><div className="launch-lattice" aria-hidden="true">{Array.from({length:16}, (_,i) => <span key={i} style={{animationDelay:`${(Math.floor(i / 4) + i % 4) * .18}s`}} />)}</div><div><strong>From idea to launch</strong><p>Explore our services and find the right starting point for your project.</p><a href="/workspace">Explore service prices ↗</a></div></div>;
}
