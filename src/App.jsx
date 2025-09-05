import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Sustainability from "./components/Sustainability";
import Heritage from "./components/Heritage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/30 to-white text-stone-900 selection:bg-amber-200/60">
      <Navbar />
      <Hero />
      <Products />
      <Sustainability />
      <Heritage />
      <Footer />
    </main>
  );
}
