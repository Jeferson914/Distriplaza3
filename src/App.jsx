
import CategoryPage from "./assets/components/CategoryPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navabar";
import CategoriesNav from "./assets/components/CategoriesNav";
import Home from "./assets/pages/Home"
import Footer from "./assets/components/Footer"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header global */}
        <Navbar />
        <CategoriesNav />

        {/* Contenido principal (Home o categorías) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:category" element={<CategoryPage />} />
          </Routes>
        </main>

        {/* Footer siempre al final */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;