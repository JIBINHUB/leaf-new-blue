import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './LeafCreativeProcess.css';

const stages = [
  { title: 'Find the story behind your brand', label: '01 / DISCOVER', detail: 'We listen to your goals, understand your audience, and find the idea that gives your project direction.' },
  { title: 'Turn strategy into a visual identity', label: '02 / CREATE', detail: 'From brand systems to interfaces, we shape a clear visual language that feels unmistakably yours.' },
  { title: 'Build digital experiences that work', label: '03 / BUILD', detail: 'We bring design and technology together to create responsive websites and products ready for real people.' },
  { title: 'Launch with a consistent voice', label: '04 / LAUNCH', detail: 'Campaigns, content, and thoughtful details help your brand show up confidently across every touchpoint.' },
];
export default function LeafCreativeProcess({ navigateTo }) {
  const [active, setActive] = useState(0);
  return <section className="leaf-process" id="leaf-approach"><div className="dt-container">
    <div className="leaf-process-intro"><span className="dt-eyebrow">A CONNECTED CREATIVE PROCESS</span><h2>Build a brand<br/><em>that moves people.</em></h2><p>From the first idea to the final launch, we connect every part of your creative project.</p><div className="leaf-orbit-actions"><button className="dt-blue-button" onClick={() => navigateTo('workspace')}>Start a project</button><button className="dt-secondary" onClick={() => navigateTo('services')}>Explore services <ArrowUpRight size={15}/></button></div></div>
    <div className="leaf-process-grid"><div className="leaf-process-tabs" aria-label="Creative process stages">{stages.map((stage,i)=><button type="button" key={stage.label} className={i===active?'active':''} aria-pressed={i===active} onClick={()=>setActive(i)}>{stage.title}</button>)}</div><div className="leaf-process-content" aria-live="polite"><div className="leaf-process-visual" aria-hidden="true"><div className="leaf-process-pixels">{Array.from({length:80},(_,i)=><i key={i} style={{'--i':i}} />)}</div><svg viewBox="0 0 420 210"><path d="M125 12V198 M155 22V188 M185 32V178 M215 42V168 M125 12L215 42L215 168L125 198Z M125 58L215 73 M125 105H215 M125 152L215 137 M215 42L365 82 M215 168L365 128 M215 105H365"/><ellipse cx="365" cy="105" rx="15" ry="50"/><ellipse cx="365" cy="105" rx="5" ry="37"/></svg></div><span className="dt-eyebrow">{stages[active].label}</span><p>{stages[active].detail}</p><button type="button" onClick={()=>navigateTo('services')}>Explore our services <ArrowUpRight size={15}/></button></div></div>
    <div className="leaf-process-cards"><div><span className="dt-eyebrow">THE LEAF APPROACH</span><p>“Good ideas become great experiences when strategy, creativity and technology work together.”</p><span>LEAF CREATIONISM / CREATIVE STUDIO</span></div><div><strong>01<span>→</span>04</strong><p>One connected process</p><small>From discovery to launch, with your team at every step.</small></div></div>
  </div></section>;
}
