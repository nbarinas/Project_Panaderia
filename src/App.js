import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Carousel from "./Carousel";
import Card from "./Card";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Sedes from "./Sedes";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Mostrar el componente Navbar en todas las páginas */}
        <Carousel />  
        <Card />
        <Sedes />
        <Footer /> {/* Mostrar el componente Footer en todas las páginas */}
      </div>
    </Router>
  );
}

export default App;
