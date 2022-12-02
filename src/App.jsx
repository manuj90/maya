import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/home/Home";
import About from './views/about/About'

function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <Routes className="container m-auto w-10/12">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
