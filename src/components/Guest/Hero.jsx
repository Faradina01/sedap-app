import React from "react";

export default function Hero() {
  return (
    <section className="pt-28 bg-green-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-extrabold text-green-700 leading-tight">
            Nikmati Sensasi Makanan Lezat dan Sehat <br />
            dengan Sedap
          </h1>
          <p className="text-gray-700 text-lg max-w-lg">
            Aplikasi pemesanan makanan sehat dan praktis, mengutamakan kualitas dan kepuasan pelanggan.
          </p>
          <a
            href="#products"
            className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-green-700 transition"
          >
            Lihat Produk Unggulan
          </a>
        </div>
        <div className="flex-1">
          <img
            src="/img/hero.jpg"
            alt="Makanan Lezat Sedap"
            className="rounded-xl shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
