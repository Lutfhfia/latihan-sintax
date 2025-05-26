import React from "react";
import NavBar from "../components/navbar";

export default function ContackPage() {
  return (
    <div>
      <NavBar />
      <div className="px-4">
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
              <h1 className=" text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Contact{" "}
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Saya adalah seorang desainer web yang menggabungkan kreativitas
                dan strategi untuk membangun antarmuka digital yang intuitif,
                estetis, dan responsif. Fokus saya adalah menghadirkan solusi
                desain yang sesuai dengan kebutuhan klien dan pengguna.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        <div className="">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">
            Send Us a Message
          </h2>
          <p>
            Fill out the form below and our team will get back to you within 24
            hours.
          </p>
        </div>
        <div className="mb-4 mt-4">
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Full Name?</legend>
            <input type="text" className="input" placeholder="Your Name" />
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Company Name</legend>
            <input type="text" className="input" placeholder="Your Company" />
          </fieldset>
        </div>
      </div>
    </div>
  );
}
