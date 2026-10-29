import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Check, Globe2, Image as ImageIcon, Layers3, PenTool, Send, Sparkles } from 'lucide-react';
import './LeafMoreSection.css';

export default function LeafMoreSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      section.classList.toggle('is-visible', entry.isIntersecting);
    }, { threshold: 0.08 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="leaf-more-section" id="leaf-more" aria-labelledby="leaf-more-title">
      <div className="leaf-more-head">
        <h2 id="leaf-more-title">A little more Leaf.</h2>
        <p>Everything you need to bring your brand full-circle.</p>
      </div>

      <div className="leaf-more-grid">
        <article className="leaf-more-card leaf-more-assets">
          <h3>All your brand assets.<br />One beautiful system.</h3>
          <p>Made to look like you, wherever you show up.</p>
          <div className="leaf-assets-illustration" aria-hidden="true">
            <span className="leaf-asset-tile leaf-asset-tile-sky"><ImageIcon /></span>
            <span className="leaf-asset-tile leaf-asset-tile-lilac"><PenTool /></span>
            <span className="leaf-asset-tile leaf-asset-tile-peach"><ImageIcon /></span>
            <span className="leaf-asset-tile leaf-asset-tile-yellow"><Layers3 /></span>
            <div className="leaf-assets-folder">
              <div className="leaf-folder-back" />
              <span className="leaf-folder-sheet"><img src="/assets/leaf-mascot-3d.png" alt="" loading="lazy" /></span>
              <div className="leaf-folder-front">
                <span className="leaf-folder-label"><Layers3 size={19} /> Your brand, together</span>
                <span className="leaf-folder-caption">Identity · Web · Campaigns</span>
                <span className="leaf-folder-mark">leaf<span>®</span></span>
              </div>
            </div>
          </div>
        </article>

        <article className="leaf-more-card leaf-more-collab">
          <h3>Good work starts<br />with a conversation.</h3>
          <p>Your ideas. Our team. One shared direction.</p>
          <div className="leaf-collab-illustration" aria-hidden="true">
            <div className="leaf-collab-toolbar">
              <span className="leaf-collab-people"><i>JC</i><i>JM</i><i>You</i><span>Together</span></span>
              <span className="leaf-collab-share"><Globe2 size={14} /> In sync</span>
            </div>
            <div className="leaf-collab-message leaf-collab-message-you"><span className="leaf-message-avatar">Y</span><span><small>You</small><span className="leaf-message-bubble">A little more us. <Sparkles size={13} /></span></span></div>
            <div className="leaf-collab-message leaf-collab-message-studio"><span className="leaf-message-avatar"><img src="/assets/leaf-mascot-3d.png" alt="" loading="lazy" /></span><span><small>Leaf studio</small><span className="leaf-message-bubble">We’re on it. <Check size={14} /></span></span></div>
            <span className="leaf-collab-cursor"><ArrowUpRight size={19} /><i>Leaf team</i></span>
          </div>
        </article>

        <article className="leaf-more-card leaf-more-launch">
          <h3>From first idea<br />to out in the world.</h3>
          <p>Every detail considered. Every piece connected.</p>
          <div className="leaf-launch-illustration" aria-hidden="true">
            <div className="leaf-launch-status"><span><Sparkles size={15} /><span className="leaf-launch-preparing">Bringing it together</span><span className="leaf-launch-ready">Ready for the world</span></span><i><Check size={12} /> Looking good</i></div>
            <div className="leaf-launch-steps"><span><Check size={12} /> Design</span><span><Check size={12} /> Build</span><span><Check size={12} /> Launch</span></div>
            <div className="leaf-launch-track"><span /></div>
            <div className="leaf-launch-preview"><span><Globe2 size={19} /> Made for your next chapter.</span><span className="leaf-launch-send"><Send size={18} /></span></div>
          </div>
        </article>
      </div>
    </section>
  );
}
