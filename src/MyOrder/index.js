import React from "react";
import { useCart } from "../CartContext"; // Importa el contexto del carrito
import Layout from "../Layout";

const MyOrder = () => {
  const { cartItems } = useCart(); // Obtiene los elementos del carrito del contexto

  // Función para calcular el total a pagar
  const calcularTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio, 0);
  };

  // Verifica si no hay elementos en el carrito y muestra un mensaje
  if (cartItems.length === 0) {
    return (
      <div style={{ paddingTop: "100px", textAlign: "center", backgroundColor: "rgb(234, 210, 172)" }}>
        No tienes nada agregado a tu orden.
      </div>
    );
  }

  return (
    <Layout>
      <div style={{ marginTop: "80px"}}>
        <h2 style={{ marginBottom: "10px" }}>Tu Orden</h2>
        <div className="flex flex-col gap-4">
          {" "}
          {/* Utiliza flexbox para mostrar los elementos uno encima del otro */}
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {" "}
              {/* Cada artículo en un contenedor flex */}
              <div style={{ marginLeft: "10%" }}>
                {" "}
                {/* Mueve los elementos un poco más hacia la derecha */}
                <img
                  src={item.imagen}
                  alt={item.name}
                  className="h-10 w-10 object-cover rounded-md"
                />
              </div>
              <div>{item.title}</div> {/* Nombre del artículo */}
              <div>${item.precio}</div> {/* Precio del artículo */}
            </div>
          ))}
        </div>
        <div
          style={{ marginTop: "20px", textAlign: "center", marginRight: "10%", fontSize:"1.2rem", fontWeight:"bold" }}
        >
          Total a Pagar: ${calcularTotal()}
        </div>
      </div>
    </Layout>
  );
};

export default MyOrder;
