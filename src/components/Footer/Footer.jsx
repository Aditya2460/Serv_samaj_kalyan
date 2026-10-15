import React from "react";
import {
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Campaigns", href: "#campaigns" },
    { label: "Our Impact", href: "#events" },
    { label: "Contact Us", href: "#footer" },
  ];

  const supportLinks = [
    { label: "Donate Now", href: "/donate" },
    { label: "Become a Volunteer", href: "#campaigns" },
    { label: "Upcoming Events", href: "#events" },
    { label: "Frequently Asked Questions", href: "#about" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://instagram.com/",
      Icon: Instagram,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/",
      Icon: Facebook,
    },
    {
      label: "YouTube",
      href: "https://youtube.com/",
      Icon: Youtube,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/",
      Icon: Linkedin,
    },
  ];

  return (
    <footer className="ngo-footer" id="footer">
      {/* Main Footer */}
      <div className="ngo-footer-main">
        <div className="ngo-footer-container">
          {/* Organization Details */}
          <div className="ngo-footer-brand">
            <a href="/" className="ngo-footer-logo">
              <span className="ngo-logo-icon">
                <HeartHandshake size={29} />
              </span>

              <span className="ngo-logo-text">
                <strong>Sarv Samaj</strong>
                <span>Kalyan Samiti</span>
              </span>
            </a>

            <p className="ngo-footer-tagline">सेवा से समाज का निर्माण</p>

            <p className="ngo-footer-description">
              Together, we can create a better tomorrow. Your support helps us
              provide food, education, healthcare, and essential resources to
              communities in need.
            </p>

            <a href="donate" className="ngo-footer-donate">
              <Heart size={18} />
              <span>Donate Now</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="ngo-footer-column">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="ngo-footer-column">
            <h3>Get Involved</h3>

            <ul>
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="ngo-footer-column ngo-footer-contact">
            <h3>Contact Us</h3>

            <div className="ngo-contact-item">
              <span className="ngo-contact-icon">
                <MapPin size={19} />
              </span>

              <p>Uttar Pradesh, India</p>
            </div>

            <div className="ngo-contact-item">
              <span className="ngo-contact-icon">
                <Phone size={19} />
              </span>

              <a href="tel:+910000000000">+91 8798767667</a>
            </div>

            <div className="ngo-contact-item">
              <span className="ngo-contact-icon">
                <Mail size={19} />
              </span>

              <a href="mailto:adityatiwaria2460@gmail.com">
                adityatiwaria2460@gmail.com
              </a>
            </div>

            <div className="ngo-footer-socials">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="ngo-footer-bottom">
        <div className="ngo-footer-bottom-inner">
          <p>© {currentYear} Sarv Samaj Kalyan Samiti. All rights reserved.</p>

          <div className="ngo-footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="ngo-footer-separator">|</span>
            <a href="/terms">Terms of Use</a>
          </div>

          <p className="ngo-footer-credit">
            Made with <Heart size={14} fill="currentColor" /> for humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
