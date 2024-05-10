import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Pagina Principal</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Especialidades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Precios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Domicilios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link> {/* Cambiamos "#" por "/Login" */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
