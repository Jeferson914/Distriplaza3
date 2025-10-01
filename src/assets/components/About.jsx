import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-linear-180 from-orange-900 to-green-900 text-white ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
        <p className="text-lg ">
           Somos una distribuidora de licores ubicada en el municipio de Envigado.
            Contamos con aproximadamente 40 años de experiencia en el mercado, nos hemos consolidado como líderes en el sector,
             destacándonos por nuestro compromiso con la excelencia en el servicio al cliente y 
             por ofrecer una experiencia de compra única y memorable. <br />
            Desde nuestros inicios, hemos trabajado incansablemente para garantizar 
            que cada cliente disfrute de un servicio personalizado. En 2019, fuimos orgullosamente 
            reconocidos por Fenalco Antioquia por nuestra dedicación a la venta de licor 100% legal, 
            un testimonio de nuestro compromiso con la calidad y la legalidad.
        </p>
      </div>
    </section>
  );
};

export default About;
