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
import "./DonateBanner.css";
function DonateBanner() {
  return (
    <section id="donate" className="donate-banner">
      <div className="donate-glow" />
      <div className="container donate-inner">
        <div>
          <span className="eyebrow light">आपका सहयोग मायने रखता है</span>
          <h2>आइए, मिलकर बदलाव लाएं</h2>
          <p>आपका छोटा सा सहयोग किसी के लिए नई उम्मीद बन सकता है।</p>
        </div>
        <Button href="adityatiwaria2460@gmail.com">
          <Heart size={16} /> Donate Now
        </Button>
      </div>
    </section>
  );
}
export default DonateBanner;
