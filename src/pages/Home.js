import React from "react";
import imgQuienesSomos from "../assets/quienesSomos.jpg";
import Carrusel from "../components/Carrusel";
import "../styles/Home.css";

function Home() {
  return (
    <div className="container">
      <div className="card-body">
        <div className="row">
          <div className="col-md-5">
            <h2 className="card-title">¿Quiénes somos?</h2>
            <p className="card-text">
              Ecoclean, es una microempresa cuernavacense establecida en el año
              2008, especializada en el cuidado y mantenimiento de tu ropa.
              Nuestras instalaciones están preparadas para limpiar, planchar y
              mantener las prendas. Podemos encargarnos también de composturas
              de ropa.
            </p>
            <p>
              Seguimos un esmerado proceso de selección de las prendas por
              colores y tejidos. Con nuestro proceso de limpieza garantizamos un
              tratamiento bactericida, el cual se realiza con detergentes
              especiales, que aseguran una higiene total, además de, una
              limpieza sana, porque en todo momento cuidamos el medio ambiente
              al utilizar productos desmanchantes y biodegradables.
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 text-right">
            <img className="" src={imgQuienesSomos} alt="sans" width="100%" />
            <br />
            <br />
          </div>
        </div>
        <div className="padding-xs"></div>
        <div className="row">
          <div className="col-md-5 text-left">
            <Carrusel />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <h2>Misión</h2>
            <p>
              Ofrecer un servicio innovador con calidad y puntualidad en
              nuestros procesos, para satisfacer a nuestros clientes en la
              necesidad de ropa limpia.
            </p>
            <h2>Valores</h2>
            <ul className="contenido__ul">
              <li>
                <b>Ecología</b>, siempre pendientes de usar equipos con el menor
                margen de deterioro al medio ambiente.
              </li>
              <li>
                <b>Integridad</b>, comprometidos a dar la respuesta más honesta
                a las necesidades de nuestros clientes.
              </li>
              <li>
                <b>Responsabilidad</b>, emitiendo soluciones en cada una de las
                áreas en tiempo y forma.
              </li>
              <li>
                <b>Servicio</b>, siempre en la asistencia de nuestros clientes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
