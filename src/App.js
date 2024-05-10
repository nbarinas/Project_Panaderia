import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Carousel from "./Carousel";
import Card from "./Card";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Sedes from "./Sedes";
import Login from "./Login"; // Importa el componente de la página de inicio de sesión

function App() {
  return (
    <Router>
      <div>
        <NavBar /> {/* Mostrar el componente NavBar en todas las páginas */}
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/" element={<Card />} />
          <Route path="/" element={<Sedes />} />
          <Route path="/Login" element={<Login />} /> {/* Ruta para la página de inicio de sesión */}
        </Routes>
        <Footer /> {/* Mostrar el componente Footer en todas las páginas */}
      </div>
    </Router>
  );
}

export default App;
