import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
<<<<<<< HEAD
import Carousel from './Carousel';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


=======
import Home from './Main';
import Footer from './Footer';
>>>>>>> d9d1c08a7d9695dc23c8a91836c90739e7c7f916

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Mostrar el componente Navbar en todas las páginas */}
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={<Carousel />} /> {/* Página de inicio con solo un botón */}
=======
          <Route exact path="/" element={<Home />} /> {/* Página de inicio con solo un botón */}
>>>>>>> d9d1c08a7d9695dc23c8a91836c90739e7c7f916
          {/* Aquí puedes agregar más rutas */}
        </Routes>
        <Footer /> {/* Mostrar el componente Footer en todas las páginas */}
      </div>
    </Router>
  );
}

export default App;
