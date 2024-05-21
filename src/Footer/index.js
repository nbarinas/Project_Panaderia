import React from "react";
import {FaFacebook,FaWhatsapp,FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className=" text-center text-lg-start text-muted bg-warning text-decoration-none">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom icon-redes ">
          {/* Left */}
          <div className="me-5 d-none d-lg-block fw-bold fs-4 ">
            <span></span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <FaWhatsapp style={{color:'#25d366',fontSize:'2em',margin:'10px'}} />
            <FaFacebook style={{color: '#3b5998',fontSize: '2em',margin:'10px'}}/>
             <FaLinkedin style={{ color:'#00b5',fontSize: '2em',margin:'10px' }}/>
             <FaInstagram style={{color:'#E4405F',fontSize:'2em',margin:'10px' }}/>
            <FaGithub style={{color:'#333',fontSize:'2em',margin:'10px' }}/>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Le Grenier à Pain
                </h6>
                <p>Le vendemos desde un pan hasta la panaderia</p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Panes
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Tortas
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Postres
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Pasteles
                  </a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pagina Principal
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Especialiades
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Precios
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Domicilios
                  </a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Nuestros contactos
                </h6>
                <p>
                  <i className="fas fa-home me-3"></i> Barrio San jose, Bogota
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 57 313 662 3813
                </p>
                {/* <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Derechos Reservados
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
};

export default Footer;
