import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Ofertas from "../components/Ofertas";
import ProductosCategorias from "../components/ProductosCategorias";




const Home = () => {
  return (
    <div>
      <Hero />
      <Ofertas />
      <ProductosCategorias />
      <About />
      <Contact />
    </div>
  )
}

export default Home;