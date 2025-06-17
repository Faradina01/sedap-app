import React from "react";
import HeaderBar from "../components/Guest/HeaderBar";
import Hero from "../components/Guest/Hero";
import About from "../components/Guest/About";
import ProductSection from "../components/Guest/ProductSection";
import TestimoniSection from "../components/Guest/TestimoniSection";
import Footer from "../components/Guest/Footer";

export default function Guest() {
  return (
    <>
      <HeaderBar />
      <main className="flex flex-col gap-20">
        <Hero />
        <About />
        <ProductSection />
        <TestimoniSection />
      </main>
      <Footer />
    </>
  );
}