import React from 'react';

const Main = () => {
  return (
    <div>
      <h1>Pagina de inicio</h1>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="mae-mu.jpg" class="d-block w-100" alt="panaderia" />
          </div>
          <div class="carousel-item">
            <img src="nadya.jpg" class="d-block w-80" alt="panadero" />
          </div>
          <div class="carousel-item">
            <img src="yeh.jpg" class="d-block w-80" alt="panaderia 2" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Main;
