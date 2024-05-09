import React, { useState } from "react";
const urlsMapas = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127243.06908047838!2d-74.24355621564197!3d4.7098385884310074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85ab1e8a0579%3A0x6c137c06b4958b64!2sHornitos%20Quirigua!5e0!3m2!1ses!2sco!4v1715217832143!5m2!1ses!2sco",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127247.12887666514!2d-74.23050995099354!3d4.687597608668757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b9ac3b53a93%3A0x88f52bb82823ef41!2sHornitos%20Modelia!5e0!3m2!1ses!2sco!4v1715217949661!5m2!1ses!2sco",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129921.01002601441!2d-74.23236393386988!3d4.686799539180736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99c46a390c51%3A0x77fecc3eb4f855a1!2sHornitos%20City%20U!5e0!3m2!1ses!2sco!4v1715220218396!5m2!1ses!2sco",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129922.95627889782!2d-74.24708647506237!3d4.676318523131498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f995fc2cc3269%3A0x34eca4efa8f5b2ff!2sHornitos%20Am%C3%A9ricas!5e0!3m2!1ses!2sco!4v1715220279736!5m2!1ses!2sco",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129922.95627889782!2d-74.24708647506237!3d4.676318523131498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd1fe336ce3%3A0x7727838965e506a2!2sHornitos%20Santa%20B%C3%A1rbara!5e0!3m2!1ses!2sco!4v1715220309248!5m2!1ses!2sco",
];

const Sedes = () => {
  const [urlMapa, setUrlMapa] = useState(urlsMapas[0]);
  const cambiarUrl = (sede) => {
    let nuevaUrl = urlMapa;
    switch (sede) {
      case "Centro":
        nuevaUrl = urlsMapas[0];
        break;
      case "Chapinero":
        nuevaUrl = urlsMapas[1];
        break;
      case "Suba":
        nuevaUrl = urlsMapas[2];
        break;
      case "Salitre":
        nuevaUrl = urlsMapas[3];
        break;
      case "Bosa":
        nuevaUrl = urlsMapas[4];
        break;
      default:
        console.log("Opción no válida");
        break;
    }
    setUrlMapa(nuevaUrl);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>Sedes</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <button
                onClick={() => cambiarUrl("Centro")}
                type="button"
                class="btn btn-outline-none"
              >
                Centro
              </button>
            </li>
            <li className="list-group-item">
              <button
                onClick={() => cambiarUrl("Chapinero")}
                type="button"
                class="btn btn-outline-none"
              >
                Chapinero
              </button>
            </li>
            <li className="list-group-item">
              <button
                onClick={() => cambiarUrl("Suba")}
                type="button"
                class="btn btn-outline-none"
              >
                Suba
              </button>
            </li>
            <li className="list-group-item">
              <button
                onClick={() => cambiarUrl("Salitre")}
                type="button"
                class="btn btn-outline-none"
              >
                Salitre
              </button>
            </li>
            <li className="list-group-item">
              <button
                onClick={() => cambiarUrl("Bosa")}
                type="button"
                class="btn btn-outline-none"
              >
                Bosa
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
            <div className="ratio ratio-1x1">
              <iframe
                title="Mapa sedes"
                src={urlMapa}
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
