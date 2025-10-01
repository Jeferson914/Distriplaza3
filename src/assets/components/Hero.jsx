import React from "react";

const Hero = () => {
  return (
    <section 
      id="/"
      className="h-screen bg-cover bg-center  flex flex-col items-center justify-items-start   text-white text-center"
      style={{ backgroundImage: "url('/imagenes/fondo-hero.png')" }}
    >
      <h1 className="mt-40 text-5xl  font-bold drop-shadow-lg">MÁS QUE LICORES, EXPERIENCIAS</h1>
      <p className="mt-4 text- max-w-xl">Distribución confiable con envio express</p>
      <img  className="w-32" src="/imagenes/nubesverder.png" alt="chulo" />
      
    </section>
  );
};

export default Hero;
