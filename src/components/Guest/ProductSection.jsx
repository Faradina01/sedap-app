import React, { useEffect, useState } from "react";

export default function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    import("../../data/products.json").then((module) => {
      setProducts(module.default);
    });
  }, []);

  return (
    <section id="products" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-green-700 mb-10 text-center">
          Produk Unggulan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center"
            >
              <img
                src={`/img/${prod.image}`}  // pastikan field "image" hanya nama file
                alt={prod.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800 mb-1">{prod.name}</h3>
              <p className="text-green-600 font-bold text-xl">Rp {prod.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}