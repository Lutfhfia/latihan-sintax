import { CheckCircle } from "lucide-react";
import React from "react";

const skills = [
  "UI/UX Design",
  "Desain Responsif (Mobile-Friendly)",
  "Prototyping & Wireframing",
  "Design System",
  "Kolaborasi dengan Developer",
  "Riset Pengguna",
];

const tools = [
  "Figma",
  "Adobe XD",
  "Canva",
  "WordPress",
  "HTML & CSS dasar",
  "JavaScript dasar",
];

const portfolioItems = [
  {
    id: 1,
    gambar: "/dapurandin.png",
    judul: "Website Toko Online",
    link: "https://resepmasakan-andin.my.canva.site/situs-web-jasa-makanan-dan-restoran-gaya-hangat-organik-kuning-blewah-muda-oranye",
  },
  {
    id: 2,
    gambar: "/sintax.png",
    judul: "Landing Page Startup",
    link: "/",
  },
  {
    id: 3,
    gambar: "/porto.png",
    judul: "Portfolio Personal",
    link: "https://www.canva.com/design/DAGfbkLm9Uc/nwUJlIAUliPJDWHfPDtqjg/edit",
  },
];

export default function About1Page() {
  return (
    <section className="bg-white py-10 px-6 md:px-16" id="skills-tools">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Berikut ini merupakan SKills yang saya miliki
      </h1>
      <div className="flex flex-col md:flex-row md:gap-16">
        {/* Bagian Keahlian */}
        <div className="flex-1 mb-10 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Keahlian</h2>
          <ul className="space-y-4">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center text-gray-700 text-base"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Bagian Tools */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tools</h2>
          <ul className="space-y-4">
            {tools.map((tool, index) => (
              <li
                key={index}
                className="flex items-center text-gray-700 text-base"
              >
                <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-10 mt-10">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Hasil Karya Saya
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.gambar}
                alt={item.judul}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 bg-gray-100">
                <h3 className="text-xl font-semibold">{item.judul}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
