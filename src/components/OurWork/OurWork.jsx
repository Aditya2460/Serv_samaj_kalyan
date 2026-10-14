import React, { useEffect, useState } from 'react';
import { Heart, ArrowRight, ArrowUpRight, Menu, X, Utensils, Stethoscope, BookOpen, Users, Droplet, Flower2, HandHeart, ShieldCheck, CalendarDays, MapPin, FileText, ChevronDown, Sparkles, CheckCircle2, Instagram, Youtube, Facebook, Twitter, Phone, Mail, Handshake, GraduationCap, HeartPulse } from 'lucide-react';
import { image, services, activities, campaigns } from '../../data.js';
import Brand from '../Brand/Brand.jsx';
import Button from '../Button/Button.jsx';
import Reveal from '../Reveal/Reveal.jsx';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import './OurWork.css';
function OurWork() {
  return <section id="work" className="section work-section"><div className="container"><Reveal><SectionHeading eyebrow="ताज़ा गतिविधियां" title="हमारे हाल के सामाजिक कार्य" text="हमारी गतिविधियों की कहानियां, तस्वीरें और अपडेट यहां साझा किए जाएंगे।" link="#work"/></Reveal>
    <div className="activity-grid">{activities.map((a,i)=><Reveal key={a.title} delay={i*70}><a href="#gallery" className="activity-card"><div className="activity-image"><img src={a.img} alt={a.title} loading="lazy"/><span className="date-tag">{a.date}</span><span className="activity-arrow"><ArrowUpRight size={18}/></span></div><div className="activity-info"><h3>{a.title}</h3><span><MapPin size={13}/>{a.location}</span></div></a></Reveal>)}</div>
  </div></section>;
}
export default OurWork;
