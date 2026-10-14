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
import Reveal from "../Reveal/Reveal.jsx";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import "./Header.css";
import Brand from "../Brand/Brand.jsx";
import Button from "../Button/Button.jsx";
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Home", "#home"],
    ["About Us", "#about"],
    ["Our Services", "#services"],
    ["Our Work", "#work"],
    ["Campaigns", "#campaigns"],
    ["Events", "#events"],
    ["Transparency", "#transparency"],
  ];
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="topline">
        <div className="container top-inner">
          <span>
            <Sparkles size={13} /> समाज सेवा के लिए आपका स्वागत है
          </span>
          <div>
            <a href="tel:+919876543210">
              <Phone size={13} /> +91 9876543210
            </a>
            <a href="mailto:contact@example.org">
              <Mail size={13} /> संपर्क करें
            </a>
          </div>
        </div>
      </div>
      <nav className="container nav">
        <Brand />
        <Button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </Button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
              {label === "Our Services" && <ChevronDown size={13} />}
            </a>
          ))}
          <Button href="#donate">Donate Now</Button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
