import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sedes from "./Sedes";
import Menu from "./Menu"; // Cambiado desde Tienda a Menu
import Home from "./Home";
import MyOrder from "./MyOrder";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { CartProvider } from "./CartContext"; // Importa el proveedor de contexto del carrito

const App = () => {
  return (
    <CartProvider> {/* Envuelve tus componentes con el proveedor de contexto */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/MyOrder" element={<MyOrder />} />
          <Route path="/Sedes" element={<Sedes />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
