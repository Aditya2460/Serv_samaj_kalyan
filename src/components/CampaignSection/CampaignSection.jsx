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
import "./CampaignSection.css";
function CampaignSection() {
  const [selected, setSelected] = useState(0);
  const campaign = campaigns[selected];
  return (
    <section id="campaigns" className="section campaign-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="सहयोग अभियान / Crowdfunding"
            title="बदलाव की शुरुआत, आपके सहयोग से"
            text="एक उद्देश्य चुनें और उस बदलाव का हिस्सा बनें जो लोगों के जीवन में वास्तविक उम्मीद लाता है।"
          />
        </Reveal>
        <div className="campaign-layout">
          <Reveal className="campaign-feature">
            <div className="campaign-photo">
              <img src={campaign.img} alt={campaign.title} />
              <span className="verified">
                <ShieldCheck size={14} /> Campaign information
              </span>
            </div>
            <div className="campaign-info">
              <span className="eyebrow">{campaign.tag} अभियान</span>
              <h3>{campaign.title}</h3>
              <p>{campaign.desc}</p>
              <div className="funding-numbers">
                <div>
                  <strong>{campaign.target}</strong>
                  <small>लक्ष्य राशि</small>
                </div>
                <div>
                  <strong>{campaign.raised}</strong>
                  <small>एकत्रित राशि*</small>
                </div>
                <div>
                  <strong>{campaign.percent}%</strong>
                  <small>प्रगति*</small>
                </div>
              </div>
              <div className="progress-track">
                <span
                  style={{
                    width: `${campaign.percent}%`,
                    "--progress-width": `${campaign.percent}%`,
                  }}
                />
              </div>
              <div className="campaign-footer">
                <span>
                  <Users size={16} /> सहयोग अभियान
                </span>
                <Button href="#donate">सहयोग करें</Button>
              </div>
              <div className="campaign-tabs">
                {campaigns.map((c, i) => (
                  <button
                    key={c.title}
                    className={selected === i ? "active" : ""}
                    onClick={() => setSelected(i)}
                    aria-label={`Show ${c.title}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="impact-panel" delay={120}>
            <div className="impact-heading">
              <span className="eyebrow">हमारा प्रभाव</span>
              <h3>छोटे प्रयास, बड़ा बदलाव</h3>
              <p>
                वास्तविक सेवा कार्यों से समाज में सकारात्मक बदलाव की दिशा में
                कदम।
              </p>
            </div>
            <div className="impact-grid">
              <div className="impact-item">
                <span className="impact-icon mint">
                  <Users />
                </span>
                <div>
                  <strong>समुदाय</strong>
                  <small>सहयोग से मजबूत</small>
                </div>
              </div>
              <div className="impact-item">
                <span className="impact-icon blue">
                  <HeartPulse />
                </span>
                <div>
                  <strong>स्वास्थ्य</strong>
                  <small>बेहतर पहुँच का प्रयास</small>
                </div>
              </div>
              <div className="impact-item">
                <span className="impact-icon violet">
                  <GraduationCap />
                </span>
                <div>
                  <strong>शिक्षा</strong>
                  <small>नई संभावनाएं</small>
                </div>
              </div>
              <div className="impact-item">
                <span className="impact-icon orange">
                  <HandHeart />
                </span>
                <div>
                  <strong>सेवा</strong>
                  <small>जरूरतमंदों के साथ</small>
                </div>
              </div>
            </div>
            <div className="impact-note">
              <ShieldCheck size={16} /> केवल सत्यापित प्रभाव आंकड़े प्रकाशित किए
              जाएंगे।
            </div>
          </Reveal>
        </div>
        <p className="data-note">
          * अभियान की राशि और प्रगति प्रदर्शन के लिए उदाहरण हैं। वास्तविक आंकड़े
          जोड़ने के बाद ही प्रकाशित करें।
        </p>
      </div>
    </section>
  );
}
export default CampaignSection;
