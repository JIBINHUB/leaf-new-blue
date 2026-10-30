import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import './CircularGallery.css';

const vertex = `#version 300 es
in vec2 aPosition;
uniform vec2 uResolution,uCenter,uSize;
uniform float uAngle,uWave,uTime,uFocal;
out vec2 vUv;
void main(){
 vec2 local=aPosition*uSize;
 float z=uWave*(sin(aPosition.x*4.+uTime)+cos(aPosition.y*2.+uTime))*.5;
 float depth=uFocal/max(uFocal-z,1.);
 float c=cos(uAngle),s=sin(uAngle);
 vec2 turned=vec2(c*local.x-s*local.y,s*local.x+c*local.y);
 vUv=aPosition+.5;
 gl_Position=vec4((uCenter+turned*depth)/(uResolution*.5),0.,1.);
}`;
const fragment = `#version 300 es
precision highp float;
uniform sampler2D uTexture;
uniform vec2 uSize;
uniform float uAspect,uAlpha,uFade,uRadius;
in vec2 vUv;out vec4 outColor;
void main(){
 float aspect=uSize.x/uSize.y;
 vec2 crop=aspect>uAspect?vec2(1.,uAspect/aspect):vec2(aspect/uAspect,1.);
 vec4 color=texture(uTexture,(vUv-.5)*crop+.5);
 vec2 p=(vUv-.5)*uSize,b=uSize*.5;
 vec2 q=abs(p)-b+uRadius;
 float d=length(max(q,0.))+min(max(q.x,q.y),0.)-uRadius;
 float cover=1.-smoothstep(-1.,1.,d);
 outColor=vec4(color.rgb,color.a*uAlpha*cover);
}`;
const clamp = (v,a,b) => Math.min(b,Math.max(a,v));
const wrap = (v,n) => ((v%n)+n)%n;

