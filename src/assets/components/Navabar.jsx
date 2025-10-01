import licoresData from "../data/licoresData";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // Iconos hamburguesa y cerrar


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    // Buscar en todos los productos
    const allProducts = Object.entries(licoresData).flatMap(([category, items]) =>
      items.map((item) => ({ ...item, category }))
    );

    const filtered = allProducts.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setResults(filtered);
  };

  // Detectar click afuera para cerrar resultados
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}

      <a className="w-34 md:w-38" href="/"><img src="/imagenes/imagen_0.png" alt="/" /></a>

      {/* Input de búsqueda */}
      <div className=" flex relative w-1/2" ref={searchRef}>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Buscar productos..."
          className="w-full md:w-2/3 mx-auto px-4 py-2 rounded-2xl border-2 border-white text-white outline-none"
        />

        {/* Resultados */}
        {results.length > 0 && (
          <div className="absolute mt-2 bg-white text-black w-full rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
            {results.map((item) => (
              <a
                key={item.id}
                href={`/categoria/${item.category}`}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200"
                onClick={() => setQuery("")}
              >
                <img src={item.img} alt={item.name} className="w-10 h-10 rounded" />
                <span>{item.name} - {item.price}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Links desktop */}
      <ul className="hidden md:flex gap-6">
        <li><a href="#ofertas" className="hover:text-gray-300">Ofertas</a></li>
        <li><a href="#about" className="hover:text-gray-300">Quienes Somos</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contactanos</a></li>
      </ul>

      {/* Botón hamburguesa (solo en móvil) */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú desplegable móvil */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white text-black hover:text- flex flex-col items-center gap-6 py-8 md:hidden z-50">
          <a href="#products" onClick={() => setOpen(false)} className="hover:text-gray-300">Ofertas</a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-gray-300">Quienes Somos</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-gray-300">Contactanos</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
