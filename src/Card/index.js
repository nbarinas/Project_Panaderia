import React from "react";

const Card = () => {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4 mx-auto bg-warning pb-3">
      <div class="col">
        <div class="card h-100">
          <img src="card1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Pan fresco todos los días</h5>
            <p class="card-text">
              Una delicia que conquista con su aroma, textura y sabor recién
              horneado. Cada mordisco es un placer que despierta los sentidos y
              eleva cualquier comida.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted fw-bold">Precio: $1.000 a $10.000</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div class="card h-100">
          <img src="card2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Tortas para toda ocasión</h5>
            <p class="card-text">
              Ofrecemos una variedad de sabores y diseños personalizados que
              hacen de cada celebración un momento inolvidable. Deliciosas y
              decorativas, son el complemento perfecto para cualquier evento
              especial.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted fw-bold">Precio: $20.000 a $100.000</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="card3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Postres inrresistibles</h5>
            <p class="card-text">
              Deleitate con su exquisito sabor y presentación cautivadora. Cada
              bocado es un viaje de placer para el paladar, creando momentos
              dulces y memorables en cada ocasión.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted fw-bold">Precio: $1.000 a $10.000</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
