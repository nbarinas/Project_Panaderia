import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center">
      {/* Section: Social media */}
      <section
        className="p-4"
        style={{ backgroundColor: "rgb(234, 210, 172)", Height: "180px" }}
      >
        {/* Left */}
        <div className="d-flex justify-content align-items  mb-4">
          <div className="me-4">
            <span className="fw-bold fs-4" style={{ color: "#8B4513" }}>
              Síguenos en:
            </span>
          </div>
          {/* Right */}
          <div className="d-flex align-items-center">
            <FaWhatsapp
              className="icon me-4"
              style={{ color: "#25D366", fontSize: "24px" }}
            />
            <FaFacebook
              className="icon me-4"
              style={{ color: "#3b5998", fontSize: "24px" }}
            />
            <FaLinkedin
              className="icon me-4"
              style={{ color: "#0e76a8", fontSize: "24px" }}
            />
            <FaInstagram
              className="icon me-4"
              style={{ color: "#c13584", fontSize: "24px" }}
            />
            <FaGithub
              className="icon me-4"
              style={{ color: "#4078c0", fontSize: "24px" }}
            />
          </div>
          {/* Right */}
        </div>
      </section>

      {/* Section: Social media */}

      {/* Section: Links  */}
      <section className="p-4" style={{ backgroundColor: "#EAD2AC " }}>
        <div className="container">
          <div className="row">
            {/* Grid column */}
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase mb-4">Le Grenier à Pain</h6>
              <p
                className=" "
                style={{
                  color: "#8B4513  ",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                }}
              >
                🥖Le vendemos desde un pan hasta la panadería🥖
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase mb-4">Productos</h6>
              <p>
                <a href="#!" className="text-dark text-decoration-none">
                  Panes
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark text-decoration-none">
                  Tortas
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark text-decoration-none">
                  Postres
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark text-decoration-none">
                  Pasteles
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase mb-4">Enlaces útiles</h6>
              <p>
                <a href="#!" className="text-dark text-decoration-none">
                  Página Principal
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark text-decoration-none">
                  Especialidades
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark text-decoration-none">
                  Precios
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark text-decoration-none">
                  Domicilios
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase mb-4">Nuestros contactos</h6>
              <p>
                <i href="#!" className="text-dark text-decoration-none">
                  Barrio San José, Bogotá
                </i>
              </p>
              <p>
                <i href="#!" className="text-dark text-decoration-none">
                  info@example.com
                </i>
              </p>
              <p>
                <i href="#!" className="text-dark text-decoration-none">
                  +57 313 662 3813
                </i>
              </p>
            </div>
            {/* Grid column */}
          </div>
        </div>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      >
        <span>© 2024 Derechos Reservados</span>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
