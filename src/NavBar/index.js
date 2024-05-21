import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fs-3 text-white" href="#">
          Le Grenier à Pain
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-grow-1 pe-3 fs-3 justify-content-center">
            <li className="nav-item">
              <a
                className="nav-link mx-lg-2 active text-white"
                aria-current="page"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Sedes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contacto
              </a>
            </li>
          </ul>
          <button type="submit" class="btn btn-primary">
            Inicia sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
