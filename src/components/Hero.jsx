import React from "react";
import logoIcon from "../assets/logo-icon.svg";

export default function Hero() {
  const founder = "Laura";
  const tagline = "Pure by Nature. Perfected by Science.";
  const valueProp =
    "Loz elevates daily sun protection into a luxury ritual — crafted as close to nature as possible, with advanced dermatological science and indulgent, reef-safe textures.";

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img src={logoIcon} alt="" className="h-10 w-10 mb-4" />
          <p className="text-xs uppercase tracking-widest text-stone-600">
            Premium Sunscreen • Founded by {founder}
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-tight">{tagline}</h1>
          <p className="mt-6 text-stone-700 max-w-xl">{valueProp}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="px-6 py-3 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition">Shop the range</a>
            <a href="#sustainability" className="px-6 py-3 rounded-full border border-stone-300 hover:bg-white/60 transition">Sustainability</a>
          </div>
        </div>
        <div className="aspect-[4/5] rounded-3xl bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-2xl" />
      </div>
    </section>
  );
}
