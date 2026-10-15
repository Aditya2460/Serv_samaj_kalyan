import React, { useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Services from "./components/Services/Services.jsx";
import CampaignSection from "./components/CampaignSection/CampaignSection.jsx";
import OurWork from "./components/OurWork/OurWork.jsx";
import Community from "./components/Community/Community.jsx";
import Transparency from "./components/Transparency/Transparency.jsx";
import DonateBanner from "./components/DonateBanner/DonateBanner.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Heart } from "lucide-react";
import "./App.css";
import Donate from "./components/Donate/Donate.jsx";
import { Route, Routes } from "react-router-dom";
export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");
  }, []);

  return (
    <>
      
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <CampaignSection />
        <OurWork />
        <Community />
        <Transparency />
        <DonateBanner />
      </main>
      <Footer />
      <a className="floating-donate" href="#donate">
        <Heart size={17} />
        <span>Donate</span>
      </a>
    </>
  );
}
