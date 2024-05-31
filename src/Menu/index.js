import React, { useState, useEffect } from "react"; // Agrega importación de useState
import Layout from "../Layout";
import CardMenu from "../CardMenu";
import { useCart } from "../CartContext"; // Importa el contexto del carrito

const Menu = () => {
  const { addToCart } = useCart(); // Obtiene la función addToCart del contexto

  const [items, setItems] = useState(null);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => setItems(data));
  // }, []);

  useEffect(() => {
    fetch("https://jdmed.github.io/api-menu/menu.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg ">
        {items?.map((item) => (
          <CardMenu key={item.id} data={item} addToCart={addToCart} /> // Pasa la función addToCart como prop
        ))}
      </div>
    </Layout>
  );
};

export default Menu;
