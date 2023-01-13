import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home/Home";
import About from './views/About/About'
import Products from "./views/Products/Products"
import Services from "./views/Services/Services"
import News from './views/News/News'
import Contact from "./views/Contact/Contact"


function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <Routes className="container m-auto w-10/12">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
