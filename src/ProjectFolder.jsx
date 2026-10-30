import React, { useState } from 'react';
import './ProjectFolder.css';

export default function ProjectFolder() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const projects = [{name:'ORU CODE',detail:'A digital experience for a creative code library.',url:'https://orucode.online',image:'/assets/portfolio/websites/orucode-desktop.jpg'},{name:'Mallugrapher UK',detail:'A photography website built around visual storytelling.',url:'https://mallugrapheruk.com',image:'/assets/portfolio/websites/mallugrapher-desktop.jpg'},{name:'UNIQ Floors',detail:'A digital home for a premium flooring supplier.',url:'https://leafcreationism.online',image:'/assets/portfolio/websites/uniq-desktop.jpg'}];
  return <div className="project-folder-scene">
    <div className="project-folder" data-open={open}>
      <span className="project-folder-back" />
      {projects.map((project, i) => <button type="button" className={`project-folder-document document-${i}`} key={project.name} tabIndex={open ? 0 : -1} onClick={() => setSelected(i)} aria-label={`View ${project.name} project`}><img src={project.image} alt="" loading="lazy"/><strong>{project.name}</strong><small>VIEW PROJECT ↗</small></button>)}
      <button type="button" className="project-folder-front" aria-expanded={open} onClick={() => { setOpen(!open); setSelected(null); }}><span className="folder-kicker">LEAF / CREATIVE WORK</span><strong>Ideas, made<br />real<span className="folder-spark"> ✦</span></strong><small>THREE PROJECTS INSIDE</small></button>
    </div>
    {selected !== null ? <div className="project-folder-detail"><img src={projects[selected].image} alt={`${projects[selected].name} website preview`}/><strong>{projects[selected].name}</strong><p>{projects[selected].detail}</p><a href={projects[selected].url} target="_blank" rel="noopener noreferrer">Visit website ↗</a><button type="button" onClick={() => setSelected(null)}>Close</button></div> : <span className="project-folder-hint">{open ? 'Select a project' : 'Tap to open'} ↗</span>}
  </div>;
}
