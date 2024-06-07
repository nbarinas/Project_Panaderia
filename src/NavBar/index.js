import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../CartContext/"; // Importa el contexto del carrito

const NavBar = () => {
  const { cartItemCount } = useCart();
  const [mostrarFormulario, setMostrarForm] = useState(false);
  const [datos, setDatos] = useState({
    email: "",
    contrasena: "",
    usuario: "",
  });
  const [usuarioRegistrado, setUsuarioRegistrado] = useState(null);

  useEffect(() => {
    // Cargar datos del usuario desde localStorage al cargar el componente
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setUsuarioRegistrado(JSON.parse(usuarioGuardado));
    }
  }, []);

  const desplegaForm = () => {
    setMostrarForm(!mostrarFormulario);
  };

  const entradaCambioManual = (cambio) => {
    setDatos({
      ...datos,
      [cambio.target.name]: cambio.target.value,
    });
  };

  const enviarDatos = async (cambio) => {
    cambio.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });
      if (response.ok) {
        console.log("Valores insertados correctamente");
        localStorage.setItem("usuario", JSON.stringify(datos));
        setUsuarioRegistrado(datos);
        setMostrarForm(false);
      } else {
        console.error("Error en el servidor al insertar los valores");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    setUsuarioRegistrado(null);
  };

  const activeStyle = "underline font-semibold text-yellow-900";
  const notActiveStyle = "no-underline text-yellow-900";

  return (
    <>
      <nav
        className="flex flex-col items-center fixed top-0 z-10 w-full py-4 px-8 text-sm font-light"
        style={{ backgroundColor: "#EAD2AC" }}
      >
        <ul className="flex items-center gap-3">
          <li data-testid="navbar-home">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
            >
              Home
            </NavLink>
          </li>
          <li data-testid="navbar-sedes">
            <NavLink
              to="/Sedes"
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
            >
              Sedes
            </NavLink>
          </li>
          <li data-testid="navbar-menu">
            <NavLink
              to="/Menu"
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
            >
              Menú
            </NavLink>
          </li>
          <li data-testid="navbar-orden">
            <NavLink
              to="/MyOrder"
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
            >
              Tu Orden
            </NavLink>
          </li>
          {usuarioRegistrado ? (
            <>
              <li data-testid="navbar-registro" className="text-yellow-900">
                {usuarioRegistrado.email}
              </li>
              <li>
                <button onClick={cerrarSesion} className="nav-link">
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <li data-testid="navbar-registro">
              <button onClick={desplegaForm} className="nav-link">
                Registro
              </button>
            </li>
          )}
          <li data-testid="navbar-carrito">
            <span role="img" aria-label="Carrito">
              🛒
            </span>{" "}
            {cartItemCount}{" "}
            {/* Mostrar la cantidad de artículos en el carrito */}
          </li>
        </ul>
      </nav>
      {mostrarFormulario && (
        <div className="mt-16 mx-0 px-0 w-full">
          <div
            className="account-wall"
            style={{ backgroundColor: "rgb(234, 210, 172)" }}
          >
            <form
              className="form-signin"
              onSubmit={enviarDatos}
              style={{ textAlign: "center" }}
            >
              <div className="d-flex justify-content-center mb-3">
                <div className="mx-2">
                  <label htmlFor="email" style={{ display: "block" }}>
                    Correo
                  </label>
                  <input
                    id="email"
                    placeholder="Correo"
                    required
                    name="email"
                    type="email"
                    className="form-control"
                    onChange={entradaCambioManual}
                    style={{ width: "200px" }}
                  />
                </div>
                <div className="mx-2">
                  <label htmlFor="contrasena" style={{ display: "block" }}>
                    Contraseña
                  </label>
                  <input
                    id="contrasena"
                    placeholder="Contraseña"
                    required
                    type="password"
                    name="contrasena"
                    className="form-control"
                    onChange={entradaCambioManual}
                    style={{ width: "200px" }}
                  />
                </div>
                <div className="mx-2">
                  <label htmlFor="usuario" style={{ display: "block" }}>
                    Usuario
                  </label>
                  <input
                    id="usuario"
                    placeholder="Usuario"
                    required
                    type="text"
                    name="usuario"
                    className="form-control"
                    onChange={entradaCambioManual}
                    style={{ width: "200px" }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-danger"
                style={{ display: "block", margin: "0 auto" }}
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
