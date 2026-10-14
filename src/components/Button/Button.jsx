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
import "./Button.css";
function Button({
  children,
  variant = "primary",
  href = "#campaigns",
  ...props
}) {
  return (
    <a className={`button ${variant}`} href={href} {...props}>
      {children}
      <ArrowRight size={16} />
    </a>
  );
}
export default Button;
