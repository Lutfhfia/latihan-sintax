import { CodeXml } from "lucide-react";
import React from "react";

function NavBar() {
  return (
    <header className="sticky top-0 border border-gray-500 bg-white/80">
      {/*div pembungkus*/}
      <div className="flex max-w-7xl mx-auto justify-between h-16 items-center px-4">
        {/*div logo*/}
        <div className="flex items-center gap-2">
          <CodeXml size={32} />
          <h1 className="font-bold text-xl text-red-500">SINTAX.</h1>
        </div>
        <ul className="hidden md:flex gap-8">
          <li>
            <a href="/" className="hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-red-500">
              Tentang
            </a>
          </li>
          <li>
            <a href="/kontak" className="hover:text-red-500">
              Kontak
            </a>
          </li>
        </ul>
        <a
          href=""
          className="bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-400"
        >
          Daftar Sekarang
        </a>
      </div>
    </header>
  );
}

export default NavBar;
