import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ContactPage.css';

const services = ['Brand strategy', 'Brand identity', 'UI/UX design', 'Website development', 'Mobile apps', 'Advertising', 'AI ads', 'Shopify', 'Other'];
const budgets = ['Under ₹25,000', '₹25,000–₹50,000', '₹50,000–₹1 lakh', '₹1 lakh+', 'Let’s discuss'];
export default function ContactPage() {
  const [selected, setSelected] = useState([]);
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');
  const onSubmit = event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [`Name: ${form.get('name')}`, `Email: ${form.get('email')}`, `Brief: ${form.get('brief')}`, `Website: ${form.get('site') || 'Not provided'}`, `Preferred start: ${form.get('start') || 'Not provided'}`, `Services: ${selected.join(', ') || 'To discuss'}`, `Budget: ${budget || 'To discuss'}`, `Deadline: ${deadline || 'Not provided'}`].join('\n\n');
    window.location.href = `mailto:leafcreationism@gmail.com?subject=${encodeURIComponent('New project enquiry from ' + form.get('name'))}&body=${encodeURIComponent(message)}`;
  };
  return <main className="contact-page"><div className="contact-orb" aria-hidden="true" /><div className="contact-inner"><p className="contact-kicker">LEAF CREATIONISM / START A PROJECT</p><h1>LET’S<br /><span>+ TALK</span></h1><form className="contact-form" onSubmit={onSubmit}>
    <div className="contact-fields"><label>WHAT’S YOUR NAME?<input name="name" placeholder="FULL NAME" required autoComplete="name" /></label><label>WHAT’S YOUR EMAIL?<input name="email" type="email" placeholder="YOU@EMAIL.COM" required autoComplete="email" /></label><label className="contact-wide">WHAT’S YOUR BRIEF?<textarea name="brief" placeholder="TELL US ABOUT YOUR IDEA" rows="4" required /></label><label>CURRENT WEBSITE URL<input name="site" type="url" placeholder="https://example.com" /></label><label>WHEN WOULD YOU LIKE TO START?<input name="start" placeholder="YOUR PREFERRED START DATE" /></label></div>
    <fieldset><legend>WHAT SERVICES DO YOU NEED?</legend><div className="contact-options">{services.map(service => <label key={service}><input type="checkbox" checked={selected.includes(service)} onChange={event => setSelected(old => event.target.checked ? [...old, service] : old.filter(x => x !== service))} /><span>{service}</span></label>)}</div></fieldset>
    <fieldset><legend>WHAT IS YOUR BUDGET?</legend><div className="contact-options">{budgets.map(value => <label key={value}><input type="radio" name="budget" value={value} checked={budget === value} onChange={() => setBudget(value)} /><span>{value}</span></label>)}</div></fieldset>
    <fieldset><legend>DO YOU HAVE A DEADLINE?</legend><div className="contact-options">{['Yes', 'No rush', 'As soon as possible'].map(value => <label key={value}><input type="radio" name="deadline" value={value} checked={deadline === value} onChange={() => setDeadline(value)} /><span>{value}</span></label>)}</div></fieldset>
    <div className="contact-submit"><button type="submit">PREPARE EMAIL <ArrowUpRight size={17}/></button><p>Or email us directly: <a href="mailto:leafcreationism@gmail.com">leafcreationism@gmail.com ↗</a></p></div><p className="contact-help">Your email app will open with the details ready for you to review and send.</p>
    </form></div></main>;
}
