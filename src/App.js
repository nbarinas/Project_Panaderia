import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Main';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Mostrar el componente Navbar en todas las páginas */}
        <Routes>
          <Route exact path="/" element={<Home />} /> {/* Página de inicio con solo un botón */}
          {/* Aquí puedes agregar más rutas */}
        </Routes>
        <Footer /> {/* Mostrar el componente Footer en todas las páginas */}
      </div>
    </Router>
  );
}

export default App;
