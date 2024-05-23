import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import CardMenu from "../CardMenu";
const titulosMenu = ["Panadería", "Bebidas", "Postres"];
const titulosCards = ["Galleta", "Pastel", "Macarons"];
const Menu = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      {
        items?.map(() =>(
          <CardMenu />
        ))
      }
    </Layout>
  );
};
export default Menu;
