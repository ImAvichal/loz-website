import React from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Loz" className="h-7 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#products" className="hover:text-stone-600">Products</a>
          <a href="#sustainability" className="hover:text-stone-600">Sustainability</a>
          <a href="#story" className="hover:text-stone-600">Heritage</a>
        </nav>
        <a
          href="#products"
          className="inline-flex items-center rounded-full px-4 py-2 text-sm bg-stone-900 text-white hover:bg-stone-800 transition"
        >
          Shop
        </a>
      </div>
    </header>
  );
}
