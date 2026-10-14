import React, { useEffect, useState } from "react";
import {
  Heart,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Utensils,
  Stethoscope,
  BookOpen,
  Users,
  Droplet,
  Flower2,
  HandHeart,
  ShieldCheck,
  CalendarDays,
  MapPin,
  FileText,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Phone,
  Mail,
  Handshake,
  GraduationCap,
  HeartPulse,
} from "lucide-react";
import { image, services, activities, campaigns } from "../../data.js";
import Brand from "../Brand/Brand.jsx";
import Button from "../Button/Button.jsx";
import Reveal from "../Reveal/Reveal.jsx";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import "./Community.css";
function Community() {
  return (
    <section className="section community-section" id="events">
      <div className="container community-grid">
        <Reveal className="story-card">
          <span id="about" className="anchor-target" />
          <div className="story-image">
            <img
              src={image("photo-1531206715517-5c0ba140b2b8", 700)}
              alt="Community volunteers working together"
              loading="lazy"
            />
          </div>
          <div className="story-copy">
            <span className="eyebrow">समाज से जुड़ी कहानियां</span>
            <h3>विश्वास से बनता है बेहतर कल</h3>
            <p>
              हर छोटी मदद किसी परिवार, विद्यार्थी या जरूरतमंद व्यक्ति के लिए नई
              उम्मीद बन सकती है।
            </p>
            <a className="text-link" href="#about">
              हमारे उद्देश्य को जानें <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>
        <Reveal className="events-card" delay={90}>
          <SectionHeading
            eyebrow="आगामी कार्यक्रम"
            title="Events & Camps"
            link="#events"
          />
          {[
            ["18", "OCT", "निःशुल्क स्वास्थ्य शिविर", "कानपुर, उत्तर प्रदेश"],
            ["25", "OCT", "रक्तदान जागरूकता", "लखनऊ, उत्तर प्रदेश"],
            ["02", "NOV", "शिक्षा सहायता कार्यक्रम", "वाराणसी, उत्तर प्रदेश"],
          ].map(([d, m, t, l]) => (
            <div className="event-row" key={t}>
              <div className="event-date">
                <strong>{d}</strong>
                <small>{m}</small>
              </div>
              <div>
                <h4>{t}</h4>
                <span>
                  <MapPin size={12} />
                  {l}
                </span>
              </div>
              <ArrowUpRight className="event-arrow" size={16} />
            </div>
          ))}
        </Reveal>
        <Reveal className="join-card" delay={150}>
          <span id="join" className="anchor-target" />
          <div className="join-symbol">
            <Handshake size={27} />
          </div>
          <span className="eyebrow">हमारे साथ जुड़ें</span>
          <h3>आप भी बदलाव का हिस्सा बनें</h3>
          <p>
            स्वयंसेवक बनें, रक्तदान करें या अपने समय और कौशल से समाज की मदद
            करें।
          </p>
          <Button href="#join">स्वयंसेवक बनें</Button>
          <a className="join-secondary" href="#join">
            हमसे जुड़ें <ArrowRight size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
export default Community;
