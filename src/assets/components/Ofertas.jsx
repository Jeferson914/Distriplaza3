
const Ofertas = () => {
  const ofertas = [
    { id: 36, name: "Ginebra Monkey", img: "/imagenes/ofertas/monkey.webp", oldPrice: "$278.980", price: "$255.599" },
    { id: 37, name: "Champagne Moët & Chandon Impérial Brut Gift ", img: "/imagenes/ofertas/moet.webp", oldPrice: "$424.500", price: "$424.500" },
    { id: 38, name: "Tequila Patron Cristalino", img: "/imagenes/ofertas/patron.webp", oldPrice: "$398.900", price: "$358.900" },
    { id: 39, name: "Ron La Hechicera", img: "/imagenes/ofertas/hechicera.webp", oldPrice: "$324.599", price: "$399.900" },
  ];
  

  return (
    <section className="py-12 bg-linear-180 from-green-200 to-green-400">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
           Ofertas Especiales
        </h2>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ofertas.map((producto) => (
            <div
              key={producto.id}
              className="  rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:-translate-y-2 duration-300"
            >
              {/* Imagen */}
              <img
                src={producto.img}
                alt={producto.name}
                className="w-32 h-32 object-contain mb-4"
              />

              {/* Nombre */}
              <h3 className="font-semibold text-gray-700">{producto.name}</h3>

              {/* Precios */}
              <div className="mt-2">
                <span className="text-gray-500 line-through mr-2">
                  {producto.oldPrice}
                </span>
                <span className="text-black font-bold text-lg">
                  {producto.price}
                </span>
              </div>

              {/* Botón */}
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ofertas;
