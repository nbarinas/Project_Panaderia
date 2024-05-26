import React from 'react';
import { useCart } from '../CartContext'; // Importa el contexto del carrito

const CardMenu = ({ data }) => {
  const { addToCart } = useCart(); // Obtiene la función addToCart del contexto

  const handleAddToCart = () => {
    addToCart(data); // Agrega el elemento al carrito al hacer clic en el botón de suma
  };

  return (
    <div className="bg-amber-100 w-72 h-72 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5 justify-center">
        <img className="w-full h-full object-cover rounded-lg" src={data.image} alt={data.title} />
        <button className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 bg-white" onClick={handleAddToCart}>
          + {/* Este es el botón de suma */}
        </button>
      </figure>
      <p className="flex justify-between mx-2">
        <span className="text-sm font-light truncate">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

export default CardMenu;
