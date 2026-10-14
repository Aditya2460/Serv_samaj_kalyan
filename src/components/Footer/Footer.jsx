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
import "./Footer.css";
function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about">
            <Brand />
            <p>
              समाज सेवा, मानवता और पारदर्शिता के मूल्यों के साथ जरूरतमंद लोगों
              तक सहयोग पहुँचाने का प्रयास।
            </p>
            <div className="socials">
              <a href="#contact" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#contact" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#contact" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#contact" aria-label="Youtube">
                <Youtube />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#about">हमारे बारे में</a>
            <a href="#services">हमारी सेवाएं</a>
            <a href="#work">सामाजिक कार्य</a>
            <a href="#campaigns">सहयोग अभियान</a>
          </div>
          <div className="footer-links">
            <h4>Get Involved</h4>
            <a href="#donate">Donate Now</a>
            <a href="#join">Volunteer</a>
            <a href="#events">Events & Camps</a>
            <a href="#transparency">Transparency</a>
          </div>
          <div className="footer-contact">
            <h4>संपर्क करें</h4>
            <p>
              <MapPin /> आधिकारिक पता यहां जोड़ें
            </p>
            <p>
              <Phone /> +91 8798986567
            </p>
            <p>
              <Mail /> official email यहां जोड़ें
            </p>
            <small>
              सभी संपर्क विवरण संस्था द्वारा सत्यापित होने के बाद जोड़ें।
            </small>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} सर्व समाज कल्याण समिति. सर्वाधिकार
            सुरक्षित।
          </span>
          <span>सेवा • मानवता • पारदर्शिता</span>
          <p>© Copyright 2025 </p>
          <span>Devloped by Aditya Tiwari</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
