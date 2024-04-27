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


const Main = () => {
  return (
    <div>
      <h1 className="text-center text-primary font-italic">Página de inicio</h1>
      <Carousel /> {/* Renderiza el componente Carousel */}
    </div>
  );
}

export default Main;

