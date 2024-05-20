import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Pagina Principal</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Especialidades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Precios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Domicilios</Link>
            </li>
            <li className="nav-item">
              <Registro />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
