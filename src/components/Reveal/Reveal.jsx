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
import "./Reveal.css";
function Reveal({ children, className = "", delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const ref = React.useRef(null);
  return (
    <div
      ref={ref}
      style={{ "--delay": `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
export default Reveal;
