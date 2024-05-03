import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Carousel = () => {
  return (
    <div>
      <h1>Le Grenier à Pain</h1>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {<img src="mae-mu.jpg" className="d-block w-85 mx-auto" alt="panadero2" /> }
          </div>
          <div className="carousel-item">
            <img src="nadya.jpg" className="d-block w-85 mx-auto " alt="panadero" />
            
          </div>
          <div className="carousel-item">
            <img src="yeh.jpg" className="d-block w-85 mx-auto" alt="panaderia 2" />
          </div>
        </div>
        <button
          className="carousel-control-prev btn-dark"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
