import React from "react";
/*const titulos = ["Centro", "Cedritos", "Suba", "Soacha"];*/

const Sedes = () => {
  return (
    <div className="container-fluid bg-warning">
      <div className="row">
        <div className="col-md-8">
          <h2>Sedes</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Centro</li>
            <li className="list-group-item">Chapinero</li>
            <li className="list-group-item">Suba</li>
            <li className="list-group-item">Bosa</li>
            <li className="list-group-item">Salitre</li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
            <div className="ratio ratio-1x1">
              <iframe
                title="Mapas sedes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.676384825828!2d-74.05758012563685!3d4.651681995323165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a42228b5fe3%3A0xee46b39fa0850122!2sMASA%2070!5e0!3m2!1sen!2sco!4v1714781034353!5m2!1sen!2sco"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sedes;
