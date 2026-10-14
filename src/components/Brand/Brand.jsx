import React, { useEffect, useState } from 'react';
import { HandHeart, ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, CheckCircle2, Handshake } from 'lucide-react';
import './Brand.css';
function Brand() {
  return <a className="brand" href="#home" aria-label="Sarv Samaj Kalyan Samiti home">
    <span className="brand-mark"><HandHeart size={26}/><span /></span>
    <span className="brand-copy"><strong>सर्व समाज कल्याण समिति</strong><small>सेवा <i>•</i> मानवता <i>•</i> पारदर्शिता</small></span>
  </a>;
}
export default Brand;
