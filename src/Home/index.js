import React from "react";
import { BrowserRouter as Router, Routes, Route, useRoutes, BrowserRouter } from "react-router-dom";
import Navbar from "../NavBar";
import Carousel from "../Carousel";
import Card from "../Card";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
        <div>
            <Navbar /> {/* Mostrar el componente Navbar en todas las páginas */}
            <Carousel />
            <Card />
            <Footer /> {/* Mostrar el componente Footer en todas las páginas */}
        </div>
  );
}
export default Home;
