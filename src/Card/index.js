import React from "react";

const Card = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto bg-warning pb-3 pt-3">
      <div className="col">
        <div className="card h-100">
          <img src="card1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Pan fresco todos los días</h5>
            <p className="card-text">
              Una delicia que conquista con su aroma, textura y sabor recién
              horneado. Cada mordisco es un placer que despierta los sentidos y
              eleva cualquier comida.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted fw-bold">
              Precio: $1.000 a $10.000
            </small>
          </div>
        </div>
      </div>
      <div classNameName="col">
        <div className="card h-100">
          <img src="card2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Tortas para toda ocasión</h5>
            <p className="card-text">
              Ofrecemos una variedad de sabores y diseños personalizados que
              hacen de cada celebración un momento inolvidable. Deliciosas y
              decorativas, son el complemento perfecto para cualquier evento
              especial.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted fw-bold">
              Precio: $20.000 a $100.000
            </small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="card3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Postres inrresistibles</h5>
            <p className="card-text">
              Deleitate con su exquisito sabor y presentación cautivadora. Cada
              bocado es un viaje de placer para el paladar, creando momentos
              dulces y memorables en cada ocasión.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted fw-bold">
              Precio: $1.000 a $10.000
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
