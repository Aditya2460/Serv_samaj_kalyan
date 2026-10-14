import React, { useEffect, useState } from 'react';
import { Heart, ArrowRight, ArrowUpRight, Menu, X, Utensils, Stethoscope, BookOpen, Users, Droplet, Flower2, HandHeart, ShieldCheck, CalendarDays, MapPin, FileText, ChevronDown, Sparkles, CheckCircle2, Instagram, Youtube, Facebook, Twitter, Phone, Mail, Handshake, GraduationCap, HeartPulse } from 'lucide-react';
import { image, services, activities, campaigns } from '../../data.js';
import Brand from '../Brand/Brand.jsx';
import Button from '../Button/Button.jsx';
import Reveal from '../Reveal/Reveal.jsx';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import './Hero.css';
function Hero() {
  const slides = [
    { title: <>सेवा से समाज का <em>निर्माण</em></>, desc: 'जरूरतमंद परिवारों, बच्चों, बुजुर्गों और मरीजों की सहायता के लिए सर्व समाज कल्याण समिति आपके सहयोग की अपेक्षा करती है।', image: image('photo-1488521787991-ed7bbaae773c', 1800), label: 'सामाजिक सेवा ही सच्ची सेवा है' },
    { title: <>हर बच्चे को मिले <em>नई उम्मीद</em></>, desc: 'शिक्षा, स्वास्थ्य और पोषण के माध्यम से हम हर परिवार के लिए बेहतर भविष्य बनाने का प्रयास करते हैं।', image: image('photo-1509099836639-18ba1795216d', 1800), label: 'शिक्षा और अवसर सभी के लिए' },
    { title: <>आपका सहयोग, <em>बड़ा बदलाव</em></>, desc: 'आपका छोटा सा योगदान किसी जरूरतमंद के जीवन में खुशी, सम्मान और आत्मविश्वास ला सकता है।', image: image('photo-1531206715517-5c0ba140b2b8', 1800), label: 'आइए मानवता का साथ निभाएं' }
  ];
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = setInterval(() => setActive(v => (v + 1) % slides.length), 6000); return () => clearInterval(timer); }, []);
  const slide = slides[active];
  const move = (direction) => setActive(v => (v + direction + slides.length) % slides.length);
  return <section id="home" className="hero hero-slider">
    <div className="hero-image" style={{ backgroundImage: `url("${slide.image}")` }} key={active} />
    <div className="hero-overlay" />
    <button className="hero-arrow hero-arrow-prev" onClick={() => move(-1)} aria-label="Previous slide"><ChevronDown size={23}/></button>
    <div className="container hero-content">
      <div className="hero-copy" key={active}>
        <span className="hero-kicker"><span className="kicker-dot"/> {slide.label}</span>
        <h1>{slide.title}</h1><p>{slide.desc}</p>
        <div className="hero-actions"><Button href="#donate"><Heart size={16}/> अभी सहयोग करें</Button><Button href="#services" variant="outline">हमारे कार्य देखें</Button></div>
      </div>
      <div className="hero-float"><span className="float-icon"><Heart size={18}/></span><small>हर सहयोग कीमती है</small><strong>मिलकर बदलाव लाएं</strong><p>किसी के जीवन में नई उम्मीद बनें।</p><div className="float-line"><span/></div></div>
      <button className="hero-arrow hero-arrow-next" onClick={() => move(1)} aria-label="Next slide"><ChevronDown size={23}/></button>
      <div className="hero-pagination" aria-label="Choose hero slide">{slides.map((item,i)=><button key={item.label} className={i===active?'active':''} onClick={() => setActive(i)} aria-label={`Go to slide ${i+1}`} />)}</div>
    </div>
    <div className="hero-bottom"><div className="container hero-bottom-inner"><span><ShieldCheck size={17}/> पारदर्शी सेवा का संकल्प</span><span>मानवता • सहयोग • विश्वास</span></div></div>
  </section>;
}
export default Hero;
