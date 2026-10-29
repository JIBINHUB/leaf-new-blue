import { useEffect, useRef } from 'react';
import './LeafScrollStory.css';

const clamp = (value) => Math.max(0, Math.min(1, value));
const ease = (value) => { const t = clamp(value); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
const TOKENS = ['mint', 'blue', 'peach', 'lilac', 'yellow'];
function TokenArt({ kind }) {
  if (kind === 'mint' || kind === 'blue') return <img src={`/assets/${kind === 'mint' ? 'leaf-mascot' : 'leaf-cloud'}-3d.png`} alt="" />;
  return <span className={`leaf-prop-sprite leaf-prop-${{ peach: 'crayon', lilac: 'flower', yellow: 'smile' }[kind]}`} />;
}
function Slot({ kind }) { return <span className={`leaf-story-slot leaf-story-token-${kind}`} data-story-slot={kind} aria-hidden="true"><TokenArt kind={kind} /></span>; }

export default function LeafScrollStory() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    const stage = section.querySelector('.leaf-scroll-story-sticky');
    const tokens = [...section.querySelectorAll('.leaf-story-moving-token')];
    const slots = TOKENS.map(kind => section.querySelector(`[data-story-slot="${kind}"]`));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const createSection = section.nextElementSibling;
    let frame = 0;
    let targets = [];
    const measure = () => {
      const stageRect = stage.getBoundingClientRect();
      targets = slots.map(slot => { const r = slot.getBoundingClientRect(); return { x:r.left-stageRect.left+r.width/2, y:r.top-stageRect.top+r.height/2, size:r.width }; });
    };
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const w = stage.clientWidth, h = stage.clientHeight;
      const p = clamp(-rect.top / Math.max(1, rect.height-h));
      const spread = ease((p-.12)/.19);
      const gather = ease((p-.59)/.17);
      const merge = ease((p-.79)/.12);
      const exit = ease((p-.94)/.06);
      const words = ease((p-.25)/.09) * (1-ease((p-.53)/.09));
      section.style.setProperty('--story-words', reduced.matches ? '1' : words.toFixed(4));
      section.style.setProperty('--story-label', reduced.matches ? '1' : (1-ease((p-.2)/.09)).toFixed(4));
      section.style.setProperty('--story-clouds', (1-ease((p-.16)/.15)).toFixed(4));
      section.style.setProperty('--story-exit', exit.toFixed(4));
      section.dataset.phase = p < .25 ? 'spread' : p < .59 ? 'message' : p < .79 ? 'gather' : 'merge';
      const unit = Math.min(1,w/900,h/800);
      const initial = [[-20,-105],[-115,0],[0,-5],[100,40],[205,5]];
      const cluster = [[20,90],[-175,-15],[90,-85],[115,45],[65,-20]];
      tokens.forEach((token,i) => {
        const target = targets[i];
        if (!target) return;
        let x = mix(w/2+initial[i][0]*unit,target.x,spread);
        let y = mix(h*.52+initial[i][1]*unit,target.y,spread);
        x = mix(x,w/2+cluster[i][0]*unit,gather);
        y = mix(y,h*.51+cluster[i][1]*unit,gather);
        x = mix(x,w/2,merge);
        y = mix(y,h*.5,merge);
        const size = mix(mix(84*unit,target.size,spread),84*unit,gather);
        const scale = i===0 ? mix(1,1.45,merge) : mix(1,.65,merge);
        token.style.width = `${size}px`;
        token.style.height = `${size}px`;
        token.style.transform = `translate3d(${x-size/2}px,${y-size/2-exit*95}px,0) scale(${scale}) rotate(${Math.sin(p*Math.PI*2+i)*8*(1-spread+gather)*(1-merge)}deg)`;
        token.style.opacity = `${(i===0 ? 1 : 1-ease((merge-.5)*2))*(1-exit)}`;
        token.style.borderRadius = `${50-merge*25}%`;
      });
      if (createSection?.classList.contains('leaf-create-showcase')) {
        const top = createSection.getBoundingClientRect().top;
        createSection.style.setProperty('--create-progress', (reduced.matches ? 1 : clamp((window.innerHeight-top)/(window.innerHeight*.9))).toFixed(3));
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = () => { measure(); schedule(); };
    measure(); update();
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    let disposed = false;
    document.fonts?.ready.then(() => { if (!disposed) resize(); });
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',resize);
    reduced.addEventListener('change',resize);
    return () => { disposed=true; cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('scroll',schedule); window.removeEventListener('resize',resize); reduced.removeEventListener('change',resize); };
  },[]);
  return <section ref={sectionRef} className="leaf-scroll-story" id="creative-approach" aria-label="Our creative approach">
    <div className="leaf-scroll-story-sticky">
      <span className="leaf-story-cloud leaf-story-cloud-left" aria-hidden="true" />
      <span className="leaf-story-cloud leaf-story-cloud-right" aria-hidden="true" />
      <div className="leaf-scroll-story-content">
        <p className="leaf-scroll-story-kicker">Start with an idea. Make it unforgettable.</p>
        <h2 className="leaf-scroll-story-heading" aria-label="We learn your brand, your people and ambition. Then we make work that moves them.">
          <span className="leaf-story-line"><span className="leaf-story-words">We learn your</span> <Slot kind="mint" /> <span className="leaf-story-words">brand,</span></span>
          <span className="leaf-story-line"><Slot kind="blue" /> <span className="leaf-story-words">your people</span> <Slot kind="peach" /> <span className="leaf-story-words">and ambition.</span></span>
          <span className="leaf-story-line"><span className="leaf-story-words">Then we make</span> <Slot kind="lilac" /> <span className="leaf-story-words">work</span></span>
          <span className="leaf-story-line"><span className="leaf-story-words">that moves</span> <Slot kind="yellow" /> <span className="leaf-story-words">them.</span></span>
        </h2>
      </div>
      <div className="leaf-story-moving-tokens" aria-hidden="true">{TOKENS.map(kind=><span key={kind} className={`leaf-story-moving-token leaf-story-token-${kind}`}><TokenArt kind={kind} /></span>)}</div>
    </div>
  </section>;
}
