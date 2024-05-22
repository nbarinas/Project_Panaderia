import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Registro = () => {
  const [mostrarFormulario, setMostrarForm] = useState(false);
 
 // usando usestate
  const [datos,setDatos]= useState({
    email:"",
    contraseña:"",
    usuario:""
 });
  const desplegaForm = () => {
    setMostrarForm(!mostrarFormulario);
  };
 // funciion donde se realizan los cambios de los input
  const entradaCambioManual = (cambio) => {
    setDatos({
      ...datos,[cambio.target.name] : cambio.target.value

    });
    console.log(setDatos);

  }

  // funcion para enviar datos con el submit
  const enviarDatos = (cambio)=>{
    cambio.preventDefault();
    console.log(datos.email + ' '+ datos.contraseña+ ' '+datos.usuario);
    
  }



  return (
    <div className="container">
      <div className="account-wall"  >
      <Link className="nav-link" onClick={desplegaForm}>Registro</Link>
      {mostrarFormulario && (
        <form className="form-signin"  onSubmit={enviarDatos}>
          <div className="mb-3">

            <input 
            placeholder='ingrese correo valido'
            _autofocus="true"
            autoCorrect='on'
            autoComplete='on'
            autoCapitalize='on'
            required
            name='email'
            type='text' 
            className="form-control" 
            onChange={entradaCambioManual}
           // id="email"
            />
          </div>
          <div className="mb-3">
            
            <input 
            placeholder='ingrese contraseña'
            _autofocus="true"
            autoCorrect='on'
            autoComplete='on'
            autoCapitalize='on'
            required
            type="text,number" 
            name="contraseña"
            className="form-control" 
             //id="contraseña"
            onChange={entradaCambioManual}
             />
          </
          
          div>
          <div className="mb-3">
            
            <input 

            placeholder='ingrese usuario'_autofocus="true"
            autoCorrect='on'
            autoComplete='on'
            autoCapitalize='on'
            required
            
            type="text" 
            name= "usuario"
            className="form-control" 
            //id="usuario" 
            onChange={entradaCambioManual}
            
            
            />

          </div>
          <button type="submit" className="btn btn-danger ">Registrarse</button>
        </form>
      )}


      </div>
      
    </div>
  );
};

const NavBar = () => {
  const activeStyle = "underline font-semibold text-yellow-900"
  const notActiveStyle = "no-underline text-yellow-900"   
  return(
    <nav className='flex justify-center items-center fixed top-0 z-10 w-full py-4 px-8 text-sm font-light bg-yellow-100'>
      <ul className='flex items-center gap-3 '>
        <li>
          <NavLink to='/' 
            className={({ isActive }) => 
            isActive ? activeStyle : notActiveStyle
          }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/Sedes'
          className={({ isActive }) => 
            isActive ? activeStyle : notActiveStyle
          }>
            Sedes
          </NavLink>
        </li>
        <li>
          <NavLink to='/Menu'
          className={({ isActive }) => 
            isActive ? activeStyle : notActiveStyle
          }>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to='/MyOrder'
          className={({ isActive }) => 
            isActive ? activeStyle : notActiveStyle
          }>
            Tu Orden
          </NavLink>
        </li>
        <li>
          <Registro/>
        </li>
        <li>
          🛒 0
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
