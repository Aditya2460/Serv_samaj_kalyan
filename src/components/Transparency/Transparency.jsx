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
import "./Transparency.css";
function Transparency() {
  const docs = [
    { icon: ShieldCheck, title: "पंजीकरण विवरण" },
    { icon: FileText, title: "वार्षिक रिपोर्ट" },
    { icon: CheckCircle2, title: "सेवा रिपोर्ट" },
    { icon: Heart, title: "दान उपयोग जानकारी" },
  ];
  return (
    <section className="container transparency-wrap" id="transparency">
      <Reveal className="transparency">
        <div className="transparency-intro">
          <span className="transparency-emblem">
            <ShieldCheck size={29} />
          </span>
          <div>
            <span className="eyebrow">विश्वास हमारी प्राथमिकता</span>
            <h3>पारदर्शिता एवं दस्तावेज</h3>
            <p>उपलब्ध और सत्यापित दस्तावेज, रिपोर्ट और सेवा अपडेट एक ही जगह।</p>
          </div>
        </div>
        <a className="transparency-link" href="#contact">
          जानकारी देखें <ArrowRight size={15} />
        </a>
        <div className="document-links">
          {docs.map((d) => (
            <a href="#contact" key={d.title}>
              <d.icon size={19} />
              <span>{d.title}</span>
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
export default Transparency;
