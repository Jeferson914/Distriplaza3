import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Link } from "lucide-react"; // iconos de flecha

const categories = [
  { name: "Aguardientes", img: "/icons/aguardiente.webp" },
  { name: "Rones", img: "/icons/ron.webp" },
  { name: "Whiskys", img: "/icons/whisky.webp" },
  { name: "Tequilas", img: "/icons/tequila.webp" },
  { name: "Ginebras", img: "/icons/ginebra.webp" },
  { name: "Vodkas", img: "/icons/vodka.webp" },
  { name: "Vinos", img: "/icons/vino.webp" },
  { name: "Cervezas", img: "/icons/cerveza.webp" },
];

const CategoriesNav = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350, // más desplazamiento
        
      });
    }
  };

  return (
    <div className="bg-gray-900 text-white py-3 relative">
      {/* Botón izquierda */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-10 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-400 trnsition duration-150 z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Carrusel */}
      <nav
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-12 scroll-smooth no-scrollbar"
      >
        {categories.map((cat, idx) => (
          <a
            key={idx}
            href={`/categoria/${cat.name.toLowerCase()}`} 
            className="
              flex flex-row items-center gap-3 
              font-medium  px-2 py-2 rounded-lg 
              flex-shrink-0
              basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 overflow-hidden group"
          >
            {/* Imagen izquierda */}
            <img
              src={cat.img}
              alt={cat.name}
              className="w-12 h-12  duration-300 group-hover:-translate-y-2"
            />
            {/* Texto derecha */}
            <span className=" hover:text-gray-300">{cat.name}</span>
          </a>
        ))}
      </nav>

      {/* Botón derecha */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-10 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-400 trnasition duration-150 z-10"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default CategoriesNav;
