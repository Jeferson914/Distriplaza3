import Ofertas from "../components/Ofertas";

// src/data/licoresData.js
const licoresData = {
  aguardientes: [
    { id: 1, name: "Aguardiente Antioqueño", img: "/imagenes/aguardientes/tapaazul.webp", price: "$53.900" },
    { id: 2, name: "Aguarduente Nuestra Herencia", img: "/imagenes/aguardientes/aazul.webp", price: "$72.900" },
    { id: 3, name: "Aguardiente Mil Deminios", img: "/imagenes/aguardientes/amildemons.webp", price: "$117.900.000" },
    { id: 4, name: "Aguardiente Júbilo", img: "/imagenes/aguardientes/ajubilo.webp", price: "$289.900" },
    { id: 5, name: "Aguardiente Tapa Verde", img: "/imagenes/aguardientes/tapa-verde.webp", price: "$289.900" },

  ],
  rones: [
    { id: 6, name: "Ron Viejo de Caldas León Dormido", img: "/imagenes/rones/leon.webp", price: "$689.900" },
    { id: 7, name: "Ron Gobernador Extra Añejo", img: "/imagenes/rones/ron-gobernador.webp", price: "$228.000" },
    { id: 8, name: "Ron Defensor Style", img: "/imagenes/rones/ron-defensor.webp", price: "$224.900" },
    { id: 9, name: "Ron Flor de Caña Centenario", img: "/imagenes/rones/flor-caña.webp", price: "$279.900" },
    { id: 10, name: "Crema De Ron Medellin", img: "/imagenes/rones/ron-medellin-crema.jpg", price: "$98.900" },

  ],
  whiskys: [
    { id: 11, name: "Whisky Buchanan's Deluxe", img: "/imagenes/whiskys/buchanans.webp", price: "238.000" },
    { id: 12, name: "Whisky Old Parr", img: "/imagenes/whiskys/grants.webp", price: "$165.000" },
    { id: 13, name: "Whisky Johnnie Walker Black Label Media", img: "/imagenes/whiskys/jhonnie.webp", price: "$120.000" },
    { id: 14, name: "Whisky Buchanan's Master", img: "/imagenes/whiskys/master.webp", price: "$277.900" },
    { id: 15, name: "Whisky Grant's Triple Wood", img: "/imagenes/whiskys/oldparr.webp", price: "$88.100" },
  ],

  tequilas: [
    { id: 16, name: "Tequila Don Julio 70 Botella - 700m", img: "/imagenes/tequilas/julio-black.webp", price: "$445.000" },
    { id: 17, name: "Tequila Don Julio Blanco Botella - 700ml", img: "/imagenes/tequilas/don-julio.webp", price: "$266.000" },
    { id: 18, name: "Tequila 1800 Silver Botella - 700ml", img: "/imagenes/tequilas/silver.webp", price: "$247.000" },
    { id: 19, name: "Tequila 1800 Cristalino Botella - 700ml", img: "/imagenes/tequilas/critalino.webp", price: "$334.700" },
    { id: 20, name: "Tequila 1800 Añejo Botella - 700ml", img: "/imagenes/tequilas/agave.webp", price: "$276.900" },
  ],

  ginebras: [
    { id: 21, name: "Ginebra Bombay Sapphire London Dry", img: "/imagenes/ginebras/gbombay.webp", price: "$159.000" },
    { id: 22, name: "Ginebra Bombay Sapphire London Dry Raspberry", img: "/imagenes/ginebras/london.webp", price: "$164.900" },
    { id: 23, name: "Ginebra Tanqueray Botella", img: "/imagenes/ginebras/tanqueray.webp", price: "$187.500" },
    { id: 24, name: "Chivas Regal 12 años", img: "/imagenes/ginebras/rangpur.webp", price: "$212.800" },
    { id: 25, name: "Johnnie Walker Black Label", img: "/imagenes/ginebras/selva.webp", price: "$256.900" },
  ],

  vinos: [
    { id: 26, name: "Vino Blanco Mar de Frades Albariño", img: "/imagenes/vinos/mar.webp", price: "$173.000" },
    { id: 27, name: "Vino Jerez Tio Pepe Palomino", img: "/imagenes/vinos/jerez.webp", price: "$142.000" },
    { id: 28, name: "Vino Tinto Ramón Bilbao Crianza", img: "/imagenes/vinos/ramon.webp", price: "$96.000" },
    { id: 29, name: "Vino Rosado Ramón Bilbao", img: "/imagenes/vinos/rosado.webp", price: "88.000" },
    { id: 30, name: "Vino Espumoso Baron De Rothberg", img: "/imagenes/vinos/baron.webp", price: "$42.000" },
  ],

  cervezas: [
    { id: 31, name: "Pack Cerveza 3 Cordilleras Negra", img: "/imagenes/cervezas/negra.webp", price: "$21.000" },
    { id: 32, name: "Paca Cerveza Stella Artois", img: "/imagenes/cervezas/stella.webp", price: "$90.000" },
    { id: 33, name: "Paca Cerveza Poker", img: "/imagenes/cervezas/poker.webp", price: "$75.000" },
    { id: 34, name: "Pack Cerveza Corona", img: "/imagenes/cervezas/corona.webp", price: "$26.000" },
    { id: 35, name: "Paca Cerveza Heineken", img: "/imagenes/cervezas/Heineken.webp", price: "$73.000" },
  ],
  

  
};

export default licoresData;
