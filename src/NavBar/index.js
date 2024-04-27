import React from 'react';
<<<<<<< HEAD
// import { Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> d9d1c08a7d9695dc23c8a91836c90739e7c7f916

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<<<<<<< HEAD
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Pagina Principal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Especialidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Precios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Domicilios</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
=======
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
>>>>>>> d9d1c08a7d9695dc23c8a91836c90739e7c7f916
  );
}

export default NavBar;
