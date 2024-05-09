import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carousel = () => {
  return (
    <div className="bg-warning">
      <h1 className="text-center color-pink">Le Grenier à Pain</h1>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner mb-3">
          <div className="carousel-item active">
            {
              <img
                src="mae-mu.jpg"
                className=" rounded d-block  mx-auto img-item"
                alt="panadero2"
              />
            }
          </div>
          <div className="carousel-item">
            <img
              src="nadya.jpg"
              className=" rounded d-block  mx-auto img-item"
              alt="panadero"
            />
          </div>
          <div className="carousel-item">
            <img
              src="yeh.jpg"
              className=" rounded d-block  mx-auto img-item"
              alt="panaderia 2"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev btn-dark"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
