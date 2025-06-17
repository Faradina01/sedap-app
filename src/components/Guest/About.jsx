import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <img
            src="/img/about-illustration.png" // ✅ pakai path public langsung
            alt="Tentang Kami Sedap"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-extrabold text-green-700">Tentang Sedap</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Sedap adalah aplikasi pemesanan makanan sehat dan praktis yang berkomitmen menyediakan produk berkualitas dengan harga terjangkau. Kami percaya setiap orang berhak menikmati makanan bergizi tanpa ribet.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Kualitas bahan terbaik dari supplier terpercaya</li>
            <li>Proses pengiriman cepat dan aman</li>
            <li>User interface mudah digunakan</li>
            <li>Customer service siap membantu setiap saat</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
