<<<<<<< HEAD
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Main = () => {
//   return (
//     <div>
//       <h1>Pagina de inicio</h1>
//       <div
//         id="carouselExampleFade"
//         className="carousel slide carousel-fade"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//           <img src="mae-mu.jpg" className="d-block" style={{ maxWidth: '100%', height: 'auto' }} alt="panaderia" />
//           </div>
//           <div className="carousel-item">
//             <img src="nadya.jpg" className="d-block w-100" alt="panadero" />
//           </div>
//           <div className="carousel-item">
//             <img src="yeh.jpg" className="d-block w-100" alt="panaderia 2" />
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Main;
import React from 'react';
import Carousel from './Carousel'; // Importa el componente Carousel
import 'bootstrap/dist/css/bootstrap.min.css';

=======
import React from 'react';
>>>>>>> d9d1c08a7d9695dc23c8a91836c90739e7c7f916

const Main = () => {
  return (
    <div>
<<<<<<< HEAD
      <h1 className="text-center text-primary font-italic">Página de inicio</h1>
      <Carousel /> {/* Renderiza el componente Carousel */}
=======
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
>>>>>>> d9d1c08a7d9695dc23c8a91836c90739e7c7f916
    </div>
  );
}

export default Main;
<<<<<<< HEAD

=======
>>>>>>> d9d1c08a7d9695dc23c8a91836c90739e7c7f916
