import React from "react";

export default function Products() {
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
  );
}
