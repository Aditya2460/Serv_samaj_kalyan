import React, { useEffect, useState } from 'react';
import { Heart, ArrowRight, ArrowUpRight, Menu, X, Utensils, Stethoscope, BookOpen, Users, Droplet, Flower2, HandHeart, ShieldCheck, CalendarDays, MapPin, FileText, ChevronDown, Sparkles, CheckCircle2, Instagram, Youtube, Facebook, Twitter, Phone, Mail, Handshake, GraduationCap, HeartPulse } from 'lucide-react';
import { image, services, activities, campaigns } from '../../data.js';
import Brand from '../Brand/Brand.jsx';
import Button from '../Button/Button.jsx';
import Reveal from '../Reveal/Reveal.jsx';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import './Services.css';
function Services() {
  return <section id="services" className="section services-section"><div className="container">
    <Reveal><SectionHeading eyebrow="हमारी सेवाएं" title="सेवा के विविध क्षेत्र" text="हम समाज के हर वर्ग के लिए समर्पित हैं। हमारी सेवाएं समाज के विभिन्न क्षेत्रों में निरंतर जारी हैं।" link="#services"/></Reveal>
    <div className="service-grid">{services.map((s,i) => <Reveal key={s.title} delay={i*55}><a className="service-card" href="#donate">
      <div className="service-image"><img src={s.img} alt={s.title} loading="lazy"/><span className={`service-icon ${s.color}`}><s.icon size={20}/></span><span className="card-arrow"><ArrowUpRight size={17}/></span></div>
      <div className="service-body"><h3>{s.title}</h3><p>{s.desc}</p></div>
    </a></Reveal>)}</div>
  </div></section>;
}
export default Services;