export default function CircularGallery({items}) {
 const root=useRef(null),canvas=useRef(null),labels=useRef([]),engine=useRef(null);
 const [active,setActive]=useState(0),[open,setOpen]=useState(false),[fallback,setFallback]=useState(false);
 useEffect(()=>{
  const el=root.current, surface=canvas.current;
  const gl=surface.getContext('webgl2',{alpha:true,antialias:false,depth:false});
  if(!gl){setFallback(true);return;}
  const compile=(type,source)=>{const shader=gl.createShader(type);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){gl.deleteShader(shader);return null;}return shader;};
  const vs=compile(gl.VERTEX_SHADER,vertex),fs=compile(gl.FRAGMENT_SHADER,fragment);
  if(!vs||!fs){setFallback(true);return;}
  const program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.bindAttribLocation(program,0,'aPosition');gl.linkProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);
  if(!gl.getProgramParameter(program,gl.LINK_STATUS)){gl.deleteProgram(program);setFallback(true);return;}
  const u=Object.fromEntries(['uResolution','uCenter','uSize','uAngle','uWave','uTime','uFocal','uTexture','uAspect','uAlpha','uFade','uRadius'].map(name=>[name,gl.getUniformLocation(program,name)]));
  const vertices=[],indices=[],nx=24,ny=16;
  for(let y=0;y<=ny;y++)for(let x=0;x<=nx;x++)vertices.push(x/nx-.5,y/ny-.5);
  for(let y=0;y<ny;y++)for(let x=0;x<nx;x++){const a=y*(nx+1)+x,b=a+1,c=a+nx+1;indices.push(a,b,c+1,a,c+1,c);}
  const vao=gl.createVertexArray();gl.bindVertexArray(vao);
  const vb=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vb);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertices),gl.STATIC_DRAW);gl.enableVertexAttribArray(0);gl.vertexAttribPointer(0,2,gl.FLOAT,false,0,0);
  const ib=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ib);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),gl.STATIC_DRAW);
  let alive=true,visible=false,raf=0,last=0,width=1,height=1,dpr=1,scroll=0,target=0,opened=0,openTarget=0,drag=null,cards=[],current=0;
  const reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  const textures=items.map(item=>{
   const entry={texture:null,aspect:.78};const image=new Image();image.decoding='async';image.crossOrigin='anonymous';
   image.onload=()=>{if(!alive)return;const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);entry.texture=texture;entry.aspect=image.naturalWidth/image.naturalHeight;wake();};
   image.src=item.image;return entry;
  });
  const measure=()=>{const h=Math.min(height*.63,width<700?310:390),w=h*.78;return {h,w,spacing:w*1.32};};
  const select=slot=>{target=slot;wake();};
  const close=()=>{openTarget=0;setOpen(false);wake();};
  function wake(){if(alive&&visible&&!document.hidden&&!raf)raf=requestAnimationFrame(frame);}
  function frame(now){
   raf=0;if(!visible||document.hidden||!alive)return;
   const dt=last?Math.min((now-last)/1000,.05):1/60;last=now;
   const before=scroll;scroll+=(target-scroll)*(reduce?1:1-Math.exp(-dt/0.12));if(Math.abs(target-scroll)<.0001)scroll=target;
   opened+=(openTarget-opened)*(reduce?1:1-Math.exp(-dt/.14));if(Math.abs(openTarget-opened)<.001)opened=openTarget;
   const {w,h,spacing}=measure(),n=items.length;const slot=Math.round(target),index=wrap(slot,n);
   if(index!==current){current=index;setActive(index);}
   gl.viewport(0,0,surface.width,surface.height);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);gl.useProgram(program);gl.bindVertexArray(vao);gl.uniform2f(u.uResolution,width*dpr,height*dpr);gl.uniform1f(u.uFocal,height*1.2*dpr);gl.uniform1f(u.uTime,now/450);gl.uniform1i(u.uTexture,0);gl.activeTexture(gl.TEXTURE0);
   cards=[];
   items.forEach((item,i)=>{
    const entry=textures[i],relative=wrap(i-scroll+n/2,n)-n/2;
    const x=relative*spacing;const half=Math.max(width,height*1.9)/2,depth=3*height/16.57,radius=(half*half+depth*depth)/(2*depth),reach=Math.min(Math.abs(x),half,radius*.999);
    const arc=radius-Math.sqrt(radius*radius-reach*reach),angle=-Math.sign(x)*Math.asin(reach/radius);
    const focus=i===index?opened:0,fitW=Math.min(width-48,(height-110)*entry.aspect),fitH=fitW/entry.aspect;
    const card={i,x:x*(1-focus),y:-arc*(1-focus)+20*focus,angle:angle*(1-focus),w:w+(fitW-w)*focus,h:h+(fitH-h)*focus};cards.push(card);
    const label=labels.current[i];if(label){label.style.transform=`translate(${width/2+card.x}px,${height/2-card.y+card.h/2+23}px) translate(-50%,-50%) rotate(${-card.angle}rad)`;label.style.opacity=String(Math.abs(x)>width/2+w?0:1-opened*(i===index?0:1));}
    if(!entry.texture||Math.abs(card.x)>width/2+card.w)return;
    gl.bindTexture(gl.TEXTURE_2D,entry.texture);gl.uniform2f(u.uCenter,card.x*dpr,card.y*dpr);gl.uniform2f(u.uSize,card.w*dpr,card.h*dpr);gl.uniform1f(u.uAngle,card.angle);gl.uniform1f(u.uWave,reduce?0:Math.min(Math.abs(scroll-before)*spacing,20)*dpr*(1-focus));gl.uniform1f(u.uAspect,entry.aspect);gl.uniform1f(u.uAlpha,1-opened*(i===index?0:.9));gl.uniform1f(u.uRadius,12*dpr);gl.drawElements(gl.TRIANGLES,indices.length,gl.UNSIGNED_SHORT,0);
   });
   if(scroll!==target||opened!==openTarget)wake();else last=0;
  }
  const resize=()=>{width=el.clientWidth;height=el.clientHeight;dpr=Math.min(window.devicePixelRatio||1,width<700?1:1.5);surface.width=Math.round(width*dpr);surface.height=Math.round(height*dpr);wake();};
  const hit=e=>{const rect=el.getBoundingClientRect(),x=e.clientX-rect.left-width/2,y=height/2-(e.clientY-rect.top);return cards.find(card=>{const dx=x-card.x,dy=y-card.y,c=Math.cos(-card.angle),s=Math.sin(-card.angle);return Math.abs(c*dx-s*dy)<card.w/2&&Math.abs(s*dx+c*dy)<card.h/2;});};
  const down=e=>{if(e.button>0||e.target.closest('button'))return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,start:target,moved:false};};
  const move=e=>{if(!drag||e.pointerId!==drag.id)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(!drag.moved&&Math.hypot(dx,dy)>7){if(Math.abs(dy)>Math.abs(dx)&&e.pointerType!=='mouse'){drag=null;return;}drag.moved=true;el.setPointerCapture(e.pointerId);}if(drag.moved){target=drag.start-dx/measure().spacing;wake();}};
  const up=e=>{if(!drag||drag.id!==e.pointerId)return;const moved=drag.moved;drag=null;if(el.hasPointerCapture(e.pointerId))el.releasePointerCapture(e.pointerId);if(moved){target=Math.round(target);wake();return;}const card=hit(e);if(card){target=Math.round(scroll+(wrap(card.i-scroll+items.length/2,items.length)-items.length/2));openTarget=opened>.5&&card.i===current?0:1;setOpen(Boolean(openTarget));wake();}};
  const cancel=()=>{drag=null;target=Math.round(target);wake();};
  const wheel=e=>{if(Math.abs(e.deltaX)<=Math.abs(e.deltaY))return;e.preventDefault();select(Math.round(target)+Math.sign(e.deltaX));};
  const key=e=>{if(e.key==='Escape'){close();return;}if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();select(Math.round(target)+(e.key==='ArrowRight'?1:-1));}};
  const visibility=()=>{last=0;wake();};
  const ro=new ResizeObserver(resize);ro.observe(el);const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;last=0;wake();});io.observe(el);
  el.addEventListener('pointerdown',down);el.addEventListener('pointermove',move);el.addEventListener('pointerup',up);el.addEventListener('pointercancel',cancel);el.addEventListener('wheel',wheel,{passive:false});el.addEventListener('keydown',key);document.addEventListener('visibilitychange',visibility);
  engine.current={step:direction=>select(Math.round(target)+direction),close,open:i=>{select(Math.round(scroll+wrap(i-scroll+items.length/2,items.length)-items.length/2));openTarget=1;setOpen(true);wake();}};
  resize();
  return()=>{alive=false;cancelAnimationFrame(raf);ro.disconnect();io.disconnect();el.removeEventListener('pointerdown',down);el.removeEventListener('pointermove',move);el.removeEventListener('pointerup',up);el.removeEventListener('pointercancel',cancel);el.removeEventListener('wheel',wheel);el.removeEventListener('keydown',key);document.removeEventListener('visibilitychange',visibility);textures.forEach(entry=>entry.texture&&gl.deleteTexture(entry.texture));gl.deleteBuffer(vb);gl.deleteBuffer(ib);gl.deleteVertexArray(vao);gl.deleteProgram(program);engine.current=null;};
 },[items]);
 return <div className="circular-gallery" ref={root} role="region" aria-label="Poster gallery" aria-roledescription="carousel" tabIndex={0}>
  <canvas ref={canvas} aria-hidden="true"/>
  {!fallback&&<div className="circular-gallery-labels" aria-hidden="true">{items.map((item,i)=><span key={item.image} ref={el=>{labels.current[i]=el;}}>{item.text}</span>)}</div>}
  {fallback&&<div className="circular-gallery-fallback">{items.map(item=><figure key={item.image}><img src={item.image} alt={item.text}/><figcaption>{item.text}</figcaption></figure>)}</div>}
  <ul className="circular-gallery-hidden">{items.map((item,i)=><li key={item.image}><button type="button" tabIndex={i===active?0:-1} onClick={()=>engine.current?.open(i)}>{item.text}</button></li>)}</ul>
  {open&&<button type="button" className="circular-gallery-close" onClick={()=>engine.current?.close()} aria-label="Close poster"><X size={18}/></button>}
  {!fallback&&<div className="circular-gallery-controls"><button type="button" onClick={()=>engine.current?.step(-1)} aria-label="Previous poster"><ArrowLeft size={17}/></button><span>{String(active+1).padStart(2,'0')} / {items.length} · Drag to explore</span><button type="button" onClick={()=>engine.current?.step(1)} aria-label="Next poster"><ArrowRight size={17}/></button></div>}
 </div>;
}
