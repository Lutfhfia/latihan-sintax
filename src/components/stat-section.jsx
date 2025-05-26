import { Star } from "lucide-react";
import React from "react";

function StatSection() {
  return (
    <section className="py-16">
      <div className="bg-[url(/BackgroundMI.png)] bg-fixed flex-col md:flex-row">
        <div className="grid grid-cols-2 md:grid-cols-4 items-center text-center bg-black/70 backdrop-blur-sm mx-auto py-16 ">
          <div className="font-bold text-white">
            <h1 className="text-5xl">90+</h1>
            <p>Pendaftar</p>
          </div>
          <div className="font-bold text-white">
            <h1 className="text-5xl">8+</h1>
            <p>Mentor</p>
          </div>
          <div className="font-bold text-white">
            <div className=" flex items-center justify-center">
              <h1 className=" flex items-center text-5xl">
                5 <Star />
              </h1>
            </div>
            <p>Review & Ulasan</p>
          </div>
          <div className="font-bold text-white">
            <h1 className="text-5xl">100+</h1>
            <p>Lulusan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatSection;
