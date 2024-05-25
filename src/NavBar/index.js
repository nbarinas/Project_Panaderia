import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'; // Cambiado de Axios a axios

const NavBar = () => {
  const [mostrarFormulario, setMostrarForm] = useState(false);
  const [datos, setDatos] = useState({
    email: "",
    contraseña: "",
    usuario: ""
  });

  const add = () => {
    axios.post("http://localhost:3001/create", { // Cambiado de Axios a axios
      email: datos.email,
      contrasena: datos.contraseña, // Cambiado de contraseña a contrasena
      usuario: datos.usuario
    }).then(() => {
      alert("Usuario creado con éxito");
    }).catch(error => {
      console.error('Error al crear usuario:', error);
    });
  };

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
    console.log(`${datos.email} ${datos.contraseña} ${datos.usuario}`);
  };

  const activeStyle = "underline font-semibold text-yellow-900";
  const notActiveStyle = "no-underline text-yellow-900";

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
          🛒 0
        </li>
      </ul>
      {mostrarFormulario && (
        <div className="container mt-4">
          <div className="account-wall">
            <form className="form-signin" onSubmit={enviarDatos} style={{ textAlign: 'center' }}>
              <div className="d-flex justify-content-center mb-3">
                <div className="mx-2">
                  <label style={{ display: 'block' }}>Correo</label>
                  <input
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
                  <label style={{ display: 'block' }}>Contraseña</label>
                  <input
                    placeholder='Contraseña'
                    autoCorrect='on'
                    autoComplete='on'
                    autoCapitalize='on'
                    required
                    type='password'
                    name="contraseña"
                    className="form-control"
                    onChange={entradaCambioManual}
                    style={{ width: '200px' }}
                  />
                </div>
                <div className="mx-2">
                  <label style={{ display: 'block' }}>Usuario</label>
                  <input
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
              <button type="submit" onClick={add} className="btn btn-danger" style={{ display: 'block', margin: '0 auto' }}>
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
