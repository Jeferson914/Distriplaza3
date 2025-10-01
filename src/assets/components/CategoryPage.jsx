// src/pages/CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import licoresData from "../data/licoresData";

const CategoryPage = () => {
  const { category } = useParams(); // obtiene la categoría desde la URL
  const products = licoresData[category] || [];

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 capitalize">{category}</h2>

      {products.length === 0 ? (
        <p className="text-gray-600">No hay productos en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-contain mb-3"
              />
              <h3 className="text-lg font-medium text-gray-700">{product.name}</h3>
              <p className="text-sm text-gray-500 text-center">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
