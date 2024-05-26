import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../CartContext/'; // Importa el contexto del carrito

const NavBar = () => {
  const { cartItemCount } = useCart(); // Obtiene el cartItemCount del contexto
  const [mostrarFormulario, setMostrarForm] = useState(false);
  const [datos, setDatos] = useState({
    email: '',
    usuario: '',
    contrasena: '',
  });

  const desplegaForm = () => {
    setMostrarForm(!mostrarFormulario);
  };

  const entradaCambioManual = (cambio) => {
    setDatos({
      ...datos,
      [cambio.target.name]: cambio.target.value
    });
  };

  const enviarDatos = (cambio) => {
    cambio.preventDefault();
    console.log(`${datos.email} ${datos.contrasena} ${datos.usuario}`);
  };

  const activeStyle = 'underline font-semibold text-yellow-900';
  const notActiveStyle = 'no-underline text-yellow-900';

  return (
    <nav className='flex flex-col items-center fixed top-0 z-10 w-full py-4 px-8 text-sm font-light bg-yellow-100'>
      <ul className='flex items-center gap-3'>
        <li>
          <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/Sedes' className={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
            Sedes
          </NavLink>
        </li>
        <li>
          <NavLink to='/Menu' className={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to='/MyOrder' className={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
            Tu Orden
          </NavLink>
        </li>
        <li>
          <button onClick={desplegaForm} className="nav-link">Registro</button>
        </li>
        <li>
          <span role="img" aria-label="Carrito">🛒</span> {cartItemCount} {/* Mostrar la cantidad de artículos en el carrito */}
        </li>
      </ul>
      {mostrarFormulario && (
        <div className="container mt-4">
          <div className="account-wall">
            <form className="form-signin" onSubmit={enviarDatos} style={{ textAlign: 'center' }}>
              <div className="d-flex justify-content-center mb-3">
                <div className="mx-2">
                  <label htmlFor="email" style={{ display: 'block' }}>Correo</label>
                  <input
                    id="email"
                    placeholder='Correo'
                    autoFocus
                    autoCorrect='on'
                    autoComplete='on'
                    autoCapitalize='on'
                    required
                    name='email'
                    type='email'
                    className="form-control"
                    onChange={entradaCambioManual}
                    style={{ width: '200px' }}
                  />
                </div>
                <div className="mx-2">
                  <label htmlFor="contrasena" style={{ display: 'block' }}>Contraseña</label>
                  <input
                    id="contrasena"
                    placeholder='Contraseña'
                    autoCorrect='on'
                    autoComplete='on'
                    autoCapitalize='on'
                    required
                    type='password'
                    name="contrasena"
                    className="form-control"
                    onChange={entradaCambioManual}
                    style={{ width: '200px' }}
                  />
                </div>
                <div className="mx-2">
                  <label htmlFor="usuario" style={{ display: 'block' }}>Usuario</label>
                  <input
                    id="usuario"
                    placeholder='Usuario'
                    autoCorrect='on'
                    autoComplete='on'
                    autoCapitalize='on'
                    required
                    type='text'
                    name="usuario"
                    className="form-control"
                    onChange={entradaCambioManual}
                    style={{ width: '200px' }}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-danger" style={{ display: 'block', margin: '0 auto' }}>
                Registrarse
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
