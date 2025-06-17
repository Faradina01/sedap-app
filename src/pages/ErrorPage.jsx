import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage({
  code,
  description,
  homeLink = '/',
}) {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center px-4">
      {/* Pink curve di kanan bawah */}
      <div
        className="absolute bottom-0 right-0 w-2/3 h-96 bg-pink-100 rounded-tl-full"
        style={{ transform: 'translate(25%, 25%) rotate(-15deg)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full py-16">
        {/* Kode Error */}
        <h1 className="text-7xl font-extrabold text-red-600 mb-2">
          {code}
        </h1>

        {/* Deskripsi Error */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {description}
        </h2>
        <p className="text-gray-600 mb-8">
          Maaf, terjadi kesalahan ({code}). Silakan coba lagi atau kembali ke beranda.
        </p>

        {/* Tombol Kembali */}
        <Link
          to={homeLink}
          className="px-6 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}