import React, { useMemo } from 'react';
import CircularGallery from './CircularGallery';
export default function LeafAdvantageGallery({items}) {
 const posters=useMemo(()=>items.map(item=>({image:item.src,text:item.alt,description:item.description})),[items]);
 return <section className="leaf-circular-section" id="leaf-advantage" aria-labelledby="leaf-arc-title"><header className="leaf-circular-heading"><h2 id="leaf-arc-title">Ideas made<br/>to be noticed.</h2><p>A selection of posters and campaigns from the Leaf studio.</p></header><CircularGallery items={posters}/></section>;
}
