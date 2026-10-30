import React, { useEffect, useState } from 'react';
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

const phoneImages = [{ url: 'https://orucode.online/', name: 'ORU CODE' }];

export default function LeafPhonePreview() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const interval = window.setInterval(() => setActiveImage(index => index + 1), 9000);
    return () => window.clearInterval(interval);
  }, []);

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
            <iframe key={activeImage} className="leaf-phone-live-site" src={phoneImages[0].url} title={`${phoneImages[0].name} live website preview`} tabIndex={-1} />
          </div>
          <div className="leaf-phone-island" aria-hidden="true" />
        </div>
      </div>
    </div>
  </div>;
}
