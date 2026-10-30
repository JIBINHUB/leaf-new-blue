import React from 'react';
import { Code2, PenTool, Megaphone, Palette, Smartphone, ShoppingBag, LayoutGrid, Video } from 'lucide-react';
import './LeafPhonePreview.css';

const messages = [
  { service: 'UI/UX Design', icon: PenTool },
  { service: 'Web Development', icon: Code2 },
  { service: 'AI Ads', icon: Video },
  { service: 'Advertising', icon: Megaphone },
  { service: 'Branding', icon: Palette },
  { service: 'Mobile Apps', icon: Smartphone },
  { service: 'No Code Web', icon: LayoutGrid },
  { service: 'Shopify Development', icon: ShoppingBag },
];

export default function LeafPhonePreview() {
  return <div className="leaf-phone-preview" aria-label="Leaf services turning ideas into outcomes">
    <div className="leaf-phone-scene">
      <div className="leaf-phone-stream" aria-hidden="true">
        {messages.map(({ service, icon: Icon }, index) => <React.Fragment key={service}>
          <div className="leaf-phone-float leaf-phone-incoming" style={{ '--item': Math.floor(index / 2), '--lane': index % 2 }}>
            <b>{service}</b>
          </div>
          <div className="leaf-phone-float leaf-phone-outgoing" style={{ '--item': Math.floor(index / 2), '--lane': index % 2 }} title={service}>
            <Icon size={25} strokeWidth={1.8} />
          </div>
        </React.Fragment>)}
      </div>
      <div className="leaf-phone-device" aria-label="Burgundy smartphone showing websites developed by Leaf">
        <span className="leaf-phone-side-button leaf-phone-side-button-one" aria-hidden="true" />
        <span className="leaf-phone-side-button leaf-phone-side-button-two" aria-hidden="true" />
        <span className="leaf-phone-side-button leaf-phone-side-button-three" aria-hidden="true" />
        <div className="leaf-phone-screen">
          <div className="leaf-phone-photo">
            <img className="leaf-phone-static-site" src="/assets/portfolio/websites/orucode-mobile-hero.png" alt="ORU CODE website home page" loading="lazy" decoding="async" draggable={false} />
          </div>
          <div className="leaf-phone-island" aria-hidden="true" />
        </div>
      </div>
    </div>
  </div>;
}
