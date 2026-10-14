import React, { useEffect, useState } from "react";
import {
  HandHeart,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Handshake,
} from "lucide-react";
import "./SectionHeading.css";
function SectionHeading({ eyebrow, title, text, link }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {link && (
        <a className="text-link" href={link}>
          सभी देखें <ArrowUpRight size={16} />
        </a>
      )}
    </div>
  );
}
export default SectionHeading;
