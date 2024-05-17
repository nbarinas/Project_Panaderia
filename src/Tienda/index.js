import React, { useState } from "react";
const titulosMenu = ["Panadería", "Bebidas", "Postres"];
const titulosCards = ["Galleta", "Pastel", "Macarons"]
const Tienda = () => {
  return (
    <div>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group me-2" role="group" aria-label="Second group">
          <button type="button" className="btn btn-secondary">
            {titulosMenu[0]}
          </button>
          <button type="button" className="btn btn-secondary">
          {titulosMenu[1]}
          </button>
          <button type="button" className="btn btn-secondary">
          {titulosMenu[2]}
          </button>
        </div>
      </div>

      <div class="row">
      <div className="col-md-4">
          <div className="card p-3">
            <div className="card-body">
              <h5 className="card-title">{titulosCards[0]}</h5>
            </div>
            <div className="ratio ratio-4x3">
                <img src="galleta.jpeg" class="card-img-top" alt="..."/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="card-body">
              <h5 className="card-title">{titulosCards[1]}</h5>
            </div>
            <div className="ratio ratio-4x3">
                <img src="pastel.jpeg" class="card-img-top" alt="..."/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="card-body">
              <h5 className="card-title">{titulosCards[2]}</h5>
            </div>
            <div className="ratio ratio-4x3">
                <img src="macarons.jpeg" class="card-img-top" alt="..."/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tienda;
