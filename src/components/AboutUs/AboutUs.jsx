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
import "./AboutUs.css";
function AboutUs() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-layout">
        <Reveal className="about-visual">
          <img
            src={image("photo-1559027615-cd4628902d4a", 1000)}
            alt="समुदाय के साथ मिलकर सेवा करते स्वयंसेवक"
            loading="lazy"
          />
          <div className="about-stamp">
            <HandHeart size={27} />
            <strong>सेवा • मानवता</strong>
            <small>हर कदम, सबके लिए</small>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={100}>
          <span className="eyebrow">हमारे बारे में</span>
          <h2>समाज की सेवा, हमारा संकल्प</h2>
          <p>
            सर्व समाज कल्याण समिति का उद्देश्य जरूरतमंद परिवारों तक सहयोग
            पहुँचाना और हर व्यक्ति को सम्मान, अवसर और बेहतर जीवन की उम्मीद देना
            है। हम भोजन, स्वास्थ्य, शिक्षा और सामाजिक सहयोग के क्षेत्रों में
            समुदाय के साथ मिलकर काम करने की भावना रखते हैं।
          </p>
          <p>
            हम मानते हैं कि बदलाव की शुरुआत छोटे, ईमानदार प्रयासों से होती है।
            आपके सहयोग और सहभागिता से यह प्रयास और अधिक लोगों तक पहुँच सकता है।
          </p>
          <div className="about-values">
            <div>
              <CheckCircle2 />
              <span>
                <strong>मानवता</strong>
                <small>हर व्यक्ति का सम्मान</small>
              </span>
            </div>
            <div>
              <ShieldCheck />
              <span>
                <strong>पारदर्शिता</strong>
                <small>जिम्मेदार सेवा का प्रयास</small>
              </span>
            </div>
            <div>
              <Handshake />
              <span>
                <strong>सहयोग</strong>
                <small>समुदाय के साथ मिलकर</small>
              </span>
            </div>
          </div>
          <Button href="#services">हमारी सेवाएं जानें</Button>
        </Reveal>
      </div>
    </section>
  );
}
export default AboutUs;
