import React from "react";
import { Link } from "react-router-dom";
import licoresData from "../data/licoresData";

const ProductosCategorias = () => {
  return (
    <section className="py-12 bg-linear-180 from-green-400 to-green-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
         Productos 
        </h2>

        {/* Iteramos categorías */}
        {Object.keys(licoresData).map((categoria) => (
          <div key={categoria} className="mb-12">
            {/* Título de la categoría */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold  text-gray-700">
                {categoria}
              </h3>
              <Link
                to={`/categoria/${categoria}`}
                className="text-red-600 hover:underline"
              >
                Ver más →
              </Link>
            </div>

            {/* Productos (solo 3) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {licoresData[categoria].slice(0, 3).map((producto) => (
                <div
                  key={producto.id}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
                >
                  <img
                    src={producto.img}
                    alt={producto.name}
                    className="w-32 h-32 object-contain mb-4"
                  />
                  <h4 className="font-semibold text-gray-700">
                    {producto.name}
                  </h4>
                  <p className="text-red-600 font-bold">{producto.price}</p>
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                    Agregar al carrito
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosCategorias;
