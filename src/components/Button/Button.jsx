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
import { Link } from "react-router-dom";
function Button({
  children,
  variant = "primary",
  href = "#campaigns",
  ...props
}) {
  return (
    <Link className={`button ${variant}`} to={href} {...props}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
export default Button;
