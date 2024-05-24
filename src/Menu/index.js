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
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg">
        {
          items?.map(item =>(
            <CardMenu key={item.id} data={item} />
          ))
        }
      </div>
    </Layout>
  );
};
export default Menu;
