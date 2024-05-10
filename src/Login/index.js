import React from 'react';
import './index.css'; // Si necesitas estilos adicionales del archivo CSS
// Importa la imagen
import backgroundImage from '../Login/5atoko1sqg.png';

const Login = () => {
  return (
    <div className="container">
      <div className="account-wall" style={{ position: 'relative' }}>
        {/* Utiliza la imagen importada como fondo */}
        <img className="profile-img" src={backgroundImage} alt="" style={{
          width: '100%', // Cambia esto a '100%'
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          zIndex: '-1'
        }} />

        <h1 className="text-center login-title">Registro</h1>
        <h2 className="text-center friends-text">Favor dar usuario y contraseña</h2>
        <form className="form-signin" style={{ position: 'relative', zIndex: '1' }}>
          <input id="eml" type="text" name="eml" className="form-control" placeholder="Usuario" autoFocus required />
          <input id="pwd" type="password" name="pwd" className="form-control" placeholder="Password" required />
          <button id="btn" className="btn btn-primary btn-block btn-xlarge btn-sharp" name="login" type="submit">Aceptar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
