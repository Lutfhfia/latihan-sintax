import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NavBar from "../components/navbar";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import StatSection from "../components/stat-section";
import TimeLine from "../components/timeline";
import Footer from "../components/footer";



export default function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <StatSection />
      <TimeLine />
      <Footer />
    </div>
  );
}

