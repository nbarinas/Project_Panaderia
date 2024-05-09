import React from "react";
const titulos = ["Centro", "Cedritos", "Suba", "Soacha"];

const Sedes = () => {
  return (
    <div className="container-fluid bg-warning">
      <div className="row">
        <div className="col-md-8">
          <h2>Sedes</h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Centro</li>
            <li class="list-group-item">Chapinero</li>
            <li class="list-group-item">Suba</li>
            <li class="list-group-item">Bosa</li>
            <li class="list-group-item">Salitre</li>
          </ul>
        </div>
        <div className="col-md-4">
          <div class="card p-3">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
            <div class="ratio ratio-1x1">
              <iframe
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
