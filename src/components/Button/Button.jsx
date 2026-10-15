import React, { useEffect, useState } from "react";
import {
  HandHeart,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Handshake,
  ArrowLeft,
} from "lucide-react";
import "./Button.css";
import { Link } from "react-router-dom";
function Button({
  children,
  variant = "primary",
  variant2 = "primary",
  href = "#campaigns",
  arrow = "1",
  ...props
}) {
  return (
    <>
      {arrow == "1" ? (
        <Link className={`button ${variant} `} to={href} {...props}>
          {children}
          {arrow == "1" ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
        </Link>
      ) : (
        <Link className={`button ${variant2} ${variant} `} to={href} {...props}>
          {arrow == "1" ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
          {children}
        </Link>
      )}
    </>
  );
}
export default Button;
