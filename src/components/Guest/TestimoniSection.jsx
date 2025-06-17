import React, { useEffect, useState } from "react";

export default function TestimoniSection() {
  const [testimonis, setTestimonis] = useState([]);

  useEffect(() => {
    import("../../data/testimoni.json").then((module) => {
      setTestimonis(module.default.slice(0, 5));
    });
  }, []);

  return (
    <section
      id="testimoni"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-green-700 mb-10 text-center">
          Ulasan Pengguna
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {testimonis.map(({ id, avatar, name, review }) => (
            <div
              key={id}
              className="bg-green-50 rounded-lg p-6 shadow-md flex flex-col items-center text-center"
            >
              <img
                src={avatar || "https://avatar-placeholder.iran.liara.run"}
                alt={name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
              <p className="text-gray-700 mt-2">{review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}