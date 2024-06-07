import React from "react";
/*import { MdPadding } from "react-icons/md";
import { TbBoxPadding } from "react-icons/tb";*/

const Card = () => {
  const cardStyle = {
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.3s, box-shadow 0.3s",
    backgroundColor: "rgb(234, 210, 172)",
    transform:"scale(1)"
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  };
  
  const cardBodyStyle = {
    padding: "20px",
    backgroundColor: "rgb(234, 210, 172)",
    textAlign: "center",
  };

  const cardFooterStyle = {
    padding: "15px 20px",
    backgroundColor: "#fdebd0",
    borderTop: "1px solid #f7c6c7",
    textAlign: "center",
    borderRadius: "10px 10px",
  };

  const imgStyle = {
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px 10px ",
  };

  const rowStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <div
      className="row row-cols-1 row-cols-md-3 g-4 mx-auto pb-3 pt-3"
      style={rowStyle}
    >
      {[
        {
          title: "Pan fresco todos los días",
          text: "Una delicia que conquista con su aroma, textura y sabor recién horneado. Cada mordisco es un placer que despierta los sentidos y eleva cualquier comida.",
          img: "card1.jpg",
          price: "Precio: $1.000 a $10.000",
        },
        {
          title: "Tortas para toda ocasión",
          text: "Ofrecemos una variedad de sabores y diseños personalizados que hacen de cada celebración un momento inolvidable. Deliciosas y decorativas, son el complemento perfecto para cualquier evento especial.",
          img: "card2.jpg",
          price: "Precio: $20.000 a $100.000",
        },
        {
          title: "Postres irresistibles",
          text: "Deleitate con su exquisito sabor y presentación cautivadora. Cada bocado es un viaje de placer para el paladar, creando momentos dulces y memorables en cada ocasión.",
          img: "card3.jpg",
          price: "Precio: $1.000 a $10.000",
        },
      ].map((card, index) => (
        <div className="col" key={index}>
          <div
            className="card h-100"
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHoverStyle.transform;
              e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = cardStyle.transform;
              e.currentTarget.style.boxShadow = cardStyle.boxShadow;
            }}
          >
            <img
              src={card.img}
              className="card-img-top"
              alt={card.title}
              style={imgStyle}
            />
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
            <div className="card-footer" style={cardFooterStyle}>
              <small className="text-muted fw-bold">{card.price}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
