import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import About1Page from "../components/about1-page";
import HeroSection from "../components/hero-section";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hallo Saya Andin</h1>
            <p className="mb-5">
              Saya adalah seorang desainer web yang menggabungkan kreativitas
              dan strategi untuk membangun antarmuka digital yang intuitif,
              estetis, dan responsif. Fokus saya adalah menghadirkan solusi
              desain yang sesuai dengan kebutuhan klien dan pengguna.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div></div>
      <HeroSection/>
      <About1Page/>
      <Footer />
    </div>
  );
}

export default AboutPage;
