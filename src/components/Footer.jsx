import React from "react";
import logoIcon from "../assets/logo-icon.svg";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoIcon} alt="Loz" className="h-6 w-6" />
          <span className="text-sm text-stone-600">© {new Date().getFullYear()} Loz. All rights reserved.</span>
        </div>
        <a href="mailto:hello@loz.skin" className="text-sm hover:underline">
          hello@loz.skin
        </a>
      </div>
    </footer>
  );
}
