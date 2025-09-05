import React from "react";
import logo from "./assets/logo.svg";
import logoIcon from "./assets/logo-icon.svg";

export default function App() {
  const brandName = "Loz";
  const founder = "Laura";
  const tagline = "Pure by Nature. Perfected by Science.";
  const valueProp =
    "Loz elevates daily sun protection into a luxury ritual — crafted as close to nature as possible, with advanced dermatological science and indulgent, reef-safe textures.";

  const products = [
    {
      name: "Rose Ritual — Sunscreen Clay SPF50+",
      desc: "Mineral protection infused with rose water for soothing hydration.",
      price: "$45",
      img: "https://images.unsplash.com/photo-1604908177079-4f7639fee9a5?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Sandalwood Ritual — Sunscreen Clay SPF50+",
      desc: "Grounding sandalwood meets mineral SPF in a velvety clay finish.",
      price: "$45",
      img: "https://images.unsplash.com/photo-1585237011457-c77c57b9ae65?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/30 to-white text-stone-900 selection:bg-amber-200/60">
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
          <a href="#products" className="inline-flex items-center rounded-full px-4 py-2 text-sm bg-stone-900 text-white hover:bg-stone-800 transition">Shop</a>
        </div>
      </header>

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

      <section id="products" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-serif text-4xl">The Collection</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.name} className="rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-sm hover:shadow-md transition">
                <img src={p.img} alt={p.name} className="h-60 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{p.name}</h3>
                    <span className="text-sm">{p.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-stone-600">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sustainability" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-serif text-4xl">Sustainability at {brandName}</h2>
          <p className="mt-3 text-stone-700">Reef-safe mineral filters, cruelty-free testing, recyclable packaging, and a commitment to give back.</p>
        </div>
      </section>

      <section id="story" className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-serif text-4xl">Heritage</h2>
          <p className="mt-3 text-stone-800">Born on Australia’s sunlit coasts, Loz was founded by {founder} with the belief that sunscreen should be as elegant as it is effective.</p>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="Loz" className="h-6 w-6" />
            <span className="text-sm text-stone-600">© {new Date().getFullYear()} Loz. All rights reserved.</span>
          </div>
          <a href="mailto:hello@loz.skin" className="text-sm hover:underline">hello@loz.skin</a>
        </div>
      </footer>
    </main>
  );
}
