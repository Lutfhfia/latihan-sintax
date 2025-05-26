import { CodeXml, Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <CodeXml />
        <p>
          Copyright © {new Date().getFullYear()} Luthfi Andini. All right
          reserved.
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://facebook.com">
          <Facebook />
        </a>
        <a href="https://youtube.com">
          <Youtube />
        </a>
        <a href="https://www.instagram.com/andieeen_/?utm_source=ig_web_button_share_sheet">
          <Instagram />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
