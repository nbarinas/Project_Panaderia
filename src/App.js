import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Carousel from './Carousel';
import Card from './Card';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sedes from './Sedes';


function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Mostrar el componente Navbar en todas las páginas */}
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={<Carousel />} /> {/* Página de inicio con solo un botón */}
=======
          <Route exact path="/" element={<Sedes />} /> {/* Página de inicio con solo un botón */}

>>>>>>> ee098ac0961058e45650fa80a0021ea2aa896361
          {/* Aquí puedes agregar más rutas */}
        </Routes>
        <Card/>
        <Footer /> {/* Mostrar el componente Footer en todas las páginas */}

      </div>
    </Router>
  );
}

export default App;
